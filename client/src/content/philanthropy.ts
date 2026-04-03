/**
 * BTA Philanthropic Initiatives Page — Content Configuration
 *
 * PURPOSE: Single source of truth for all Philanthropy page content.
 * To update text, photos, or links — edit ONLY this file.
 * Never modify the component file for content changes.
 *
 * NOTE: Pack for a Purpose has been intentionally removed per brand direction.
 *       Not Just Tourists (NJT) is the featured suitcase-drive partner.
 */

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const philanthropyHero = {
  // Cinematic hero — community/giving back imagery
  backgroundImage:
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=85&auto=format&fit=crop",
  eyebrow: "Giving Back",
  headline: "TRAVEL WITH\nPURPOSE",
  subheadline:
    "We make a living by what we get. We make a life by what we give.",
  attribution: "— Winston Churchill",
};

// ─── Intro ────────────────────────────────────────────────────────────────────
export const philanthropyIntro = {
  eyebrow: "BTA Philanthropy",
  headline: "Boutique Travel Advisors™ & Our Philanthropy",
  body1:
    "Boutique Travel Advisors™ is passionate about supporting non-profit organizations within our local communities and in destinations where our clients travel. Our advisors pursue their passion for travel and strive to improve the human condition by providing meaningful trips that allow for cultural exploration and a give-back component. We are proud to be part of the global effort to make a positive impact in our world.",
  body2:
    "Traveling with a purpose has become an integral aspect of many people's vacations as it offers an opportunity to explore and appreciate different places worldwide while also contributing to global development. While a significant number of trips revolve around volunteerism or mission work, it is not always practical for travelers — particularly families — to dedicate their entire trip to philanthropic activities. However, by carefully listening to local communities' needs, we can make meaningful contributions in areas such as education, health care, economic development, and conservation. Our mission is to constantly seek out ways to positively affect the lives of others.",
  // Side image — community/children
  imageUrl:
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=900&q=80&auto=format&fit=crop",
};

// ─── Five Pillars ─────────────────────────────────────────────────────────────
export const philanthropyPillars = {
  eyebrow: "Our Foundation",
  headline: "Pillars of Community",
  intro:
    "At BTA we are deeply committed to giving back and creating opportunities for our local communities and the destinations our clients visit. Our dedication is reflected in our five pillars of community, which guide us in identifying causes and nonprofits that we, along with our suppliers and clients, can support to make a meaningful difference. These pillars are Joy, Wellbeing, Connection, Sustainability, and Gratitude. Through these core values, we strive to foster happiness, health, and connection while ensuring our efforts are sustainable and infused with kindness. By aligning our philanthropic endeavors with these principles, we aim to build stronger, more vibrant communities at home and abroad.",
  pillars: [
    {
      name: "Joy",
      icon: "✦",
      description:
        "We believe in the power of happiness and strive to create joyful experiences for our clients in every trip we plan. Beyond travel, our philanthropic efforts focus on bringing joy to others — whether through supporting local events, providing memorable experiences for those in need, or helping communities celebrate their unique cultures and traditions. We also engage our suppliers and educate our community on ways they can contribute to spreading joy through their own initiatives.",
    },
    {
      name: "Wellbeing",
      icon: "✦",
      description:
        "At BTA, we recognize the importance of holistic health encompassing mind, body, and spirit. We seek opportunities to promote health and healing, whether by supporting mental health initiatives, advocating for physical wellness programs, or contributing to environmental conservation efforts. By emphasizing wellbeing, we aim to foster positive change and enhance the quality of life for individuals and communities alike.",
    },
    {
      name: "Connection",
      icon: "✦",
      description:
        "We understand that true community is built through meaningful connections. Our efforts focus on bringing people together to celebrate, support, and take action. Whether through organizing community events, supporting local businesses, or encouraging cultural exchange, we strive to create a sense of belonging and unity. Connection is at the heart of our mission, driving us to cultivate relationships that strengthen communities.",
    },
    {
      name: "Sustainability",
      icon: "✦",
      description:
        "Our commitment to sustainability ensures that our philanthropic endeavors lead to long-term, positive outcomes. We support initiatives that are environmentally responsible, socially equitable, and economically viable. By investing in sustainable solutions, we aim to protect and preserve the places our clients love to visit, ensuring they can be enjoyed by future generations. We actively engage our suppliers in sustainable practices and educate our community on the importance of sustainability in their travels and daily lives.",
    },
    {
      name: "Gratitude",
      icon: "✦",
      description:
        "Gratitude is the cornerstone of our philanthropic philosophy. We believe in the importance of giving back and showing kindness to others. Our efforts are driven by a desire to express appreciation for the communities that welcome us and the natural beauty that enriches our travels. Through acts of kindness, charitable contributions, and volunteer efforts, we strive to demonstrate our gratitude and inspire others to do the same.",
    },
  ],
};

