import Rectangle from "../../assets/images/Rectangle.jpeg";
import Robo from "../../assets/images/Robo.jpeg";
import { useState, useEffect } from "react";
import twitter from "../../assets/icons/twitter.png";
import ethicon from "../../assets/icons/etherscan.png";
import icon from "../../assets/icons/Vector (2).png";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Dropdown from "../../components/DropDown";
import NFTCard from "../../components/Cards/NFTCard";
import { collection_data } from "../../mocdata/collectiondata";
import copybutton from "../../assets/images/carbon_copy.png";
import getCollection from "../../hook/queries/getCollection";
import { useParams } from "react-router-dom";

const Collection = ({ option, setOption, title, data }) => {
  const [active, setActive] = useState("onsale");
  const [snackopen, setSnackOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("trending");
  const [copyText, setCopyText] = useState("");
  const [collectionDetails, setCollectionDetails] = useState();
  const [collectibles, setCollectibles] = useState();
  const {contractAddress} = useParams();

  const getCollectionDetails = async () => {
    const response = await getCollection(contractAddress)
    setCollectionDetails(response.data);
    setCollectibles(response.data.collectibles)
  }

  useEffect(() => {
    getCollectionDetails()
  }, [])    



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

  return collectionDetails&&(
    <div className="collection max-w-screen dark:bg-white ">
      <div class=" mx-auto lg:py-8 container lg:px-8  ">
        {/* Pics */}
        <div class="relative pb-40">
          <div className="w-full">
            <img
              alt="img"
              src={`https://pixelpark-images.s3.amazonaws.com/${collectionDetails?.bannerImageURI}`}
              className="h-[275px] w-full rounded-2xl object-cover"
            />
          </div>
          <div className="absolute top-[180px] left-10">
            <img alt="img" src={`https://pixelpark-images.s3.amazonaws.com/${collectionDetails?.avatarImageURI}`} className="h-[180px] w-[180px] rounded-2xl object-cover" />
          </div>
          <div></div>
        </div>
        <div class="flex justify-between ">
          <div className="ml-10">
            <div className="token-group">
              <div class="text-white dark:text-foreground-secondary">
                <h3 class="text-3xl font-bold pb-3">{collectionDetails?.name}</h3>
                <div class="flex pb-6">
                  <p class="font-thin mr-2"> Created by</p>
                  <p class="">{collectionDetails?.createdBy}</p>
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
                <p className="pb-2 ">0.07 MATIC</p>
                <p className="pb-2 ">3.12 MATIC</p>
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
          {collectibles.map((resource, index) => {
            return <NFTCard index={index} resource={resource} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Collection;
