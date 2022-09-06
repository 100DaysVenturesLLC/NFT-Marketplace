import React, { useEffect, useState } from "react";
import image1 from "../../assets/images/image1.jpg";
import TopSection from "./components/topsection/topSection";
import Overview from "./components/overview/overview";
import Bids from "./components/bids/bids";
import Properties from "./components/properties/properties";
import Activity from "./components/activity/activity";
import NftItemCard from "../../components/Card/nftItemCard/nftItemCard";
import { collectioncard_data } from "../../mocdata/collectionSpotlight";
import Carousel from "react-multi-carousel";
import { useNavigate, useParams } from "react-router-dom";
import { BACKEND_URL } from "../../utils/config/config";
import axios from "axios";

const sections = [
  { name: "Overview", id: 1 },
  { name: "Properties", id: 2 },
  { name: "Bids", id: 3 },
  { name: "Activity", id: 4 },
];
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function NftItem() {
  const [selected, setSelected] = useState("Overview");
  const [metadata, setMetadata] = useState({});
  const [nftData, setNftData] = useState({});
  const navigate = useNavigate();
  const { contractAddress, tokenId } = useParams();
  const fetchNFTData = async () => {
    if (contractAddress && tokenId) {
      const { data } = await axios.get(
        `${BACKEND_URL}/collectibles/details/${contractAddress}/${tokenId}`
      );
      if (data) {
        console.log(JSON.parse(data.data.metadata));
        setNftData(data.data);
        setMetadata(JSON.parse(data.data.metadata));
      } else alert("asset not found");
    } else {
      navigate("/404");
    }
  };
  useEffect(() => {
    fetchNFTData();
  }, []);
  return (
    <div className="nft-item-center dark:bg-white">
      <div className="px-40 h-full nft-item ">
        <div className="pt-14 pb-6 flex flex-row ">
          <div className="basis-1/2 ">
            <div className="px-14">
              <figure className="flex justify-center pb-6 ">
                <img className="w-full" src={metadata.image} alt="pic" />
              </figure>
              <div className="pt-6 flex justify-center pb-14">
                <div className="w-full h-[80px] bg-[#303f50] backdrop-blur-2xl bg-opacity-20 rounded-2xl p-4 py-3 flex justify-around">
                  {sections.map((item) => {
                    return (
                      <div
                        onClick={() => {
                          setSelected(item.name);
                        }}
                        className={
                          selected == item.name
                            ? "text-foreground-primary border border-[#9b71d8]  rounded-xl cursor-pointer bg-[#9b71d8] text-base font-bold px-[14px] py-[16px]"
                            : "text-foreground-primary cursor-pointer text-base font-bold px-[14px] py-[16px] "
                        }
                      >
                        <div>{item.name}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="pb-10">
                {selected === "Overview" && <Overview />}
                {selected === "Bids" && <Bids />}
                {selected === "Properties" && <Properties />}
                {selected === "Activity" && <Activity />}
              </div>
              <div className="text-foreground-primary text-shadow text-xl font-semibold pb-10 dark:text-foreground-secondary">
                More From This Collection
              </div>
            </div>
          </div>
          <div>
            <TopSection metadata={metadata} nftData={nftData}/>
          </div>
        </div>
        <div className="grid grid-cols-1  items-center  pl-12 ">
          <Carousel responsive={responsive}>
            {collectioncard_data.map((resource, index) => {
              return <NftItemCard />;
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default NftItem;
