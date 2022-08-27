import Rectangle from "../../assets/images/Rectangle.jpeg";
import Robo from "../../assets/images/Robo.jpeg";
import { FiUserPlus, FiShare } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import download from "../../assets/images/download.png";
import dot from "../../assets/images/3dot.png";
import { TbCopy } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import twitter from "../../assets/icons/twitter.png";
import ethicon from "../../assets/icons/etherscan.png";
import icon from "../../assets/icons/Vector (2).png";
import Button from "../../components/Button/Button";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdShare } from "react-icons/md";
import Dropdown from "../../components/DropDown";




const Collection = ({ option, setOption, title }) => {
  const [active, setActive] = useState("onsale");
  const [snackopen, setSnackOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("trending");

  const [copyText, setCopyText] = useState("");

  const handleClick = () => {
    setSnackOpen(true);
    toast.success("Copied to clipboard", {
      toastId: "toast-message",
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="collection">
      <div class=" max-w-8xl mx-auto lg:py-32 container lg:px-8  ">
        {/* Pics */}
        <div class="relative pb-40">
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
                <h3 class="text-3xl font-bold pb-3">PROOF Collective</h3>
                <div class="flex pb-6">
                  <p class="font-thin mr-2"> Created by</p>
                  <p class=""> XYZ Official</p>
                </div>
                <p className="text-[#BFCBD9]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus eu
                  <br /> quam venenatis, diam enim dolor, feugiat diam placerat.
                </p>
              </div>
            </div>
            <div className="button-group pt-8 flex ">
              <img src={twitter} className="pr-6" alt="" />
              <img src={ethicon} className="pr-6" alt="" />
              <img src={icon} alt="" />
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

          <div className="w-[380px]  border border-gray-700 rounded-2xl backdrop-blur-lg backdrop-filter ">
            <div className="flex justify-between p-8">
              <div className="">
                <p className="pb-2 font-light text-base text-white">Floor</p>
                <p className="pb-2 font-light text-base text-white">Volume</p>

                <p className="font-light text-base text-white">Items</p>
              </div>

              <div>
                <p className="pb-2 font-semibold text-base text-white">
                  0.07 ETH
                </p>
                <p className="pb-2 font-semibold text-base text-white">
                  3.12 ETH
                </p>
                <p className=" font-semibold text-base text-white">49</p>
              </div>
            </div>
            <div className="border-b-2 border-[#6A8099] w-3/4  "></div>
            <div className="flex justify-between p-8">
              <div className="">
                <p className="pb-2 font-light text-base text-white">
                  Blockchain
                </p>
                <p className="pb-2 font-light text-base text-white">Address</p>
              </div>

              <div>
                <p className="pb-2 font-semibold text-base text-white">
                  Ethereum
                </p>
                <CopyToClipboard>
                  <p className="pb-2 font-semibold text-base text-white">
                    0xae5...e6c2
                  </p>
                  {/* <img src=""  /> */}
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>

        <div className="collections-tab-group">
          <button
            className={
              activeTab === "trending"
                ? "collection-tab-active"
                : "collection-tab-non-active"
            }
            onClick={() => setActiveTab("trending")}
          >
            Trending
          </button>
          <button
            className={
              activeTab === "top"
                ? "collection-tab-active"
                : "collection-tab-non-active"
            }
            onClick={() => setActiveTab("top")}
          >
            Top
          </button>
        </div>

        {/* {activeTab === "trending" && <SingleCollections />}
          {activeTab === "top" && <AllCollectionCard />}
          {activeTab === "art" && <NoItems />}
          {activeTab === "collectibles" && <NoItems />}
          {activeTab === "domainnames" && <NoItems />}
          {activeTab === "music" && <NoItems />}
          {activeTab === "photography" && <NoItems />}
          {activeTab === "sports" && <NoItems />}
          {activeTab === "tradingcards" && <NoItems />}
          {activeTab === "utility" && <NoItems />}
          {activeTab === "virtualworlds" && <NoItems />} */}

        {/* Dropdown */}
        <div className="flex gap-4">
          <Dropdown Option="asdasd" title="asdasd" />
          <Dropdown />
          <Dropdown />
          <Dropdown />
        </div>
      </div>
    </div>
  );
};
export default Collection;
