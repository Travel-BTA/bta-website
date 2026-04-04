/**
 * brandTokens.ts — Single source of truth for BTA brand design tokens.
 *
 * WHY: The page builder enforces brand compliance by only offering these
 * options in every property panel. Nothing off-brand can be selected.
 * Both the editor UI and the live page renderer import from here.
 */

export const BRAND_COLORS = [
  { value: "#384959", label: "Aegean Blue", swatch: "#384959" },
  { value: "#9C886A", label: "Gold", swatch: "#9C886A" },
  { value: "#bfaf8a", label: "Champagne", swatch: "#bfaf8a" },
  { value: "#2F2F2F", label: "Charcoal", swatch: "#2F2F2F" },
  { value: "#FFFFFF", label: "White", swatch: "#FFFFFF" },
  { value: "#faf9f6", label: "Ivory", swatch: "#faf9f6" },
  { value: "#041E42", label: "Deep Navy", swatch: "#041E42" },
  { value: "transparent", label: "Transparent", swatch: "transparent" },
] as const;

export type BrandColorValue = (typeof BRAND_COLORS)[number]["value"];

export const BRAND_FONTS = [
  {
    value: "instrument-serif",
    label: "Instrument Serif",
    description: "H1/H2 headings — uppercase only",
    cssFamily: "'Instrument Serif', Georgia, serif",
  },
  {
    value: "playfair-display",
    label: "Playfair Display",
    description: "Subheadings, body, eyebrow labels",
    cssFamily: "'Playfair Display', Georgia, serif",
  },
  {
    value: "allura",
    label: "Allura",
    description: "Decorative script — use sparingly",
    cssFamily: "'Allura', cursive",
  },
  {
    value: "system",
    label: "System",
    description: "Body copy, descriptions",
    cssFamily: "system-ui, -apple-system, sans-serif",
  },
] as const;

export type BrandFontValue = (typeof BRAND_FONTS)[number]["value"];

export const PADDING_SIZES = [
  { value: "none", label: "None", px: "0" },
  { value: "sm", label: "Small", px: "2rem" },
  { value: "md", label: "Medium", px: "4rem" },
  { value: "lg", label: "Large", px: "6rem" },
  { value: "xl", label: "Extra Large", px: "10rem" },
] as const;

export type PaddingSizeValue = (typeof PADDING_SIZES)[number]["value"];

export const TEXT_ALIGNS = [
  { value: "left", label: "Left" },
  { value: "center", label: "Center" },
  { value: "right", label: "Right" },
] as const;

// Helper: get CSS font-family string from font value
export function getFontFamily(font: BrandFontValue): string {
  return BRAND_FONTS.find((f) => f.value === font)?.cssFamily ?? "system-ui, sans-serif";
}

// Helper: get CSS padding from size value
export function getPaddingY(size: PaddingSizeValue): string {
  return PADDING_SIZES.find((p) => p.value === size)?.px ?? "4rem";
}

// Block type metadata — used in the "Add Block" library panel
export const BLOCK_TYPES = [
  {
    type: "hero",
    label: "Hero",
    description: "Full-width image with headline, subtext, and optional CTA",
    icon: "ImageIcon",
  },
  {
    type: "text",
    label: "Text Section",
    description: "Eyebrow, heading, and body text with background color",
    icon: "Type",
  },
  {
    type: "image",
    label: "Image",
    description: "Full-width or contained image with optional caption",
    icon: "Image",
  },
  {
    type: "two-column",
    label: "Two Column",
    description: "Side-by-side text and/or image layout",
    icon: "Columns2",
  },
  {
    type: "quote",
    label: "Pull Quote",
    description: "Large decorative quote with attribution",
    icon: "Quote",
  },
  {
    type: "cta-banner",
    label: "CTA Banner",
    description: "Full-width call-to-action strip with button",
    icon: "Megaphone",
  },
  {
    type: "card-grid",
    label: "Card Grid",
    description: "2 or 3 column card layout with images and text",
    icon: "LayoutGrid",
  },
  {
    type: "stats-row",
    label: "Stats Row",
    description: "Horizontal row of key statistics or numbers",
    icon: "BarChart2",
  },
] as const;

// Default props for each block type — used when adding a new block
export function getDefaultBlock(type: string, id: string): any {
  const defaults: Record<string, any> = {
    hero: {
      type: "hero",
      id,
      imageUrl: "",
      headline: "HEADLINE GOES HERE",
      subtext: "Supporting text that describes this section.",
      ctaLabel: "Explore",
      ctaHref: "#",
      overlayColor: "#384959",
      headlineFont: "instrument-serif",
      headlineColor: "#FFFFFF",
      subtextColor: "#FFFFFF",
      textAlign: "center",
      paddingY: "xl",
    },
    text: {
      type: "text",
      id,
      eyebrow: "Section Label",
      heading: "SECTION HEADING",
      body: "Add your body text here. This section supports multiple paragraphs.",
      headingFont: "instrument-serif",
      headingColor: "#384959",
      bodyColor: "#2F2F2F",
      bgColor: "#FFFFFF",
      textAlign: "center",
      paddingY: "lg",
    },
    image: {
      type: "image",
      id,
      imageUrl: "",
      caption: "",
      fullWidth: true,
      paddingY: "none",
    },
    "two-column": {
      type: "two-column",
      id,
      layout: "text-image",
      leftContent: {
        heading: "LEFT HEADING",
        body: "Left column body text goes here.",
        headingFont: "instrument-serif",
        headingColor: "#384959",
        bodyColor: "#2F2F2F",
      },
      rightContent: {
        imageUrl: "",
        heading: "",
        body: "",
      },
      bgColor: "#faf9f6",
      paddingY: "lg",
    },
    quote: {
      type: "quote",
      id,
      quote: "Travel is the only thing you buy that makes you richer.",
      attribution: "— Anonymous",
      accentColor: "#9C886A",
      textColor: "#FFFFFF",
      bgColor: "#384959",
      paddingY: "lg",
    },
    "cta-banner": {
      type: "cta-banner",
      id,
      heading: "READY TO BEGIN YOUR JOURNEY?",
      subtext: "Let our advisors craft an experience tailored entirely to you.",
      ctaLabel: "Start Planning",
      ctaHref: "/contact-us",
      bgColor: "#9C886A",
      headingColor: "#FFFFFF",
      subtextColor: "#FFFFFF",
      ctaStyle: "outline",
      paddingY: "lg",
    },
    "card-grid": {
      type: "card-grid",
      id,
      columns: 3,
      cards: [
        { heading: "Card One", body: "Description for card one.", imageUrl: "" },
        { heading: "Card Two", body: "Description for card two.", imageUrl: "" },
        { heading: "Card Three", body: "Description for card three.", imageUrl: "" },
      ],
      bgColor: "#faf9f6",
      headingFont: "instrument-serif",
      paddingY: "lg",
    },
    "stats-row": {
      type: "stats-row",
      id,
      stats: [
        { value: "20+", label: "Years of Experience" },
        { value: "500+", label: "Destinations" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "Virtuoso", label: "Member Agency" },
      ],
      bgColor: "#384959",
      valueColor: "#bfaf8a",
      labelColor: "#FFFFFF",
      paddingY: "md",
    },
  };
  return defaults[type] ?? { type, id };
}
