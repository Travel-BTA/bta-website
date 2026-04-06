/**
 * DestinationTimeline.tsx
 *
 * WHY: A reusable interactive timeline component used by the Family Travel page
 * to show how BTA curates the same destination differently for Young Children,
 * Teenagers, and Multigenerational groups. Each destination has its own data
 * object (DESTINATION_ITINERARIES) with 3 tabs × N stops.
 *
 * Typography rules (Janet's brand rules — enforced here):
 *   - Headings: 'Instrument Serif', ALWAYS UPPERCASE, NEVER italic
 *   - Eyebrows: 'Playfair Display', weight 500, italic, mixed case (NOT uppercase)
 *   - Body: system sans-serif, font-light
 *
 * Colors (official BTA palette only):
 *   #2f2f2f  charcoal
 *   #faf9f6  off-white
 *   #edeae4  warm grey
 *   #384959  steel blue
 *   #bfaf8a  gold
 */

import { useState } from "react";
import { Baby, Users, Compass, MapPin, Home } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// ── Type definitions ──────────────────────────────────────────────────────────
export interface ItineraryStop {
  day: string;         // e.g. "Nights 1–3"
  location: string;    // e.g. "Paris"
  image: string;       // URL
  headline: string;    // Instrument Serif heading
  experience: string;  // Body copy
  stay: string;        // Hotel name + collection
  highlight: string;   // Signature moment (one line)
}

export interface ItineraryTab {
  id: string;
  label: string;
  sub: string;
  Icon: React.ElementType;
  days: ItineraryStop[];
}

export interface DestinationItinerary {
  destination: string;       // e.g. "France"
  eyebrow: string;           // e.g. "One Destination, Three Journeys"
  heading: string;           // e.g. "10 Days in France, 3 Ways"
  subheading: string;
  country: string;           // used in location badge
  tabs: ItineraryTab[];
}

// ── Unsplash image helpers ────────────────────────────────────────────────────
// WHY: Destination-specific images sourced from Unsplash (royalty-free).
// Janet's uploaded CDN photos are used where available (passed in via data).
const IMG = {
  // France — Janet's photos (Apr 2026)
  paris:          "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/france-paris-mother-daughter_322ce512.jpg",
  loireValley:    "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/france-loire-castle_2925b151.jpg",
  cotedazur:      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/france-riviera-marina_173fd8c8.jpg",
  // Iceland — Janet's photos (Apr 2026)
  reykjavik:      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/iceland-aurora_f161272c.jpg",
  southCoast:     "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/iceland-family-waterfall_21263a3a.jpg",
  // Thailand
  // Bangkok temple photo — Janet's photo, Apr 2026
  bangkok:        "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/thailand-bangkok-temple_6cbc2371.jpg",
  // Anantara Elephant Camp jungle bubble photo — Janet's photo, Apr 2026
  chiangMai:      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/thailand-chiangmai-anantara-elephant_v2_1f0ef51c.jpg",
  kohSamui:       "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=900&q=80&auto=format&fit=crop",
  // Fiji — Janet's photos (Apr 2026)
  // coralCoast: manta ray snorkel shot — dramatic underwater perspective
  coralCoast:     "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/fiji-manta-snorkel_v2_0865395d.jpg",
  // privateIsland: Kokomo Private Island aerial beach — Janet's photo (Apr 2026)
  privateIsland:  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/fiji-kokomo-beach-aerial_1a9fef82.png",
  // Costa Rica — Janet's photos (Apr 2026)
  // arenal: sloth in Arenal rainforest — warm, iconic Costa Rica wildlife moment for families
  arenal:         "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/costa-rica-sloth-arenal_bc18c182.jpg",
  // guanacaste: family surfers on the Pacific coast — active, adventurous Guanacaste energy
  guanacaste:     "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/costa-rica-family-surf_1bc1f9fb.jpg",
  // Japan
  tokyo:          "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=900&q=80&auto=format&fit=crop",
  kyoto:          "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900&q=80&auto=format&fit=crop",
  hakone:         "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=900&q=80&auto=format&fit=crop",
  // South Africa
  // Cape Town — Janet's photo (Apr 2026): Table Mountain cable car aerial view
  capeTown:       "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/cape-town-table-mountain_c1e20bf1.webp",
  // Winelands — Janet's photo (Apr 2026): horse in the winelands
  winelands:      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/south-africa-winelands-horse_353be4d6.webp",
  // Safari — Janet's photo (Apr 2026): zebras in the bush
  safari:         "https://d2xsxph8kpxj0f.cloudfront.net/310419663028906848/A8bTz7Hz79QpvHBkB84nHJ/south-africa-safari-zebra_992b2149.jpg",
  // Hawaii
  maui:           "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80&auto=format&fit=crop",
  bigIsland:      "https://images.unsplash.com/photo-1542259009477-d625272157b7?w=900&q=80&auto=format&fit=crop",
};

