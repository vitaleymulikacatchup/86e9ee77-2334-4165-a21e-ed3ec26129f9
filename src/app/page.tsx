"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Brain, Cloud, MessageSquare, Settings, Shield, Star, User, Zap } from "lucide-react";

const assetMap: { id: string; url: string; alt?: string }[] = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/10948208/pexels-photo-10948208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A MacBook reflecting vibrant neon lights in a dimly lit room setting."},
  {"id":"about-image","url":"https://images.pexels.com/photos/23496705/pexels-photo-23496705.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Young creative professionals discussing an architectural blueprint in a modern office setting."},
  {"id":"feature-1","url":"https://images.pexels.com/photos/17323801/pexels-photo-17323801.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A modern server room featuring network equipment with blue illumination. Ideal for technology themes."},
  {"id":"feature-2","url":"https://images.pexels.com/photos/17486100/pexels-photo-17486100.png?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Abstract 3D render showcasing a futuristic neural network and AI concept."},
  {"id":"feature-3","url":"https://images.pexels.com/photos/5475786/pexels-photo-5475786.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A tech-savvy individual using a laptop in a neon-lit room, symbolizing cybersecurity."},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Top view of a stylish home office desk with a laptop, planner, and coffee cup, showing hands on a blueprint."},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/7970823/pexels-photo-7970823.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"African American businessman sitting at a desk with folded hands and eyeglasses, engaged in thoughtful consideration."},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Confident businesswoman using her tablet and phone, smiling outdoors in sunlight."},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/8547399/pexels-photo-8547399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Black man concentrating while working on a laptop at a modern office, collaborating with colleagues."},
  {"id":"microsoft-logo","url":"https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Interior view of Microsoft office with logo on wooden wall in Brussels, Belgium."},
  {"id":"google-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},
  {"id":"apple-logo","url":"https://images.pexels.com/photos/9949426/pexels-photo-9949426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Vibrant Apple logo design featuring rainbow colors on a white background."},
  {"id":"amazon-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},
  {"id":"meta-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},
  {"id":"netflix-logo","url":"https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A couple enjoys streaming shows on a large TV in a cozy, brick-walled living room."},
  {"id":"spotify-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},
  {"id":"contact-image","url":"https://images.pexels.com/photos/2451616/pexels-photo-2451616.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Contemporary office reception area with vibrant seating and professional ambiance."}
];

export default function Home() {
  const _heroImage = assetMap.find(a => a.id === "hero-image");
  const heroImageUrl = _heroImage?.url ?? "/public/images/placeholder.webp";
  const heroImageAlt = _heroImage?.alt ?? "Modern technology workspace showcasing innovation and digital transformation";

  const _testimonial1 = assetMap.find(a => a.id === "testimonial-1");
  const testimonial1Url = _testimonial1?.url ?? "/public/images/placeholder.webp";
  const testimonial1Alt = _testimonial1?.alt ?? "professional business woman CEO portrait";

  const _testimonial2 = assetMap.find(a => a.id === "testimonial-2");
  const testimonial2Url = _testimonial2?.url ?? "/public/images/placeholder.webp";
  const testimonial2Alt = _testimonial2?.alt ?? "tech startup founder male professional headshot";

  const _testimonial3 = assetMap.find(a => a.id === "testimonial-3");
  const testimonial3Url = _testimonial3?.url ?? "/public/images/placeholder.webp";
  const testimonial3Alt = _testimonial3?.alt ?? "female CTO technology executive portrait";

  const _testimonial4 = assetMap.find(a => a.id === "testimonial-4");
  const testimonial4Url = _testimonial4?.url ?? "/public/images/placeholder.webp";
  const testimonial4Alt = _testimonial4?.alt ?? "business development manager professional headshot";

  const _microsoftLogo = assetMap.find(a => a.id === "microsoft-logo");
  const microsoftLogoUrl = _microsoftLogo?.url ?? "/public/images/placeholder.webp";

  const _googleLogo = assetMap.find(a => a.id === "google-logo");
  const googleLogoUrl = _googleLogo?.url ?? "/public/images/placeholder.webp";

  const _appleLogo = assetMap.find(a => a.id === "apple-logo");
  const appleLogoUrl = _appleLogo?.url ?? "/public/images/placeholder.webp";

  const _amazonLogo = assetMap.find(a => a.id === "amazon-logo");
  const amazonLogoUrl = _amazonLogo?.url ?? "/public/images/placeholder.webp";

  const _metaLogo = assetMap.find(a => a.id === "meta-logo");
  const metaLogoUrl = _metaLogo?.url ?? "/public/images/placeholder.webp";

  const _netflixLogo = assetMap.find(a => a.id === "netflix-logo");
  const netflixLogoUrl = _netflixLogo?.url ?? "/public/images/placeholder.webp";

  const _spotifyLogo = assetMap.find(a => a.id === "spotify-logo");
  const spotifyLogoUrl = _spotifyLogo?.url ?? "/public/images/placeholder.webp";

  const _contactImage = assetMap.find(a => a.id === "contact-image");
  const contactImageUrl = _contactImage?.url ?? "/public/images/placeholder.webp";
  const contactImageAlt = _contactImage?.alt ?? "Modern tech office reception area";

  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Services", id: "feature" },
            { name: "About", id: "about" },
            { name: "Portfolio", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="TechForward"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Transform Your Business with Technology"
          description="We deliver cutting-edge digital solutions that drive growth, enhance efficiency, and secure your future in the digital landscape."
          tag="Innovation Leaders"
          tagIcon={Zap}
          buttons={[
            { text: "Start Your Journey", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc={heroImageUrl}
          imageAlt={heroImageAlt}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Pioneering Digital Excellence"
          description={[
            "We're a forward-thinking technology company dedicated to transforming businesses through innovative digital solutions and strategic technology partnerships.",
            "Our expertise spans cloud computing, AI integration, cybersecurity, and digital transformation, helping organizations thrive in an increasingly connected world."
          ]}
          buttons={[
            { text: "Our Story", href: "about" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Comprehensive Technology Solutions"
          description="Discover our range of services designed to accelerate your digital transformation and drive measurable business results."
          tag="Our Services"
          tagIcon={Settings}
          features={[
            {
              title: "Cloud Infrastructure",
              description: "Scalable, secure cloud solutions that grow with your business, ensuring high availability and optimal performance.",
              icon: Cloud,
              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "AI & Machine Learning",
              description: "Harness the power of artificial intelligence to automate processes, gain insights, and make data-driven decisions.",
              icon: Brain,
              button: { text: "Explore AI", href: "contact" }
            },
            {
              title: "Cybersecurity Solutions",
              description: "Comprehensive security strategies that protect your digital assets and ensure compliance with industry standards.",
              icon: Shield,
              button: { text: "Secure Now", href: "contact" }
            }
          ]}
          layout="default"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Clients Say"
          description="Real feedback from companies that have transformed their operations with our technology solutions."
          tag="Success Stories"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Chief Technology Officer",
              testimonial: "TechForward transformed our entire infrastructure. Their cloud solutions reduced our operational costs by 40% while improving system reliability. The team's expertise is unmatched.",
              imageSrc: testimonial1Url,
              icon: User
            },
            {
              id: "2",
              name: "Marcus Rodriguez",
              role: "Startup Founder & CEO",
              testimonial: "Working with TechForward was a game-changer. Their AI integration helped us automate key processes and scale rapidly. Professional, innovative, and results-driven.",
              imageSrc: testimonial2Url,
              icon: User
            },
            {
              id: "3",
              name: "Emily Chen",
              role: "Head of Digital Innovation",
              testimonial: "The cybersecurity solutions provided by TechForward gave us peace of mind. Their proactive approach prevented multiple potential threats and ensured our compliance.",
              imageSrc: testimonial3Url,
              icon: User
            },
            {
              id: "4",
              name: "David Kumar",
              role: "VP of Business Development",
              testimonial: "TechForward's digital transformation strategy positioned us ahead of competitors. Their strategic vision and technical execution delivered exceptional ROI.",
              imageSrc: testimonial4Url,
              icon: User
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join hundreds of companies that rely on our technology solutions to drive their digital success."
          tag="Our Partners"
          tagIcon={Award}
          logos={[
            microsoftLogoUrl,
            googleLogoUrl,
            appleLogoUrl,
            amazonLogoUrl,
            metaLogoUrl,
            netflixLogoUrl,
            spotifyLogoUrl
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          tagIcon={MessageSquare}
          title="Ready to Transform Your Business?"
          description="Connect with our technology experts to discuss your digital transformation goals and discover how we can help you achieve them."
          inputPlaceholder="Enter your business email"
          buttonText="Start Conversation"
          termsText="By submitting, you agree to our Privacy Policy and Terms of Service. We'll contact you within 24 hours."
          imageSrc={contactImageUrl}
          imageAlt={contactImageAlt}
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="TechForward"
          columns={[
            {
              items: [
                { label: "Services", href: "feature" },
                { label: "Cloud Solutions", href: "contact" },
                { label: "AI Integration", href: "contact" },
                { label: "Cybersecurity", href: "contact" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "about" },
                { label: "Careers", href: "contact" },
                { label: "Partners", href: "socialProof" }
              ]
            },
            {
              items: [
                { label: "Resources", href: "contact" },
                { label: "Case Studies", href: "testimonial" },
                { label: "Documentation", href: "contact" },
                { label: "Support", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Get Quote", href: "contact" },
                { label: "Schedule Demo", href: "contact" },
                { label: "Consultation", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}