/**
 * PageBuilder.tsx — BTA Visual Page Editor
 *
 * WHY: Gives the BTA team a brand-locked drag-and-drop page builder.
 * All color and font choices are restricted to BTA brand tokens.
 * Pages are auto-saved to the database and can be published to live routes.
 *
 * Layout:
 *   Left sidebar (280px)  — Block library + Add Block panel
 *   Center canvas         — Live preview of the page being built
 *   Right panel (320px)   — Property editor for the selected block
 *   Bottom bar            — AI chat input for natural-language edits
 */

import PageSEO from "@/components/PageSEO";
import { useState, useCallback, useRef, useEffect } from "react";
import { useLocation, useRoute } from "wouter";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import BlockRenderer from "@/components/pageBuilder/BlockRenderer";
import BlockPropertyPanel from "@/components/pageBuilder/BlockPropertyPanel";
import { BLOCK_TYPES, getDefaultBlock } from "@/lib/brandTokens";
import type { PageBlock } from "../../../drizzle/schema";
import {
  LayoutGrid,
  Type,
  Image,
  Columns2,
  Quote,
  Megaphone,
  BarChart2,
  ImageIcon,
  Save,
  Globe,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Loader2,
  ArrowLeft,
  Plus,
  Eye,
  EyeOff,
} from "lucide-react";

// ── Icon map ──────────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, React.ComponentType<any>> = {
  ImageIcon,
  Type,
  Image,
  Columns2,
  Quote,
  Megaphone,
  LayoutGrid,
  BarChart2,
};