// ── All 8 destination itinerary data sets ─────────────────────────────────────
export const DESTINATION_ITINERARIES: Record<string, DestinationItinerary> = {

  // ── FRANCE ─────────────────────────────────────────────────────────────────
  France: {
    destination: "France",
    eyebrow: "One Destination, Three Journeys",
    heading: "10 Days in France, 3 Ways",
    subheading: "Paris, the Loire Valley, and the Côte d'Azur — curated for every generation.",
    country: "France",
    tabs: [
      {
        id: "children", label: "Young Children", sub: "Ages 3–10", Icon: Baby,
        days: [
          {
            day: "Nights 1–4", location: "Paris", image: IMG.paris,
            headline: "Paris Through a Child's Eyes",
            experience: "Check in to Hôtel de Crillon on the Place de la Concorde. A private family guide leads a morning at the Eiffel Tower — climbing to the second level before the crowds arrive. Afternoon picnic on the Champ de Mars, then a private Seine river cruise at dusk with the tower lights coming on. Puppet shows at Jardin du Luxembourg and early dinners at brasseries with children's menus.",
            stay: "Hôtel de Crillon · Rosewood",
            highlight: "Private Seine river cruise at dusk — Eiffel Tower light show",
          },
          {
            day: "Nights 5–7", location: "Loire Valley", image: IMG.loireValley,
            headline: "Châteaux, Horses & Hidden Gardens",
            experience: "Transfer by private car to Château de la Bourdaisière in the Loire Valley. A château treasure hunt leads children through hidden gardens and turret staircases. Horse-drawn carriage rides between châteaux, a visit to the famous tomato garden, and a guided story tour of Amboise where Leonardo da Vinci spent his final years.",
            stay: "Château de la Bourdaisière",
            highlight: "Château treasure hunt through hidden gardens and turrets",
          },
          {
            day: "Nights 8–10", location: "Côte d'Azur", image: IMG.cotedazur,
            headline: "Riviera Sunshine & Private Beaches",
            experience: "Hôtel du Cap-Eden-Roc on the Cap d'Antibes peninsula — private beach club with a saltwater pool carved into the rock. Morning snorkeling in the crystal coves, a visit to the Matisse Museum in Nice, and a morning at the Antibes market for fresh flowers and local produce. Gentle evenings watching the sun set over the Mediterranean.",
            stay: "Hôtel du Cap-Eden-Roc · Virtuoso",
            highlight: "Private saltwater pool carved into the rock at Eden-Roc",
          },
        ],
      },
      {
        id: "teens", label: "Teenagers", sub: "Ages 11–17", Icon: Compass,
        days: [
          {
            day: "Nights 1–4", location: "Paris", image: IMG.paris,
            headline: "Street Culture, Art & the Seine at Night",
            experience: "Hôtel de Crillon as your Paris base. Evening climb of the Eiffel Tower followed by a private Seine river cruise — the city looks extraordinary from the water at night. Street art tour through Le Marais with a local guide who connects over photography and urban culture. A morning in the fashion district, a rooftop bar dinner, and a visit to the Palais Royal gardens.",
            stay: "Hôtel de Crillon · Rosewood",
            highlight: "Eiffel Tower evening climb + private Seine river cruise",
          },
          {
            day: "Nights 5–7", location: "Loire Valley", image: IMG.loireValley,
            headline: "Cycling, Caves & Château Life",
            experience: "Château de la Bourdaisière for three nights of château living. Cycling between châteaux on quiet country roads, a descent into the wine caves beneath Amboise, and an afternoon archery session on the château grounds. Evenings are long and slow — dinner in the château dining room, then stargazing from the tower.",
            stay: "Château de la Bourdaisière",
            highlight: "Cycling the Loire châteaux + wine cave exploration",
          },
          {
            day: "Nights 8–10", location: "Côte d'Azur", image: IMG.cotedazur,
            headline: "Sailing, Monaco & Cliff Diving",
            experience: "Hôtel du Cap-Eden-Roc for the Riviera finale. A sailing lesson off Cap d'Antibes, cliff diving at the famous Paraggi rocks, and a day trip to Monaco — the casino, the Formula 1 circuit, and the harbour. Final evening: sunset aperitivo on the Eden-Roc terrace before departure.",
            stay: "Hôtel du Cap-Eden-Roc · Virtuoso",
            highlight: "Cliff diving at Paraggi + Monaco day trip",
          },
        ],
      },
      {
        id: "multigen", label: "Multigenerational", sub: "All Ages Together", Icon: Users,
        days: [
          {
            day: "Nights 1–4", location: "Paris", image: IMG.paris,
            headline: "Grand Paris for Every Generation",
            experience: "Private fleet transfers the whole family to Hôtel de Crillon. A private Versailles after-hours tour — no crowds, personal guide for every generation. Private Seine river dinner cruise with champagne for the grandparents and sparkling juice for the children, watching the Eiffel Tower light show from the water. Mornings at leisure: the Louvre, the Tuileries, and long lunches in the Palais Royal arcades.",
            stay: "Hôtel de Crillon · Rosewood",
            highlight: "Private Versailles after-hours + Seine dinner cruise",
          },
          {
            day: "Nights 5–7", location: "Loire Valley", image: IMG.loireValley,
            headline: "Exclusive Château, Private Chef & Wine",
            experience: "Exclusive-use wing of Château de la Bourdaisière — space for every generation to breathe. A private cooking class with the château chef using produce from the garden. Wine tasting in the caves for the adults while children explore the grounds with a guide. Long family lunches under the lime trees.",
            stay: "Château de la Bourdaisière",
            highlight: "Exclusive-use château wing with private chef dinner",
          },
          {
            day: "Nights 8–10", location: "Côte d'Azur", image: IMG.cotedazur,
            headline: "Riviera Farewell on a Private Yacht",
            experience: "Hôtel du Cap-Eden-Roc for the final chapter. A private yacht charter for the whole family — swimming in hidden coves, a long seafood lunch on board, and a sunset toast as the Antibes harbour lights come on. The Picasso Museum in Antibes for the grandparents; the beach club for the children. Private transfers staggered to match each generation's departure.",
            stay: "Hôtel du Cap-Eden-Roc · Virtuoso",
            highlight: "Private yacht charter along the Côte d'Azur",
          },
        ],
      },
    ],
  },

  // ── ICELAND ────────────────────────────────────────────────────────────────
  Iceland: {
    destination: "Iceland",
    eyebrow: "One Destination, Three Journeys",
    heading: "7 Days in Iceland, 3 Ways",
    subheading: "Reykjavik and the South Coast — volcanoes, glaciers, and the Northern Lights.",
    country: "Iceland",
    tabs: [
      {
        id: "children", label: "Young Children", sub: "Ages 3–10", Icon: Baby,
        days: [
          {
            day: "Nights 1–3", location: "Reykjavik", image: IMG.reykjavik,
            headline: "Whales, Vikings & the Northern Lights",
            experience: "Hotel Rangá, a boutique lodge with outdoor hot tubs perfectly positioned for Northern Lights watching. A family whale watching boat from Reykjavik harbour — humpbacks are regularly spotted. The Viking World Museum brings Norse history to life for young children. Evenings in the heated outdoor tub watching for the aurora, hot chocolate in hand.",
            stay: "Hotel Rangá",
            highlight: "Northern Lights watch from heated outdoor tub",
          },
          {
            day: "Nights 4–7", location: "South Coast", image: IMG.southCoast,
            headline: "Glaciers, Puffins & the Blue Lagoon",
            experience: "ION Adventure Hotel, perched on a lava field with floor-to-ceiling views of the glacier. A family-safe glacier walk on Sólheimajökull with a certified guide — crampons fitted for every age. The black sand beach at Reynisfjara, a puffin colony visit, and a morning at the Blue Lagoon family soak with in-water face mask ritual. Waterfall walks at Seljalandsfoss and Skógafoss.",
            stay: "ION Adventure Hotel",
            highlight: "Blue Lagoon family soak + glacier walk",
          },
        ],
      },
      {
        id: "teens", label: "Teenagers", sub: "Ages 11–17", Icon: Compass,
        days: [
          {
            day: "Nights 1–3", location: "Reykjavik", image: IMG.reykjavik,
            headline: "Lava Caves, ATV & the Aurora",
            experience: "Hotel Rangá as your Northern Lights base. Lava cave spelunking in the Raufarhólshellir tunnel — one of Iceland's longest lava tubes. An ATV tour across the volcanic landscape, and a late-night geothermal pool swim under the stars. The Blue Lagoon visit includes the lava cave snorkeling add-on — an extraordinary experience beneath the surface.",
            stay: "Hotel Rangá",
            highlight: "Lava cave spelunking + Blue Lagoon night swim",
          },
          {
            day: "Nights 4–7", location: "South Coast", image: IMG.southCoast,
            headline: "Ice Caves, Super Jeeps & Waterfalls",
            experience: "ION Adventure Hotel on the lava field. A super jeep expedition across the Mýrdalsjökull glacier, followed by an ice cave exploration inside Vatnajökull — the largest glacier in Europe. Cliff jumping at the Skógafoss waterfall base pool. The Jökulsárlón glacier lagoon boat tour among floating icebergs at sunset.",
            stay: "ION Adventure Hotel",
            highlight: "Ice cave exploration inside Vatnajökull glacier",
          },
        ],
      },
      {
        id: "multigen", label: "Multigenerational", sub: "All Ages Together", Icon: Users,
        days: [
          {
            day: "Nights 1–3", location: "Reykjavik", image: IMG.reykjavik,
            headline: "Private Geology, Whales & the Aurora",
            experience: "Hotel Rangá for Northern Lights watching. A private geologist guide leads the family through the Golden Circle — Þingvellir, Geysir, and Gullfoss — with explanations tailored to every age. Private whale watching charter from the old harbour. The Blue Lagoon Retreat experience for the whole group: private lagoon access, in-water massage, and the exclusive Retreat Lounge.",
            stay: "Hotel Rangá",
            highlight: "Blue Lagoon Retreat — private lagoon + in-water massage",
          },
          {
            day: "Nights 4–7", location: "South Coast", image: IMG.southCoast,
            headline: "Helicopter, Glacier & Icebergs",
            experience: "ION Adventure Hotel with its extraordinary lava field setting. A helicopter flight over Vatnajökull glacier for the whole family — the scale of the ice cap is incomprehensible from the air. Private glacier guide for the walk, accessible routes available for all mobility levels. The Jökulsárlón glacier lagoon at sunset, then a long dinner at the hotel watching the aurora from the dining room.",
            stay: "ION Adventure Hotel",
            highlight: "Helicopter over Vatnajökull + private glacier guide",
          },
        ],
      },
    ],
  },

  // ── THAILAND ───────────────────────────────────────────────────────────────
  Thailand: {
    destination: "Thailand",
    eyebrow: "One Destination, Three Journeys",
    heading: "10 Days in Thailand, 3 Ways",
    subheading: "Bangkok, Chiang Mai, and Koh Samui — temples, elephants, and island beaches.",
    country: "Thailand",
    tabs: [
      {
        id: "children", label: "Young Children", sub: "Ages 3–10", Icon: Baby,
        days: [
          {
            day: "Nights 1–3", location: "Bangkok", image: IMG.bangkok,
            headline: "Temples, Boats & Thai Cooking",
            experience: "Mandarin Oriental Bangkok — one of the world's great hotels, with a dedicated family concierge. A private longtail boat tour through the temple canals, stopping at Wat Arun at sunrise before the crowds. A Thai cooking class designed for young children: making pad thai and mango sticky rice. Evening river market cruise with street food and lanterns.",
            stay: "Mandarin Oriental Bangkok · Virtuoso",
            highlight: "Private longtail boat through the temple canals",
          },
          {
            day: "Nights 4–6", location: "Chiang Mai", image: IMG.chiangMai,
            headline: "Elephants, Lanterns & Hill Tribes",
            experience: "Rosewood Chiang Mai in the old city. A half-day at an ethical elephant sanctuary — feeding, bathing, and walking with rescued elephants. An evening at the Yi Peng lantern festival (seasonal) or a private lantern release ceremony. A hill tribe village visit with a local guide who explains the culture and crafts to young children.",
            stay: "Anantara Elephant Camp · Virtuoso",
            highlight: "Elephant sanctuary — feeding and bathing rescued elephants",
          },
          {
            day: "Nights 7–10", location: "Koh Samui", image: IMG.kohSamui,
            headline: "Private Beach Villa & Island Days",
            experience: "Four Seasons Koh Samui — private pool villas perched above the Gulf of Thailand. Snorkeling in the protected bay, a Thai cooking class for children on the beach, and a longtail boat to the Ang Thong Marine Park. Evenings are slow: dinner on the villa terrace watching the sun set over the islands.",
            stay: "Four Seasons Koh Samui · Virtuoso",
            highlight: "Private pool villa + Ang Thong Marine Park by longtail",
          },
        ],
      },
      {
        id: "teens", label: "Teenagers", sub: "Ages 11–17", Icon: Compass,
        days: [
          {
            day: "Nights 1–3", location: "Bangkok", image: IMG.bangkok,
            headline: "Street Food, Rooftops & the River",
            experience: "Mandarin Oriental Bangkok. A street food tour through the Chinatown night market with a local guide who connects over food culture and photography. Muay Thai lesson at a traditional gym. Rooftop bar dinner at sunset over the city skyline. A private longtail boat at dawn to photograph the temples before the tour groups arrive.",
            stay: "Mandarin Oriental Bangkok · Virtuoso",
            highlight: "Muay Thai lesson + Chinatown night market food tour",
          },
          {
            day: "Nights 4–6", location: "Chiang Mai", image: IMG.chiangMai,
            headline: "Full-Day Elephant Sanctuary & Zip-Line",
            experience: "Rosewood Chiang Mai. A full-day at the elephant sanctuary — no riding, just genuine interaction with rescued elephants and their mahouts. Afternoon zip-line through the jungle canopy above Chiang Mai. Evening at the Sunday Walking Street night market, browsing handmade crafts and local food stalls.",
            stay: "Anantara Elephant Camp · Virtuoso",
            highlight: "Full-day elephant sanctuary + jungle zip-line",
          },
          {
            day: "Nights 7–10", location: "Koh Samui", image: IMG.kohSamui,
            headline: "Scuba, Kayaking & Island Life",
            experience: "Four Seasons Koh Samui. PADI Open Water scuba certification over two days — the house reef is an excellent training ground. Sea kayaking through the limestone caves of Ang Thong. A sunset sailing trip around the island, and an evening at the Fisherman's Village night market in Bophut.",
            stay: "Four Seasons Koh Samui · Virtuoso",
            highlight: "PADI scuba certification on the house reef",
          },
        ],
      },
      {
        id: "multigen", label: "Multigenerational", sub: "All Ages Together", Icon: Users,
        days: [
          {
            day: "Nights 1–3", location: "Bangkok", image: IMG.bangkok,
            headline: "Grand Palace, Private Boat & Chef's Table",
            experience: "Mandarin Oriental Bangkok — the original Oriental Suite for the grandparents, connecting rooms for the family. Grand Palace private after-hours tour with a historian guide. Private longtail boat along the Chao Phraya at sunset. Chef's table dinner at the hotel's Michelin-starred restaurant, with a children's menu prepared separately.",
            stay: "Mandarin Oriental Bangkok · Virtuoso",
            highlight: "Grand Palace after-hours + chef's table dinner",
          },
          {
            day: "Nights 4–6", location: "Chiang Mai", image: IMG.chiangMai,
            headline: "Elephant Sanctuary & Private Monk Blessing",
            experience: "Rosewood Chiang Mai. The elephant sanctuary experience for the whole family — accessible for grandparents, thrilling for children. A private monk blessing ceremony at a hilltop temple at dawn — a deeply meaningful experience for all generations. Cooking class with a local family, learning northern Thai recipes passed down through generations.",
            stay: "Anantara Elephant Camp · Virtuoso",
            highlight: "Private monk blessing ceremony at dawn",
          },
          {
            day: "Nights 7–10", location: "Koh Samui", image: IMG.kohSamui,
            headline: "Private Villa, Yacht Charter & Spa",
            experience: "Four Seasons Koh Samui — a private villa compound for the whole family. A private yacht charter to the Ang Thong Marine Park: swimming, snorkeling, and a long seafood lunch on board. Beachside spa day for the grandparents while the children snorkel in the bay. Final evening: a traditional Thai dinner on the beach with a private musician.",
            stay: "Four Seasons Koh Samui · Virtuoso",
            highlight: "Private yacht charter to Ang Thong Marine Park",
          },
        ],
      },
    ],
  },

  // ── FIJI ───────────────────────────────────────────────────────────────────
  Fiji: {
    destination: "Fiji",
    eyebrow: "One Destination, Three Journeys",
    heading: "7 Days in Fiji, 3 Ways",
    subheading: "The Coral Coast and a private island — reefs, villages, and pure Pacific warmth.",
    country: "Fiji",
    tabs: [
      {
        id: "children", label: "Young Children", sub: "Ages 3–10", Icon: Baby,
        days: [
          {
            day: "Nights 1–3", location: "Coral Coast", image: IMG.coralCoast,
            headline: "Village Life, Turtles & Glass-Bottom Boats",
            experience: "InterContinental Fiji Golf Resort & Spa — a family-friendly resort on the Coral Coast with a dedicated kids' bure. A glass-bottom boat tour over the reef, a visit to the turtle sanctuary, and an afternoon in a traditional Fijian village where children are welcomed with singing and dancing. Evenings at the resort pool watching the sun set over the Pacific.",
            stay: "InterContinental Fiji · Virtuoso",
            highlight: "Turtle sanctuary visit + traditional village welcome",
          },
          {
            day: "Nights 4–7", location: "Private Island", image: IMG.privateIsland,
            headline: "Private Island — Horses, Reef & Starlight",
            experience: "Kokomo Private Island — a 140-acre private island on the Great Astrolabe Reef, one of the world's largest barrier reefs. A private beach for the family, horse riding along the shoreline at sunrise, and snorkeling in the protected lagoon with a marine biologist guide. Evenings are extraordinary: dinner on the beach under a sky with no light pollution.",
            stay: "Kokomo Private Island · Virtuoso",
            highlight: "Horse riding on the beach at sunrise",
          },
        ],
      },
      {
        id: "teens", label: "Teenagers", sub: "Ages 11–17", Icon: Compass,
        days: [
          {
            day: "Nights 1–3", location: "Coral Coast", image: IMG.coralCoast,
            headline: "Surfing, Kava & Reef Snorkeling",
            experience: "InterContinental Fiji. Surfing lessons at Natadola Beach — one of Fiji's best surf breaks. A traditional kava ceremony in a local village, followed by a reef snorkeling tour with a local guide. Evening bonfire on the beach with the resort's cultural team sharing Fijian stories and music.",
            stay: "InterContinental Fiji · Virtuoso",
            highlight: "Surfing at Natadola + traditional kava ceremony",
          },
          {
            day: "Nights 4–7", location: "Private Island", image: IMG.privateIsland,
            headline: "Scuba, Deep-Sea Fishing & Cliff Jumping",
            experience: "Kokomo Private Island. PADI scuba diving on the Great Astrolabe Reef — one of the most pristine in the Pacific. Deep-sea fishing with the island's captain, targeting mahi-mahi and wahoo. Cliff jumping from the island's rocky headland into the turquoise lagoon. A private beach bonfire dinner on the final night.",
            stay: "Kokomo Private Island · Virtuoso",
            highlight: "Scuba diving on the Great Astrolabe Reef",
          },
        ],
      },
      {
        id: "multigen", label: "Multigenerational", sub: "All Ages Together", Icon: Users,
        days: [
          {
            day: "Nights 1–3", location: "Coral Coast", image: IMG.coralCoast,
            headline: "Cultural Immersion & Sunset Cruise",
            experience: "InterContinental Fiji — a private bure compound for the whole family. A private village cultural tour with a local guide — the warmth of Fijian hospitality is genuinely moving for all generations. Sunset cruise along the coast with cocktails for the adults and fresh coconut for the children. A private cooking class learning traditional Fijian recipes.",
            stay: "InterContinental Fiji · Virtuoso",
            highlight: "Private village cultural tour + sunset cruise",
          },
          {
            day: "Nights 4–7", location: "Private Island", image: IMG.privateIsland,
            headline: "Yacht Charter, Spa & Traditional Feast",
            experience: "Kokomo Private Island for the whole family. A private yacht charter around the island — swimming in hidden coves, snorkeling the outer reef, and a long lunch on board. Spa day for the grandparents at the island's award-winning spa while the children explore the lagoon with a marine biologist. Final evening: a traditional Fijian lovo feast on the beach.",
            stay: "Kokomo Private Island · Virtuoso",
            highlight: "Private yacht charter + traditional lovo feast on the beach",
          },
        ],
      },
    ],
  },

  // ── COSTA RICA ─────────────────────────────────────────────────────────────
  "Costa Rica": {
    destination: "Costa Rica",
    eyebrow: "One Destination, Three Journeys",
    heading: "7 Days in Costa Rica, 3 Ways",
    subheading: "Arenal and Guanacaste — volcanoes, wildlife, and Pacific beaches.",
    country: "Costa Rica",
    tabs: [
      {
        id: "children", label: "Young Children", sub: "Ages 3–10", Icon: Baby,
        days: [
          {
            day: "Nights 1–3", location: "Arenal", image: IMG.arenal,
            headline: "Hot Springs, Sloths & the Volcano",
            experience: "Nayara Tented Camp — private tented suites with plunge pools and volcano views. A private hot springs soak in the evening, a sloth sanctuary visit in the morning, and a family-friendly hanging bridges walk through the cloud forest with a naturalist guide who makes every bird and insect fascinating for young children.",
            stay: "Nayara Tented Camp",
            highlight: "Sloth sanctuary + hanging bridges with naturalist guide",
          },
          {
            day: "Nights 4–7", location: "Guanacaste", image: IMG.guanacaste,
            headline: "Pacific Beach, Monkeys & Tide Pools",
            experience: "Andaz Costa Rica Resort at Peninsula Papagayo — a stunning Pacific resort with a private beach and multiple pools. Monkey watching on the beach at sunrise, kayaking in the calm bay, and a guided tide pool exploration with the resort's naturalist. Evenings at the beach club watching the Pacific sunset.",
            stay: "Andaz Costa Rica Resort at Peninsula Papagayo",
            highlight: "Monkey watching on the beach at sunrise",
          },
        ],
      },
      {
        id: "teens", label: "Teenagers", sub: "Ages 11–17", Icon: Compass,
        days: [
          {
            day: "Nights 1–3", location: "Arenal", image: IMG.arenal,
            headline: "White-Water Rafting & Night Jungle Walk",
            experience: "Nayara Tented Camp. White-water rafting on the Balsa River — Class III–IV rapids through the rainforest. A night jungle walk with a biologist guide: tree frogs, tarantulas, and the sounds of the forest after dark. Lava field hike to the base of Arenal Volcano with a geology guide.",
            stay: "Nayara Tented Camp",
            highlight: "White-water rafting on the Balsa River",
          },
          {
            day: "Nights 4–7", location: "Guanacaste", image: IMG.guanacaste,
            headline: "Surfing, Sport Fishing & Jungle Waterfall",
            experience: "Andaz Costa Rica at Peninsula Papagayo. Surfing lessons at Playa Grande — one of Costa Rica's best surf breaks. Sport fishing in the Pacific for mahi-mahi and roosterfish. A jungle hike to a hidden waterfall accessible only on foot, with a swim in the natural pool at the base.",
            stay: "Andaz Costa Rica Resort at Peninsula Papagayo",
            highlight: "Surfing at Playa Grande + hidden waterfall hike",
          },
        ],
      },
      {
        id: "multigen", label: "Multigenerational", sub: "All Ages Together", Icon: Users,
        days: [
          {
            day: "Nights 1–3", location: "Arenal", image: IMG.arenal,
            headline: "Private Naturalist, Hot Springs & Volcano",
            experience: "Nayara Tented Camp — private tented suites for every generation. A private naturalist guide leads the family through the cloud forest, with separate explanations for grandparents and children. Evening hot springs soak with volcano views — one of the most extraordinary natural settings in the world. Volcano view dinner on the private deck.",
            stay: "Nayara Tented Camp",
            highlight: "Private naturalist guide + volcano view hot springs",
          },
          {
            day: "Nights 4–7", location: "Guanacaste", image: IMG.guanacaste,
            headline: "Private Beach, Whale Watching & Sunset Sailing",
            experience: "Andaz Costa Rica at Peninsula Papagayo. A private beach day for the whole family — the resort's beach club is exceptional. Whale watching boat (seasonal: humpbacks from July–October) with a marine biologist on board. Sunset sailing trip along the Papagayo Peninsula coast. Final evening: a private beach dinner under the stars.",
            stay: "Andaz Costa Rica Resort at Peninsula Papagayo",
            highlight: "Whale watching + private beach dinner under the stars",
          },
        ],
      },
    ],
  },

  // ── JAPAN ──────────────────────────────────────────────────────────────────
  Japan: {
    destination: "Japan",
    eyebrow: "One Destination, Three Journeys",
    heading: "10 Days in Japan, 3 Ways",
    subheading: "Tokyo, Kyoto, and Hakone — ancient temples, modern cities, and Mt. Fuji.",
    country: "Japan",
    tabs: [
      {
        id: "children", label: "Young Children", sub: "Ages 3–10", Icon: Baby,
        days: [
          {
            day: "Nights 1–3", location: "Tokyo", image: IMG.tokyo,
            headline: "TeamLab, Harajuku & the Imperial Gardens",
            experience: "The Peninsula Tokyo — impeccable service and a perfect central location. TeamLab Borderless digital art museum is extraordinary for young children — an immersive world of light and movement. A morning in Harajuku for crepe-eating and people-watching, and an afternoon picnic in Shinjuku Gyoen, Tokyo's most beautiful garden.",
            stay: "The Peninsula Tokyo",
            highlight: "TeamLab Borderless — immersive digital art for children",
          },
          {
            day: "Nights 4–7", location: "Kyoto", image: IMG.kyoto,
            headline: "Tea Ceremony, Bamboo Grove & Deer Park",
            experience: "Mitsui Garden Hotel Kyoto Shijo in the heart of the old city. A private maiko tea ceremony — mother and daughter in kimono, learning the ritual from a maiko apprentice. A bamboo grove rickshaw ride at dawn before the crowds. A day trip to Nara to feed the sacred deer in the park.",
            stay: "Mitsui Garden Hotel Kyoto Shijo",
            highlight: "Private maiko tea ceremony in kimono",
          },
          {
            day: "Nights 8–10", location: "Hakone", image: IMG.hakone,
            headline: "Mt. Fuji Views & Open-Air Museum",
            experience: "Gora Kadan ryokan — a traditional Japanese inn with private onsen baths and Mt. Fuji views. The Hakone Open-Air Museum is exceptional for children: outdoor sculptures, a Picasso pavilion, and a foot bath. The Hakone ropeway over the volcanic Owakudani valley, and a boat across Lake Ashi with Fuji reflected in the water.",
            stay: "Gora Kadan",
            highlight: "Hakone Open-Air Museum + Mt. Fuji view from Lake Ashi",
          },
        ],
      },
      {
        id: "teens", label: "Teenagers", sub: "Ages 11–17", Icon: Compass,
        days: [
          {
            day: "Nights 1–3", location: "Tokyo", image: IMG.tokyo,
            headline: "Akihabara, Ramen & Shibuya at Night",
            experience: "The Peninsula Tokyo. Akihabara electronics and gaming district with a local guide who speaks the language of tech culture. A ramen-making class in a traditional ramen school. Shibuya crossing at night — the world's busiest pedestrian crossing is extraordinary after dark. Rooftop bar dinner with the Tokyo skyline.",
            stay: "The Peninsula Tokyo",
            highlight: "Shibuya crossing at night + ramen-making class",
          },
          {
            day: "Nights 4–7", location: "Kyoto", image: IMG.kyoto,
            headline: "Ninja Experience, Sake & the Philosopher's Path",
            experience: "Mitsui Garden Hotel Kyoto Shijo. A ninja experience at a traditional dojo — throwing stars, sword techniques, and stealth training. A sake brewery tour in Fushimi, one of Japan's most famous sake-producing districts. Cycling the Philosopher's Path in the early morning, stopping at small temples and coffee shops along the canal.",
            stay: "Mitsui Garden Hotel Kyoto Shijo",
            highlight: "Ninja experience at a traditional Kyoto dojo",
          },
          {
            day: "Nights 8–10", location: "Hakone", image: IMG.hakone,
            headline: "Fuji Hike, Kayaking & Private Onsen",
            experience: "Gora Kadan ryokan. A hike to the Fuji 5th Station — the highest point accessible without full mountaineering equipment, with extraordinary views. Kayaking on Lake Ashi with Fuji in the background. Private onsen bath in the ryokan room, and a kaiseki dinner served course by course in the traditional manner.",
            stay: "Gora Kadan",
            highlight: "Mt. Fuji 5th Station hike + private onsen",
          },
        ],
      },
      {
        id: "multigen", label: "Multigenerational", sub: "All Ages Together", Icon: Users,
        days: [
          {
            day: "Nights 1–3", location: "Tokyo", image: IMG.tokyo,
            headline: "Private Sushi Chef, Tsukiji & the Gardens",
            experience: "The Peninsula Tokyo — suites for the grandparents, connecting rooms for the family. A private omakase dinner with a sushi master — the chef explains each piece to every generation. Tsukiji outer market at dawn with a guide: tasting, shopping, and breakfast at the market. The Imperial Palace East Gardens for a slow morning walk.",
            stay: "The Peninsula Tokyo",
            highlight: "Private omakase dinner with a sushi master",
          },
          {
            day: "Nights 4–7", location: "Kyoto", image: IMG.kyoto,
            headline: "Private Geisha Dinner, Fushimi Inari & Nishiki",
            experience: "Mitsui Garden Hotel Kyoto Shijo. A private geisha dinner in a traditional ochaya teahouse — one of the most exclusive experiences in Japan, arranged through BTA's connections. Fushimi Inari shrine at dawn — 10,000 torii gates with no crowds. The Nishiki Market food tour for all generations: pickles, tofu, wagashi sweets.",
            stay: "Mitsui Garden Hotel Kyoto Shijo",
            highlight: "Private geisha dinner in a traditional ochaya teahouse",
          },
          {
            day: "Nights 8–10", location: "Hakone", image: IMG.hakone,
            headline: "Private Ryokan, Kaiseki & Mt. Fuji Photography",
            experience: "Gora Kadan — the whole family in a traditional ryokan. A private Fuji photography guide at Lake Kawaguchiko at dawn — the reflection of Fuji in the lake is one of the world's great images. Kaiseki dinner for all generations: the chef explains each course. Private onsen villas for the grandparents; outdoor baths for the family.",
            stay: "Gora Kadan",
            highlight: "Private Mt. Fuji photography guide at dawn",
          },
        ],
      },
    ],
  },

  // ── SOUTH AFRICA ───────────────────────────────────────────────────────────
  "South Africa": {
    destination: "South Africa",
    eyebrow: "One Destination, Three Journeys",
    heading: "10 Days in South Africa, 3 Ways",
    subheading: "Cape Town, the Winelands, and a private safari — the ultimate African family journey.",
    country: "South Africa",
    tabs: [
      {
        id: "children", label: "Young Children", sub: "Ages 3–10", Icon: Baby,
        days: [
          {
            day: "Nights 1–3", location: "Cape Town", image: IMG.capeTown,
            headline: "Penguins, Cape Point & the Aquarium",
            experience: "One&Only Cape Town — a stunning resort on the V&A Waterfront with Table Mountain views. Boulders Beach penguin colony — children can walk among the African penguins on the boardwalk. Cape Point National Park for the dramatic cliffs and lighthouse. The Two Oceans Aquarium on the Waterfront, with a touch pool that children love.",
            stay: "One&Only Cape Town",
            highlight: "Boulders Beach penguin colony walk",
          },
          {
            day: "Nights 4–6", location: "Winelands", image: IMG.winelands,
            headline: "Grape Stomping, Horses & Farm Animals",
            experience: "La Residence in Franschhoek — one of the most beautiful boutique hotels in Africa. Grape stomping in the harvest season, horse riding through the vineyards on gentle family-safe horses, and a visit to a working farm where children can meet the animals. A family picnic under the oak trees with a cheese and charcuterie spread.",
            stay: "La Residence · SLH",
            highlight: "Grape stomping + horse riding through the vineyards",
          },
          {
            day: "Nights 7–10", location: "Safari", image: IMG.safari,
            headline: "Junior Rangers, Game Drives & Bush Walks",
            experience: "Singita Sabi Sand — one of the finest private game reserves in Africa. Family-safe game drives in an open vehicle with a dedicated ranger and tracker. The junior ranger program teaches children about tracking, animal behavior, and conservation. A guided bush walk to look for smaller creatures — insects, birds, and tracks in the sand.",
            stay: "Singita Sabi Sand",
            highlight: "Junior ranger program + family game drive",
          },
        ],
      },
      {
        id: "teens", label: "Teenagers", sub: "Ages 11–17", Icon: Compass,
        days: [
          {
            day: "Nights 1–3", location: "Cape Town", image: IMG.capeTown,
            headline: "Table Mountain, Shark Cage & Robben Island",
            experience: "One&Only Cape Town. Table Mountain hike via the Platteklip Gorge trail — a challenging but achievable climb with extraordinary views. Shark cage diving at Gansbaai (minimum age 12) — one of the most adrenaline-charged experiences in the world. Robben Island tour: the history of Nelson Mandela's imprisonment is deeply moving for teenagers.",
            stay: "One&Only Cape Town",
            highlight: "Shark cage diving at Gansbaai",
          },
          {
            day: "Nights 4–6", location: "Winelands", image: IMG.winelands,
            headline: "Cycling the Wine Route & Helicopter Views",
            experience: "La Residence in Franschhoek. Cycling the Franschhoek wine route between estates — the valley is extraordinarily beautiful on a bicycle. A helicopter flight over the Cape Winelands and Cape Peninsula — the coastline from the air is unforgettable. A cooking class with a local chef learning Cape Malay cuisine.",
            stay: "La Residence · SLH",
            highlight: "Helicopter over the Cape Winelands",
          },
          {
            day: "Nights 7–10", location: "Safari", image: IMG.safari,
            headline: "Night Drives, Tracking & Photography",
            experience: "Singita Sabi Sand. Night game drives — leopards and lions are most active after dark. A tracking session with the ranger and tracker: learning to read animal signs in the sand. A photography workshop with a wildlife photographer — teenagers leave with extraordinary images. A bush dinner under the stars on the final night.",
            stay: "Singita Sabi Sand",
            highlight: "Night game drive + wildlife photography workshop",
          },
        ],
      },
      {
        id: "multigen", label: "Multigenerational", sub: "All Ages Together", Icon: Users,
        days: [
          {
            day: "Nights 1–3", location: "Cape Town", image: IMG.capeTown,
            headline: "Private Wine Tasting, Sunset Cruise & Art",
            experience: "One&Only Cape Town — suites for the grandparents, family rooms for the rest. A private wine tasting with a sommelier at the hotel. Sunset cruise around the Cape Peninsula with champagne on deck. The Zeitz MOCAA contemporary African art museum — one of the most important art institutions on the continent.",
            stay: "One&Only Cape Town",
            highlight: "Sunset cruise around the Cape Peninsula",
          },
          {
            day: "Nights 4–6", location: "Winelands", image: IMG.winelands,
            headline: "Exclusive Estate Dinner & Hot Air Balloon",
            experience: "La Residence in Franschhoek. A hot air balloon flight over the Winelands at dawn — the valley in the early morning light is extraordinary. A private cellar tour and tasting at one of Franschhoek's most acclaimed estates. An exclusive estate dinner in the wine cellar, with a sommelier pairing each course.",
            stay: "La Residence · SLH",
            highlight: "Hot air balloon over the Winelands at dawn",
          },
          {
            day: "Nights 7–10", location: "Safari", image: IMG.safari,
            headline: "Private Vehicle, Bush Dinner & Spa",
            experience: "Singita Sabi Sand — a private vehicle and dedicated ranger for the whole family. Game drives tailored to the pace and interests of every generation. A bush dinner under the stars: a table set in the wilderness, lanterns, and a three-course meal with the sounds of the African night. Spa treatments for the grandparents while the children do their junior ranger session.",
            stay: "Singita Sabi Sand",
            highlight: "Private vehicle game drives + bush dinner under the stars",
          },
        ],
      },
    ],
  },

  // ── HAWAII ─────────────────────────────────────────────────────────────────
  Hawaii: {
    destination: "Hawaii",
    eyebrow: "One Destination, Three Journeys",
    heading: "7 Days in Hawaii, 3 Ways",
    subheading: "Maui and the Big Island — beaches, volcanoes, and manta rays.",
    country: "Hawaii",
    tabs: [
      {
        id: "children", label: "Young Children", sub: "Ages 3–10", Icon: Baby,
        days: [
          {
            day: "Nights 1–4", location: "Maui", image: IMG.maui,
            headline: "Snorkeling, Whales & the Road to Hana",
            experience: "Four Seasons Maui at Wailea — one of the finest family resorts in Hawaii, with a dedicated kids' program and multiple pools. A snorkeling trip to Molokini Crater — the protected waters are perfect for young children. Whale watching from a catamaran (seasonal: December–April). A gentle section of the Road to Hana with waterfall swimming stops.",
            stay: "Four Seasons Maui at Wailea · Virtuoso",
            highlight: "Molokini Crater snorkeling + whale watching",
          },
          {
            day: "Nights 5–7", location: "Big Island", image: IMG.bigIsland,
            headline: "Manta Rays, Lava Tubes & Tide Pools",
            experience: "Four Seasons Hualalai — a stunning resort on the Kohala Coast with a private beach and lava tide pools. A manta ray snorkel at night — the mantas feed on plankton in the lights and come within inches of snorkelers. A lava tube walk at Hawaii Volcanoes National Park. Tide pool exploration with the resort's marine naturalist.",
            stay: "Four Seasons Hualalai · Virtuoso",
            highlight: "Manta ray night snorkel — mantas within inches",
          },
        ],
      },
      {
        id: "teens", label: "Teenagers", sub: "Ages 11–17", Icon: Compass,
        days: [
          {
            day: "Nights 1–4", location: "Maui", image: IMG.maui,
            headline: "Road to Hana, Surfing & Sunset Sailing",
            experience: "Four Seasons Maui at Wailea. The full Road to Hana experience — 64 miles of waterfalls, bamboo forests, and black sand beaches. Surfing lessons at Lahaina with a local instructor. A sunset sailing trip along the Maui coastline, with snorkeling at a sea turtle cleaning station.",
            stay: "Four Seasons Maui at Wailea · Virtuoso",
            highlight: "Road to Hana + surfing at Lahaina",
          },
          {
            day: "Nights 5–7", location: "Big Island", image: IMG.bigIsland,
            headline: "Volcano Night Hike, Cliff Jumping & Stargazing",
            experience: "Four Seasons Hualalai. A night hike at Hawaii Volcanoes National Park — lava glowing in the dark is one of the most extraordinary sights on earth. Cliff jumping at South Point, the southernmost tip of the United States. Stargazing at Mauna Kea summit — the clearest skies in the Northern Hemisphere.",
            stay: "Four Seasons Hualalai · Virtuoso",
            highlight: "Lava glow night hike + Mauna Kea stargazing",
          },
        ],
      },
      {
        id: "multigen", label: "Multigenerational", sub: "All Ages Together", Icon: Users,
        days: [
          {
            day: "Nights 1–4", location: "Maui", image: IMG.maui,
            headline: "Private Snorkel Charter, Luau & Haleakalā",
            experience: "Four Seasons Maui at Wailea — connecting suites for the whole family. A private snorkel charter to Molokini and Turtle Town — the boat is yours, the pace is yours. A helicopter flight over Haleakalā crater at sunrise — the scale of the dormant volcano is humbling. A traditional Hawaiian luau on the final evening.",
            stay: "Four Seasons Maui at Wailea · Virtuoso",
            highlight: "Private snorkel charter + helicopter over Haleakalā",
          },
          {
            day: "Nights 5–7", location: "Big Island", image: IMG.bigIsland,
            headline: "Private Lava Tour, Manta Rays & Cultural Ceremony",
            experience: "Four Seasons Hualalai. A private lava flow tour with a volcanologist — the geology of the Big Island explained for every generation. Manta ray night snorkel for the whole family — accessible for all ages and mobility levels. A traditional Hawaiian lei ceremony and cultural blessing on the final morning before departure.",
            stay: "Four Seasons Hualalai · Virtuoso",
            highlight: "Private lava flow tour with a volcanologist",
          },
        ],
      },
    ],
  },

};

