import { Navbar } from "@/components/ui/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";
import type { Service } from "@/components/sections/ServicesSection";

export default function Home() {
  const businessName = "Bin Medic+";
  const phone = "+1 825-882-2226";
  const email = "info@binmedic.ca";

  // Custom services for garbage bin cleaning
  const services: Service[] = [
    {
      id: "1",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      title: "Residential Bin Cleaning",
      description: "Keep your home's garbage and recycling bins fresh and sanitary. We clean, sanitize, and deodorize your bins right at your curb.",
      price: "From $15",
      href: "#contact"
    },
    {
      id: "2",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Commercial Bin Cleaning",
      description: "Professional bin cleaning services for businesses, restaurants, apartment buildings, and commercial properties. Keep your premises clean and odor-free.",
      price: "Custom Quote",
      href: "#contact"
    },
    {
      id: "3",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "One-Time Deep Clean",
      description: "Need a one-time deep clean for your bins? Perfect for move-ins, spring cleaning, or getting rid of stubborn odors and buildup.",
      price: "From $25",
      href: "#contact"
    },
    {
      id: "4",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Monthly Subscriptions",
      description: "Set it and forget it! Regular monthly cleaning keeps your bins fresh year-round. Save money with our subscription plans.",
      price: "From $12/mo",
      href: "#contact"
    },
    {
      id: "5",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Sanitization Service",
      description: "High-pressure washing with eco-friendly sanitizers eliminates 99.9% of bacteria, germs, and viruses from your bins.",
      price: "Included",
      href: "#contact"
    },
    {
      id: "6",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Deodorizing Treatment",
      description: "Say goodbye to unpleasant odors! Our special deodorizing treatment leaves your bins smelling fresh and clean.",
      price: "Included",
      href: "#contact"
    }
  ];

  return (
    <>
      <Navbar
        logo={{
          text: businessName,
          href: "#"
        }}
        links={[
          { label: "Home", href: "#" },
          { label: "Services", href: "#services" },
          { label: "About", href: "#about" },
          { label: "Why Choose Us", href: "#why-choose-us" },
          { label: "Contact", href: "#contact" }
        ]}
        cta={{
          label: "Get a Quote",
          href: "#contact"
        }}
      />

      <main>
        <HeroSection
          businessName={businessName}
          headline="Calgary's Premier Garbage Bin Cleaning Service"
          subheadline="Professional, eco-friendly bin cleaning that eliminates odors, bacteria, and germs. Keep your home or business fresh and sanitary with our convenient curbside service."
          ctaText="Schedule Cleaning"
          ctaHref="#contact"
          secondaryCtaText="View Services"
          secondaryCtaHref="#services"
        />

        <ServicesSection
          businessName={businessName}
          headline="Our Cleaning Services"
          subheadline="From one-time deep cleans to monthly subscriptions, we offer flexible cleaning solutions for homes and businesses throughout Calgary."
          services={services}
        />

        <AboutSection
          businessName={businessName}
          headline="Keeping Calgary Clean, One Bin at a Time"
          story="Bin Medic+ was founded with a simple mission: to provide Calgary residents and businesses with a convenient, affordable solution to one of life's messiest problems - dirty, smelly garbage bins. What started as a local service has grown into Calgary's most trusted bin cleaning company."
          mission="We use high-pressure, hot water cleaning systems and eco-friendly sanitizers to eliminate 99.9% of bacteria, viruses, and odors from your bins. Our service is convenient (we come to you), affordable, and environmentally responsible. We reclaim and filter all wastewater to protect Calgary's environment."
          stats={[
            { value: "5,000+", label: "Bins Cleaned" },
            { value: "100%", label: "Eco-Friendly" },
            { value: "99.9%", label: "Bacteria Eliminated" },
            { value: "Calgary", label: "Proudly Local" }
          ]}
          ctaText="Get Started Today"
          ctaHref="#contact"
        />

        <WhyChooseUsSection
          businessName={businessName}
          headline="Why Choose Bin Medic+?"
          reasons={[
            {
              id: "1",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Convenient Curbside Service",
              description: "We come to you on your regular trash day. Just leave your empty bins at the curb and we'll clean them while you're at work or relaxing at home."
            },
            {
              id: "2",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Eco-Friendly Process",
              description: "We use biodegradable, eco-friendly cleaning products and reclaim all wastewater. Our process is safe for your family, pets, and the environment."
            },
            {
              id: "3",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Affordable Pricing",
              description: "Quality service at prices that won't break the bank. Save even more with our monthly subscription plans and enjoy consistently clean bins year-round."
            },
            {
              id: "4",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: "Professional Results",
              description: "High-pressure hot water cleaning eliminates stubborn grime, bacteria, and odors. Your bins will look and smell like new after every cleaning."
            }
          ]}
        />

        <ContactSection
          businessName={businessName}
          phone={phone}
          email={email}
          address="Serving Calgary and surrounding areas, AB"
          businessHours={[
            { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
            { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
            { day: "Sunday", hours: "Closed" }
          ]}
        />
      </main>

      <FooterSection
        businessName={businessName}
        phone={phone}
        email={email}
        address="Calgary, Alberta"
        links={[
          { label: "Home", href: "#" },
          { label: "Services", href: "#services" },
          { label: "About", href: "#about" },
          { label: "Why Choose Us", href: "#why-choose-us" },
          { label: "Contact", href: "#contact" }
        ]}
        serviceLinks={[
          { label: "Residential Cleaning", href: "#services" },
          { label: "Commercial Cleaning", href: "#services" },
          { label: "One-Time Service", href: "#services" },
          { label: "Monthly Plans", href: "#services" }
        ]}
        socialLinks={{
          facebook: "https://facebook.com/binmedicplus",
          instagram: "https://instagram.com/binmedicplus"
        }}
      />
    </>
  );
}
