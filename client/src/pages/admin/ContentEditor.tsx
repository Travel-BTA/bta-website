/**
 * ContentEditor.tsx — Admin content editor at /admin/content
 *
 * WHY: Allows Janet to edit page copy and swap photos directly in the browser
 * without touching code. Changes are saved to the siteContent database table
 * and reflected live on the public site.
 *
 * Layout:
 *   Left sidebar — page selector
 *   Main area   — editable fields grouped by section
 *                 Text fields: inline input/textarea
 *                 Image fields: current image preview + upload button
 */

import { useState, useRef, useEffect } from "react";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

// ── Page definitions ──────────────────────────────────────────────────────────
// WHY: Each page lists its editable content slots. fieldType determines the
// editor widget. defaultValue is the current hardcoded fallback shown when
// no DB override exists.

type FieldType = "text" | "textarea" | "image";

interface ContentSlot {
  key: string;
  label: string;
  section: string;
  fieldType: FieldType;
  defaultValue: string;
  hint?: string;
}

interface PageDef {
  id: string;
  label: string;
  slots: ContentSlot[];
}

const PAGES: PageDef[] = [
  {
    id: "homepage",
    label: "Homepage",
    slots: [
      { key: "homepage.hero.headline", label: "Hero Headline", section: "Hero", fieldType: "text", defaultValue: "WHERE WILL YOUR JOURNEY TAKE YOU?", hint: "Main hero text (all caps)" },
      { key: "homepage.hero.subtext", label: "Hero Subtext", section: "Hero", fieldType: "text", defaultValue: "Travel that transforms your world and shapes unforgettable moments." },
      { key: "homepage.whoweare.heading", label: "Who We Are — Heading", section: "Who We Are", fieldType: "text", defaultValue: "Boutique Travel Advisors" },
      { key: "homepage.whoweare.body", label: "Who We Are — Body", section: "Who We Are", fieldType: "textarea", defaultValue: "We are a collective of seasoned luxury travel advisors..." },
      { key: "homepage.cta.heading", label: "Final CTA — Heading", section: "Call to Action", fieldType: "text", defaultValue: "Ready to Start Planning?" },
      { key: "homepage.cta.subtext", label: "Final CTA — Subtext", section: "Call to Action", fieldType: "textarea", defaultValue: "Let us design a journey that exceeds every expectation." },
    ],
  },
  {
    id: "destinations",
    label: "Destinations",
    slots: [
      { key: "destinations.hero.headline", label: "Hero Headline", section: "Hero", fieldType: "text", defaultValue: "THE WORLD'S MOST EXTRAORDINARY DESTINATIONS" },
      { key: "destinations.hero.subtext", label: "Hero Subtext", section: "Hero", fieldType: "textarea", defaultValue: "Curated destinations for discerning travelers." },
      { key: "destinations.intro.body", label: "Intro Paragraph", section: "Intro", fieldType: "textarea", defaultValue: "Every destination we feature has been personally vetted by our advisors." },
    ],
  },
  {
    id: "familytravel",
    label: "Family Travel",
    slots: [
      { key: "familytravel.hero.headline", label: "Hero Headline", section: "Hero", fieldType: "text", defaultValue: "FAMILY TRAVEL" },
      { key: "familytravel.hero.subtext", label: "Hero Subtext", section: "Hero", fieldType: "textarea", defaultValue: "Extraordinary journeys designed for every generation." },
      { key: "familytravel.hero.image", label: "Hero Image", section: "Hero", fieldType: "image", defaultValue: "" },
      { key: "familytravel.iceland.header_image", label: "Iceland — Header Image", section: "Iceland Itinerary", fieldType: "image", defaultValue: "" },
      { key: "familytravel.fiji.header_image", label: "Fiji — Header Image", section: "Fiji Itinerary", fieldType: "image", defaultValue: "" },
      { key: "familytravel.france.header_image", label: "France — Header Image", section: "France Itinerary", fieldType: "image", defaultValue: "" },
      { key: "familytravel.southafrica.header_image", label: "South Africa — Header Image", section: "South Africa Itinerary", fieldType: "image", defaultValue: "" },
      { key: "familytravel.hawaii.header_image", label: "Hawaii — Header Image", section: "Hawaii Itinerary", fieldType: "image", defaultValue: "" },
    ],
  },
  {
    id: "partnerdirectory",
    label: "Partner Directory",
    slots: [
      { key: "partnerdirectory.hero.headline", label: "Hero Headline", section: "Hero", fieldType: "text", defaultValue: "OUR PREFERRED PARTNERS" },
      { key: "partnerdirectory.hero.subtext", label: "Hero Subtext", section: "Hero", fieldType: "textarea", defaultValue: "Exclusive relationships with the world's finest hotels, resorts, and cruise lines." },
      { key: "partnerdirectory.hero.image", label: "Hero Image", section: "Hero", fieldType: "image", defaultValue: "" },
      { key: "partnerdirectory.intro.body", label: "Intro Body", section: "Intro", fieldType: "textarea", defaultValue: "Our preferred partner relationships give you access to exclusive amenities and VIP treatment." },
    ],
  },
  {
    id: "cruises",
    label: "Cruises",
    slots: [
      { key: "cruises.hero.headline", label: "Hero Headline", section: "Hero", fieldType: "text", defaultValue: "LUXURY CRUISING" },
      { key: "cruises.hero.subtext", label: "Hero Subtext", section: "Hero", fieldType: "textarea", defaultValue: "The world's finest ships, curated by BTA." },
      { key: "cruises.intro.body", label: "Intro Body", section: "Intro", fieldType: "textarea", defaultValue: "From intimate expedition vessels to grand ocean liners, we match you with the perfect ship." },
    ],
  },
  {
    id: "about",
    label: "About Us",
    slots: [
      { key: "about.hero.headline", label: "Hero Headline", section: "Hero", fieldType: "text", defaultValue: "BOUTIQUE TRAVEL ADVISORS" },
      { key: "about.hero.subtext", label: "Hero Subtext", section: "Hero", fieldType: "textarea", defaultValue: "A collective of luxury travel specialists dedicated to extraordinary journeys." },
      { key: "about.story.body", label: "Our Story — Body", section: "Our Story", fieldType: "textarea", defaultValue: "" },
    ],
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function ContentEditor() {
  const [, navigate] = useLocation();
  const [selectedPage, setSelectedPage] = useState<string>(PAGES[0]!.id);
  const [values, setValues] = useState<Record<string, string>>({});
  const [dirty, setDirty] = useState<Set<string>>(new Set());
  const [saving, setSaving] = useState(false);
  const [uploadingKey, setUploadingKey] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const activeUploadKey = useRef<string | null>(null);

  // Check admin session
  const { data: adminUser, isLoading: authLoading } = trpc.adminAuth.me.useQuery();

  // Load existing content for the selected page
  const { data: pageContent, isLoading: contentLoading } = trpc.siteContent.getPage.useQuery(
    { page: selectedPage },
    { enabled: !!adminUser }
  );

  // Populate local values when page content loads
  useEffect(() => {
    if (pageContent) {
      setValues((prev) => ({ ...prev, ...pageContent }));
      setDirty(new Set());
    }
  }, [pageContent, selectedPage]);

  const bulkUpsertMutation = trpc.siteContent.bulkUpsert.useMutation({
    onSuccess: () => {
      toast.success("Changes saved");
      setDirty(new Set());
      setSaving(false);
    },
    onError: (err: { message?: string }) => {
      toast.error(err.message || "Failed to save");
      setSaving(false);
    },
  });

  const uploadMutation = trpc.media.upload.useMutation({
    onSuccess: (data: { url: string }) => {
      const key = activeUploadKey.current;
      if (key && data.url) {
        setValues((prev) => ({ ...prev, [key]: data.url }));
        setDirty((prev) => new Set(Array.from(prev).concat(key)));
      }
      setUploadingKey(null);
      activeUploadKey.current = null;
    },
    onError: (err: { message?: string }) => {
      toast.error(err.message || "Upload failed");
      setUploadingKey(null);
      activeUploadKey.current = null;
    },
  });

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !adminUser) {
      navigate("/admin/login");
    }
  }, [authLoading, adminUser, navigate]);

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf9f6]">
        <p className="text-[#9C886A] text-sm tracking-widest uppercase">Loading…</p>
      </div>
    );
  }

  if (!adminUser) return null;

  const currentPageDef = PAGES.find((p) => p.id === selectedPage)!;
  const sections = Array.from(new Set(currentPageDef.slots.map((s) => s.section)));

  function handleChange(key: string, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setDirty((prev) => new Set(Array.from(prev).concat(key)));
  }

  function handleSave() {
    if (dirty.size === 0) return;
    setSaving(true);

    const dirtyArray = Array.from(dirty);
    const slotsToSave = currentPageDef.slots
      .filter((slot) => dirtyArray.includes(slot.key))
      .map((slot) => ({
        key: slot.key,
        label: slot.label,
        page: selectedPage,
        section: slot.section,
        fieldType: slot.fieldType,
        value: values[slot.key] ?? null,
      }));

    bulkUpsertMutation.mutate(slotsToSave);
  }

  function handleImageUpload(key: string) {
    activeUploadKey.current = key;
    setUploadingKey(key);
    fileInputRef.current?.click();
  }

  async function handleFileSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) {
      setUploadingKey(null);
      activeUploadKey.current = null;
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = (reader.result as string).split(",")[1]!;
      uploadMutation.mutate({
        filename: file.name,
        mimeType: file.type || "image/jpeg",
        size: file.size,
        data: base64,
      });
    };
    reader.readAsDataURL(file);
    // Reset input so the same file can be re-selected
    e.target.value = "";
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileSelected}
      />

      {/* Header */}
      <div className="bg-[#384959] text-white px-6 py-5 flex items-center justify-between">
        <div>
          <p className="text-[10px] tracking-[0.22em] uppercase text-white/50 mb-0.5">
            Boutique Travel Advisors
          </p>
          <h1 className="text-xl text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Content Editor
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/50 text-xs hidden sm:block">
            {(adminUser as any).name || (adminUser as any).email}
          </span>
          <a
            href="/admin"
            className="text-xs text-white/60 hover:text-white transition-colors tracking-wide"
          >
            ← Admin
          </a>
          <a
            href="/"
            className="text-xs text-white/60 hover:text-white transition-colors tracking-wide"
          >
            View Site
          </a>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar — page selector */}
        <aside className="w-48 bg-white border-r border-[#e8e2d9] flex-shrink-0 py-6">
          <p className="px-5 text-[10px] tracking-widest uppercase text-[#9C886A] mb-3">Pages</p>
          {PAGES.map((page) => (
            <button
              key={page.id}
              onClick={() => {
                setSelectedPage(page.id);
                setDirty(new Set());
              }}
              className={`w-full text-left px-5 py-2.5 text-sm transition-colors ${
                selectedPage === page.id
                  ? "bg-[#384959]/5 text-[#384959] border-l-2 border-[#9C886A]"
                  : "text-[#384959]/60 hover:text-[#384959] hover:bg-[#384959]/5"
              }`}
            >
              {page.label}
            </button>
          ))}
        </aside>

        {/* Main — editable fields */}
        <main className="flex-1 overflow-y-auto px-8 py-8">
          <div className="max-w-2xl">
            {/* Page heading + save button */}
            <div className="flex items-center justify-between mb-8">
              <h2
                className="text-2xl text-[#384959]"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {currentPageDef.label}
              </h2>
              <button
                onClick={handleSave}
                disabled={dirty.size === 0 || saving}
                className="px-6 py-2 bg-[#9C886A] text-white text-xs tracking-widest uppercase hover:bg-[#8a7760] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {saving ? "Saving…" : dirty.size > 0 ? `Save ${dirty.size} Change${dirty.size > 1 ? "s" : ""}` : "Saved"}
              </button>
            </div>

            {contentLoading ? (
              <p className="text-sm text-[#384959]/50">Loading content…</p>
            ) : (
              sections.map((section) => (
                <div key={section} className="mb-10">
                  <h3 className="text-xs tracking-widest uppercase text-[#9C886A] mb-4 pb-2 border-b border-[#e8e2d9]">
                    {section}
                  </h3>
                  <div className="space-y-5">
                    {currentPageDef.slots
                      .filter((s) => s.section === section)
                      .map((slot) => (
                        <div key={slot.key}>
                          <label className="block text-xs tracking-widest uppercase text-[#384959]/60 mb-1.5">
                            {slot.label}
                            {dirty.has(slot.key) && (
                              <span className="ml-2 text-[#9C886A] normal-case tracking-normal">
                                (unsaved)
                              </span>
                            )}
                          </label>

                          {slot.fieldType === "image" ? (
                            <div className="flex items-start gap-4">
                              {/* Image preview */}
                              <div className="w-32 h-20 bg-[#f0ece4] border border-[#e8e2d9] overflow-hidden flex-shrink-0">
                                {values[slot.key] ? (
                                  <img
                                    src={values[slot.key]}
                                    alt={slot.label}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center">
                                    <span className="text-[10px] text-[#384959]/30 text-center px-2">
                                      No image
                                    </span>
                                  </div>
                                )}
                              </div>
                              <div className="flex flex-col gap-2">
                                <button
                                  onClick={() => handleImageUpload(slot.key)}
                                  disabled={uploadingKey === slot.key}
                                  className="px-4 py-2 border border-[#9C886A] text-[#9C886A] text-xs tracking-widest uppercase hover:bg-[#9C886A] hover:text-white transition-colors disabled:opacity-50"
                                >
                                  {uploadingKey === slot.key ? "Uploading…" : "Upload Image"}
                                </button>
                                {values[slot.key] && (
                                  <button
                                    onClick={() => handleChange(slot.key, "")}
                                    className="px-4 py-2 border border-[#e8e2d9] text-[#384959]/50 text-xs tracking-widest uppercase hover:border-red-300 hover:text-red-500 transition-colors"
                                  >
                                    Remove
                                  </button>
                                )}
                                {slot.hint && (
                                  <p className="text-xs text-[#384959]/40">{slot.hint}</p>
                                )}
                              </div>
                            </div>
                          ) : slot.fieldType === "textarea" ? (
                            <textarea
                              value={values[slot.key] ?? slot.defaultValue}
                              onChange={(e) => handleChange(slot.key, e.target.value)}
                              rows={4}
                              className="w-full border border-[#e8e2d9] px-4 py-2.5 text-sm text-[#2F2F2F] bg-white focus:outline-none focus:border-[#9C886A] transition-colors resize-y"
                            />
                          ) : (
                            <input
                              type="text"
                              value={values[slot.key] ?? slot.defaultValue}
                              onChange={(e) => handleChange(slot.key, e.target.value)}
                              className="w-full border border-[#e8e2d9] px-4 py-2.5 text-sm text-[#2F2F2F] bg-white focus:outline-none focus:border-[#9C886A] transition-colors"
                            />
                          )}

                          {slot.hint && slot.fieldType !== "image" && (
                            <p className="mt-1 text-xs text-[#384959]/40">{slot.hint}</p>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
