import React from "react";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import RecommendedCreators from "./components/RecommendedCreators";
import TopCollection from "./components/TopCollection";

const Home = () => {
  return (
    <div className=" w-full bg-[#0c111a]">
      <HeroSection />
      <Projects />
      <TopCollection />
      <RecommendedCreators/>
    </div>
  );
};

export default Home;
