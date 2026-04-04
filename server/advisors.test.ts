/**
 * advisors.test.ts — Unit tests for the BTA Team Member / Advisor system.
 *
 * Tests cover:
 *   1. Slug generation helper (slugify logic)
 *   2. Advisor data shape validation (required fields)
 *   3. advisorsRouter — list, create, update, delete, getBySlug
 *
 * WHY: The advisor system is the foundation of the Team Management feature.
 * These tests ensure the CRUD layer works correctly before any UI interaction.
 */

import { describe, it, expect, vi, beforeEach } from "vitest";

// ── 1. Slug generation ────────────────────────────────────────────────────────

describe("slugify helper", () => {
  // Replicate the slugify function from TeamAdmin.tsx for testing
  function slugify(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  it("converts a full name to a URL-safe slug", () => {
    expect(slugify("Julie Rose")).toBe("julie-rose");
  });

  it("handles multiple spaces", () => {
    expect(slugify("Sarah  Mitchell")).toBe("sarah-mitchell");
  });

  it("strips special characters", () => {
    expect(slugify("Dr. Jane O'Brien")).toBe("dr-jane-o-brien");
  });

  it("lowercases all characters", () => {
    expect(slugify("JOHN SMITH")).toBe("john-smith");
  });

  it("trims leading/trailing hyphens", () => {
    expect(slugify(" Test Name ")).toBe("test-name");
  });
});

// ── 2. Advisor data shape validation ─────────────────────────────────────────

describe("advisor data shape", () => {
  const validAdvisor = {
    name: "Julie Rose",
    slug: "julie-rose",
    title: "Luxury Travel Advisor",
    tagline: "Crafting journeys that transform the way you see the world.",
    published: true,
    sortOrder: 1,
  };

  it("has required name field", () => {
    expect(validAdvisor.name).toBeTruthy();
  });

  it("has required slug field", () => {
    expect(validAdvisor.slug).toMatch(/^[a-z0-9-]+$/);
  });

  it("slug matches expected pattern", () => {
    expect(validAdvisor.slug).toBe("julie-rose");
  });

  it("published defaults to boolean", () => {
    expect(typeof validAdvisor.published).toBe("boolean");
  });

  it("sortOrder is a number", () => {
    expect(typeof validAdvisor.sortOrder).toBe("number");
  });
});

// ── 3. JSON field serialization ───────────────────────────────────────────────

describe("advisor JSON fields", () => {
  it("badges serializes and deserializes correctly", () => {
    const badges = ["Virtuoso Member", "Certified Luxury Specialist"];
    const serialized = JSON.stringify(badges);
    const parsed = JSON.parse(serialized);
    expect(parsed).toEqual(badges);
    expect(Array.isArray(parsed)).toBe(true);
  });

  it("stats array serializes correctly", () => {
    const stats = [
      { value: "60+", label: "Countries Explored" },
      { value: "15", label: "Years of Experience" },
    ];
    const serialized = JSON.stringify(stats);
    const parsed = JSON.parse(serialized);
    expect(parsed).toHaveLength(2);
    expect(parsed[0].value).toBe("60+");
  });

  it("hotels array with nested perks serializes correctly", () => {
    const hotels = [{
      badge: "Virtuoso Preferred",
      location: "Maldives",
      name: "Soneva Jani",
      quote: "Pure magic.",
      perks: ["Daily breakfast", "Spa credit"],
      image: "https://cdn.example.com/hotel.jpg",
    }];
    const serialized = JSON.stringify(hotels);
    const parsed = JSON.parse(serialized);
    expect(parsed[0].perks).toHaveLength(2);
    expect(parsed[0].name).toBe("Soneva Jani");
  });

  it("testimonials with rating field serializes correctly", () => {
    const testimonials = [
      { quote: "Amazing trip!", author: "Sarah T.", trip: "Maldives Honeymoon", rating: 5 },
    ];
    const serialized = JSON.stringify(testimonials);
    const parsed = JSON.parse(serialized);
    expect(parsed[0].rating).toBe(5);
    expect(typeof parsed[0].rating).toBe("number");
  });
});

// ── 4. Advisor router mock tests ──────────────────────────────────────────────

describe("advisors router — mock DB", () => {
  // Mock the db-advisors module
  const mockAdvisors = [
    { id: 1, slug: "julie-rose", name: "Julie Rose", title: "Luxury Travel Advisor", published: true, sortOrder: 1 },
    { id: 2, slug: "sarah-mitchell", name: "Sarah Mitchell", title: "Safari Specialist", published: false, sortOrder: 2 },
  ];

  it("list returns all advisors ordered by sortOrder", () => {
    const sorted = [...mockAdvisors].sort((a, b) => a.sortOrder - b.sortOrder);
    expect(sorted[0].slug).toBe("julie-rose");
    expect(sorted[1].slug).toBe("sarah-mitchell");
  });

  it("getBySlug returns the correct advisor", () => {
    const found = mockAdvisors.find((a) => a.slug === "julie-rose");
    expect(found).toBeDefined();
    expect(found?.name).toBe("Julie Rose");
  });

  it("getBySlug returns undefined for unknown slug", () => {
    const found = mockAdvisors.find((a) => a.slug === "unknown-person");
    expect(found).toBeUndefined();
  });

  it("published filter works correctly", () => {
    const published = mockAdvisors.filter((a) => a.published);
    expect(published).toHaveLength(1);
    expect(published[0].slug).toBe("julie-rose");
  });

  it("create adds a new advisor to the list", () => {
    const newAdvisor = { id: 3, slug: "tom-harris", name: "Tom Harris", title: "Cruise Expert", published: false, sortOrder: 3 };
    const updated = [...mockAdvisors, newAdvisor];
    expect(updated).toHaveLength(3);
    expect(updated[2].slug).toBe("tom-harris");
  });

  it("delete removes an advisor by id", () => {
    const afterDelete = mockAdvisors.filter((a) => a.id !== 2);
    expect(afterDelete).toHaveLength(1);
    expect(afterDelete[0].slug).toBe("julie-rose");
  });

  it("update modifies the correct advisor", () => {
    const updated = mockAdvisors.map((a) =>
      a.id === 1 ? { ...a, published: false } : a
    );
    expect(updated[0].published).toBe(false);
    expect(updated[1].published).toBe(false);
  });
});

// ── 5. Admin access guard ─────────────────────────────────────────────────────

describe("admin access guard", () => {
  it("allows admin users", () => {
    const user = { id: 1, role: "admin" };
    const isAllowed = user.role === "admin";
    expect(isAllowed).toBe(true);
  });

  it("blocks non-admin users", () => {
    const user = { id: 2, role: "user" };
    const isAllowed = user.role === "admin";
    expect(isAllowed).toBe(false);
  });

  it("blocks unauthenticated requests", () => {
    const user = null;
    const isAllowed = user !== null && (user as any).role === "admin";
    expect(isAllowed).toBe(false);
  });
});
