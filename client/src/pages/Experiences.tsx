// Experiences page BTA curated global experiences
// Brand: #2f2f2f | #faf9f6 | #edeae4 | #384959 | #bfaf8a
// Layout: Full-bleed hero → intro → featured categories → curated list → philanthropy note → CTA

import { Link } from "wouter";
import { useState } from "react";

const EXPERIENCE_CATEGORIES = [
  {
    id: "safari",
    name: "Private Safari",
    eyebrow: "Africa & Beyond",
    tagline: "Witness the World's Greatest Wildlife Spectacles",
    description:
      "A private safari is not simply a game drive it is a complete immersion into the rhythms of the wild. Our advisors have walked the Serengeti, paddled the Okavango, and tracked mountain gorillas in Rwanda. We know which camps place you closest to the action, which guides are truly exceptional, and which seasons deliver the most extraordinary sightings.",
    experiences: [
      "Serengeti Great Migration timing & camps",
      "Okavango Delta mokoro & walking safaris",
      "Gorilla trekking in Rwanda & Uganda",
      "Chobe elephant encounters, Botswana",
      "Ngorongoro Crater private game drives",
      "South Africa's private game reserves",
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/safari_bush_dining_v2_e2293e19.jpg",
    bgColor: "#384959",
    textColor: "#faf9f6",
  },
  {
    id: "culinary",
    name: "Culinary & Wine",
    eyebrow: "Farm, Table & Cellar",
    tagline: "Taste the World Through Its Finest Kitchens",
    description:
      "Food is the most intimate form of cultural exchange. We design experiences that go far beyond restaurant reservations private cooking lessons with Michelin-starred chefs, harvest-season stays at Bordeaux châteaux, market mornings in Marrakech, and truffle hunts in Périgord. Every meal tells a story.",
    experiences: [
      "Tuscan farmhouse cooking with private chef",
      "Bordeaux & Burgundy château stays",
      "Tokyo private omakase & sake tastings",
      "Marrakech medina food walks",
      "Truffle hunting in Périgord, France",
      "Napa Valley harvest season experiences",
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/exp-culinary-MygosSX4kaPXefwZ8DaiYG.webp",
    bgColor: "#edeae4",
    textColor: "#2f2f2f",
  },
  {
    id: "wellness",
    name: "Wellness & Restoration",
    eyebrow: "Retreat, Restore, Return",
    tagline: "The World's Most Transformative Wellness Retreats",
    description:
      "True wellness travel is not a spa day it is a complete recalibration of mind, body, and perspective. We curate overwater retreats in the Maldives, Ayurvedic immersions in Kerala, silent meditation in Bhutan, and thermal bathing in Iceland's geothermal landscape. Each experience is chosen for its depth and authenticity.",
    experiences: [
      "Maldives overwater spa retreats",
      "Ayurvedic immersions in Kerala, India",
      "Bhutan mindfulness & monastery stays",
      "Iceland geothermal & Northern Lights",
      "Tuscany yoga & olive harvest retreats",
      "Japanese forest bathing (Shinrin-yoku)",
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/exp-wellness-HUfcKvygPdYPcDdnLM8cdy.webp",
    bgColor: "#384959",
    textColor: "#faf9f6",
  },
  {
    id: "cultural",
    name: "Cultural Access",
    eyebrow: "Private Access, Rare Encounters",
    tagline: "Experiences That Cannot Be Booked Online",
    description:
      "The Uffizi Gallery after closing time. A private audience with a Kyoto geisha house. A backstage tour of La Scala in Milan. Cultural access is about relationships and ours run deep. We open doors that remain firmly closed to the general public, creating moments that become the defining memories of a lifetime.",
    experiences: [
      "Vatican after-hours private tours",
      "Uffizi Gallery exclusive evening access",
      "Kyoto geisha house private dinner",
      "La Scala Milan backstage experience",
      "Louvre private curator-led tours",
      "Angkor Wat sunrise private access",
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/exp-cultural-3tXwJCYW23JgqqixTYhCWT.webp",
    bgColor: "#edeae4",
    textColor: "#2f2f2f",
  },
  {
    id: "adventure",
    name: "Luxury Adventure",
    eyebrow: "Extraordinary by Design",
    tagline: "Where Comfort Meets the Edge of the World",
    description:
      "Adventure does not require sacrifice. Our luxury adventure experiences combine the world's most dramatic landscapes with the finest accommodations, guides, and logistics. From glamping beneath Patagonia's granite towers to heli-skiing in the Canadian Rockies, we design journeys that push boundaries without compromising comfort.",
    experiences: [
      "Patagonia glamping & trekking, Chile",
      "Galápagos private yacht expedition",
      "Heli-skiing in the Canadian Rockies",
      "Hot air ballooning over Cappadocia",
      "Private Everest Base Camp trek",
      "Antarctica zodiac landing expeditions",
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/exp-adventure-6FS5xqYQQMnVzCh7c46Xpq.webp",
    bgColor: "#384959",
    textColor: "#faf9f6",
  },
];

export default function Experiences() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf9f6" }}>
      {/* Hero */}
      <section
        className="relative h-[70vh] min-h-[500px] flex items-end"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/exp-cultural-3tXwJCYW23JgqqixTYhCWT.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(47,47,47,0.88) 0%, rgba(47,47,47,0.3) 55%, rgba(47,47,47,0.15) 100%)" }}
        />
        <div className="relative z-10 w-full px-8 md:px-16 pb-16">
          {/* Breadcrumb: white on photo. Champagne Gold only on plain backgrounds */}
          <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal" , textTransform: "uppercase" }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            Experiences
          </p>
          {/* Allura script: white on photo */}
          <p className="text-2xl md:text-3xl mb-2" style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'Allura', cursive" }}>
            Curated Around the Globe
          </p>
          {/* H1: Instrument Serif ALL CAPS white */}
          <h1 className="text-5xl md:text-7xl uppercase mb-6" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "normal", fontWeight: 400, color: "#ffffff", letterSpacing: "0.06em", lineHeight: 1.1 , textTransform: "uppercase" }}>
            Experiences
          </h1>
          <p className="text-white/80 max-w-xl text-base leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}>
            The moments that define a journey are rarely the ones you planned. We design the conditions for those moments to happen through access, expertise, and the relationships we have built over decades.
          </p>
        </div>
      </section>

      {/* Category Nav */}
      <section className="sticky top-[68px] z-30 border-b" style={{ backgroundColor: "#faf9f6", borderColor: "#edeae4" }}>
        <div className="max-w-7xl mx-auto px-8 md:px-16 flex gap-0 overflow-x-auto">
          {EXPERIENCE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                document.getElementById(cat.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="flex-shrink-0 px-6 py-4 text-xs tracking-[0.15em] uppercase transition-all duration-200 border-b-2"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: activeCategory === cat.id ? "#384959" : "#2f2f2f",
                borderBottomColor: activeCategory === cat.id ? "#bfaf8a" : "transparent",
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Experience Sections */}
      {EXPERIENCE_CATEGORIES.map((cat, index) => (
        <section
          key={cat.id}
          id={cat.id}
          className="scroll-mt-[120px]"
          style={{ backgroundColor: cat.bgColor }}
        >
          <div className={`max-w-7xl mx-auto flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
            {/* Image */}
            <div className="md:w-1/2 h-[400px] md:h-auto overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="md:w-1/2 flex flex-col justify-center p-10 md:p-16">
              <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "#bfaf8a", fontFamily: "'Playfair Display', Georgia, serif" }}>
                {cat.eyebrow}
              </p>
              <h2
                className="text-3xl md:text-4xl mb-4 uppercase"
                style={{ color: cat.textColor, fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400, fontStyle: "normal", letterSpacing: "0.06em", lineHeight: 1.15 }}
              >
                {cat.name}
              </h2>
              <p
                className="text-lg italic mb-5"
                style={{ color: "#bfaf8a", fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {cat.tagline}
              </p>
              <p
                className="text-base leading-relaxed mb-8 opacity-85"
                style={{ color: cat.textColor, fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1rem" }}
              >
                {cat.description}
              </p>
              {/* Experience list */}
              <div className="mb-8">
                <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "#bfaf8a", fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Featured Experiences
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {cat.experiences.map((exp) => (
                    <div key={exp} className="flex items-center gap-3">
                      <span className="w-4 h-px flex-shrink-0" style={{ backgroundColor: "#bfaf8a" }} />
                      <span className="text-sm" style={{ color: cat.textColor, fontFamily: "'Playfair Display', Georgia, serif", opacity: 0.9 }}>
                        {exp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/contact">
                <button
                  className="self-start px-8 py-3 text-xs tracking-[0.2em] uppercase border transition-all duration-300 hover:opacity-70"
                  style={{
                    borderColor: "#bfaf8a",
                    color: "#bfaf8a",
                    fontFamily: "'Playfair Display', Georgia, serif",
                  }}
                >
                  Enquire About This Experience
                </button>
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* Philanthropy Note */}
      <section className="py-16 px-8 md:px-16 text-center" style={{ backgroundColor: "#edeae4" }}>
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-px mx-auto mb-8" style={{ backgroundColor: "#bfaf8a" }} />
          <p className="text-sm tracking-[0.2em] uppercase mb-4" style={{ color: "#bfaf8a", fontFamily: "'Playfair Display', Georgia, serif" }}>
            Travel With Purpose
          </p>
          <h3 className="text-2xl md:text-3xl mb-5 uppercase" style={{ color: "#384959", fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400, fontStyle: "normal", letterSpacing: "0.06em", lineHeight: 1.15 }}>
            Every Experience Gives Back
          </h3>
          <p className="text-base leading-relaxed" style={{ color: "#2f2f2f", fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1rem" }}>
            A portion of every booking supports local charities and causes that matter childhood cancer, Make-A-Wish, veterans, arts and culture, and the communities in the destinations where we travel. Our clients are invited to participate in selecting the supported project, and together we have raised hundreds of thousands of dollars to improve the world.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 text-center" style={{ backgroundColor: "#2f2f2f" }}>
        <p className="text-sm tracking-[0.2em] uppercase mb-4" style={{ color: "#bfaf8a", fontFamily: "'Playfair Display', Georgia, serif" }}>
          Your Story Starts Here
        </p>
        <h2 className="text-3xl md:text-4xl text-white mb-6 uppercase" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400, fontStyle: "normal", letterSpacing: "0.06em", lineHeight: 1.15 }}>
          Design Your Perfect Experience
        </h2>
        <p className="text-white/70 max-w-lg mx-auto mb-10 leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.05rem" }}>
          Tell us what moves you a landscape, a cuisine, a culture, a challenge and we will build an experience around it that exceeds every expectation.
        </p>
        <Link href="/contact">
          <button
            className="px-10 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-80"
            style={{ backgroundColor: "#bfaf8a", color: "#faf9f6", fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "0.15em" }}
          >
            Start the Conversation
          </button>
        </Link>
      </section>
    </div>
  );
}
