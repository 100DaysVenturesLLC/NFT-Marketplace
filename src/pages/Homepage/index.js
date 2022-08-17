import React from "react";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import TopCollection from "./components/TopCollection";

const Home = () => {
  return (
    <div className=" w-full">
      <HeroSection />
      <Projects />
      <TopCollection />
    </div>
  );
};

export default Home;
