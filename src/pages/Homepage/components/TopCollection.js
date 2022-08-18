import React from "react";
import ellipse from "../../../assets/images/Ellipse 5.png";
import ethlogo from "../../../assets/icons/Etherium-icon.png";
import { collection_data } from "./collectiondata";

const TopCollection = () => {
  return (
    <div className="bg-[#0C111A] lg:py-12 lg:px-24">
      <div className="flex items-center justify-between mb-12">
        <p className="text-3xl text-white font-bold text-shadow ">
          Top Collection
        </p>
        <p className="text-background-highlight font-bold text-sm">
          See All Collection
        </p>
      </div>

      <div className="grid grid-cols-2 grid-rows-5  items-center gap-4">
        {collection_data.map((resource, index) => {
          return (
            <div className="collection-card-container justify-between flex items-center px-8 py-4 ">
              <div className="flex items-center">
                <div className="flex ">
                  <div className="text-[#6A8099] text-shadow">1</div>
                  <div class="absolute ml-5 w-0.5 h-6 vertical-line"></div>
                </div>
                <div className="flex items-center">
                  <img src={resource.imageUrl} alt="" className="ml-12" />
                  <div className="flex-col ml-6">
                    <p className="text-white text-xl text-shadow">
                      {resource.title}
                    </p>
                    <div className="flex text-shadow  text-base font-light text-white ">
                      Floor price :
                      <img src="" alt="" />
                      {resource.price}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="rounded-lg px-6 py-1">
                  <p
                    className={
                      resource.rate < 0
                        ? "text-white bg-danger  rounded-lg  text-xl font-semibond "
                        : "bg-success text-xl  rounded-lg  font-semibond"
                    }
                  >
                    {resource.rate}
                  </p>
                </div>
                <div className="bg-[#5C789918] rounded-lg px-6 py-1 mt-2">
                  <p className="flex text-white text-xl font-semibond">
                    <img src={ethlogo} alt="" className="mr-2" />
                    {resource.eth_rate}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopCollection;
