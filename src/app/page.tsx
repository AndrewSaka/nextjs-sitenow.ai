import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import Features from "@/components/features";
import BuiltWith from "@/components/built-with";
import SocialProof from "@/components/social-proof";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Features />
      <BuiltWith />
      <SocialProof />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}
