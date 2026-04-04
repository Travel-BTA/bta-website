/**
 * PagesDashboard.tsx — BTA Page Builder Dashboard
 *
 * WHY: Gives the team a single view of all pages — drafts and published —
 * with quick access to edit, preview, publish/unpublish, and delete.
 * Accessible at /admin/pages (admin only).
 */

import { useState } from "react";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import {
  Plus,
  Pencil,
  Globe,
  Trash2,
  Loader2,
  FileText,
  Eye,
} from "lucide-react";

function StatusBadge({ status }: { status: "draft" | "published" }) {
  return (
    <span
      className="text-[10px] uppercase tracking-widest px-2 py-0.5 border"
      style={{
        borderColor: status === "published" ? "#9C886A" : "#384959",
        color: status === "published" ? "#9C886A" : "#9C886A60",
      }}
    >
      {status}
    </span>
  );
}

export default function PagesDashboard() {
  const { user, loading: authLoading } = useAuth();
  const [, navigate] = useLocation();
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [newTitle, setNewTitle] = useState("");
  const [newSlug, setNewSlug] = useState("");
  const [showCreate, setShowCreate] = useState(false);
  const [createError, setCreateError] = useState("");

  const utils = trpc.useUtils();
  const { data: pages, isLoading } = trpc.pages.list.useQuery();
  const createPage = trpc.pages.create.useMutation({
    onSuccess: (page: any) => {
      utils.pages.list.invalidate();
      if (page?.id) navigate(`/admin/page-builder/${page.id}`);
    },
    onError: (e: any) => setCreateError(e.message),
  });
  const deletePage = trpc.pages.delete.useMutation({
    onSuccess: () => utils.pages.list.invalidate(),
  });
  const updateMeta = trpc.pages.updateMeta.useMutation({
    onSuccess: () => utils.pages.list.invalidate(),
  });

  const handleCreate = async () => {
    if (!newTitle.trim()) { setCreateError("Title is required."); return; }
    if (!newSlug.trim()) { setCreateError("Slug is required."); return; }
    setCreateError("");
    createPage.mutate({ title: newTitle, slug: newSlug, blocks: [] });
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this page? This cannot be undone.")) return;
    setDeletingId(id);
    await deletePage.mutateAsync({ id });
    setDeletingId(null);
  };

  const handleTogglePublish = async (id: number, current: "draft" | "published") => {
    const newStatus = current === "published" ? "draft" : "published";
    await updateMeta.mutateAsync({ id, status: newStatus });
  };

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
          <p className="text-white/60 text-sm">Admin access is required.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f1a24] text-white">
      {/* Header */}
      <header className="border-b border-[#384959] px-8 py-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-[#9C886A] mb-1">Admin</p>
          <h1
            className="text-2xl font-light uppercase tracking-widest"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            Page Builder
          </h1>
        </div>
        <button
          onClick={() => setShowCreate(!showCreate)}
          className="flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest transition-colors"
          style={{ backgroundColor: "#9C886A", color: "#FFFFFF" }}
        >
          <Plus size={12} />
          New Page
        </button>
      </header>

      {/* Create form */}
      {showCreate && (
        <div className="border-b border-[#384959] bg-[#0a1520] px-8 py-5">
          <p className="text-xs uppercase tracking-widest text-[#9C886A] mb-4">Create New Page</p>
          <div className="flex items-end gap-4 flex-wrap">
            <div>
              <label className="block text-xs text-[#9C886A] mb-1 uppercase tracking-widest">Page Title</label>
              <input
                className="bg-[#1a2530] border border-[#384959] text-white text-sm px-3 py-2 focus:outline-none focus:border-[#9C886A] w-56"
                value={newTitle}
                onChange={(e) => {
                  setNewTitle(e.target.value);
                  setNewSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""));
                }}
                placeholder="Maldives Destination"
              />
            </div>
            <div>
              <label className="block text-xs text-[#9C886A] mb-1 uppercase tracking-widest">URL Slug</label>
              <div className="flex items-center gap-1">
                <span className="text-[#9C886A]/50 text-xs">/pages/</span>
                <input
                  className="bg-[#1a2530] border border-[#384959] text-white text-sm px-3 py-2 focus:outline-none focus:border-[#9C886A] w-40"
                  value={newSlug}
                  onChange={(e) => setNewSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-/]/g, "-"))}
                  placeholder="maldives"
                />
              </div>
            </div>
            <button
              onClick={handleCreate}
              disabled={createPage.isPending}
              className="flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest border border-[#9C886A] text-[#9C886A] hover:bg-[#9C886A] hover:text-white transition-colors disabled:opacity-50"
            >
              {createPage.isPending ? <Loader2 size={12} className="animate-spin" /> : <Plus size={12} />}
              Create & Open Editor
            </button>
          </div>
          {createError && <p className="text-red-400 text-xs mt-2">{createError}</p>}
        </div>
      )}

      {/* Pages list */}
      <div className="px-8 py-6">
        {isLoading ? (
          <div className="flex items-center gap-2 text-[#9C886A] text-sm">
            <Loader2 size={14} className="animate-spin" />
            Loading pages...
          </div>
        ) : !pages || pages.length === 0 ? (
          <div className="border border-dashed border-[#384959] p-12 text-center max-w-md">
            <FileText size={32} className="text-[#384959] mx-auto mb-4" />
            <p className="text-[#9C886A] text-sm uppercase tracking-widest mb-2">No Pages Yet</p>
            <p className="text-white/40 text-sm font-light">
              Click "New Page" to create your first page.
            </p>
          </div>
        ) : (
          <div className="border border-[#384959] divide-y divide-[#384959]">
            {/* Table header */}
            <div className="grid grid-cols-[1fr_180px_140px_160px] gap-4 px-4 py-2 bg-[#0a1520]">
              <span className="text-[10px] uppercase tracking-widest text-[#9C886A]">Title</span>
              <span className="text-[10px] uppercase tracking-widest text-[#9C886A]">Slug</span>
              <span className="text-[10px] uppercase tracking-widest text-[#9C886A]">Status</span>
              <span className="text-[10px] uppercase tracking-widest text-[#9C886A]">Actions</span>
            </div>
            {pages.map((page: any) => (
              <div
                key={page.id}
                className="grid grid-cols-[1fr_180px_140px_160px] gap-4 px-4 py-3 items-center hover:bg-[#384959]/10 transition-colors"
              >
                <div>
                  <p className="text-sm text-white font-light">{page.title}</p>
                  <p className="text-xs text-white/30 mt-0.5">
                    Updated {new Date(page.updatedAt).toLocaleDateString()}
                  </p>
                </div>
                <p className="text-xs text-[#9C886A]/70 font-light truncate">/pages/{page.slug}</p>
                <StatusBadge status={page.status} />
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => navigate(`/admin/page-builder/${page.id}`)}
                    className="flex items-center gap-1 text-xs text-[#9C886A] hover:text-white transition-colors px-2 py-1 border border-[#384959] hover:border-[#9C886A]"
                    title="Edit"
                  >
                    <Pencil size={10} />
                    Edit
                  </button>
                  {page.status === "published" && (
                    <a
                      href={`/pages/${page.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-[#9C886A] hover:text-white transition-colors px-2 py-1 border border-[#384959] hover:border-[#9C886A]"
                      title="View live"
                    >
                      <Eye size={10} />
                    </a>
                  )}
                  <button
                    onClick={() => handleTogglePublish(page.id, page.status)}
                    className="flex items-center gap-1 text-xs transition-colors px-2 py-1 border"
                    style={{
                      borderColor: page.status === "published" ? "#384959" : "#9C886A",
                      color: page.status === "published" ? "#9C886A60" : "#9C886A",
                    }}
                    title={page.status === "published" ? "Unpublish" : "Publish"}
                  >
                    <Globe size={10} />
                  </button>
                  <button
                    onClick={() => handleDelete(page.id)}
                    disabled={deletingId === page.id}
                    className="flex items-center gap-1 text-xs text-red-400/50 hover:text-red-400 transition-colors px-2 py-1 border border-[#384959] hover:border-red-400"
                    title="Delete"
                  >
                    {deletingId === page.id ? <Loader2 size={10} className="animate-spin" /> : <Trash2 size={10} />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
