import SnNavbar from "@/components/staging/sn-navbar";
import SnHero from "@/components/staging/sn-hero";
import SnSteps from "@/components/staging/sn-steps";
import SnLiveDemo from "@/components/staging/sn-live-demo";
import SnMeet from "@/components/staging/sn-meet";
import SnShowcase from "@/components/staging/sn-showcase";
import SnTestimonials from "@/components/staging/sn-testimonials";
import SnFinalCta from "@/components/staging/sn-final-cta";
import SnFaq from "@/components/staging/sn-faq";
import SnFooter from "@/components/staging/sn-footer";
import "./staging.css";

export default function StagingPage() {
  return (
    <>
      {/* Font Awesome for icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      {/* Extra fonts for SiteMock specimens */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Instrument+Serif:ital@0;1&display=swap"
      />
      <div>
        <SnNavbar />
        <SnHero />
        <SnSteps />
        <SnLiveDemo />
        <SnMeet />
        <SnShowcase />
        <SnTestimonials />
        <SnFinalCta />
        <SnFaq />
        <SnFooter />
      </div>
    </>
  );
}
