/**
 * BlockPropertyPanel.tsx — Inline property editor for a selected block.
 *
 * WHY: All inputs are restricted to BTA brand tokens. No free-form color
 * pickers or font selectors exist — the team can only choose from the
 * approved palette and typefaces, making off-brand pages impossible.
 */

import { BRAND_COLORS, BRAND_FONTS, PADDING_SIZES, TEXT_ALIGNS } from "@/lib/brandTokens";
import type { PageBlock } from "../../../../drizzle/schema";
import { X, ChevronUp, ChevronDown } from "lucide-react";

interface Props {
  block: PageBlock;
  onChange: (updated: PageBlock) => void;
  onDelete: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  isFirst: boolean;
  isLast: boolean;
}

// ── Reusable field components ─────────────────────────────────────────────────

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-xs uppercase tracking-widest text-[#9C886A] mb-1 font-light">
      {children}
    </label>
  );
}

function TextField({
  label,
  value,
  onChange,
  multiline = false,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="mb-4">
      <FieldLabel>{label}</FieldLabel>
      {multiline ? (
        <textarea
          className="w-full bg-[#1a2530] border border-[#384959] text-white text-sm px-3 py-2 rounded-none resize-y min-h-[80px] focus:outline-none focus:border-[#9C886A]"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      ) : (
        <input
          type="text"
          className="w-full bg-[#1a2530] border border-[#384959] text-white text-sm px-3 py-2 rounded-none focus:outline-none focus:border-[#9C886A]"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

function ColorPicker({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="mb-4">
      <FieldLabel>{label}</FieldLabel>
      <div className="flex flex-wrap gap-2">
        {BRAND_COLORS.map((c) => (
          <button
            key={c.value}
            title={c.label}
            onClick={() => onChange(c.value)}
            className="relative w-7 h-7 border transition-all"
            style={{
              backgroundColor: c.value === "transparent" ? "transparent" : c.value,
              borderColor: value === c.value ? "#9C886A" : "#384959",
              backgroundImage:
                c.value === "transparent"
                  ? "repeating-conic-gradient(#555 0% 25%, #333 0% 50%) 0 0 / 8px 8px"
                  : undefined,
            }}
          >
            {value === c.value && (
              <span
                className="absolute inset-0 flex items-center justify-center text-[10px]"
                style={{ color: c.value === "#FFFFFF" || c.value === "#faf9f6" ? "#000" : "#fff" }}
              >
                ✓
              </span>
            )}
          </button>
        ))}
      </div>
      <p className="text-xs text-[#9C886A]/60 mt-1">
        {BRAND_COLORS.find((c) => c.value === value)?.label ?? value}
      </p>
    </div>
  );
}

function FontPicker({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="mb-4">
      <FieldLabel>{label}</FieldLabel>
      <div className="flex flex-col gap-1">
        {BRAND_FONTS.map((f) => (
          <button
            key={f.value}
            onClick={() => onChange(f.value)}
            className="flex items-center gap-3 px-3 py-2 text-left border transition-all text-sm"
            style={{
              borderColor: value === f.value ? "#9C886A" : "#384959",
              backgroundColor: value === f.value ? "#384959" : "transparent",
              color: value === f.value ? "#FFFFFF" : "#9C886A",
              fontFamily: f.cssFamily,
            }}
          >
            <span className="flex-1">{f.label}</span>
            <span className="text-xs opacity-50">{f.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: Array<{ value: string; label: string }>;
  onChange: (v: string) => void;
}) {
  return (
    <div className="mb-4">
      <FieldLabel>{label}</FieldLabel>
      <select
        className="w-full bg-[#1a2530] border border-[#384959] text-white text-sm px-3 py-2 rounded-none focus:outline-none focus:border-[#9C886A]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function ToggleField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <FieldLabel>{label}</FieldLabel>
      <button
        onClick={() => onChange(!value)}
        className="w-10 h-5 rounded-full transition-all relative"
        style={{ backgroundColor: value ? "#9C886A" : "#384959" }}
      >
        <span
          className="absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all"
          style={{ left: value ? "calc(100% - 18px)" : "2px" }}
        />
      </button>
    </div>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 my-4">
      <div className="flex-1 border-t border-[#384959]" />
      <span className="text-xs uppercase tracking-widest text-[#384959]">{label}</span>
      <div className="flex-1 border-t border-[#384959]" />
    </div>
  );
}

// ── Block-specific editors ────────────────────────────────────────────────────

function HeroEditor({ block, onChange }: { block: any; onChange: (b: any) => void }) {
  const u = (key: string, val: any) => onChange({ ...block, [key]: val });
  return (
    <>
      <TextField label="Headline" value={block.headline} onChange={(v) => u("headline", v)} />
      <TextField label="Subtext" value={block.subtext ?? ""} onChange={(v) => u("subtext", v)} multiline />
      <TextField label="Image URL" value={block.imageUrl} onChange={(v) => u("imageUrl", v)} placeholder="https://cdn.manuscdn.com/..." />
      <Divider label="CTA" />
      <TextField label="Button Label" value={block.ctaLabel ?? ""} onChange={(v) => u("ctaLabel", v)} />
      <TextField label="Button Link" value={block.ctaHref ?? ""} onChange={(v) => u("ctaHref", v)} />
      <Divider label="Style" />
      <FontPicker label="Headline Font" value={block.headlineFont} onChange={(v) => u("headlineFont", v)} />
      <ColorPicker label="Headline Color" value={block.headlineColor} onChange={(v) => u("headlineColor", v)} />
      <ColorPicker label="Subtext Color" value={block.subtextColor ?? "#FFFFFF"} onChange={(v) => u("subtextColor", v)} />
      <ColorPicker label="Overlay Color" value={block.overlayColor ?? "transparent"} onChange={(v) => u("overlayColor", v)} />
      <SelectField label="Text Align" value={block.textAlign} options={TEXT_ALIGNS as any} onChange={(v) => u("textAlign", v)} />
      <SelectField label="Padding" value={block.paddingY} options={PADDING_SIZES as any} onChange={(v) => u("paddingY", v)} />
    </>
  );
}

function TextEditor({ block, onChange }: { block: any; onChange: (b: any) => void }) {
  const u = (key: string, val: any) => onChange({ ...block, [key]: val });
  return (
    <>
      <TextField label="Eyebrow Label" value={block.eyebrow ?? ""} onChange={(v) => u("eyebrow", v)} />
      <TextField label="Heading" value={block.heading ?? ""} onChange={(v) => u("heading", v)} />
      <TextField label="Body Text" value={block.body ?? ""} onChange={(v) => u("body", v)} multiline />
      <Divider label="Style" />
      <FontPicker label="Heading Font" value={block.headingFont} onChange={(v) => u("headingFont", v)} />
      <ColorPicker label="Heading Color" value={block.headingColor} onChange={(v) => u("headingColor", v)} />
      <ColorPicker label="Body Color" value={block.bodyColor} onChange={(v) => u("bodyColor", v)} />
      <ColorPicker label="Background" value={block.bgColor} onChange={(v) => u("bgColor", v)} />
      <SelectField label="Text Align" value={block.textAlign} options={TEXT_ALIGNS as any} onChange={(v) => u("textAlign", v)} />
      <SelectField label="Padding" value={block.paddingY} options={PADDING_SIZES as any} onChange={(v) => u("paddingY", v)} />
    </>
  );
}

function ImageEditor({ block, onChange }: { block: any; onChange: (b: any) => void }) {
  const u = (key: string, val: any) => onChange({ ...block, [key]: val });
  return (
    <>
      <TextField label="Image URL" value={block.imageUrl} onChange={(v) => u("imageUrl", v)} placeholder="https://cdn.manuscdn.com/..." />
      <TextField label="Caption (optional)" value={block.caption ?? ""} onChange={(v) => u("caption", v)} />
      <ToggleField label="Full Width" value={block.fullWidth} onChange={(v) => u("fullWidth", v)} />
      <SelectField label="Padding" value={block.paddingY} options={PADDING_SIZES as any} onChange={(v) => u("paddingY", v)} />
    </>
  );
}

function TwoColumnEditor({ block, onChange }: { block: any; onChange: (b: any) => void }) {
  const u = (key: string, val: any) => onChange({ ...block, [key]: val });
  const uLeft = (key: string, val: any) => u("leftContent", { ...block.leftContent, [key]: val });
  const uRight = (key: string, val: any) => u("rightContent", { ...block.rightContent, [key]: val });
  return (
    <>
      <SelectField
        label="Layout"
        value={block.layout}
        options={[
          { value: "text-image", label: "Text | Image" },
          { value: "image-text", label: "Image | Text" },
          { value: "text-text", label: "Text | Text" },
        ]}
        onChange={(v) => u("layout", v)}
      />
      <Divider label="Left Column" />
      <TextField label="Heading" value={block.leftContent.heading ?? ""} onChange={(v) => uLeft("heading", v)} />
      <TextField label="Body" value={block.leftContent.body ?? ""} onChange={(v) => uLeft("body", v)} multiline />
      <TextField label="Image URL" value={block.leftContent.imageUrl ?? ""} onChange={(v) => uLeft("imageUrl", v)} placeholder="https://..." />
      <Divider label="Right Column" />
      <TextField label="Heading" value={block.rightContent.heading ?? ""} onChange={(v) => uRight("heading", v)} />
      <TextField label="Body" value={block.rightContent.body ?? ""} onChange={(v) => uRight("body", v)} multiline />
      <TextField label="Image URL" value={block.rightContent.imageUrl ?? ""} onChange={(v) => uRight("imageUrl", v)} placeholder="https://..." />
      <Divider label="Style" />
      <ColorPicker label="Background" value={block.bgColor} onChange={(v) => u("bgColor", v)} />
      <SelectField label="Padding" value={block.paddingY} options={PADDING_SIZES as any} onChange={(v) => u("paddingY", v)} />
    </>
  );
}

function QuoteEditor({ block, onChange }: { block: any; onChange: (b: any) => void }) {
  const u = (key: string, val: any) => onChange({ ...block, [key]: val });
  return (
    <>
      <TextField label="Quote Text" value={block.quote} onChange={(v) => u("quote", v)} multiline />
      <TextField label="Attribution" value={block.attribution ?? ""} onChange={(v) => u("attribution", v)} placeholder="— Name, Title" />
      <Divider label="Style" />
      <ColorPicker label="Accent Color" value={block.accentColor} onChange={(v) => u("accentColor", v)} />
      <ColorPicker label="Text Color" value={block.textColor} onChange={(v) => u("textColor", v)} />
      <ColorPicker label="Background" value={block.bgColor} onChange={(v) => u("bgColor", v)} />
      <SelectField label="Padding" value={block.paddingY} options={PADDING_SIZES as any} onChange={(v) => u("paddingY", v)} />
    </>
  );
}

function CtaBannerEditor({ block, onChange }: { block: any; onChange: (b: any) => void }) {
  const u = (key: string, val: any) => onChange({ ...block, [key]: val });
  return (
    <>
      <TextField label="Heading" value={block.heading} onChange={(v) => u("heading", v)} />
      <TextField label="Subtext" value={block.subtext ?? ""} onChange={(v) => u("subtext", v)} multiline />
      <TextField label="Button Label" value={block.ctaLabel} onChange={(v) => u("ctaLabel", v)} />
      <TextField label="Button Link" value={block.ctaHref} onChange={(v) => u("ctaHref", v)} />
      <Divider label="Style" />
      <SelectField
        label="Button Style"
        value={block.ctaStyle}
        options={[
          { value: "filled", label: "Filled" },
          { value: "outline", label: "Outline" },
        ]}
        onChange={(v) => u("ctaStyle", v)}
      />
      <ColorPicker label="Background" value={block.bgColor} onChange={(v) => u("bgColor", v)} />
      <ColorPicker label="Heading Color" value={block.headingColor} onChange={(v) => u("headingColor", v)} />
      <ColorPicker label="Subtext Color" value={block.subtextColor ?? "#FFFFFF"} onChange={(v) => u("subtextColor", v)} />
      <SelectField label="Padding" value={block.paddingY} options={PADDING_SIZES as any} onChange={(v) => u("paddingY", v)} />
    </>
  );
}

function CardGridEditor({ block, onChange }: { block: any; onChange: (b: any) => void }) {
  const u = (key: string, val: any) => onChange({ ...block, [key]: val });
  const updateCard = (i: number, key: string, val: any) => {
    const cards = [...block.cards];
    cards[i] = { ...cards[i], [key]: val };
    u("cards", cards);
  };
  const addCard = () => u("cards", [...block.cards, { heading: "New Card", body: "", imageUrl: "" }]);
  const removeCard = (i: number) => u("cards", block.cards.filter((_: any, idx: number) => idx !== i));

  return (
    <>
      <SelectField
        label="Columns"
        value={String(block.columns)}
        options={[
          { value: "2", label: "2 Columns" },
          { value: "3", label: "3 Columns" },
        ]}
        onChange={(v) => u("columns", Number(v))}
      />
      <FontPicker label="Heading Font" value={block.headingFont} onChange={(v) => u("headingFont", v)} />
      <ColorPicker label="Background" value={block.bgColor} onChange={(v) => u("bgColor", v)} />
      <SelectField label="Padding" value={block.paddingY} options={PADDING_SIZES as any} onChange={(v) => u("paddingY", v)} />
      <Divider label="Cards" />
      {block.cards.map((card: any, i: number) => (
        <div key={i} className="border border-[#384959] p-3 mb-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-[#9C886A] uppercase tracking-widest">Card {i + 1}</span>
            <button onClick={() => removeCard(i)} className="text-[#9C886A]/50 hover:text-red-400 text-xs">Remove</button>
          </div>
          <TextField label="Heading" value={card.heading} onChange={(v) => updateCard(i, "heading", v)} />
          <TextField label="Body" value={card.body ?? ""} onChange={(v) => updateCard(i, "body", v)} multiline />
          <TextField label="Image URL" value={card.imageUrl ?? ""} onChange={(v) => updateCard(i, "imageUrl", v)} placeholder="https://..." />
          <TextField label="CTA Label" value={card.ctaLabel ?? ""} onChange={(v) => updateCard(i, "ctaLabel", v)} />
          <TextField label="CTA Link" value={card.ctaHref ?? ""} onChange={(v) => updateCard(i, "ctaHref", v)} />
        </div>
      ))}
      <button
        onClick={addCard}
        className="w-full border border-dashed border-[#384959] text-[#9C886A] text-xs uppercase tracking-widest py-2 hover:border-[#9C886A] transition-all"
      >
        + Add Card
      </button>
    </>
  );
}

function StatsRowEditor({ block, onChange }: { block: any; onChange: (b: any) => void }) {
  const u = (key: string, val: any) => onChange({ ...block, [key]: val });
  const updateStat = (i: number, key: string, val: any) => {
    const stats = [...block.stats];
    stats[i] = { ...stats[i], [key]: val };
    u("stats", stats);
  };
  return (
    <>
      <ColorPicker label="Background" value={block.bgColor} onChange={(v) => u("bgColor", v)} />
      <ColorPicker label="Value Color" value={block.valueColor} onChange={(v) => u("valueColor", v)} />
      <ColorPicker label="Label Color" value={block.labelColor} onChange={(v) => u("labelColor", v)} />
      <SelectField label="Padding" value={block.paddingY} options={PADDING_SIZES as any} onChange={(v) => u("paddingY", v)} />
      <Divider label="Stats" />
      {block.stats.map((stat: any, i: number) => (
        <div key={i} className="flex gap-2 mb-2">
          <input
            className="w-1/3 bg-[#1a2530] border border-[#384959] text-white text-sm px-2 py-1 focus:outline-none focus:border-[#9C886A]"
            value={stat.value}
            onChange={(e) => updateStat(i, "value", e.target.value)}
            placeholder="20+"
          />
          <input
            className="flex-1 bg-[#1a2530] border border-[#384959] text-white text-sm px-2 py-1 focus:outline-none focus:border-[#9C886A]"
            value={stat.label}
            onChange={(e) => updateStat(i, "label", e.target.value)}
            placeholder="Years of Experience"
          />
        </div>
      ))}
    </>
  );
}

// ── Main panel ────────────────────────────────────────────────────────────────
export default function BlockPropertyPanel({ block, onChange, onDelete, onMoveUp, onMoveDown, isFirst, isLast }: Props) {
  const BLOCK_LABELS: Record<string, string> = {
    hero: "Hero",
    text: "Text Section",
    image: "Image",
    "two-column": "Two Column",
    quote: "Pull Quote",
    "cta-banner": "CTA Banner",
    "card-grid": "Card Grid",
    "stats-row": "Stats Row",
  };

  return (
    <div className="flex flex-col h-full bg-[#0f1a24] text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#384959]">
        <div>
          <p className="text-xs uppercase tracking-widest text-[#9C886A]">Editing Block</p>
          <p className="text-sm font-light">{BLOCK_LABELS[block.type] ?? block.type}</p>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={onMoveUp}
            disabled={isFirst}
            className="p-1.5 text-[#9C886A] disabled:opacity-30 hover:text-white transition-colors"
            title="Move up"
          >
            <ChevronUp size={14} />
          </button>
          <button
            onClick={onMoveDown}
            disabled={isLast}
            className="p-1.5 text-[#9C886A] disabled:opacity-30 hover:text-white transition-colors"
            title="Move down"
          >
            <ChevronDown size={14} />
          </button>
          <button
            onClick={onDelete}
            className="p-1.5 text-[#9C886A] hover:text-red-400 transition-colors"
            title="Delete block"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Scrollable fields */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {block.type === "hero" && <HeroEditor block={block} onChange={onChange} />}
        {block.type === "text" && <TextEditor block={block} onChange={onChange} />}
        {block.type === "image" && <ImageEditor block={block} onChange={onChange} />}
        {block.type === "two-column" && <TwoColumnEditor block={block} onChange={onChange} />}
        {block.type === "quote" && <QuoteEditor block={block} onChange={onChange} />}
        {block.type === "cta-banner" && <CtaBannerEditor block={block} onChange={onChange} />}
        {block.type === "card-grid" && <CardGridEditor block={block} onChange={onChange} />}
        {block.type === "stats-row" && <StatsRowEditor block={block} onChange={onChange} />}
      </div>

      {/* Delete footer */}
      <div className="px-4 py-3 border-t border-[#384959]">
        <button
          onClick={onDelete}
          className="w-full text-xs uppercase tracking-widest text-red-400/70 hover:text-red-400 transition-colors py-1"
        >
          Delete This Block
        </button>
      </div>
    </div>
  );
}