// ── DestinationTimeline component ─────────────────────────────────────────────
// WHY: Shared component used for all 8 destination modals. Accepts a
// DestinationItinerary data object and renders the same interactive
// tab + day-selector + detail-panel layout as the Italy timeline.
function DestinationTimelineInner({ data }: { data: DestinationItinerary }) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeDay, setActiveDay] = useState(0);
  const tab = data.tabs[activeTab];
  const day = tab.days[activeDay];

  const FONT_HEADING = "'Instrument Serif', 'Georgia', serif";
  const FONT_EYEBROW = "'Playfair Display', 'Georgia', serif";

  return (
    <div className="bg-[#384959] overflow-hidden w-full">
      <div className="px-6 md:px-12 lg:px-16 py-12 md:py-16 max-w-[1200px] mx-auto">

        {/* Section header */}
        <div className="text-center mb-10">
          <p
            className="text-[#bfaf8a] text-sm mb-3"
            style={{ fontFamily: FONT_EYEBROW, fontWeight: 500, fontStyle: "italic" }}
          >
            {data.eyebrow}
          </p>
          <h2
            className="text-white text-3xl md:text-4xl font-light uppercase mb-3"
            style={{ fontFamily: FONT_HEADING, fontStyle: "normal" }}
          >
            {data.heading}
          </h2>
          <p className="text-white/50 text-sm font-light max-w-lg mx-auto">
            {data.subheading}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex border border-white/20 divide-x divide-white/20">
            {data.tabs.map((t, i) => {
              const TabIcon = t.Icon;
              return (
                <button
                  key={t.id}
                  onClick={() => { setActiveTab(i); setActiveDay(0); }}
                  className={`flex items-center gap-2 px-5 py-3.5 text-xs transition-all duration-300 ${
                    activeTab === i
                      ? "bg-[#bfaf8a] text-[#384959]"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <TabIcon size={13} />
                  <span
                    className="hidden sm:inline uppercase tracking-widest"
                    style={{ fontFamily: FONT_HEADING }}
                  >
                    {t.label}
                  </span>
                  <span
                    className="sm:hidden uppercase tracking-widest"
                    style={{ fontFamily: FONT_HEADING }}
                  >
                    {t.label.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main content: day selector + detail panel */}
        <div className="grid lg:grid-cols-[240px_1fr] gap-6 items-start">

          {/* Day selector */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {tab.days.map((d, i) => (
              <button
                key={i}
                onClick={() => setActiveDay(i)}
                className={`flex-shrink-0 text-left border transition-all duration-300 ${
                  activeDay === i
                    ? "border-[#bfaf8a] bg-[#bfaf8a]/10"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <div className="px-4 py-3.5">
                  <p
                    className={`text-xs uppercase tracking-widest mb-1 ${
                      activeDay === i ? "text-[#bfaf8a]" : "text-white/40"
                    }`}
                    style={{ fontFamily: FONT_EYEBROW, fontStyle: "italic", fontWeight: 500 }}
                  >
                    {d.day}
                  </p>
                  <p
                    className={`text-sm uppercase tracking-wide ${
                      activeDay === i ? "text-white" : "text-white/60"
                    }`}
                    style={{ fontFamily: FONT_HEADING }}
                  >
                    {d.location}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          {/* WHY: 55/45 split gives the photo more breathing room so portrait images are less cropped */}
          <div className="grid md:grid-cols-[55%_45%] gap-0 border border-white/20">

            {/* Photo side — WHY: taller min-height reveals more of portrait images without cropping */}
            <div
              className="relative h-56 md:h-auto min-h-[420px]"
              style={{
                backgroundImage: `url(${day.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#384959]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
                <MapPin size={11} className="text-[#bfaf8a]" />
                <span
                  className="text-white text-xs uppercase tracking-widest"
                  style={{ fontFamily: FONT_HEADING }}
                >
                  {day.location}, {data.country}
                </span>
              </div>
            </div>

            {/* Text side */}
            <div className="p-7 md:p-8 flex flex-col justify-between bg-[#384959]/30">
              <div>
                <p
                  className="text-[#bfaf8a] text-xs mb-2.5"
                  style={{ fontFamily: FONT_EYEBROW, fontStyle: "italic", fontWeight: 500 }}
                >
                  {day.day} · {day.location}
                </p>
                <h3
                  className="text-white text-xl md:text-2xl font-light uppercase mb-4"
                  style={{ fontFamily: FONT_HEADING, fontStyle: "normal" }}
                >
                  {day.headline}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed font-light mb-5">
                  {day.experience}
                </p>
                <div className="flex items-start gap-3 border-l-2 border-[#bfaf8a] pl-3.5">
                  <div>
                    <p
                      className="text-[#bfaf8a] text-xs mb-1"
                      style={{ fontFamily: FONT_EYEBROW, fontStyle: "italic", fontWeight: 500 }}
                    >
                      Signature Moment
                    </p>
                    <p className="text-white/80 text-sm font-light">{day.highlight}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2.5">
                <Home size={12} className="text-white/30 flex-shrink-0" />
                <div>
                  <p
                    className="text-white/30 text-xs uppercase tracking-widest"
                    style={{ fontFamily: FONT_HEADING }}
                  >
                    Where You Stay
                  </p>
                  <p
                    className="text-white/70 text-sm font-light"
                    style={{ fontFamily: FONT_EYEBROW, fontStyle: "italic" }}
                  >
                    {day.stay}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2.5 mt-8">
          {tab.days.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveDay(i)}
              className={`transition-all duration-300 ${
                activeDay === i
                  ? "w-8 h-1 bg-[#bfaf8a]"
                  : "w-4 h-1 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Footer note */}
        <p
          className="text-center text-white/30 text-xs mt-8"
          style={{ fontFamily: FONT_EYEBROW, fontStyle: "italic", fontWeight: 500 }}
        >
          Every itinerary is built from scratch — this is an example of what BTA creates for your family.
        </p>

      </div>
    </div>
  );
}

// ── DestinationTimelineModal ──────────────────────────────────────────────────
// WHY: Wraps DestinationTimelineInner in a full-screen Dialog modal.
// Used by destination cards on the Family Travel page.
interface DestinationTimelineModalProps {
  destination: string;
  open: boolean;
  onClose: () => void;
}

export function DestinationTimelineModal({ destination, open, onClose }: DestinationTimelineModalProps) {
  const data = DESTINATION_ITINERARIES[destination];
  if (!data) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) onClose(); }}>
      <DialogContent
        className="!max-w-5xl w-[95vw] p-0 border-0 overflow-y-auto max-h-[92vh] rounded-none sm:!max-w-5xl"
        showCloseButton={true}
      >
        {/* WHY: DialogTitle is required by Radix for screen reader accessibility.
            It is visually hidden since the modal has its own heading inside. */}
        <DialogTitle className="sr-only">{destination} Sample Itinerary</DialogTitle>
        <DestinationTimelineInner data={data} />
      </DialogContent>
    </Dialog>
  );
}

export default DestinationTimelineInner;
