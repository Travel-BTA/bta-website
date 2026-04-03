/**
 * About Page Content
 * Route: /about
 *
 * Content sourced from travelbta.com/about-us and individual advisor profiles.
 * Edit this file to update all About page copy and data.
 *
 * WHY a separate content file: keeps the page component logic-free and makes
 * copy updates a single-file operation without touching JSX.
 */

export interface FavoriteThing {
  label: string;
  value: string;
}

export interface Advisor {
  name: string;
  title: string;
  location: string;
  bio: string[];
  imageUrl: string;
  favoriteThings: FavoriteThing[];
  profilePath: string;
}

export interface AboutData {
  hero: {
    backgroundImage: string;
    headline: string;
    subheadline: string;
  };
  overview: {
    headline: string;
    paragraphs: string[];
    quote: string;
    quoteAuthor: string;
  };
  mission: {
    headline: string;
    body: string;
  };
  tabs: {
    id: string;
    label: string;
    content: string;
  }[];
  cofounders: Advisor[];
}

export const aboutData: AboutData = {
  hero: {
    // Kefalonia/Assos coastal village. same hero used on advisor profiles on travelbta.com
    backgroundImage:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1600&q=80",
    headline: "Get To Know Our Team",
    subheadline: "Transformational Luxury",
  },

  overview: {
    headline: "Transformational Luxury",
    paragraphs: [
      "Boutique Travel Advisors is a luxury travel company headquartered in Scottsdale, AZ with offices in Laguna Beach (Orange County) and San Diego, California. Our advisors specialize in designing once-in-a-lifetime experiences for individuals, families, and teams.",
      "As a Virtuoso Travel Agency, our partnerships with the most respected and knowledgeable suppliers worldwide allow our guests access to special amenities, VIP experiences, and exceptional service.",
      "Because we are passionate about philanthropy, each BTA itinerary also offers travelers an opportunity to give back to the local community in which they are traveling.",
      "From remote lodges in Patagonia to alpine chalets to desert safari camps, our team of experts scours the globe to bring you the most unique, exceptional, awe-inspiring travel experiences. We are not simply luxury travel agents but curators and transformational itinerary designers.",
      "At BTA we practice a holistic team approach to planning and executing travel experiences.",
    ],
    quote:
      "To move, to breathe, to fly, to float, To gain all while you give, To roam the roads of lands remote: To travel is to live.",
    quoteAuthor: "Hans Christian Andersen",
  },

  mission: {
    headline: "Our Mission",
    body: "We work tirelessly to craft unforgettable journeys that spark the imagination, elevate the spirit, and foster meaningful connections. BTA is a luxury travel company headquartered in Paradise Valley, AZ. Our co-founders Janet Semenova and Angela Rice are lifelong learners and entrepreneurs. Our team of exceptional advisors, support staff, and partners handle all aspects of travel around the globe. We specialize in designing once-in-a-lifetime experiences for individuals, families, and teams that elevate, inspire, and transform.",
  },

  tabs: [
    {
      id: "who-we-are",
      label: "Who We Are",
      content:
        "We are a team of passionate travelers, curators, and transformational itinerary designers. Every advisor on our team has traveled extensively and brings firsthand expertise to every journey they design. We are not a call center. we are a boutique agency where every client is known by name.",
    },
    {
      id: "what-we-do",
      label: "What We Do",
      content:
        "We design fully bespoke travel experiences. from intimate European escapes to multi-generational African safaris to Antarctic expeditions. We handle every detail: flights, accommodations, transfers, private guides, exclusive access, and on-the-ground support. We also offer concierge-level annual membership plans with multi-year travel roadmaps for clients who travel frequently.",
    },
    {
      id: "what-we-believe",
      label: "What We Believe",
      content:
        "We believe travel is transformational. We believe in responsible, sustainable, and community-centered travel. We believe every client deserves VIP treatment and that the best journeys are the ones designed around who you are, not a generic itinerary. We are committed to eco-stewardship and giving back to the communities we visit.",
    },
  ],

  cofounders: [
    {
      name: "Janet Semenova",
      title: "Co-Founder",
      location: "Scottsdale, AZ",
      // Direct WordPress image from travelbta.com
      imageUrl:
        "/images/founder-janet-semenova.jpg",
      profilePath: "/about/janet",
      bio: [
        "Janet Semenova was born in Tashkent, Uzbekistan, and moved to the US at 7 years old. She inherited her passion for travel from her mother and is dedicated to showing the world to her children. She frequently travels with her family and friends and loves bringing groups of like-minded travelers together to experience unique, off-the-beaten-path destinations. She has spent extensive time in Europe, Israel, and Central America and speaks fluent Russian and some Hebrew.",
        "Janet is a nurse practitioner and certified health coach. One of her niches is planning health and wellness retreats. Some of her favorite destinations include Iceland, New Zealand, Patagonia, Portugal, and Costa Rica. She is an active member of the Transformational Travel Council and is dedicated to conservation and responsible travel practices. She is also passionate about philanthropy and giving back to her local community and those she travels.",
      ],
      favoriteThings: [
        { label: "Most Memorable Trip", value: "Sailing the Greek Islands" },
        {
          label: "Best Travel Tip",
          value:
            "Remember to be present in the moment. Travel experiences often provide opportunities for unexpected adventures, friendships and learning. Practice gratitude and patience. long after the trip is over you will not remember the delayed flight or the long queue. What you will remember is the look in your child's eyes when they first saw the Colosseum or climbed the steps of the Eiffel Tower.",
        },
        { label: "Favorite Book", value: "Love In The Time Of Cholera" },
        { label: "Countries Visited", value: "35" },
        {
          label: "Dream Bucket List Trip",
          value: "Seeing gorillas in the wild and sleeping under the stars in Antarctica.",
        },
        {
          label: "Favorite Quote",
          value:
            '"Man cannot discover new oceans unless he has the courage to lose sight of the shore.". André Gide',
        },
        {
          label: "Best Gift I Ever Received",
          value:
            "Books. As a child, I loved reading, but we did not have much money. Each time I was gifted a new book, it was like discovering a whole new world of possibility. I still have many of the books I received as a child from poetry to mythology.",
        },
        {
          label: "Most Incredible Trip I Ever Planned",
          value:
            "I love planning multi-generational trips for families to discover new destinations and spend quality time together. My favorite was a Costa Rican adventure, including jungles, volcanos, hot springs, surfing lessons and cooking classes.",
        },
        {
          label: "The Person I Look Up To Most",
          value:
            "My mom. She passed away when I was 19, but I think of her strength and courage daily.",
        },
        {
          label: "Charities I Support",
          value: "Not Just Tourists and Pack for a Purpose",
        },
      ],
    },
    {
      name: "Angela Rice",
      title: "Co-Founder",
      location: "Scottsdale, AZ",
      // Direct WordPress image from travelbta.com
      imageUrl:
        "https://travelbta.com/wp-content/uploads/2024/03/Angie-1200x799-1.jpg",
      profilePath: "/about/angie",
      bio: [
        "Angie Rice enjoys planning vacations for clients traveling where they are visiting places for the first time. She loves to encourage them to have an open mind and embrace new adventures and experiences at each destination. Her personal travels play an integral role in preparing clients for their travels.",
        "Angie's background is as a CPA and business consultant. She works very closely with our preferred suppliers. She prioritizes personally meeting hotel managers, tour operators, and other suppliers to ensure we are making the best recommendations for our clients. Angie has lived in Spain and travels yearly to the Turks and Caicos Islands in the Caribbean. Her favorite destinations include Austria, Spain, Costa Rica, Italy, Ireland, and the coastal regions of the US. She loves to travel with her husband and their two boys. Angie works with our concierge-level clients on creating multi-year travel plans with financial forecasting components. She specializes in safaris and more adventurous itineraries and group travel, including corporate incentive travel, executive retreats and multi-generational family travel.",
      ],
      favoriteThings: [
        {
          label: "Most Memorable Trip",
          value: "Backpacking in Europe for a Summer with My Husband",
        },
        {
          label: "Best Travel Tip",
          value:
            "Most importantly, be mindful of your purpose. Why is this trip important to you? What are you hoping to achieve? Set realistic expectations from what you can spend to how much you can pack into one trip with the amount of time you have to travel. Stay balanced and do not let any disruption overwhelm you. The unpredictable component of travel is part of the journey.",
        },
        { label: "Favorite Book", value: "Beach Music by Pat Conroy" },
        { label: "Countries Visited", value: "33" },
        {
          label: "Dream Bucket List Trip",
          value:
            "My dream trip is often a trip I have recently planned for a client. In the process of supporting this trip, I become so engaged in the destination or itinerary that it becomes my dream trip.",
        },
        {
          label: "Favorite Quote",
          value:
            '"When I do good I feel good, when I do bad I feel bad, and that\'s my religion.". Abraham Lincoln',
        },
        { label: "Best Gift I Ever Received", value: "The gift of family." },
        {
          label: "Most Incredible Trip I Ever Planned",
          value:
            "One of my most memorable trips was a heritage trip to Sicily that I took with my parents. It was an incredible experience to meet relatives and visit the home of my great-grandparents. I also fell in love with the countryside of Sicily.",
        },
        {
          label: "The Person I Look Up To Most",
          value:
            "I look up to my children. They encourage me every day to be the best person I can be.",
        },
        {
          label: "Charities I Support",
          value:
            "Alzheimer's Association, Boys Team Charity, Arizona Department of Child Safety, Pack for a Purpose",
        },
      ],
    },
  ],
};
