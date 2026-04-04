/**
 * ContactUs — /contact-us
 *
 * Replicates the contact page from travelbta.com/contact-us/
 * Includes the full Plan Your Journey form with travel style checkboxes,
 * advisor preference dropdown, and how-did-you-find-us dropdown.
 *
 * Typography rules:
 *  - Section eyebrows: bta-eyebrow (Playfair Display 500 italic, Champagne Gold)
 *  - Section titles: Instrument Serif ALL CAPS
 *  - Subheadings: Playfair Display 500 italic
 *  - Body: system sans
 */

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const travelStyles = [
  "Luxury Cruise",
  "Expedition Cruise",
  "Adventure",
  "Family",
  "Wellness & Retreats",
  "Ultra Luxury",
  "Group",
  "Destination Wedding | Celebration",
  "Honeymoon | Anniversary",
  "Business Retreat",
  "Arts & Culture",
  "Other",
];

const howDidYouFindUs = [
  "-- Select One --",
  "Google Search",
  "Social Media",
  "Referral from a Friend",
  "Virtuoso",
  "Press / Media",
  "Returning Client",
  "Other",
];

const advisors = [
  "-- No Preference --",
  "Janet Donahue",
  "Baylee Shapiro",
  "Danitza & Esteban Villanueva",
  "Camila Dominguez",
  "Malou Sarmiento",
];

