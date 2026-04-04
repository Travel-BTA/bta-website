import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, Check, Globe, Laptop, Users, Star, Shield, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-advisor-tech.png" 
            alt="Luxury Travel Advisor" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-90" />
        </div>

        {/* Content */}
        <div className="container relative z-10 pt-20 text-center md:text-left">
          <div className="max-w-4xl mx-auto md:mx-0">
            <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-medium tracking-[0.2em] text-white uppercase mb-6 backdrop-blur-sm">
              For Elite Advisors
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8">
              The Future of <br />
              <span className="italic font-script text-primary pr-4">Luxury</span> 
              Travel Advisory
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-10">
              Elevate your business with BTA's proprietary technology, exclusive booking engine, 
              and a community of top-tier professionals.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Button className="bg-primary text-white hover:bg-primary/90 rounded-none px-10 py-7 uppercase tracking-widest text-sm font-bold transition-all duration-300 hover:scale-105">
                Apply for Membership
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-secondary rounded-none px-10 py-7 uppercase tracking-widest text-sm font-bold transition-all duration-300 bg-transparent">
                View Platform Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <span className="text-[10px] uppercase tracking-widest mb-2 block">Scroll</span>
          <div className="w-[1px] h-12 bg-white/30 mx-auto"></div>
        </div>
      </section>

      {/* Introduction / Why BTA */}
      <section id="why-bta" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src="/images/community-advisors.png" 
                  alt="BTA Community" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-10 -right-10 bg-white p-8 shadow-2xl max-w-xs hidden md:block border border-border">
                <p className="font-serif text-2xl italic text-secondary mb-4">"BTA changed the trajectory of my business entirely."</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">— Sarah Jenkins, Top Producer</p>
              </div>
            </div>
            
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-secondary mb-8 leading-tight">
                Not Just an Agency. <br />
                <span className="text-primary italic">A New Operating Model.</span>
              </h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-6">
                What happens when deep travel expertise meets serious engineering is not a feature upgrade. It is a new operating model.
              </p>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-6">
                We believe the most advanced technology in luxury travel should feel effortless. Travelers should not manage tools. They should simply feel that everything is anticipated, aligned, and handled.
              </p>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-6">
                Behind that ease is a complex coordination problem: aligning advisors, hotels, and on-the-ground partners so that decisions and service moments occur at precisely the right time. Our platform does not add noise. It quietly translates intent into action, delivering clear, timely guidance to the people responsible for execution, while keeping the traveler experience clean and uninterrupted.
              </p>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-6">
                For too long, each supplier has been forced to solve this alone. We are building the connective infrastructure: an intelligence layer that standardizes how VIP service is recognized, communicated, and delivered across the journey.
              </p>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-10">
                This is how travel becomes consistently exceptional. Not through more apps, but through better orchestration.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-2">Vetted Community</h4>
                    <p className="text-sm text-muted-foreground">Join a network of true professionals, not hobbyists.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-2">Higher Yields</h4>
                    <p className="text-sm text-muted-foreground">Access negotiated rates and higher commission tiers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-24 md:py-32 bg-secondary text-white relative">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Innovation</span>
            <h2 className="font-serif text-4xl md:text-6xl mb-6">Built for the Modern Advisor</h2>
            <p className="text-white/60 text-lg font-light">
              Say goodbye to disjointed tools. Our custom-built, all-in-one platform integrates every aspect of your business, 
              from real-time CRM updates to automated supplier communications.
            </p>
          </div>

          {/* Feature Showcase */}
          <div className="relative mt-12 space-y-32">
            
            {/* Feature 0: BTA Intranet Central Hub */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="font-serif text-3xl md:text-4xl mb-6">BTA Intranet: Your Central Hub</h3>
                <p className="text-white/60 text-lg font-light mb-8 leading-relaxed">
                  Everything you need in one place. Our centralized intranet connects you to essential tools, 
                  supplier databases, marketing resources, and our thriving community forum.
                </p>
                <ul className="space-y-4">
                  {[
                    "Single sign-on access to all advisor tools",
                    "Comprehensive supplier database & contacts",
                    "Marketing resource library & training academy",
                    "Community forums for peer support & networking"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-white/80 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border border-white/10 order-1 lg:order-2 transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="/images/bta_intranet_hub.png" 
                  alt="BTA Intranet Central Hub" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Feature 1: Booking Engine & Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border border-white/10 mb-8">
                  <img 
                    src="/images/booking_engine_ai_render.png" 
                    alt="Global Booking Engine Interface" 
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="font-serif text-3xl md:text-4xl mb-6">Global Booking Engine & Dashboard</h3>
                <p className="text-white/60 text-lg font-light mb-8 leading-relaxed">
                  Empower your clients with a white-labeled booking portal featuring over 2,800 luxury properties. 
                  Manage everything from a centralized dashboard that gives you complete control over bookings, commissions, and client relationships.
                </p>
                <ul className="space-y-4">
                  {[
                    "White-label client portal with your branding",
                    "Access to 2,800+ luxury properties with VIP amenities",
                    "Real-time availability and instant booking",
                    "Centralized dashboard for tracking all commissions"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-white/80 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 2: Integrated Workflow */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="font-serif text-3xl md:text-4xl mb-6">Seamless Workflow Automation</h3>
                <p className="text-white/60 text-lg font-light mb-8 leading-relaxed">
                  Our platform is designed to eliminate busy work. From automatically generated trip intake forms that sync directly 
                  to client records, to Kanban views and Gantt charts for project management.
                </p>
                <ul className="space-y-4">
                  {[
                    "Real-time CRM integration with 2-way sync",
                    "Automated supplier communication & confirmations",
                    "Collaborative tools for advisors, admins, and teams",
                    "Built-in time tracking and project tagging"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-white/80 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border border-white/10 order-1 lg:order-2">
                <img 
                  src="/images/workflow-kanban-glass.png" 
                  alt="Workflow Automation" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Feature 3: Marketing Suite */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-8">
                <img 
                  src="/images/automation_to_hotels_balanced.png" 
                  alt="Automated Hotel Communication" 
                  className="w-full h-auto rounded-sm shadow-2xl border border-white/10"
                />

              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="/images/marketing-suite-collage.png" 
                  alt="Marketing Suite" 
                  className="w-full h-auto rounded-sm shadow-2xl border border-white/10 mb-8"
                />
                <h3 className="font-serif text-3xl md:text-4xl mb-6">Turnkey Marketing Suite</h3>
                <p className="text-white/60 text-lg font-light mb-8 leading-relaxed">
                  Stay top-of-mind without lifting a finger. Access dozens of customizable email templates, 
                  social media assets, and newsletters—all designed to speak in the sophisticated BTA voice.
                </p>
                <ul className="space-y-4">
                  {[
                    "Customizable email & newsletter templates",
                    "Social media content & mood boards",
                    "Automated e-marketing campaigns",
                    "Smart client tagging for targeted outreach"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-white/80 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Iris AI Section */}
      <section className="py-24 md:py-32 bg-white overflow-hidden relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-primary/5 rounded-full blur-3xl" />
              <img 
                src="/images/iris_ai_map_network.png" 
                alt="Iris AI" 
                className="relative z-10 w-full rounded-sm shadow-2xl"
              />
            </div>
            <div>
              <span className="inline-block py-1 px-3 border border-secondary/20 rounded-full text-xs font-medium tracking-[0.2em] text-secondary uppercase mb-6">
                Meet Your New Assistant
              </span>
              <h2 className="font-serif text-5xl md:text-6xl text-secondary mb-8">
                Iris AI Knowledge Base
              </h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">
                Iris isn't just a chatbot—she's a luxury travel expert trained on thousands of BTA data sets. 
                Integrated directly with our drive and intranet, Iris understands the nuances of bespoke planning.
              </p>
              <div className="space-y-6">
                <div className="p-6 bg-secondary/5 border border-secondary/10 rounded-sm">
                  <h4 className="font-serif text-xl text-secondary mb-2">Deep Knowledge Access</h4>
                  <p className="text-sm text-muted-foreground font-light">
                    Instantly retrieve supplier details, training materials, and itinerary templates.
                  </p>
                </div>
                <div className="p-6 bg-secondary/5 border border-secondary/10 rounded-sm">
                  <h4 className="font-serif text-xl text-secondary mb-2">Brand Voice Expert</h4>
                  <p className="text-sm text-muted-foreground font-light">
                    Drafts emails and client communications that perfectly match the BTA tone of voice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap / Coming Soon */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="container text-center">
          <h3 className="font-serif text-3xl text-secondary mb-12">Innovation Never Stops</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Feature 1: Integrated Itinerary Tool */}
            <div className="flex flex-col h-full">
              <div className="bg-white p-8 border border-border shadow-sm flex flex-col items-center mb-8 h-48 justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Coming Soon</span>
                <h4 className="font-serif text-2xl mb-2">Integrated Itinerary Tool</h4>
                <p className="text-muted-foreground font-light text-sm">
                  Build stunning, interactive itineraries directly within the platform.
                </p>
              </div>
              <div className="flex-grow flex items-start justify-center">
                <img 
                  src="/images/itinerary_tool_showcase.png" 
                  alt="Integrated Itinerary Tool Interface" 
                  className="w-full h-auto shadow-lg border border-border/50 rounded-sm"
                />
              </div>
            </div>

            {/* Feature 2: Custom Client App */}
            <div className="flex flex-col h-full">
              <div className="bg-white p-8 border border-border shadow-sm flex flex-col items-center mb-8 h-48 justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Coming Soon</span>
                <h4 className="font-serif text-2xl mb-2">Custom Client App</h4>
                <p className="text-muted-foreground font-light text-sm">
                  A dedicated mobile experience for your travelers to access everything on the go.
                </p>
              </div>
              <div className="flex-grow flex items-start justify-center">
                <img 
                  src="/images/mobile_app_showcase.png" 
                  alt="BTA Mobile App Interface Showcase" 
                  className="w-full h-auto shadow-lg border border-border/50 rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Engine / Integration */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Seamless Integration</span>
              <h2 className="font-serif text-4xl md:text-5xl text-secondary mb-8">
                Your Clients, <br />
                <span className="italic">Your Brand.</span>
              </h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">
                Unlike other host agencies that keep the booking engine separate, BTA integrates 
                luxurytravelclubs.com directly into your workflow.
              </p>
              
              <ul className="space-y-6 mb-10">
                {[
                  "Client-facing portal branded with your agency details",
                  "Wish list functionality for collaborative planning",
                  "Real-time commission tracking on every booking",
                  "Access to VIP amenities (avg. $550 value per stay)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                      <Check size={14} />
                    </div>
                    <span className="text-secondary/80 font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <Button className="bg-secondary text-white hover:bg-secondary/90 rounded-none px-8 py-6 uppercase tracking-widest text-xs font-bold">
                Explore the Booking Engine
              </Button>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative z-10">
                <img 
                  src="/images/luxury-villa-pool.png" 
                  alt="Luxury Booking" 
                  className="w-full shadow-2xl"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-full h-full border border-primary/30 z-0 hidden md:block" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 z-0 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Philanthropy Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-2xl">
                <img 
                  src="/images/philanthropy_impact.png" 
                  alt="BTA Philanthropy Impact" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary p-6 text-white max-w-xs hidden md:block shadow-xl">
                <p className="font-serif text-xl italic">"Travel with purpose, impact the world."</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Giving Back</span>
              <h2 className="font-serif text-4xl md:text-5xl text-secondary mb-6">
                Travel as a Force for <br />
                <span className="italic text-primary">Good.</span>
              </h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-6">
                At BTA, we believe luxury travel should leave a positive footprint. A portion of every booking supports local charities 
                and vital causes, including childhood cancer research, Make-A-Wish, veterans' support, and arts & culture initiatives.
              </p>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">
                We invite our travelers and advisors to actively participate in our philanthropy. Help us select the projects we support, 
                raising hundreds of thousands of dollars to improve the world—one journey at a time.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-secondary font-medium">Childhood Cancer Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-secondary font-medium">Make-A-Wish Foundation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-secondary font-medium">Veterans' Programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-secondary font-medium">Local Community Arts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img 
            src="/images/hero-advisor-tech.png" 
            alt="Background" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="font-serif text-5xl md:text-7xl mb-8">Ready to Elevate Your Business?</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 font-light">
            Join the select group of advisors who are redefining luxury travel through technology and community.
          </p>
          <Button className="bg-primary text-white hover:bg-primary/90 rounded-none px-12 py-8 uppercase tracking-widest text-sm font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-primary/20">
            Apply for Membership
          </Button>
        </div>
      </section>
    </Layout>
  );
}
