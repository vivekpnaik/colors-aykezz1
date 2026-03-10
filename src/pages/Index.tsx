import { useState } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import TailoringClasses from "@/components/TailoringClasses";
import AboutSection from "@/components/AboutSection";
import EnquirySection from "@/components/EnquirySection";
import GallerySection from "@/components/GallerySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroAnimation onEnter={() => setShowIntro(false)} />}
      {!showIntro && (
        <div className="scroll-smooth">
          <Navbar />
          <HeroSection />
          <CategoriesSection />
          <TailoringClasses />
          <AboutSection />
          <GallerySection />
          <EnquirySection />
          <FooterSection />
        </div>
      )}
    </>
  );
};

export default Index;
