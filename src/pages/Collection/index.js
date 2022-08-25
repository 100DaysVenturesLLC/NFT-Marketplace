import Rectangle from "../../assets/images/Rectangle.jpeg";
import Robo from "../../assets/images/Robo.jpeg";
import { FiUserPlus, FiShare } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import download from "../../assets/images/download.png";
import dot from "../../assets/images/3dot.png";
import { TbCopy } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import Button from "../../components/Button/Button";
const Collection = () => {
  const [active, setActive] = useState("onsale");
  return (
    <div class="max-w-8xl mx-auto lg:py-32 container lg:px-8  ">
      {/* Pics */}
      <div class="relative mb-40">
        <div className="w-full">
          <img
            src={Rectangle}
            className="h-[275px] w-full rounded-2xl object-cover"
          />
        </div>
        <div className="absolute top-[180px] left-10">
          <img src={Robo} className="h-[180px] w-[180px] rounded-2xl" />
        </div>
        <div></div>
      </div>
      <div class="flex justify-between">
        <div className="ml-10">
          <div className="token-group">
            <div class="text-white">
              <h3 class="font-bold text-[32px]">0x5d8e2c078...52b1</h3>
              <div class="flex">
                <p class="font-thin mr-2"> Created by</p>
                <p class=""> XYZ Official</p>
              </div>
            </div>
          </div>
          <div className="button-group pt-8 flex">
            <Button className="bg-white py-3.5 px-8 rounded-lg mr-6 ">
              <i></i>
              Follow
            </Button>
            <button className="border px-3.5 py-3 rounded-lg mr-6">
              <img src={download}></img>
            </button>
            <button className="border px-3.5 py-3 rounded-lg">
              <img src={dot}></img>
            </button>
          </div>

          {/* <div class="flex flex-row justify-between">
          <div class="mt-[25px]">
            <button class="btn bg-white text-black    w-[147px] h-[48px] ">
              <FiUserPlus class=" w-[22.5px] h-[21px] mr-[2px] " />
              Follow
            </button>
            <button class="btn btn-active btn-ghost ml-[12px]  w-[48px] h-[48px]">
              <FiShare class="stroke-white w-[18px] h-[21px] " />
            </button>
            <button class="btn btn-active btn-ghost ml-[12px] w-[48px] h-[48px] ">
              <BsThreeDots class="stroke-white w-[22.5px] h-[21px]" />
            </button>
          </div>
        </div> */}
        </div>
        <div className="w-[380px] h-[208px] border border-gray-700 rounded-2xl backdrop-blur-lg collection-follow hero-section">
<div>
    <p></p>
</div>
        </div>
       
      </div>
      {/* Followers Box */}

      {/* BUTTONS */}
      <div class=" flex flex-row  w-[697px] h-[42px] justify-evenly ml-[130px] mt-[50px] pb-15 items-center text-[#6A8099]  ">
        <div
          class={
            active === "onsale"
              ? "border-b-2 border-[#6A8099] w-[117px] h-[40px]"
              : "border-b-2 border-red-500 w-[117px] h-[40px]"
          }
        >
          <button class="btn-ghost   ">On Sale</button>
          {/* <hr class="border-[1px]  border-black mt-[2px] w-[117px] hover:bg-white " /> */}
        </div>
        <div class="border-b-2 border-[#6A8099] w-[117px] h-[40px] ">
          <div class="flex flex-row ">
            <button class="btn-ghost  ">Sold</button>
            <p>22</p>
          </div>
          {/* <hr class="border-[1px]  border-black mt-[2px] w-[117px] " /> */}
        </div>
        <div class="border-b-2 border-[#6A8099] w-[117px] h-[40px]">
          <div class="flex flex-row ">
            <button class="btn-ghost ">Owned</button> <p>22</p>
          </div>
          {/* <hr class="border-[1px]  border-black mt-[2px] w-[117px]" /> */}
        </div>
        <div class="border-b-2 border-[#6A8099] w-[117px] h-[40px]">
          <button class="btn-ghost ">Created</button>
          {/* <hr class="border-[1px]  border-black mt-[2px] w-[117px] " /> */}
        </div>
        <div class="border-b-2 border-[#6A8099] w-[117px] h-[40px]">
          <button class="btn-ghost ">Liked</button>
          {/* <hr class="border-[1px]  border-black mt-[2px]  w-[117px]" /> */}
        </div>
        <div class="border-b-2 border-[#6A8099] w-[117px] h-[40px]">
          <button class="btn-ghost mr-[5px] ">Activity</button>
          {/* <hr class="border-[1px]  border-black mt-[2px] w-[117px] " /> */}
        </div>
      </div>
      {/* Dropdown */}
      <div class="ml-[130px] mt-[15px]">
        <div class="dropdown ">
          <label
            tabindex="0"
            class="btn m-1  border-[1px] rounded-lg bg-transparent w-[180px] h-[48px]"
          >
            Blockchain
            <RiArrowDropDownLine class=" w-[22.5px] h-[25px] ml-[2px] " />
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        {/* 2nd */}
        <div class="dropdown ">
          <label
            tabindex="0"
            class="btn m-1  border-[1px] rounded-lg bg-transparent w-[180px] h-[48px]"
          >
            Category
            <RiArrowDropDownLine class=" w-[22.5px] h-[25px] ml-[2px] " />
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        {/* 3rd */}
        <div class="dropdown ">
          <label
            tabindex="0"
            class="btn m-1  border-[1px] rounded-lg bg-transparent w-[180px] h-[48px]"
          >
            Collection
            <RiArrowDropDownLine class=" w-[22.5px] h-[25px] ml-[2px] " />
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        {/* 4th Dropdown */}
        <div class="dropdown ">
          <label
            tabindex="0"
            class="btn m-1  border-[1px] rounded-lg bg-transparent w-[180px] h-[48px]"
          >
            Price Range
            <RiArrowDropDownLine class=" w-[22.5px] h-[25px] ml-[2px] " />
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom text */}
      <div class="mt-[225px]">
        <div class="flex flex-col items-center text-white">
          <h1> No Sale Found</h1>
          <p>We Coudn't find anything for this criteria</p>
        </div>
      </div>
    </div>
  );
};
export default Collection;
