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
import NFTCard from "../../components/Cards/NFTCard";
import card_data from "../../mocdata/trendingNFT";
import CollectionCard from "../../components/Cards/CollectionCard";
import { collection_data } from "../../mocdata/collectiondata";
import { collectioncard_data } from "../../mocdata/collectionSpotlight";
import copybutton from "../../assets/images/carbon_copy.png";
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
    <div className="collection max-w-screen dark:bg-white ">
      <div class=" mx-auto lg:py-32 container lg:px-8  ">
        {/* Pics */}
        <div class="relative pb-40">
          <div className="w-full">
            <img
            alt="img"
              src={Rectangle}
              className="h-[275px] w-full rounded-2xl object-cover"
            />
          </div>
          <div className="absolute top-[180px] left-10">
            <img alt="img" src={Robo} className="h-[180px] w-[180px] rounded-2xl" />
          </div>
          <div></div>
        </div>
        <div class="flex justify-between ">
          <div className="ml-10">
            <div className="token-group">
              <div class="text-white dark:text-foreground-secondary">
                <h3 class="text-3xl font-bold pb-3">PROOF Collective</h3>
                <div class="flex pb-6">
                  <p class="font-thin mr-2"> Created by</p>
                  <p class=""> XYZ Official</p>
                </div>
                <p className="text-[#BFCBD9] dark:text-[#121A23]">
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

          <div className="w-[380px]  border border-gray-700 rounded-2xl backdrop-blur-lg backdrop-filter  ">
            <div className="flex justify-between p-8">
              <div className=" font-light text-base text-white dark:text-foreground-secondary">
                <p className="pb-2">Floor</p>
                <p className="pb-2 ">Volume</p>

                <p className="">Items</p>
              </div>

              <div class="font-semibold text-base text-white dark:text-foreground-secondary">
                <p className="pb-2 ">0.07 ETH</p>
                <p className="pb-2 ">3.12 ETH</p>
                <p className=" ">49</p>
              </div>
            </div>
            <div className="px-4">
              <div className="border-b-2 border-[#6A8099] w-full  "></div>
            </div>

            <div className="flex justify-between p-8 items-center">
              <div className="font-light text-base text-white dark:text-foreground-secondary">
                <p className="pb-2 ">Blockchain</p>
                <p className="pb-2 ">Address</p>
              </div>

              <div className="flex flex-col ml-auto font-semibold text-base text-white dark:text-foreground-secondary">
                <p className="pb-2   ml-auto">Ethereum</p>
                <CopyToClipboard>
                  <div className="flex">
                  <p className="font-semibold text-base text-white">
                    0xae5...e6c2
                  </p>
                 
                  <img alt="img" src={copybutton} className="ml-2" />
                  </div>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
        {/* Active Tabs */}
        <div className="collections-tab-group">
          <button
            className={
              activeTab === "trending"
                ? "collection-tab-active "
                : " collection-tab-non-active  dark:border-[#6A8099] dark:border-2 dark:text-[#6A8099]"
            }
            onClick={() => setActiveTab("trending")}
          >
            Trending
          </button>
          <button
            className={
              activeTab === "top"
                ? "collection-tab-active"
                : "collection-tab-non-active dark:border-[#6A8099] dark:border-2 dark:text-[#6A8099]"
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
          <Dropdown setOption={setOption} title="Blockchain" />
          <Dropdown title="Category" />
          <Dropdown title="Sale Type" />
          <Dropdown title="Price Range" />
        </div>

        {/* Card */}
        <div className="grid grid-cols-4 grid-rows-3 gap-4 pt-12">
          {collection_data.map((resource, index) => {
            return <NFTCard index={index} resource={resource} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Collection;
