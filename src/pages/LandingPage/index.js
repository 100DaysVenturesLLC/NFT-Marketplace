import React from "react";
import HeroSection from "./components/HeroSection";
import PopularCategory from "./components/PopularCategory";
import Projects from "./components/Projects";
import RecommendedCreators from "./components/RecommendedCreators";
import TopCollection from "./components/TopCollection";

const LandingPage = () => {
  return (
    <div className=" w-full bg-[#0c111a]">
      <HeroSection />
      <Projects />
      <TopCollection />
      <RecommendedCreators/>
      <PopularCategory/>
      
    </div>
  );
};

export default LandingPage;
