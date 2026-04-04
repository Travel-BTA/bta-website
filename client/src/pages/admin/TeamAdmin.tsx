/**
 * TeamAdmin.tsx — Admin dashboard for managing BTA team members / advisors.
 *
 * WHY: Provides a clean, brand-consistent interface for adding new advisors
 * and editing existing ones without touching code. Each advisor gets a
 * dynamic profile page at /advisors/:slug using the Julie Rose template.
 *
 * Access: admin role required (enforced server-side via adminProcedure).
 *
 * Sections of the form mirror the Julie Rose page structure:
 *   - Basic info (name, slug, title, tagline, email)
 *   - Photos (hero, portrait main, portrait accent)
 *   - Badges / credentials
 *   - Bio paragraphs
 *   - Stats bar
 *   - Favourite hotels
 *   - Specialties
 *   - Philosophy pillars
 *   - Featured experiences
 *   - Why Work With benefits
 *   - Testimonials
 *   - Closing banner
 *   - Publish / draft toggle
 */

import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Loader2, Plus, Trash2, ChevronDown, ChevronUp, Eye, Edit2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import type { Advisor } from "../../../../drizzle/schema";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// ─── List view ────────────────────────────────────────────────────────────────
function AdvisorList({ onEdit, onNew }: { onEdit: (a: Advisor) => void; onNew: () => void }) {
  const { data: advisors, isLoading, refetch } = trpc.advisors.list.useQuery();
  const deleteAdvisor = trpc.advisors.delete.useMutation({ onSuccess: () => refetch() });
  const updateAdvisor = trpc.advisors.update.useMutation({ onSuccess: () => refetch() });

  if (isLoading) return <div className="flex justify-center py-20"><Loader2 className="animate-spin text-[#9C886A]" size={28} /></div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl text-[#2F2F2F]" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal", textTransform: "uppercase", letterSpacing: "0.04em" }}>
            Team Members
          </h1>
          <p className="text-[#2F2F2F]/50 text-sm mt-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {advisors?.length ?? 0} advisor{(advisors?.length ?? 0) !== 1 ? "s" : ""} — each gets a profile page at /advisors/:slug
          </p>
        </div>
        <Button onClick={onNew} className="bg-[#9C886A] hover:bg-[#bfaf8a] text-white bta-eyebrow text-xs tracking-[0.2em] uppercase rounded-none px-6 py-3 h-auto">
          <Plus size={14} className="mr-2" />
          Add Team Member
        </Button>
      </div>

      {!advisors?.length ? (
        <div className="text-center py-24 border border-dashed border-[#2F2F2F]/15 rounded-none">
          <p className="text-[#2F2F2F]/40 text-lg italic mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            No team members yet
          </p>
          <Button onClick={onNew} variant="outline" className="rounded-none border-[#9C886A] text-[#9C886A] bta-eyebrow text-xs tracking-[0.2em] uppercase">
            Add the first advisor
          </Button>
        </div>
      ) : (
        <div className="grid gap-4">
          {advisors.map((advisor: Advisor) => (
            <div key={advisor.id} className="flex items-center gap-4 bg-white border border-[#2F2F2F]/8 p-5">
              {/* Avatar */}
              <div className="w-14 h-14 flex-shrink-0 overflow-hidden bg-[#edeae4]">
                {advisor.photoMain
                  ? <img src={advisor.photoMain} alt={advisor.name} className="w-full h-full object-cover object-top" />
                  : <div className="w-full h-full flex items-center justify-center text-[#9C886A] text-xl" style={{ fontFamily: "'Instrument Serif', serif" }}>{advisor.name[0]}</div>
                }
              </div>
              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-0.5">
                  <h3 className="text-[#2F2F2F] font-medium truncate" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{advisor.name}</h3>
                  <Badge variant={advisor.published ? "default" : "secondary"} className={`text-xs rounded-none ${advisor.published ? "bg-[#9C886A] text-white" : "bg-[#edeae4] text-[#2F2F2F]/50"}`}>
                    {advisor.published ? "Published" : "Draft"}
                  </Badge>
                </div>
                <p className="text-[#2F2F2F]/50 text-xs truncate" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{advisor.title}</p>
                <p className="text-[#bfaf8a] text-xs mt-0.5">/advisors/{advisor.slug}</p>
              </div>
              {/* Actions */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <Switch
                  checked={advisor.published}
                  onCheckedChange={(val) => {
                    updateAdvisor.mutate({ id: advisor.id, published: val });
                    toast(val ? `${advisor.name} is now published.` : `${advisor.name} set to draft.`);
                  }}
                  aria-label="Toggle published"
                />
                <Button variant="ghost" size="icon" asChild className="text-[#2F2F2F]/40 hover:text-[#9C886A]">
                  <a href={`/advisors/${advisor.slug}`} target="_blank" rel="noopener noreferrer" aria-label="Preview page">
                    <Eye size={16} />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" onClick={() => onEdit(advisor)} className="text-[#2F2F2F]/40 hover:text-[#9C886A]" aria-label="Edit">
                  <Edit2 size={16} />
                </Button>
                <Button
                  variant="ghost" size="icon"
                  onClick={() => {
                    if (confirm(`Delete ${advisor.name}? This cannot be undone.`)) {
                      deleteAdvisor.mutate({ id: advisor.id });
                      toast(`${advisor.name} has been removed.`);
                    }
                  }}
                  className="text-[#2F2F2F]/40 hover:text-red-500"
                  aria-label="Delete"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Collapsible section wrapper ──────────────────────────────────────────────

function FormSection({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <Card className="rounded-none border-[#2F2F2F]/8 shadow-none">
      <CardHeader
        className="cursor-pointer select-none flex flex-row items-center justify-between py-4 px-6"
        onClick={() => setOpen(!open)}
      >
        <CardTitle className="text-sm bta-eyebrow tracking-[0.15em] uppercase text-[#2F2F2F]/70">{title}</CardTitle>
        {open ? <ChevronUp size={16} className="text-[#9C886A]" /> : <ChevronDown size={16} className="text-[#9C886A]" />}
      </CardHeader>
      {open && <CardContent className="px-6 pb-6 pt-0">{children}</CardContent>}
    </Card>
  );
}

// ─── Array field editors ──────────────────────────────────────────────────────

function StringArrayEditor({ label, items, onChange, placeholder }: { label: string; items: string[]; onChange: (v: string[]) => void; placeholder?: string }) {
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="flex gap-2">
          <Input value={item} onChange={(e) => { const n = [...items]; n[i] = e.target.value; onChange(n); }} placeholder={placeholder} className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm" />
          <Button variant="ghost" size="icon" onClick={() => onChange(items.filter((_, j) => j !== i))} className="text-[#2F2F2F]/30 hover:text-red-500 flex-shrink-0"><Trash2 size={14} /></Button>
        </div>
      ))}
      <Button variant="outline" size="sm" onClick={() => onChange([...items, ""])} className="rounded-none border-[#9C886A] text-[#9C886A] text-xs bta-eyebrow tracking-widest uppercase h-8">
        <Plus size={12} className="mr-1" /> Add {label}
      </Button>
    </div>
  );
}

function TextArrayEditor({ label, items, onChange, placeholder }: { label: string; items: string[]; onChange: (v: string[]) => void; placeholder?: string }) {
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="flex gap-2 items-start">
          <Textarea value={item} onChange={(e) => { const n = [...items]; n[i] = e.target.value; onChange(n); }} placeholder={placeholder} rows={3} className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm resize-none" />
          <Button variant="ghost" size="icon" onClick={() => onChange(items.filter((_, j) => j !== i))} className="text-[#2F2F2F]/30 hover:text-red-500 flex-shrink-0 mt-1"><Trash2 size={14} /></Button>
        </div>
      ))}
      <Button variant="outline" size="sm" onClick={() => onChange([...items, ""])} className="rounded-none border-[#9C886A] text-[#9C886A] text-xs bta-eyebrow tracking-widest uppercase h-8">
        <Plus size={12} className="mr-1" /> Add {label}
      </Button>
    </div>
  );
}

// ─── Editor form ──────────────────────────────────────────────────────────────

type FormData = {
  name: string; slug: string; title: string; tagline: string; email: string;
  heroImage: string; photoMain: string; photoAccent: string;
  badges: string[];
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  meetEyebrow: string; meetHeading: string; bio: string[]; meetQuote: string;
  stats: Array<{ value: string; label: string }>;
  hotels: Array<{ badge: string; location: string; name: string; quote: string; perks: string[]; image: string }>;
  specialties: Array<{ label: string; description: string; image: string }>;
  pillars: Array<{ icon: string; title: string; body: string }>;
  experiences: Array<{ duration: string; region: string; title: string; description: string; image: string; href: string }>;
  whyWorkBenefits: Array<{ title: string; body: string }>;
  whyWorkImage: string;
  testimonials: Array<{ quote: string; author: string; trip: string; rating: number }>;
  closingBannerImage: string; closingBannerQuote: string;
  published: boolean; sortOrder: number;
};

const EMPTY_FORM: FormData = {
  name: "", slug: "", title: "", tagline: "", email: "",
  heroImage: "", photoMain: "", photoAccent: "",
  badges: [],
  ctaPrimary: { label: "Start Planning", href: "/contact-us" },
  ctaSecondary: { label: "View Specialties", href: "#specialties" },
  meetEyebrow: "", meetHeading: "", bio: [], meetQuote: "",
  stats: [],
  hotels: [],
  specialties: [],
  pillars: [],
  experiences: [],
  whyWorkBenefits: [],
  whyWorkImage: "",
  testimonials: [],
  closingBannerImage: "", closingBannerQuote: "",
  published: false, sortOrder: 0,
};

function advisorToForm(a: Advisor): FormData { // eslint-disable-line @typescript-eslint/no-explicit-any
  return {
    name: a.name ?? "",
    slug: a.slug ?? "",
    title: a.title ?? "",
    tagline: a.tagline ?? "",
    email: a.email ?? "",
    heroImage: a.heroImage ?? "",
    photoMain: a.photoMain ?? "",
    photoAccent: a.photoAccent ?? "",
    badges: (a.badges as string[]) ?? [],
    ctaPrimary: (a.ctaPrimary as any) ?? { label: "Start Planning", href: "/contact-us" },
    ctaSecondary: (a.ctaSecondary as any) ?? { label: "View Specialties", href: "#specialties" },
    meetEyebrow: a.meetEyebrow ?? "",
    meetHeading: a.meetHeading ?? "",
    bio: (a.bio as string[]) ?? [],
    meetQuote: a.meetQuote ?? "",
    stats: (a.stats as any[]) ?? [],
    hotels: (a.hotels as any[]) ?? [],
    specialties: (a.specialties as any[]) ?? [],
    pillars: (a.pillars as any[]) ?? [],
    experiences: (a.experiences as any[]) ?? [],
    whyWorkBenefits: (a.whyWorkBenefits as any[]) ?? [],
    whyWorkImage: a.whyWorkImage ?? "",
    testimonials: (a.testimonials as any[]) ?? [],
    closingBannerImage: a.closingBannerImage ?? "",
    closingBannerQuote: a.closingBannerQuote ?? "",
    published: a.published ?? false,
    sortOrder: a.sortOrder ?? 0,
  };
}

function AdvisorEditor({ advisor, onBack }: { advisor: Advisor | null; onBack: () => void }) {
  const [form, setForm] = useState<FormData>(advisor ? advisorToForm(advisor) : EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const utils = trpc.useUtils();

  const createAdvisor = trpc.advisors.create.useMutation();
  const updateAdvisor = trpc.advisors.update.useMutation();

  // Auto-generate slug from name when creating new
  useEffect(() => {
    if (!advisor && form.name && !form.slug) {
      setForm((f) => ({ ...f, slug: slugify(form.name) }));
    }
  }, [form.name, advisor]);

  const set = (field: keyof FormData, value: unknown) => setForm((f) => ({ ...f, [field]: value }));

  const handleSave = async () => {
    if (!form.name.trim()) { toast.error("Name is required."); return; }
    if (!form.slug.trim()) { toast.error("Slug is required."); return; }
    setSaving(true);
    try {
      if (advisor) {
        await updateAdvisor.mutateAsync({ id: advisor.id, ...form });
        toast(`${form.name} updated successfully.`);
      } else {
        await createAdvisor.mutateAsync(form);
        toast(`${form.name} created. Their page is live at /advisors/${form.slug}`);
      }
      await utils.advisors.list.invalidate();
      onBack();
    } catch (err: any) {
      toast.error(err.message ?? "Save failed.");
    } finally {
      setSaving(false);
    }
  };

  const F = ({ label, field, type = "text", placeholder }: { label: string; field: keyof FormData; type?: string; placeholder?: string }) => (
    <div className="space-y-1.5">
      <Label className="text-xs bta-eyebrow tracking-[0.15em] uppercase text-[#2F2F2F]/60">{label}</Label>
      <Input type={type} value={String(form[field] ?? "")} onChange={(e) => set(field, e.target.value)} placeholder={placeholder} className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm" />
    </div>
  );

  const TA = ({ label, field, rows = 3, placeholder }: { label: string; field: keyof FormData; rows?: number; placeholder?: string }) => (
    <div className="space-y-1.5">
      <Label className="text-xs bta-eyebrow tracking-[0.15em] uppercase text-[#2F2F2F]/60">{label}</Label>
      <Textarea value={String(form[field] ?? "")} onChange={(e) => set(field, e.target.value)} placeholder={placeholder} rows={rows} className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm resize-none" />
    </div>
  );

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" onClick={onBack} className="text-[#2F2F2F]/50 hover:text-[#2F2F2F] rounded-none p-0 h-auto">
          <ArrowLeft size={16} className="mr-2" />
          <span className="text-xs bta-eyebrow tracking-widest uppercase">All Advisors</span>
        </Button>
      </div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl text-[#2F2F2F]" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal", textTransform: "uppercase", letterSpacing: "0.04em" }}>
          {advisor ? `Edit: ${advisor.name}` : "New Team Member"}
        </h1>
        <div className="flex items-center gap-3">
          {advisor && (
            <a href={`/advisors/${form.slug}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs bta-eyebrow tracking-widest uppercase text-[#9C886A] hover:opacity-70 transition-opacity">
              <Eye size={13} /> Preview
            </a>
          )}
          <Button onClick={handleSave} disabled={saving} className="bg-[#9C886A] hover:bg-[#bfaf8a] text-white bta-eyebrow text-xs tracking-[0.2em] uppercase rounded-none px-6 py-3 h-auto">
            {saving ? <Loader2 size={14} className="animate-spin mr-2" /> : null}
            {saving ? "Saving…" : advisor ? "Save Changes" : "Create Advisor"}
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {/* Basic Info */}
        <FormSection title="Basic Information" defaultOpen>
          <div className="grid sm:grid-cols-2 gap-4">
            <F label="Full Name *" field="name" placeholder="e.g. Sarah Mitchell" />
            <div className="space-y-1.5">
              <Label className="text-xs bta-eyebrow tracking-[0.15em] uppercase text-[#2F2F2F]/60">URL Slug *</Label>
              <Input value={form.slug} onChange={(e) => set("slug", e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))} placeholder="e.g. sarah-mitchell" className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm font-mono" />
              <p className="text-xs text-[#2F2F2F]/35" style={{ fontFamily: "'Playfair Display', serif" }}>Page will be at /advisors/{form.slug || "slug"}</p>
            </div>
          </div>
          <div className="mt-4 space-y-4">
            <F label="Title / Role" field="title" placeholder="e.g. Luxury Travel Advisor & Virtuoso Member" />
            <F label="Tagline" field="tagline" placeholder="One-line hero tagline" />
            <F label="Email Address" field="email" type="email" placeholder="advisor@boutiquetraveladvisors.com" />
          </div>
          <div className="mt-4 flex items-center gap-3">
            <Switch checked={form.published} onCheckedChange={(v) => set("published", v)} id="published-toggle" />
            <Label htmlFor="published-toggle" className="text-sm cursor-pointer" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              {form.published ? "Published — visible on the Our People page" : "Draft — hidden from public"}
            </Label>
          </div>
        </FormSection>

        {/* Photos */}
        <FormSection title="Photos">
          <div className="space-y-4">
            <F label="Hero Background Image URL" field="heroImage" placeholder="https://cdn.example.com/hero.jpg" />
            <div className="grid sm:grid-cols-2 gap-4">
              <F label="Portrait (Main)" field="photoMain" placeholder="https://cdn.example.com/portrait.jpg" />
              <F label="Portrait (Accent / Overlap)" field="photoAccent" placeholder="https://cdn.example.com/accent.jpg" />
            </div>
            <p className="text-xs text-[#2F2F2F]/35 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              Upload images using the CLI: <code className="bg-[#edeae4] px-1">manus-upload-file --webdev path/to/photo.jpg</code> then paste the returned CDN URL here.
            </p>
          </div>
        </FormSection>

        {/* Credentials */}
        <FormSection title="Credential Badges">
          <StringArrayEditor label="Badge" items={form.badges} onChange={(v) => set("badges", v)} placeholder="e.g. Virtuoso Member" />
        </FormSection>

        {/* Hero CTAs */}
        <FormSection title="Hero Call-to-Action Buttons">
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="space-y-1.5">
              <Label className="text-xs bta-eyebrow tracking-[0.15em] uppercase text-[#2F2F2F]/60">Primary CTA Label</Label>
              <Input value={form.ctaPrimary.label} onChange={(e) => set("ctaPrimary", { ...form.ctaPrimary, label: e.target.value })} className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs bta-eyebrow tracking-[0.15em] uppercase text-[#2F2F2F]/60">Primary CTA Link</Label>
              <Input value={form.ctaPrimary.href} onChange={(e) => set("ctaPrimary", { ...form.ctaPrimary, href: e.target.value })} className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="text-xs bta-eyebrow tracking-[0.15em] uppercase text-[#2F2F2F]/60">Secondary CTA Label</Label>
              <Input value={form.ctaSecondary.label} onChange={(e) => set("ctaSecondary", { ...form.ctaSecondary, label: e.target.value })} className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs bta-eyebrow tracking-[0.15em] uppercase text-[#2F2F2F]/60">Secondary CTA Link</Label>
              <Input value={form.ctaSecondary.href} onChange={(e) => set("ctaSecondary", { ...form.ctaSecondary, href: e.target.value })} className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm" />
            </div>
          </div>
        </FormSection>

        {/* Meet / Bio */}
        <FormSection title="Meet Section — Bio">
          <div className="space-y-4">
            <F label="Script Eyebrow (e.g. Meet Julie)" field="meetEyebrow" placeholder="Meet Sarah" />
            <TA label="Section Heading (use \\n for line breaks)" field="meetHeading" placeholder="A Passion for\nMeaningful Travel" />
            <div className="space-y-1.5">
              <Label className="text-xs bta-eyebrow tracking-[0.15em] uppercase text-[#2F2F2F]/60">Bio Paragraphs</Label>
              <TextArrayEditor label="Paragraph" items={form.bio} onChange={(v) => set("bio", v)} placeholder="Write a bio paragraph…" />
            </div>
            <TA label="Pull Quote" field="meetQuote" placeholder='"Travel is not just a destination…"' />
          </div>
        </FormSection>

        {/* Stats */}
        <FormSection title="Stats Bar">
          <div className="space-y-3">
            {form.stats.map((stat, i) => (
              <div key={i} className="flex gap-3 items-center">
                <Input value={stat.value} onChange={(e) => { const n = [...form.stats]; n[i] = { ...n[i], value: e.target.value }; set("stats", n); }} placeholder="60+" className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm w-28 flex-shrink-0" />
                <Input value={stat.label} onChange={(e) => { const n = [...form.stats]; n[i] = { ...n[i], label: e.target.value }; set("stats", n); }} placeholder="Countries Explored" className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm" />
                <Button variant="ghost" size="icon" onClick={() => set("stats", form.stats.filter((_, j) => j !== i))} className="text-[#2F2F2F]/30 hover:text-red-500 flex-shrink-0"><Trash2 size={14} /></Button>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={() => set("stats", [...form.stats, { value: "", label: "" }])} className="rounded-none border-[#9C886A] text-[#9C886A] text-xs bta-eyebrow tracking-widest uppercase h-8">
              <Plus size={12} className="mr-1" /> Add Stat
            </Button>
          </div>
        </FormSection>

        {/* Hotels */}
        <FormSection title="Favourite Hotels">
          <div className="space-y-6">
            {form.hotels.map((hotel, i) => (
              <div key={i} className="border border-[#2F2F2F]/8 p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs bta-eyebrow tracking-widest uppercase text-[#9C886A]">Hotel {i + 1}</span>
                  <Button variant="ghost" size="icon" onClick={() => set("hotels", form.hotels.filter((_, j) => j !== i))} className="text-[#2F2F2F]/30 hover:text-red-500"><Trash2 size={14} /></Button>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Input value={hotel.name} onChange={(e) => { const n = [...form.hotels]; n[i] = { ...n[i], name: e.target.value }; set("hotels", n); }} placeholder="Hotel name" className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm" />
                  <Input value={hotel.location} onChange={(e) => { const n = [...form.hotels]; n[i] = { ...n[i], location: e.target.value }; set("hotels", n); }} placeholder="Location" className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm" />
                  <Input value={hotel.badge} onChange={(e) => { const n = [...form.hotels]; n[i] = { ...n[i], badge: e.target.value }; set("hotels", n); }} placeholder="Badge (e.g. Virtuoso Preferred)" className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm" />
                  <Input value={hotel.image} onChange={(e) => { const n = [...form.hotels]; n[i] = { ...n[i], image: e.target.value }; set("hotels", n); }} placeholder="Image CDN URL" className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm" />
                </div>
                <Textarea value={hotel.quote} onChange={(e) => { const n = [...form.hotels]; n[i] = { ...n[i], quote: e.target.value }; set("hotels", n); }} placeholder='"Advisor quote about this hotel…"' rows={2} className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm resize-none" />
                <div>
                  <Label className="text-xs bta-eyebrow tracking-[0.15em] uppercase text-[#2F2F2F]/60 mb-2 block">Perks / Amenities</Label>
                  <StringArrayEditor label="Perk" items={hotel.perks} onChange={(v) => { const n = [...form.hotels]; n[i] = { ...n[i], perks: v }; set("hotels", n); }} placeholder="e.g. Daily breakfast for two" />
                </div>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={() => set("hotels", [...form.hotels, { badge: "", location: "", name: "", quote: "", perks: [], image: "" }])} className="rounded-none border-[#9C886A] text-[#9C886A] text-xs bta-eyebrow tracking-widest uppercase h-8">
              <Plus size={12} className="mr-1" /> Add Hotel
            </Button>
          </div>
        </FormSection>

        {/* Specialties */}
        <FormSection title="Specialties">
          <div className="space-y-4">
            {form.specialties.map((spec, i) => (
              <div key={i} className="border border-[#2F2F2F]/8 p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs bta-eyebrow tracking-widest uppercase text-[#9C886A]">Specialty {i + 1}</span>
                  <Button variant="ghost" size="icon" onClick={() => set("specialties", form.specialties.filter((_, j) => j !== i))} className="text-[#2F2F2F]/30 hover:text-red-500"><Trash2 size={14} /></Button>
                </div>
                <Input value={spec.label} onChange={(e) => { const n = [...form.specialties]; n[i] = { ...n[i], label: e.target.value }; set("specialties", n); }} placeholder="e.g. African Safaris" className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm" />
                <Textarea value={spec.description} onChange={(e) => { const n = [...form.specialties]; n[i] = { ...n[i], description: e.target.value }; set("specialties", n); }} placeholder="Short description…" rows={2} className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm resize-none" />
                <Input value={spec.image} onChange={(e) => { const n = [...form.specialties]; n[i] = { ...n[i], image: e.target.value }; set("specialties", n); }} placeholder="Image CDN URL" className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm" />
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={() => set("specialties", [...form.specialties, { label: "", description: "", image: "" }])} className="rounded-none border-[#9C886A] text-[#9C886A] text-xs bta-eyebrow tracking-widest uppercase h-8">
              <Plus size={12} className="mr-1" /> Add Specialty
            </Button>
          </div>
        </FormSection>

        {/* Philosophy Pillars */}
        <FormSection title="Philosophy Pillars">
          <div className="space-y-4">
            {form.pillars.map((pillar, i) => (
              <div key={i} className="border border-[#2F2F2F]/8 p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs bta-eyebrow tracking-widest uppercase text-[#9C886A]">Pillar {i + 1}</span>
                  <Button variant="ghost" size="icon" onClick={() => set("pillars", form.pillars.filter((_, j) => j !== i))} className="text-[#2F2F2F]/30 hover:text-red-500"><Trash2 size={14} /></Button>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label className="text-xs bta-eyebrow tracking-[0.15em] uppercase text-[#2F2F2F]/60">Icon</Label>
                    <select value={pillar.icon} onChange={(e) => { const n = [...form.pillars]; n[i] = { ...n[i], icon: e.target.value }; set("pillars", n); }} className="w-full border border-[#2F2F2F]/15 px-3 py-2 text-sm bg-white focus:outline-none focus:border-[#9C886A]">
                      <option value="compass">Compass</option>
                      <option value="heart">Heart</option>
                      <option value="star">Star</option>
                      <option value="shield">Shield</option>
                    </select>
                  </div>
                  <Input value={pillar.title} onChange={(e) => { const n = [...form.pillars]; n[i] = { ...n[i], title: e.target.value }; set("pillars", n); }} placeholder="Pillar title" className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm" />
                </div>
                <Textarea value={pillar.body} onChange={(e) => { const n = [...form.pillars]; n[i] = { ...n[i], body: e.target.value }; set("pillars", n); }} placeholder="Description…" rows={2} className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm resize-none" />
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={() => set("pillars", [...form.pillars, { icon: "compass", title: "", body: "" }])} className="rounded-none border-[#9C886A] text-[#9C886A] text-xs bta-eyebrow tracking-widest uppercase h-8">
              <Plus size={12} className="mr-1" /> Add Pillar
            </Button>
          </div>
        </FormSection>

        {/* Featured Experiences */}
        <FormSection title="Featured Experiences">
          <div className="space-y-4">
            {form.experiences.map((exp, i) => (
              <div key={i} className="border border-[#2F2F2F]/8 p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs bta-eyebrow tracking-widest uppercase text-[#9C886A]">Experience {i + 1}</span>
                  <Button variant="ghost" size="icon" onClick={() => set("experiences", form.experiences.filter((_, j) => j !== i))} className="text-[#2F2F2F]/30 hover:text-red-500"><Trash2 size={14} /></Button>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Input value={exp.duration} onChange={(e) => { const n = [...form.experiences]; n[i] = { ...n[i], duration: e.target.value }; set("experiences", n); }} placeholder="e.g. 10 Days" className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm" />
                  <Input value={exp.region} onChange={(e) => { const n = [...form.experiences]; n[i] = { ...n[i], region: e.target.value }; set("experiences", n); }} placeholder="e.g. East Africa" className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm" />
                </div>
                <Input value={exp.title} onChange={(e) => { const n = [...form.experiences]; n[i] = { ...n[i], title: e.target.value }; set("experiences", n); }} placeholder="Experience title" className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm" />
                <Textarea value={exp.description} onChange={(e) => { const n = [...form.experiences]; n[i] = { ...n[i], description: e.target.value }; set("experiences", n); }} placeholder="Short description…" rows={2} className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm resize-none" />
                <div className="grid sm:grid-cols-2 gap-3">
                  <Input value={exp.image} onChange={(e) => { const n = [...form.experiences]; n[i] = { ...n[i], image: e.target.value }; set("experiences", n); }} placeholder="Image CDN URL" className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm" />
                  <Input value={exp.href} onChange={(e) => { const n = [...form.experiences]; n[i] = { ...n[i], href: e.target.value }; set("experiences", n); }} placeholder="Link (e.g. /contact-us)" className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm" />
                </div>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={() => set("experiences", [...form.experiences, { duration: "", region: "", title: "", description: "", image: "", href: "/contact-us" }])} className="rounded-none border-[#9C886A] text-[#9C886A] text-xs bta-eyebrow tracking-widest uppercase h-8">
              <Plus size={12} className="mr-1" /> Add Experience
            </Button>
          </div>
        </FormSection>

        {/* Why Work With */}
        <FormSection title="Why Work With — Benefits">
          <div className="space-y-4">
            <F label="Side Image URL" field="whyWorkImage" placeholder="https://cdn.example.com/why-work.jpg" />
            <div className="space-y-3">
              {form.whyWorkBenefits.map((b, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="flex-1 space-y-2">
                    <Input value={b.title} onChange={(e) => { const n = [...form.whyWorkBenefits]; n[i] = { ...n[i], title: e.target.value }; set("whyWorkBenefits", n); }} placeholder="Benefit title" className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm" />
                    <Textarea value={b.body} onChange={(e) => { const n = [...form.whyWorkBenefits]; n[i] = { ...n[i], body: e.target.value }; set("whyWorkBenefits", n); }} placeholder="Benefit description…" rows={2} className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm resize-none" />
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => set("whyWorkBenefits", form.whyWorkBenefits.filter((_, j) => j !== i))} className="text-[#2F2F2F]/30 hover:text-red-500 mt-1"><Trash2 size={14} /></Button>
                </div>
              ))}
              <Button variant="outline" size="sm" onClick={() => set("whyWorkBenefits", [...form.whyWorkBenefits, { title: "", body: "" }])} className="rounded-none border-[#9C886A] text-[#9C886A] text-xs bta-eyebrow tracking-widest uppercase h-8">
                <Plus size={12} className="mr-1" /> Add Benefit
              </Button>
            </div>
          </div>
        </FormSection>

        {/* Testimonials */}
        <FormSection title="Client Testimonials">
          <div className="space-y-4">
            {form.testimonials.map((t, i) => (
              <div key={i} className="border border-[#2F2F2F]/8 p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs bta-eyebrow tracking-widest uppercase text-[#9C886A]">Testimonial {i + 1}</span>
                  <Button variant="ghost" size="icon" onClick={() => set("testimonials", form.testimonials.filter((_, j) => j !== i))} className="text-[#2F2F2F]/30 hover:text-red-500"><Trash2 size={14} /></Button>
                </div>
                <Textarea value={t.quote} onChange={(e) => { const n = [...form.testimonials]; n[i] = { ...n[i], quote: e.target.value }; set("testimonials", n); }} placeholder="Client quote…" rows={3} className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm resize-none" />
                <div className="grid sm:grid-cols-3 gap-3">
                  <Input value={t.author} onChange={(e) => { const n = [...form.testimonials]; n[i] = { ...n[i], author: e.target.value }; set("testimonials", n); }} placeholder="Client name" className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm" />
                  <Input value={t.trip} onChange={(e) => { const n = [...form.testimonials]; n[i] = { ...n[i], trip: e.target.value }; set("testimonials", n); }} placeholder="Trip name" className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm" />
                  <div className="space-y-1.5">
                    <Label className="text-xs bta-eyebrow tracking-[0.15em] uppercase text-[#2F2F2F]/60">Rating (1–5)</Label>
                    <Input type="number" min={1} max={5} value={t.rating} onChange={(e) => { const n = [...form.testimonials]; n[i] = { ...n[i], rating: Number(e.target.value) }; set("testimonials", n); }} className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm" />
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={() => set("testimonials", [...form.testimonials, { quote: "", author: "", trip: "", rating: 5 }])} className="rounded-none border-[#9C886A] text-[#9C886A] text-xs bta-eyebrow tracking-widest uppercase h-8">
              <Plus size={12} className="mr-1" /> Add Testimonial
            </Button>
          </div>
        </FormSection>

        {/* Closing Banner */}
        <FormSection title="Closing Quote Banner">
          <div className="space-y-4">
            <F label="Background Image URL" field="closingBannerImage" placeholder="https://cdn.example.com/banner.jpg" />
            <TA label="Quote Text" field="closingBannerQuote" placeholder='"The world is a book…"' rows={2} />
          </div>
        </FormSection>

        {/* Sort Order */}
        <FormSection title="Display Order">
          <div className="space-y-1.5 max-w-xs">
            <Label className="text-xs bta-eyebrow tracking-[0.15em] uppercase text-[#2F2F2F]/60">Sort Order (lower = first)</Label>
            <Input type="number" value={form.sortOrder} onChange={(e) => set("sortOrder", Number(e.target.value))} className="rounded-none border-[#2F2F2F]/15 focus:border-[#9C886A] text-sm" />
          </div>
        </FormSection>
      </div>

      {/* Sticky save bar */}
      <div className="sticky bottom-0 bg-white border-t border-[#2F2F2F]/8 px-0 py-4 mt-8 flex justify-end gap-3">
        <Button variant="outline" onClick={onBack} className="rounded-none border-[#2F2F2F]/20 text-[#2F2F2F]/60 bta-eyebrow text-xs tracking-widest uppercase">
          Cancel
        </Button>
        <Button onClick={handleSave} disabled={saving} className="bg-[#9C886A] hover:bg-[#bfaf8a] text-white bta-eyebrow text-xs tracking-[0.2em] uppercase rounded-none px-8 h-10">
          {saving ? <Loader2 size={14} className="animate-spin mr-2" /> : null}
          {saving ? "Saving…" : advisor ? "Save Changes" : "Create Advisor"}
        </Button>
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function TeamAdmin() {
  const { user, loading } = useAuth();
  const [, navigate] = useLocation();
  const [editing, setEditing] = useState<Advisor | null | "new">(null);

  if (loading) {
    return <div className="flex justify-center py-20"><Loader2 className="animate-spin text-[#9C886A]" size={28} /></div>;
  }

  if (!user || user.role !== "admin") {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center px-8">
        <p className="text-2xl uppercase tracking-widest text-[#384959] mb-4" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Admin Access Required</p>
        <a href="/" className="text-sm uppercase tracking-widest border-b border-[#9C886A] text-[#9C886A] pb-0.5">Return Home</a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {editing === null && (
          <AdvisorList onEdit={(a) => setEditing(a)} onNew={() => setEditing("new")} />
        )}
        {editing !== null && (
          <AdvisorEditor advisor={editing === "new" ? null : editing} onBack={() => setEditing(null)} />
        )}
      </div>
    </div>
  );
}
