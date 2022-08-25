import React from "react";
import Button from "../../../components/Button/Button";
import heroimage from "../../../assets/images/NFT Frame Art 1.png";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-32 max-h-screen py-32">
      <div class="grid lg:grid-cols-2 sm:grid-cols-3 gap-4  items-center">
        <div>
          <p className="text-5xl text-white font-bold text-shadow">
            The only NFT <br />
            Marketplace you need
          </p>
          <div className="flex mt-12">
            <Button className="bg-gradient-to-r from-[#23AEE3] via-[#9B71D8] to-[#FD3DCE] text-white rounded-lg font-sm font-bold border-0 outline-0 mr-3">
              Create Collection
            </Button>
            <Button className="hero-button text-white font-sm font-bold  rounded-lg">
              Explore Marketplace
            </Button>
          </div>
        </div>
        <div className="flex justify-end">
          <img src={heroimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
