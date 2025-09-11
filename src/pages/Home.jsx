import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { SkillsSection } from "../components/SkillsSection";
import {  TravelsSection } from "../components/TravelsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Education } from "../components/Education";
import { Performances } from "../components/Performance";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      {/* Background Effects */}

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <Education />
        <SkillsSection />
        <TravelsSection /> 
        <Performances />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};