// ─── 2025 Beneficiaries ───────────────────────────────────────────────────────
export const philanthropyBeneficiaries = {
  eyebrow: "2025 Philanthropic Beneficiaries",
  headline: "Every Booking Makes a Difference",
  body:
    "Every time you book a hotel through the BTA Luxury Travel Club, you are helping support one of our dedicated philanthropic initiatives. A portion of each booking directly benefits one of our featured causes, allowing you to make a positive impact simply by enjoying your stay while receiving the VIP treatment and special amenities our travelers have come to enjoy. Join us in creating unforgettable travel experiences that go beyond luxury, leaving a meaningful mark on communities worldwide.",
  organizations: [
    {
      name: "Amanda Hope Rainbow Angels",
      description: "Bringing hope and comfort to children with cancer and their families.",
      // Replace with official logo CDN URL
      logoUrl: "",
    },
    {
      name: "Make-A-Wish Foundation",
      description: "Granting life-changing wishes for children with critical illnesses.",
      logoUrl: "",
    },
    {
      name: "San Diego Automobile Museum",
      description: "Preserving automotive history and inspiring future generations.",
      logoUrl: "",
    },
    {
      name: "CASA Orange County",
      description: "Advocating for the best interests of abused and neglected children in court.",
      logoUrl: "",
    },
    {
      name: "Comfy Cozys",
      description: "Providing comfort and warmth to children in need across our communities.",
      logoUrl: "",
    },
  ],
};

// ─── Community Partnerships ───────────────────────────────────────────────────
export const philanthropyPartnerships = {
  eyebrow: "Community Partnerships",
  headline: "For Your Nonprofit",
  body:
    "While we encourage travelers to participate in making a difference in the destinations they visit, we also understand that it is vital to support the communities in which we live, work, and raise our children — to build a brighter future for the next generation. We are proud to offer partnership opportunities and joint philanthropy efforts with select, reputable organizations.",
  requirements: {
    intro: "If you are interested in partnering with BTA, please review our partnership guidelines.",
    label: "Philanthropy Partnership Requirements",
    items: [
      "Partner must be a registered 501(c)(3) non-profit organization",
      "Must have been in existence for at least two years",
      "Must have measurable objectives and strategies aligned with the BTA philanthropy mission",
    ],
    closing:
      "If you meet the above requirements, we invite you to join us in making a difference in our communities. Together, let's create a brighter future for all.",
    contact: {
      label: "Inquire About a Partnership",
      email: "angie@travelbta.com",
      href: "mailto:angie@travelbta.com",
    },
  },
};

// ─── Fundraise With BTA ───────────────────────────────────────────────────────
export const philanthropyFundraise = {
  eyebrow: "Fundraise With BTA",
  headline: "A Travel Drive That Gives Back",
  body1:
    "A Travel Drive is a straightforward yet impactful fundraising campaign for organizations with a wide-reaching audience. For each itinerary booked within a specified period, BTA will donate a portion of the proceeds directly to your nonprofit. BTA will also provide the necessary technology and marketing support to ensure a successful campaign, along with exclusive promotions, special amenities, and VIP services.",
  body2:
    "Additionally, we can consider adding your nonprofit to our booking engine as one of our featured beneficiaries — meaning a portion of every booking made on our site will contribute directly to your cause, helping to drive ongoing support.",
  // Side image — travel/giving
  imageUrl:
    "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=900&q=80&auto=format&fit=crop",
  cta: {
    label: "Start a Travel Drive",
    href: "mailto:angie@travelbta.com",
  },
};

// ─── Not Just Tourists (NJT) ──────────────────────────────────────────────────
// NOTE: Pack for a Purpose has been removed per brand direction.
export const philanthropyNjt = {
  eyebrow: "Bring a Suitcase, Save a Life",
  headline: "Not Just Tourists",
  subheadline: "Are you traveling to remote or economically disadvantaged destinations?",
  body1:
    "Boutique Travel Advisors™ is particularly passionate about supporting Not Just Tourists (NJT) — allowing regular travelers to deliver much-needed supplies to areas of need. BTA Co-Founder Janet Semenova's husband runs the Scottsdale, AZ chapter for NJT.",
  body2:
    "We believe that every journey should create lasting memories, build relationships, and contribute something special to the local community. We encourage you to consider packing light and swapping out one of your complimentary checked luggage bags with a suitcase that can save a life. Some air carriers will allow you to carry extra weight if it falls within the \"humanitarian aid\" category — simply visit the Airline Baggage Humanitarian Aid Policies page to check.",
  imageUrl:
    "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=900&q=80&auto=format&fit=crop",
  cta: {
    label: "Learn About NJT",
    href: "https://www.notjusttourists.org",
  },
};

// ─── Affiliations ─────────────────────────────────────────────────────────────
export const philanthropyAffiliations = {
  eyebrow: "Our Affiliations",
  headline: "Exclusive Partnership, Recognition & Membership",
  logos: [
    { name: "Virtuoso", imageUrl: "" },
    { name: "ASTA", imageUrl: "" },
    { name: "Forbes Travel Guide", imageUrl: "" },
    { name: "IATAN", imageUrl: "" },
    { name: "Best of Our Valley", imageUrl: "" },
  ],
};

// ─── Final CTA ────────────────────────────────────────────────────────────────
export const philanthropyCta = {
  backgroundImage:
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=85&auto=format&fit=crop",
  eyebrow: "Travel That Transforms",
  headline: "JOIN US IN MAKING A DIFFERENCE",
  subheadline:
    "Every journey you take with BTA contributes to something greater than the destination.",
  cta: { label: "Plan Your Journey", href: "/book" },
};
