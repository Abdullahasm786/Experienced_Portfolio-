import SiteNavigation from "./components/SiteNavigation";
import HeroSection from "./components/HeroSection";
import CareerHighlights from "./components/CareerHighlights";
import AboutSection from "./components/AboutSection";
import CareerTimeline from "./components/CareerTimeline";
import OperationsSystem from "./components/OperationsSystem";
import ProductSupportSection from "./components/ProductSupportSection";
import CaseStudySection from "./components/CaseStudySection";
import SkillsSection from "./components/SkillsSection";
import AwardsSection from "./components/AwardsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import SiteFooter from "./components/SiteFooter";
import NotFound from "./components/NotFound";

export default function App() {
  const p = window.location.pathname;
  if (p !== "/" && p !== "/index.html") return <NotFound />;
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:bg-signal focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
      <SiteNavigation />
      <main>
        <HeroSection />
        <CareerHighlights />
        <AboutSection />
        <CareerTimeline />
        <OperationsSystem />
        <ProductSupportSection />
        <CaseStudySection />
        <SkillsSection />
        <AwardsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
