/**
 * seed-julie-rose.mjs
 * Seeds Julie Rose as the first advisor record in the database.
 * Safe to re-run — uses INSERT IGNORE so it won't duplicate.
 */

import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) { console.error("DATABASE_URL not set"); process.exit(1); }

const conn = await mysql.createConnection(DATABASE_URL);

const julieRose = {
  slug: "julie-rose",
  name: "Julie Rose",
  title: "Luxury Travel Advisor & Virtuoso Member",
  tagline: "Crafting journeys that transform the way you see the world.",
  heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1440&q=80",
  badges: JSON.stringify(["Virtuoso Member", "Certified Luxury Specialist", "15+ Years Experience"]),
  ctaPrimary: JSON.stringify({ label: "Start Planning With Julie", href: "#contact" }),
  ctaSecondary: JSON.stringify({ label: "View Her Specialties", href: "#specialties" }),
  photoMain: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&q=80",
  photoAccent: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  meetEyebrow: "Meet Julie",
  meetHeading: "A Passion for\nMeaningful Travel",
  bio: JSON.stringify([
    "With over 15 years crafting bespoke journeys for discerning travelers, Julie Rose brings an unmatched depth of destination knowledge and a genuine love for the art of travel. A Virtuoso-certified luxury specialist, she has personally explored more than 60 countries — from the private islands of the Maldives to the ancient temples of Kyoto.",
    "Julie's approach is simple: every journey should feel effortlessly personal. She listens deeply, designs meticulously, and stays with you every step of the way — before, during, and after your trip."
  ]),
  meetQuote: '"Travel is not just a destination — it\'s a transformation. My job is to make sure yours is unforgettable."',
  stats: JSON.stringify([
    { value: "60+", label: "Countries Explored" },
    { value: "15", label: "Years of Experience" },
    { value: "6", label: "Continents Covered" },
    { value: "500+", label: "Trips Designed" }
  ]),
  hotels: JSON.stringify([
    {
      badge: "Virtuoso Preferred",
      location: "North Malé Atoll, Maldives",
      name: "Soneva Jani",
      quote: '"Overwater villas with retractable roofs for stargazing — pure magic."',
      perks: ["Daily breakfast for two", "$100 spa credit", "Room upgrade on arrival", "VIP welcome"],
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80"
    },
    {
      badge: "BTA Exclusive",
      location: "Positano, Amalfi Coast",
      name: "Le Sirenuse",
      quote: '"The most romantic terrace in all of Italy — every room a painting."',
      perks: ["Complimentary breakfast", "Aperitivo welcome", "Early check-in", "Concierge priority"],
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80"
    },
    {
      badge: "Virtuoso Preferred",
      location: "Kyoto, Japan",
      name: "Aman Kyoto",
      quote: '"Hidden in an ancient forest — the most serene luxury I\'ve ever experienced."',
      perks: ["Private forest walk", "Tea ceremony", "Breakfast included", "Sake welcome amenity"],
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80"
    }
  ]),
  specialties: JSON.stringify([
    { label: "European River Cruises", description: "Intimate sailings through France, Germany & the Danube with handpicked shore excursions.", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80" },
    { label: "African Safaris", description: "Private game reserves, expert guides, and camp upgrades across Kenya, Tanzania & Botswana.", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/safari_bush_dining_v2_e2293e19.jpg" },
    { label: "Japan & Asia", description: "Curated cultural immersions from Kyoto ryokans to Maldivian overwater villas.", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80" },
    { label: "Mediterranean Escapes", description: "Amalfi, Santorini & the Riviera — villa stays, yacht charters, and insider dining.", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80" },
    { label: "Luxury Expedition Cruises", description: "Antarctica, Patagonia & the Arctic aboard intimate expedition ships with world-class lecturers.", image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&q=80" },
    { label: "Bespoke Honeymoons", description: "Romantic escapes crafted around your story — from overwater bungalows to private island retreats.", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80" }
  ]),
  pillars: JSON.stringify([
    { icon: "compass", title: "Deep Destination Knowledge", body: "Julie has personally visited every destination she recommends — no guesswork, only firsthand expertise." },
    { icon: "heart", title: "Genuinely Personal", body: "She takes time to understand who you are, what moves you, and what you dream of experiencing." },
    { icon: "star", title: "Exclusive Access", body: "As a Virtuoso member, Julie unlocks VIP amenities, private experiences, and insider access unavailable elsewhere." },
    { icon: "shield", title: "Seamless Support", body: "From the first call to the final flight home, Julie is your advocate — available 24/7 when it matters most." }
  ]),
  experiences: JSON.stringify([
    { duration: "14 Days", region: "Italy & Greece", title: "Amalfi to Santorini — A Mediterranean Dream", description: "Private villa stays, yacht charters, and Michelin-starred dining along the world's most beautiful coastlines.", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80", href: "#contact" },
    { duration: "10 Days", region: "East Africa", title: "Tanzania Safari & Zanzibar Beach Escape", description: "Witness the Great Migration in the Serengeti, then unwind on the spice-scented beaches of Zanzibar.", image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/safari_bush_dining_v2_e2293e19.jpg", href: "#contact" },
    { duration: "12 Days", region: "Japan", title: "Japan in Full Bloom — Cherry Blossom Season", description: "Tokyo, Kyoto, and Hakone timed perfectly for sakura season, with private ryokan stays and tea ceremony experiences.", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80", href: "#contact" }
  ]),
  whyWorkBenefits: JSON.stringify([
    { title: "Virtuoso Preferred Partner Access", body: "Exclusive amenities worth $350+ per stay at 1,200+ luxury hotels worldwide." },
    { title: "Complimentary Trip Planning", body: "No booking fees. Julie's expertise is your advantage, not an added cost." },
    { title: "24/7 On-Trip Support", body: "A direct line to Julie throughout your journey for anything that arises." },
    { title: "Fully Customized Itineraries", body: "Every journey is built from scratch around your interests, pace, and style." },
    { title: "Trusted Vendor Network", body: "Relationships with the world's finest hotels, guides, and operators — built over 15 years." }
  ]),
  whyWorkImage: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80",
  testimonials: JSON.stringify([
    { quote: "Julie planned our honeymoon in the Maldives and it was absolutely perfect. Every single detail was taken care of — we just showed up and enjoyed. We've already booked our anniversary trip with her.", author: "Sarah & Michael T.", trip: "Maldives Honeymoon", rating: 5 },
    { quote: "I've worked with many travel agents over the years, but Julie is in a completely different league. Her knowledge of Japan is extraordinary — she found experiences we never would have discovered on our own.", author: "Robert K.", trip: "Japan Cherry Blossom Tour", rating: 5 },
    { quote: "Our African safari was the trip of a lifetime. Julie's attention to detail and her relationships with the lodges made everything seamless. We felt like VIPs everywhere we went.", author: "The Henderson Family", trip: "Tanzania Safari", rating: 5 }
  ]),
  closingBannerImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1440&q=80",
  closingBannerQuote: '"The world is a book, and those who do not travel read only one page." — Saint Augustine',
  email: null,
  published: true,
  sortOrder: 1,
};

try {
  const [existing] = await conn.execute("SELECT id FROM advisors WHERE slug = ?", [julieRose.slug]);
  if (existing.length > 0) {
    console.log("Julie Rose already exists in the database (id:", existing[0].id, "). Skipping seed.");
  } else {
    await conn.execute(
      `INSERT INTO advisors (slug, name, title, tagline, heroImage, badges, ctaPrimary, ctaSecondary, photoMain, photoAccent, meetEyebrow, meetHeading, bio, meetQuote, stats, hotels, specialties, pillars, experiences, whyWorkBenefits, whyWorkImage, testimonials, closingBannerImage, closingBannerQuote, email, published, sortOrder)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        julieRose.slug, julieRose.name, julieRose.title, julieRose.tagline, julieRose.heroImage,
        julieRose.badges, julieRose.ctaPrimary, julieRose.ctaSecondary,
        julieRose.photoMain, julieRose.photoAccent, julieRose.meetEyebrow, julieRose.meetHeading,
        julieRose.bio, julieRose.meetQuote, julieRose.stats, julieRose.hotels, julieRose.specialties,
        julieRose.pillars, julieRose.experiences, julieRose.whyWorkBenefits, julieRose.whyWorkImage,
        julieRose.testimonials, julieRose.closingBannerImage, julieRose.closingBannerQuote,
        julieRose.email, julieRose.published, julieRose.sortOrder
      ]
    );
    console.log("SUCCESS: Julie Rose seeded as the first advisor record.");
  }
} catch (err) {
  console.error("Seed failed:", err.message);
  process.exit(1);
} finally {
  await conn.end();
}