// ── Generate a unique block ID ─────────────────────────────────────────────────
function genId(type: string) {
  return `${type}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
}

// ── AI Chat message type ───────────────────────────────────────────────────────
interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export default function PageBuilder() {
  const { user, loading: authLoading } = useAuth();
  const [, navigate] = useLocation();
  const [, params] = useRoute("/admin/page-builder/:id");
  const pageId = params?.id ? Number(params.id) : null;

  // ── Page state ──────────────────────────────────────────────────────────────
  const [blocks, setBlocks] = useState<PageBlock[]>([]);
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
  const [pageTitle, setPageTitle] = useState("Untitled Page");
  const [pageSlug, setPageSlug] = useState("untitled-page");
  const [pageStatus, setPageStatus] = useState<"draft" | "published">("draft");
  const [isSaving, setIsSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");
  const [showPreviewOnly, setShowPreviewOnly] = useState(false);

  // ── Chat state ──────────────────────────────────────────────────────────────
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [chatLoading, setChatLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // ── Load existing page ──────────────────────────────────────────────────────
  const { data: pageData } = trpc.pages.get.useQuery(
    { id: pageId! },
    { enabled: !!pageId }
  );

  useEffect(() => {
    if (pageData) {
      setBlocks((pageData.blocks as PageBlock[]) ?? []);
      setPageTitle(pageData.title);
      setPageSlug(pageData.slug);
      setPageStatus(pageData.status);
    }
  }, [pageData]);

  // ── tRPC mutations ──────────────────────────────────────────────────────────
  const createPage = trpc.pages.create.useMutation();
  const updateBlocks = trpc.pages.updateBlocks.useMutation();
  const updateMeta = trpc.pages.updateMeta.useMutation();
  const aiEdit = trpc.pages.aiEdit.useMutation();

  // ── Auto-save debounce ──────────────────────────────────────────────────────
  const saveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentPageId = useRef<number | null>(pageId);

  const triggerSave = useCallback(
    async (newBlocks: PageBlock[], pid: number | null) => {
      if (!pid) return;
      if (saveTimeout.current) clearTimeout(saveTimeout.current);
      saveTimeout.current = setTimeout(async () => {
        setIsSaving(true);
        try {
          await updateBlocks.mutateAsync({ id: pid, blocks: newBlocks });
          setSaveMsg("Saved");
          setTimeout(() => setSaveMsg(""), 2000);
        } catch {
          setSaveMsg("Save failed");
        } finally {
          setIsSaving(false);
        }
      }, 1200);
    },
    [updateBlocks]
  );

  // ── Block operations ────────────────────────────────────────────────────────
  const addBlock = useCallback(
    (type: string) => {
      const id = genId(type);
      const newBlock = getDefaultBlock(type, id) as PageBlock;
      const newBlocks = [...blocks, newBlock];
      setBlocks(newBlocks);
      setSelectedBlockId(id);
      triggerSave(newBlocks, currentPageId.current);
    },
    [blocks, triggerSave]
  );

  const updateBlock = useCallback(
    (updated: PageBlock) => {
      const newBlocks = blocks.map((b) => (b.id === updated.id ? updated : b));
      setBlocks(newBlocks);
      triggerSave(newBlocks, currentPageId.current);
    },
    [blocks, triggerSave]
  );

  const deleteBlock = useCallback(
    (id: string) => {
      const newBlocks = blocks.filter((b) => b.id !== id);
      setBlocks(newBlocks);
      if (selectedBlockId === id) setSelectedBlockId(null);
      triggerSave(newBlocks, currentPageId.current);
    },
    [blocks, selectedBlockId, triggerSave]
  );

  const moveBlock = useCallback(
    (id: string, direction: "up" | "down") => {
      const idx = blocks.findIndex((b) => b.id === id);
      if (idx < 0) return;
      const newBlocks = [...blocks];
      const swapIdx = direction === "up" ? idx - 1 : idx + 1;
      if (swapIdx < 0 || swapIdx >= newBlocks.length) return;
      [newBlocks[idx], newBlocks[swapIdx]] = [newBlocks[swapIdx], newBlocks[idx]];
      setBlocks(newBlocks);
      triggerSave(newBlocks, currentPageId.current);
    },
    [blocks, triggerSave]
  );

  // ── Save / publish ──────────────────────────────────────────────────────────
  const handleSaveOrCreate = async () => {
    setIsSaving(true);
    try {
      if (!currentPageId.current) {
        const created = await createPage.mutateAsync({
          title: pageTitle,
          slug: pageSlug,
          blocks,
        });
        if (created?.id) {
          currentPageId.current = created.id;
          navigate(`/admin/page-builder/${created.id}`, { replace: true });
        }
      } else {
        await updateBlocks.mutateAsync({ id: currentPageId.current, blocks });
        await updateMeta.mutateAsync({ id: currentPageId.current, title: pageTitle, slug: pageSlug });
      }
      setSaveMsg("Saved");
      setTimeout(() => setSaveMsg(""), 2000);
    } catch (e: any) {
      setSaveMsg(e?.message ?? "Save failed");
    } finally {
      setIsSaving(false);
    }
  };

  const handlePublish = async () => {
    if (!currentPageId.current) {
      await handleSaveOrCreate();
    }
    if (!currentPageId.current) return;
    const newStatus = pageStatus === "published" ? "draft" : "published";
    await updateMeta.mutateAsync({ id: currentPageId.current, status: newStatus });
    setPageStatus(newStatus);
    setSaveMsg(newStatus === "published" ? "Published" : "Unpublished");
    setTimeout(() => setSaveMsg(""), 2000);
  };

  // ── AI chat ─────────────────────────────────────────────────────────────────
  const sendChat = async () => {
    if (!chatInput.trim() || chatLoading) return;
    const userMsg = chatInput.trim();
    setChatInput("");
    const newHistory: ChatMessage[] = [...chatHistory, { role: "user", content: userMsg }];
    setChatHistory(newHistory);
    setChatLoading(true);

    try {
      // Ensure page exists before AI edit
      if (!currentPageId.current) {
        const created = await createPage.mutateAsync({ title: pageTitle, slug: pageSlug, blocks });
        if (created?.id) currentPageId.current = created.id;
      }

      const result = await aiEdit.mutateAsync({
        pageId: currentPageId.current!,
        message: userMsg,
        currentBlocks: blocks,
        conversationHistory: chatHistory,
      });

      // Apply the AI's action to the canvas
      let newBlocks = [...blocks];
      if (result.action === "replace_all" && result.blocks) {
        newBlocks = result.blocks as PageBlock[];
      } else if (result.action === "add_blocks" && result.blocks) {
        newBlocks = [...blocks, ...(result.blocks as PageBlock[])];
      } else if (result.action === "update_block" && result.blockId && result.updatedBlock) {
        newBlocks = blocks.map((b) =>
          b.id === result.blockId ? (result.updatedBlock as PageBlock) : b
        );
      } else if (result.action === "remove_block" && result.blockId) {
        newBlocks = blocks.filter((b) => b.id !== result.blockId);
      }

      setBlocks(newBlocks);
      triggerSave(newBlocks, currentPageId.current);

      setChatHistory([
        ...newHistory,
        { role: "assistant", content: result.explanation },
      ]);
    } catch (e: any) {
      setChatHistory([
        ...newHistory,
        { role: "assistant", content: "Something went wrong. Please try again." },
      ]);
    } finally {
      setChatLoading(false);
      setTimeout(() => chatEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  };

  // ── Auth guard ──────────────────────────────────────────────────────────────
  if (authLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0f1a24]">
        <Loader2 className="animate-spin text-[#9C886A]" size={32} />
      </div>
    );
  }

  if (!user || user.role !== "admin") {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0f1a24] text-white">
        <div className="text-center">
          <p className="text-[#9C886A] text-sm uppercase tracking-widest mb-2">Access Restricted</p>
          <p className="text-white/60 text-sm">Admin access is required to use the Page Builder.</p>
        </div>
      </div>
    );
  }

  const selectedBlock = blocks.find((b) => b.id === selectedBlockId) ?? null;
  const selectedIdx = blocks.findIndex((b) => b.id === selectedBlockId);

  return (
    <div
className="flex flex-col h-screen bg-[#0f1a24] text-white overflow-hidden">
      {/* ── Top bar ─────────────────────────────────────────────────────────── */}
      <header className="flex items-center gap-4 px-4 py-2 border-b border-[#384959] bg-[#0f1a24] z-20 shrink-0">
        <button
          onClick={() => navigate("/admin/pages")}
          className="flex items-center gap-1.5 text-[#9C886A] hover:text-white transition-colors text-xs uppercase tracking-widest"
    >
      <PageSEO
        title="Page Builder | BTA"
        description="Internal page builder for Boutique Travel Advisors."
        path="/admin/pages"
        noIndex={true}
      />
          <ArrowLeft size={12} />
          Pages
        </button>
        <div className="flex-1 flex items-center gap-3">
          <input
            className="bg-transparent border-b border-[#384959] text-white text-sm px-1 py-0.5 focus:outline-none focus:border-[#9C886A] w-48"
            value={pageTitle}
            onChange={(e) => setPageTitle(e.target.value)}
            placeholder="Page Title"
          />
          <span className="text-[#384959] text-xs">/</span>
          <input
            className="bg-transparent border-b border-[#384959] text-[#9C886A] text-xs px-1 py-0.5 focus:outline-none focus:border-[#9C886A] w-40"
            value={pageSlug}
            onChange={(e) => setPageSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-/]/g, "-"))}
            placeholder="page-slug"
          />
        </div>
        <div className="flex items-center gap-2">
          {saveMsg && (
            <span className="text-xs text-[#9C886A]">{saveMsg}</span>
          )}
          <button
            onClick={() => setShowPreviewOnly(!showPreviewOnly)}
            className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#9C886A] hover:text-white transition-colors px-3 py-1.5 border border-[#384959] hover:border-[#9C886A]"
          >
            {showPreviewOnly ? <EyeOff size={12} /> : <Eye size={12} />}
            {showPreviewOnly ? "Edit" : "Preview"}
          </button>
          <button
            onClick={handleSaveOrCreate}
            disabled={isSaving}
            className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-white px-3 py-1.5 border border-[#384959] hover:border-[#9C886A] transition-colors"
          >
            {isSaving ? <Loader2 size={12} className="animate-spin" /> : <Save size={12} />}
            Save
          </button>
          <button
            onClick={handlePublish}
            className="flex items-center gap-1.5 text-xs uppercase tracking-widest px-3 py-1.5 transition-colors"
            style={{
              backgroundColor: pageStatus === "published" ? "#384959" : "#9C886A",
              color: "#FFFFFF",
            }}
          >
            <Globe size={12} />
            {pageStatus === "published" ? "Unpublish" : "Publish"}
          </button>
        </div>
      </header>

      {/* ── Main editor area ─────────────────────────────────────────────────── */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar — Block library */}
        {!showPreviewOnly && (
          <aside className="w-[220px] shrink-0 border-r border-[#384959] bg-[#0a1520] overflow-y-auto">
            <div className="px-3 py-3 border-b border-[#384959]">
              <p className="text-xs uppercase tracking-widest text-[#9C886A]">Add Block</p>
            </div>
            <div className="p-2 flex flex-col gap-1">
              {BLOCK_TYPES.map((bt) => {
                const Icon = ICON_MAP[bt.icon] ?? Plus;
                return (
                  <button
                    key={bt.type}
                    onClick={() => addBlock(bt.type)}
                    className="flex items-start gap-2.5 px-3 py-2.5 text-left hover:bg-[#384959]/30 transition-colors group"
                  >
                    <Icon size={14} className="text-[#9C886A] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-white group-hover:text-[#bfaf8a] transition-colors">
                        {bt.label}
                      </p>
                      <p className="text-[10px] text-white/30 leading-tight mt-0.5">
                        {bt.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>
        )}

        {/* Center canvas */}
        <main className="flex-1 overflow-y-auto bg-[#1a2530]">
          {blocks.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-8">
              <div className="border border-dashed border-[#384959] p-12 max-w-md">
                <LayoutGrid size={32} className="text-[#384959] mx-auto mb-4" />
                <p className="text-[#9C886A] text-sm uppercase tracking-widest mb-2">
                  Empty Page
                </p>
                <p className="text-white/40 text-sm font-light">
                  Add blocks from the left panel, or use the AI chat below to describe the page you want to build.
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-white">
              {blocks.map((block, idx) => (
                <div
                  key={block.id}
                  onClick={() => !showPreviewOnly && setSelectedBlockId(block.id)}
                  className="relative group"
                  style={{
                    outline:
                      !showPreviewOnly && selectedBlockId === block.id
                        ? "2px solid #9C886A"
                        : "none",
                    cursor: showPreviewOnly ? "default" : "pointer",
                  }}
                >
                  <BlockRenderer block={block} />
                  {/* Block overlay controls */}
                  {!showPreviewOnly && (
                    <div className="absolute top-2 right-2 hidden group-hover:flex items-center gap-1 bg-[#0f1a24]/90 border border-[#384959] px-2 py-1">
                      <span className="text-[10px] text-[#9C886A] uppercase tracking-widest mr-1">
                        {block.type}
                      </span>
                      <button
                        onClick={(e) => { e.stopPropagation(); moveBlock(block.id, "up"); }}
                        disabled={idx === 0}
                        className="text-[#9C886A] disabled:opacity-30 hover:text-white transition-colors"
                      >
                        <ChevronUp size={12} />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); moveBlock(block.id, "down"); }}
                        disabled={idx === blocks.length - 1}
                        className="text-[#9C886A] disabled:opacity-30 hover:text-white transition-colors"
                      >
                        <ChevronDown size={12} />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </main>

        {/* Right panel — Property editor */}
        {!showPreviewOnly && selectedBlock && (
          <aside className="w-[300px] shrink-0 border-l border-[#384959] overflow-hidden">
            <BlockPropertyPanel
              block={selectedBlock}
              onChange={updateBlock}
              onDelete={() => deleteBlock(selectedBlock.id)}
              onMoveUp={() => moveBlock(selectedBlock.id, "up")}
              onMoveDown={() => moveBlock(selectedBlock.id, "down")}
              isFirst={selectedIdx === 0}
              isLast={selectedIdx === blocks.length - 1}
            />
          </aside>
        )}
      </div>

      {/* ── AI Chat panel ───────────────────────────────────────────────────── */}
      <div
        className="border-t border-[#384959] bg-[#0a1520] shrink-0 transition-all duration-300"
        style={{ height: chatOpen ? "320px" : "48px" }}
      >
        {/* Chat toggle bar */}
        <div
          className="flex items-center justify-between px-4 h-12 cursor-pointer hover:bg-[#384959]/20 transition-colors"
          onClick={() => setChatOpen(!chatOpen)}
        >
          <div className="flex items-center gap-2">
            <MessageSquare size={14} className="text-[#9C886A]" />
            <span className="text-xs uppercase tracking-widest text-[#9C886A]">
              AI Page Assistant
            </span>
            <span className="text-[10px] text-white/30">
              — describe changes in plain English
            </span>
          </div>
          {chatOpen ? <ChevronDown size={14} className="text-[#9C886A]" /> : <ChevronUp size={14} className="text-[#9C886A]" />}
        </div>

        {/* Chat messages */}
        {chatOpen && (
          <div className="flex flex-col h-[272px]">
            <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3">
              {chatHistory.length === 0 && (
                <div className="text-center py-6">
                  <p className="text-xs text-white/30 font-light">
                    Try: "Add a hero with a dark blue background and the headline DISCOVER THE WORLD" or "Change the CTA button color to gold"
                  </p>
                </div>
              )}
              {chatHistory.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[75%] px-3 py-2 text-xs font-light leading-relaxed"
                    style={{
                      backgroundColor: msg.role === "user" ? "#384959" : "#1a2530",
                      color: msg.role === "user" ? "#FFFFFF" : "#bfaf8a",
                      border: msg.role === "assistant" ? "1px solid #384959" : "none",
                    }}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {chatLoading && (
                <div className="flex justify-start">
                  <div className="px-3 py-2 bg-[#1a2530] border border-[#384959]">
                    <Loader2 size={12} className="animate-spin text-[#9C886A]" />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Chat input */}
            <div className="flex items-center gap-2 px-4 py-2 border-t border-[#384959]">
              <input
                className="flex-1 bg-[#1a2530] border border-[#384959] text-white text-xs px-3 py-2 focus:outline-none focus:border-[#9C886A] placeholder-white/30"
                placeholder="Describe what you want to add or change..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendChat()}
              />
              <button
                onClick={sendChat}
                disabled={chatLoading || !chatInput.trim()}
                className="px-4 py-2 text-xs uppercase tracking-widest transition-colors disabled:opacity-40"
                style={{ backgroundColor: "#9C886A", color: "#FFFFFF" }}
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
