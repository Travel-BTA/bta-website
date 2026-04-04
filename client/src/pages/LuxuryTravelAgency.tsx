/**
 * LuxuryTravelAgency -- /luxury-travel-agency-bta
 *
 * Replicates the FAQ page from travelbta.com/luxury-travel-agency-bta/
 * Typography rules:
 *  - Section eyebrows: bta-eyebrow (Playfair Display 500 italic, Champagne Gold)
 *  - Section titles: Instrument Serif ALL CAPS (bta-section-title)
 *  - Question headings: Playfair Display 500 italic
 *  - Body: Inter / system sans
 */

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "Why should I hire BTA?",
    a: "The travel advisors at BTA are professionals with years of travel experience. Our relationships with the best and most respected travel companies in the world and our direct membership with Virtuoso gives us access to travel benefits and cost savings through preferred partnerships, exclusive agreements, and access to pricing not available to the public. BTA is a luxury travel agency specializing in customized itineraries and exclusive experiences.",
  },
  {
    q: "What are the benefits of traveling with BTA?",
    a: "Our guests can receive complimentary room upgrades, early check-in/late checkout, free breakfast, and resort credits at hundreds of properties worldwide. Our reputable advisors are available from start to finish, becoming your direct safety net if anything goes amiss. They are personally invested in your trip and well-being, a level of service not available by self-booking or through third-party wholesalers. While most travelers are simply a reservation number, you are a highly anticipated guest.",
  },
  {
    q: "What type of trip can BTA plan?",
    a: "We recognize that travel is not 'one size fits all' and that every trip is a personal journey. Our travel advisors create truly unique and personalized experiences that large tour companies or simple google searches cannot replicate because the recommendations are tailored specifically for you. We work with vetted and reputable tour operators, hotels and destination specialists worldwide, making even the most remote and off-the-beaten-path experiences only a phone call away.",
  },
  {
    q: "Why does BTA charge itinerary design/management fees?",
    a: "BTA designs completely unique and customized itineraries based on personal goals, interests, and budgets. Many hours are spent carefully curating each client's trip and providing a high level of service throughout our client's travels. Fees allow us to invest considerable time and make honest recommendations without relying exclusively on supplier commissions. To provide transparency and further individualize the planning process, we offer several packages that clients can choose from based on their needs and preferences.",
  },
  {
    q: "Does BTA book cruises?",
    a: "Yes! BTA's advisors are passionate about the cruise industry and experts in providing customized recommendations about cruises for travelers of all ages and activity levels. We also provide opportunities to join BTA's Virtuoso-hosted sailings at competitive rates with like-minded travelers multiple times throughout the year. Reserve your cruise with us and enjoy exclusive benefits on thousands of voyages such as upgrades, shipboard credits, pre-paid gratuities, and complimentary shore events. Luxury cruise clients enjoy complimentary car and driver shore experiences in exotic ports around the world.",
  },
  {
    q: "Can I book hotels on the BTA website?",
    a: "Yes! BTA has access to Virtuoso's preferred hotel suppliers. If you know the destination you would like to visit and would like to self-book your hotel on our website you will be eligible for all of the added amenities listed, such as resort credits, upgrades, and complimentary breakfast. We will also be available to help with questions or any issues that may arise while traveling to the destination booked online.",
  },
  {
    q: "Does BTA offer trip insurance?",
    a: "BTA highly recommends purchasing trip insurance for all international and certain domestic itineraries. We work with vetted, preferred suppliers who provide exceptional service and travel assistance to our clients.",
  },
  {
    q: "Does BTA book group travel?",
    a: "Yes! BTA specializes in group travel for leisure and business clients. From multi-generational itineraries around the world to corporate incentive travel we can create customized and highly tailored itineraries for groups of 10-100+ travelers.",
  },
  {
    q: "How do I begin working with BTA?",
    a: "The process of beginning to work with BTA starts with a complimentary 15-minute discovery call, allowing us to learn about each other. We prefer that this consultation take place over the phone, but it can also be handled via email if necessary. Please fill out our contact form or call us at 480-787-1477 to set up your appointment.",
  },
  {
    q: "Can I choose the BTA advisors I will work with?",
    a: "Absolutely! While many of our advisors specialize in particular regions of the world or travel styles, we recognize that certain personalities work better together. If there is an advisor that you would like to work with directly, please let us know in your introductory conversation.",
  },
  {
    q: "Does BTA book budget travel or stand-alone flights?",
    a: "BTA is a luxury travel agency focused on experiential and highly-tailored itineraries. We work with vetted suppliers, including cruise lines, 4 and 5 star hotels, tour operators and guides around the world. Our partners have an excellent reputation and focus on safety, service, and responsible business practices. BTA does not book VRBO or Airbnb apartments, campsites or budget hotels. While we can secure flights as part of a comprehensive itinerary, we do not book stand-alone flights. Private jet travel exceptions may apply.",
  },
  {
    q: "Can I hire BTA to help me design a trip and then book it myself?",
    a: "While BTA is a full-service travel agency, we recognize that not everyone's tastes and styles align with luxury travel. Therefore, we offer a unique service for clients who enjoy a DIY approach combined with expert guidance through the services of our Travel Coaches.",
  },
  {
    q: "What is a Travel Coach?",
    a: "Travel coaching differs from the services offered by travel advisors. Your travel coach will work with you to determine strategies on the best places to travel, where to stay and how best to plan each day based on your interests, travel style, and budget. Using their expertise, they will make recommendations to help you navigate the decision-making process of planning a trip. The ideal client for a travel coach wants more control over their trip, but they don't want to do all the time-consuming research or take a chance on hotels and tour operators without firsthand experience. Your coach will provide real-life destination knowledge and curated recommendations, taking into account your budget and overall goals, and guide you through self-booking your trip. Schedule a time for a 30-minute travel coach consultation.",
  },
];

