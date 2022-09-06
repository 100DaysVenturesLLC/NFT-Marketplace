import React from "react";
import CollectionCard from "../../../components/Cards/CollectionCard";
import cards from "./mockdata.json";
import { BiFilterAlt, BiArrowToLeft } from "react-icons/bi";
import bc from "../../../assets/icons/Group(3).png";
import eth from "../../../assets/filter-icons/cib_ethereum.png";
import poly from "../../../assets/filter-icons/polygon-matic-logo 1.png";
import flow from "../../../assets/filter-icons/flow.png";
import solana from "../../../assets/filter-icons/solana-sol-logo 1.png";
import tezos from "../../../assets/filter-icons/Tezos.png";

const Collections = () => {
  return (
    <section className="py-3 ">
      <div class="drawer h-full  ">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content w-full h-full flex flex-col gap-2 dark:bg-white">
          <label
            for="my-drawer"
            class="drawer-button text-white cursor-pointer w-[120px] my-4 font-bold flex justify-between items-center"
          >
            <div className="flex gap-2 items-center">
              <BiFilterAlt />
              Filters
            </div>
            <BiArrowToLeft />
          </label>
          <div className="flex justify-center">
            <div className="grid grid-cols-4 gap-6">
              {cards.map((item) => {
                return <CollectionCard />;
              })}
            </div>
          </div>
        </div>
        <div class="drawer-side ">
          <label for="my-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto bg-[#0C111A] w-80 text-base-content flex flex-col gap-3 dark:bg-white ">
            <form class="flex items-center">
              <label for="simple-search text-white " class="sr-only">
                Search
              </label>
              <div class="relative w-full">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  class="w-full font-bold bg-transparent border text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 dark:text-white"
                  placeholder="Search Collection"
                  required
                />
              </div>
            </form>
            <div class="collapse text-gray-100 text-sm collapse-arrow border border-y-zinc-800 border-x-transparent ">
              <input type="checkbox" class="peer" />
              <div class="collapse-title font-bold flex gap-3 items-center">
                <img src={bc} alt="bc-icon" />
                All Blockchains
              </div>
              <div class="collapse-content flex flex-col gap-4">
                <div className="flex justify-between">
                  <div class="font-bold flex gap-3 items-center">
                    <img src={eth} alt="icon" />
                    Ethereuem
                  </div>
                  <input
                    type="radio"
                    name="radio-6"
                    class="radio bg-grey checked:bg-blue-500"
                  />
                </div>
                <div className="flex justify-between">
                  <div class="font-bold flex gap-3 items-center">
                    <img src={poly} alt="icon" />
                    Polygon
                  </div>
                  <input
                    type="radio"
                    name="radio-6"
                    class="radio bg-grey checked:bg-blue-500"
                  />
                </div>
                <div className="flex justify-between">
                  <div class="font-bold flex gap-3 items-center">
                    <img src={flow} alt="icon" />
                    Flow
                  </div>
                  <input
                    type="radio"
                    name="radio-6"
                    class="radio bg-grey checked:bg-blue-500"
                  />
                </div>
                <div className="flex justify-between">
                  <div class="font-bold flex gap-3 items-center">
                    <img src={solana} alt="icon" />
                    Solana
                  </div>
                  <input
                    type="radio"
                    name="radio-6"
                    class="radio bg-grey checked:bg-blue-500"
                  />
                </div>
                <div className="flex justify-between">
                  <div class="font-bold flex gap-3 items-center">
                    <img src={tezos} alt="icon" />
                    Tezos
                  </div>
                  <input
                    type="radio"
                    name="radio-6"
                    class="radio bg-grey checked:bg-blue-500"
                  />
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Collections;
