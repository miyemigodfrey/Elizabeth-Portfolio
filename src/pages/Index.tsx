import { lazy, Suspense, useEffect } from "react";
import Lenis from "lenis";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedWork from "@/components/FeaturedWork";
import WorkExperience from "@/components/WorkExperience";
import SkillsSection from "@/components/SkillsSection";
import MetricsSection from "@/components/MetricsSection";
import PlaygroundSection from "@/components/PlaygroundSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GridOverlay from "@/components/GridOverlay";

const Index = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      <GridOverlay />
      <Navigation />
      <HeroSection />
      <FeaturedWork />
      <WorkExperience />
      <SkillsSection />
      <MetricsSection />
      <PlaygroundSection />
      <AboutSection />
      <EducationSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
