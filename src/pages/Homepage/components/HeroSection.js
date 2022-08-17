import React from "react";
import Button from "../../../components/Navbar/Button/Button"; 
import heroimage from "../../../assets/images/NFT Frame Art 1.png";

const HeroSection = () => {
  return (

      <div class="grid lg:grid-cols-2 sm:grid-cols-3 gap-4 my-32 items-center">
        <div>
          <p className="text-5xl font-bold">
            The only NFT <br />
            Marketplace you need
          </p>
          <div className="flex mt-12">
            <Button className="bg-gradient-to-r from-[#23AEE3] via-[#9B71D8] to-[#FD3DCE] text-white font-sm font-bold border-0 outline-0 mr-3">
              Create Collection
            </Button>
            <Button className="explore-marketplace-btn text-white font-sm font-bold border-0 outline-0" >

              Explore Marketplace
            </Button>
          </div>
        </div>
        <div>
          <img src={heroimage} alt="" />
        </div>
      </div>
      );
};

export default HeroSection;