export default function ContactUs() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    smsConsent: false,
    destination: "",
    dates: "",
    styles: [] as string[],
    howFound: "",
    advisor: "",
    additionalInfo: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleStyle = (style: string) => {
    setForm((prev) => ({
      ...prev,
      styles: prev.styles.includes(style)
        ? prev.styles.filter((s) => s !== style)
        : [...prev.styles, style],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EF]">
      {/* Hero */}
      <div
        className="relative h-[45vh] min-h-[300px] flex items-end pb-12 px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-[#1a2a35]/55" />
        <div className="relative z-10 max-w-5xl mx-auto w-full">
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
            Start Planning Your Next Adventure
          </h1>
        </div>
      </div>

      {/* Intro copy */}
      <div className="max-w-3xl mx-auto px-6 py-14 text-center">
        <p className="text-[#5A5A5A] leading-relaxed mb-4">
          BTA is a luxury travel agency focused on{" "}
          <strong className="text-[#384959]">transformational</strong>{" "}
          experiences. Let our team show you how we craft once-in-a-lifetime
          itineraries for discerning travelers seeking to{" "}
          <strong className="text-[#384959]">explore</strong> and discover the
          world&apos;s most incredible{" "}
          <strong className="text-[#384959]">destinations</strong>.
        </p>
        <p className="text-[#5A5A5A] leading-relaxed mb-4">
          If you choose to work with BTA, we offer a variety of{" "}
          <em>service packages</em> to serve your needs. You can view our{" "}
          <a
            href="/luxury-travel-agency-bta"
            className="text-[#BFAF8A] underline underline-offset-2"
          >
            Guide To Working With BTA
          </a>{" "}
          for more details.
        </p>
        <p className="text-[#5A5A5A] text-sm italic">
          Please Note, itinerary design fees start at $300 for domestic and
          $500 for international trips.
        </p>
      </div>

      {/* Form + Sidebar */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form */}
        <div className="lg:col-span-2">
          <div className="bg-white p-8 shadow-sm">
            <p className="bta-eyebrow text-[0.7rem] tracking-[0.22em] mb-2">
              PLAN YOUR JOURNEY
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                fontStyle: "italic",
                color: "#384959",
                fontSize: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Boutique Travel Advisors
            </h2>
            <p className="text-[#5A5A5A] text-sm mb-8">
              Please fill out this form and a BTA Luxury Travel Advisor will be
              in touch shortly.
            </p>

            {submitted ? (
              <div className="py-16 text-center">
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 500,
                    fontStyle: "italic",
                    color: "#384959",
                    fontSize: "1.4rem",
                    marginBottom: "1rem",
                  }}
                >
                  Thank you for reaching out.
                </p>
                <p className="text-[#5A5A5A]">
                  A BTA travel advisor will be in touch within one business day
                  to begin designing your experience.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest text-[#384959] mb-1 uppercase">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.firstName}
                      onChange={(e) =>
                        setForm({ ...form, firstName: e.target.value })
                      }
                      className="w-full border-b border-[#D6CFC4] bg-transparent py-2 text-[#384959] focus:outline-none focus:border-[#BFAF8A] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest text-[#384959] mb-1 uppercase">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.lastName}
                      onChange={(e) =>
                        setForm({ ...form, lastName: e.target.value })
                      }
                      className="w-full border-b border-[#D6CFC4] bg-transparent py-2 text-[#384959] focus:outline-none focus:border-[#BFAF8A] transition-colors"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest text-[#384959] mb-1 uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full border-b border-[#D6CFC4] bg-transparent py-2 text-[#384959] focus:outline-none focus:border-[#BFAF8A] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest text-[#384959] mb-1 uppercase">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="Include country code"
                      className="w-full border-b border-[#D6CFC4] bg-transparent py-2 text-[#384959] placeholder:text-[#B0A898] focus:outline-none focus:border-[#BFAF8A] transition-colors"
                    />
                  </div>
                </div>

                {/* SMS consent */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.smsConsent}
                    onChange={(e) =>
                      setForm({ ...form, smsConsent: e.target.checked })
                    }
                    className="mt-1 accent-[#BFAF8A]"
                  />
                  <span className="text-sm text-[#5A5A5A]">
                    I agree to receive SMS messages from Boutique Travel
                    Advisors
                  </span>
                </label>

                {/* Destination + Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest text-[#384959] mb-1 uppercase">
                      Where would you like to travel next?
                    </label>
                    <input
                      type="text"
                      value={form.destination}
                      onChange={(e) =>
                        setForm({ ...form, destination: e.target.value })
                      }
                      className="w-full border-b border-[#D6CFC4] bg-transparent py-2 text-[#384959] focus:outline-none focus:border-[#BFAF8A] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest text-[#384959] mb-1 uppercase">
                      Approximate travel dates?
                    </label>
                    <input
                      type="text"
                      value={form.dates}
                      onChange={(e) =>
                        setForm({ ...form, dates: e.target.value })
                      }
                      className="w-full border-b border-[#D6CFC4] bg-transparent py-2 text-[#384959] focus:outline-none focus:border-[#BFAF8A] transition-colors"
                    />
                  </div>
                </div>

                {/* Travel style */}
                <div>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 500,
                      fontStyle: "italic",
                      color: "#384959",
                      fontSize: "1rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Travel Style Preferences
                  </p>
                  <p className="text-xs text-[#5A5A5A] mb-3 uppercase tracking-widest">
                    What is your style of travel? (Check all that apply)
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {travelStyles.map((style) => (
                      <label
                        key={style}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={form.styles.includes(style)}
                          onChange={() => toggleStyle(style)}
                          className="accent-[#BFAF8A]"
                        />
                        <span className="text-sm text-[#5A5A5A]">{style}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* How found + Advisor */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest text-[#384959] mb-1 uppercase">
                      How did you find out about us?
                    </label>
                    <select
                      value={form.howFound}
                      onChange={(e) =>
                        setForm({ ...form, howFound: e.target.value })
                      }
                      className="w-full border-b border-[#D6CFC4] bg-transparent py-2 text-[#384959] focus:outline-none focus:border-[#BFAF8A] transition-colors"
                    >
                      {howDidYouFindUs.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest text-[#384959] mb-1 uppercase">
                      Preferred BTA Advisor?
                    </label>
                    <select
                      value={form.advisor}
                      onChange={(e) =>
                        setForm({ ...form, advisor: e.target.value })
                      }
                      className="w-full border-b border-[#D6CFC4] bg-transparent py-2 text-[#384959] focus:outline-none focus:border-[#BFAF8A] transition-colors"
                    >
                      {advisors.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Additional info */}
                <div>
                  <label className="block text-xs tracking-widest text-[#384959] mb-1 uppercase">
                    Additional Information
                  </label>
                  <textarea
                    rows={4}
                    value={form.additionalInfo}
                    onChange={(e) =>
                      setForm({ ...form, additionalInfo: e.target.value })
                    }
                    className="w-full border-b border-[#D6CFC4] bg-transparent py-2 text-[#384959] focus:outline-none focus:border-[#BFAF8A] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 px-10 py-3 bg-[#384959] text-white hover:bg-[#BFAF8A] transition-colors duration-300"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.14em",
                    fontSize: "0.8rem",
                  }}
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* HQ */}
          <div>
            <p className="bta-eyebrow text-[0.7rem] tracking-[0.22em] mb-4">
              BTA HEADQUARTERS
            </p>
            <div className="space-y-3 text-[#5A5A5A] text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#BFAF8A] mt-0.5 flex-shrink-0" />
                <span>
                  7702 E Doubletree Ranch Rd
                  <br />
                  Suite 300
                  <br />
                  Scottsdale, AZ 85258
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#BFAF8A] flex-shrink-0" />
                <a
                  href="tel:4807871477"
                  className="hover:text-[#BFAF8A] transition-colors"
                >
                  480-787-1477
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#BFAF8A] flex-shrink-0" />
                <a
                  href="mailto:info@travelbta.com"
                  className="hover:text-[#BFAF8A] transition-colors"
                >
                  info@travelbta.com
                </a>
              </div>
            </div>
            <p className="text-[#5A5A5A] text-sm mt-4 leading-relaxed">
              BTA is currently conducting virtual appointments for new clients.
              To schedule your complimentary discovery call, please fill out the
              form and a travel specialist will get back to you shortly.
            </p>
          </div>

          <div className="border-t border-[#D6CFC4] pt-8">
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                fontStyle: "italic",
                color: "#384959",
                fontSize: "1.1rem",
                marginBottom: "0.5rem",
              }}
            >
              Write For BTA
            </p>
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-2">
              We are always looking for unique and inspiring stories from around
              the world.
            </p>
            <a
              href="mailto:blog@travelbta.com"
              className="text-[#BFAF8A] text-sm underline underline-offset-2 hover:text-[#384959] transition-colors"
            >
              Submit your pitch
            </a>
          </div>

          <div className="border-t border-[#D6CFC4] pt-8">
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                fontStyle: "italic",
                color: "#384959",
                fontSize: "1.1rem",
                marginBottom: "0.5rem",
              }}
            >
              Partnership Info
            </p>
            <p className="text-[#5A5A5A] text-sm leading-relaxed mb-2">
              BTA partners with select, vetted suppliers and industry
              specialists around the world.
            </p>
            <a
              href="mailto:info@travelbta.com"
              className="text-[#BFAF8A] text-sm underline underline-offset-2 hover:text-[#384959] transition-colors"
            >
              Contact a BTA specialist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