function FaqItem({ index, q, a }: { index: number; q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#D6CFC4] py-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-start gap-4">
          {/* Number */}
          <span
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontWeight: 400,
              fontStyle: "normal",
              textTransform: "uppercase" as const,
              color: "#BFAF8A",
              fontSize: "0.85rem",
              letterSpacing: "0.12em",
              minWidth: "1.5rem",
              paddingTop: "0.15rem",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          {/* Question */}
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 500,
              fontStyle: "italic",
              color: "#384959",
              fontSize: "1.1rem",
              lineHeight: 1.4,
            }}
          >
            {q}
          </span>
        </div>
        <span className="text-[#BFAF8A] mt-1 flex-shrink-0">
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>
      {open && (
        <p className="mt-4 ml-10 text-[#5A5A5A] leading-relaxed text-[0.95rem]">
          {a}
        </p>
      )}
    </div>
  );
}

export default function LuxuryTravelAgency() {
  return (
    <div className="min-h-screen bg-[#F7F4EF]">
      {/* Hero */}
      <div
        className="relative h-[40vh] min-h-[280px] flex items-end pb-12 px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="absolute inset-0 bg-[#1a2a35]/55" />
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <p className="bta-eyebrow text-[0.7rem] tracking-[0.22em] mb-3">
            BOUTIQUE TRAVEL ADVISORS
          </p>
          <h1
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontWeight: 400,
              fontStyle: "normal",
              textTransform: "uppercase" as const,
              color: "#FFFFFF",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.1,
              letterSpacing: "0.04em",
            }}
          >
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-6 py-14 text-center">
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
            fontStyle: "italic",
            color: "#384959",
            fontSize: "1.2rem",
          }}
        >
          We love when clients ask us questions, so we have compiled a list of
          topics to help you get to know our luxury travel agency.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        {faqs.map((item, i) => (
          <FaqItem key={i} index={i} q={item.q} a={item.a} />
        ))}
      </div>

      {/* CTA */}
      <div className="bg-[#384959] py-16 px-6 text-center">
        <p className="bta-eyebrow text-[0.7rem] tracking-[0.22em] mb-4">
          READY TO BEGIN
        </p>
        <h2
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontWeight: 400,
            fontStyle: "normal",
            textTransform: "uppercase" as const,
            color: "#FFFFFF",
            fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
            letterSpacing: "0.06em",
            marginBottom: "1.5rem",
          }}
        >
          Start Your Journey With Us
        </h2>
        <a
          href="/contact-us"
          className="inline-block px-10 py-3 border border-[#BFAF8A] text-[#BFAF8A] hover:bg-[#BFAF8A] hover:text-white transition-colors duration-300"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontWeight: 400,
            fontStyle: "normal",
            textTransform: "uppercase" as const,
            letterSpacing: "0.14em",
            fontSize: "0.8rem",
          }}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
