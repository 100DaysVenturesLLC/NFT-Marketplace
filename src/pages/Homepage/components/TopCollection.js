import React from "react";
import ellipse from "../../../assets/images/Ellipse 5.png";
import ethlogo from "../../../assets/icons/Etherium-icon.png";

const TopCollection = () => {
  return (
    <div className="bg-black lg:py-12 lg:px-24">
      {/* <p className="text-3xl text-white font-bold text-shadow">Top Collection</p> */}
      <div className="grid grid-cols-2 grid-rows-5 items-center">
        <div className=" bg-background-primary justify-between shadow-md flex items-center px-8 py-4 rounded-lg border-1">
          <div className="flex items-center">
            <div className="flex ">
              <div className="text-[#6A8099] text-shadow">1</div>
              <div class="absolute ml-5 w-0.5 h-6 vertical-line"></div>
            </div>
            <div className="flex items-center">
              <img src={ellipse} alt="" className="ml-12" />
              <div className="flex-col ml-6">
                <p className="text-white text-xl text-shadow">Otherdeed</p>
                <div className="flex text-shadow  text-base font-light text-white">
                  Floor price :
                  <img src="" alt="" />
                  946.48
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="bg-[#30A55115]  rounded-lg px-6 py-1">
              <p className="text-success text-xl font-semibond">+122.33%</p>
            </div>
            <div className="bg-[#5C789918] rounded-lg px-6 py-1 mt-2">
              <p className="flex text-white text-xl font-semibond">
                <img src={ethlogo} alt=""  className="mr-2"/>
                946.98
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCollection;
