/**
 * privateJet.ts
 *
 * Content configuration for the BTA Private Jet Charters page.
 * All aircraft specifications sourced from the original travelbta.com/private-jet-charters/ page.
 */

export const jetHero = {
  eyebrow: "Private Aviation",
  heading: "Private Jet Charters",
  subheading:
    "Travel entirely on your terms. BTA partners with the world's most experienced and reputable private aviation brokers to deliver the best value, service, and amenities on every flight.",
  imageUrl:
    "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1600&q=85&auto=format&fit=crop",
};

export const jetIntro = {
  eyebrow: "The BTA Difference",
  heading: "Above and Beyond Commercial",
  body: "Sophisticated and discerning travelers grow weary of the logistical difficulties associated with commercial airlines. Private aviation removes every friction point — from departure to destination — and places the entire journey under your control. BTA's partnerships with the world's most reputable brokers ensure that every aircraft we source meets the highest standards of safety, comfort, and service.",
  stats: [
    { value: "24/7", label: "Concierge Support" },
    { value: "100%", label: "Safety Verified Operators" },
    { value: "Global", label: "Reach" },
  ],
  imageUrl:
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=85&auto=format&fit=crop",
};

export type JetCategory = {
  id: string;
  name: string;
  range: string;
  speed: string;
  passengers: string;
  description: string;
  highlight: string;
  imageUrl: string;
  models: string[];
};

export const jetCategories: JetCategory[] = [
  {
    id: "turboprop",
    name: "Turboprop",
    range: "Up to 1,500 nm",
    speed: "~300 knots / 345 mph",
    passengers: "Up to 9",
    description:
      "An economical introduction to private jet travel. Turboprops offer more cabin space than light jets and are ideal for short regional trips with a smaller group. The most cost-effective entry point into private aviation.",
    highlight: "Best for short regional hops and cost-conscious first-time flyers.",
    imageUrl:
      "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80&auto=format&fit=crop",
    models: ["Cessna 441 Conquest", "Jetstream 31", "Pilatus PC-12NG"],
  },
  {
    id: "light",
    name: "Light Jet",
    range: "1,500 – 2,000 nm",
    speed: "~400 knots / 460 mph",
    passengers: "Up to 8",
    description:
      "Convenience and efficiency in a compact airframe. Light jets are fast, fuel-efficient, and perfect for shorter trips — a weekend in the city, a mountain escape, or a coastal retreat. Smaller engines mean lower operating costs without sacrificing the private experience.",
    highlight: "Perfect for weekend getaways and short-to-mid-haul trips.",
    imageUrl:
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80&auto=format&fit=crop",
    models: ["Falcon 10", "Premier IA", "Nextant 400XTi", "Learjet 35A", "Learjet 70/75"],
  },
  {
    id: "midsize",
    name: "Midsize Jet",
    range: "2,500 – 3,000 nm",
    speed: "~450 knots / 515 mph",
    passengers: "Up to 12",
    description:
      "The ideal balance of range, cabin space, and cost. Midsize jets are more powerful than light jets and offer significantly more interior room — comfortable for cross-country travel and medium-distance international routes.",
    highlight: "The most versatile category for domestic and short international routes.",
    imageUrl:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80&auto=format&fit=crop",
    models: [
      "Gulfstream Astra",
      "Hawker 800A/850XP",
      "Learjet 60XR",
      "Citation III/VI/VII",
    ],
  },
  {
    id: "large",
    name: "Large / Heavy Jet",
    range: "3,000 – 6,000 nm",
    speed: "~500 knots / 570 mph",
    passengers: "Up to 15",
    description:
      "The pinnacle of private aviation. Large and heavy jets offer the most luxurious cabin amenities available — fully-equipped galleys, stand-up cabins, Wi-Fi, entertainment systems, and the range to reach virtually any destination nonstop.",
    highlight: "The definitive choice for long-haul travel and large groups.",
    imageUrl:
      "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&q=80&auto=format&fit=crop",
    models: [
      "Legacy 650",
      "Legacy 600",
      "Gulfstream G350",
      "Gulfstream G-IVSP",
      "Gulfstream G-IV",
    ],
  },
];

export const jetConsiderations = [
  {
    title: "Aircraft Size & Range",
    body: "Match the aircraft to your route. Short hops require different aircraft than transatlantic crossings — our advisors will recommend the right category for your specific itinerary.",
  },
  {
    title: "Budget & Transparency",
    body: "Private jet pricing varies significantly by operator and aircraft. BTA provides clear, accurate quotes with no hidden fees — so you know exactly what you are paying for.",
  },
  {
    title: "Special Requirements",
    body: "Dietary preferences, extra luggage, pets, medical equipment — every detail is managed in advance so your aircraft is ready exactly as you need it.",
  },
  {
    title: "Safety First",
    body: "BTA only works with operators who meet the highest safety standards. Critical safety checks are conducted on every aircraft before every single flight.",
  },
  {
    title: "FBO Access",
    body: "Fixed Base Operators (FBOs) provide private terminal facilities at your departure and arrival airports. BTA ensures FBO access is confirmed at every destination.",
  },
  {
    title: "Departure Flexibility",
    body: "Depart on your schedule — not the airline's. Private aviation means your wheels-up time is set by you, with the flexibility to adjust as your plans evolve.",
  },
];

export const jetHowToBook = {
  eyebrow: "The Process",
  heading: "How to Charter with BTA",
  steps: [
    {
      number: "01",
      title: "Discovery Call",
      body: "Every inquiry begins with a complimentary 15-minute discovery call. We learn your travel style, requirements, and preferences before recommending any aircraft.",
    },
    {
      number: "02",
      title: "Aircraft Selection",
      body: "Based on your route, group size, and preferences, our team identifies the best-matched aircraft from our network of verified operators.",
    },
    {
      number: "03",
      title: "Quote & Confirmation",
      body: "You receive a clear, accurate quote. Once confirmed, every detail — catering, ground transport, FBO access — is arranged on your behalf.",
    },
    {
      number: "04",
      title: "Wheels Up",
      body: "Arrive at the private terminal, board at your leisure, and depart on your schedule. BTA remains available throughout your journey.",
    },
  ],
  imageUrl:
    "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=1200&q=85&auto=format&fit=crop",
};

export const jetCta = {
  heading: "Your Journey Begins Here",
  body: "Schedule your complimentary 15-minute discovery call and let BTA design a private aviation experience built entirely around you.",
  buttonText: "Request a Charter Quote",
  buttonHref: "/book",
  phone: "(480) 787-1477",
  email: "info@travelbta.com",
  imageUrl:
    "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1600&q=85&auto=format&fit=crop",
};
