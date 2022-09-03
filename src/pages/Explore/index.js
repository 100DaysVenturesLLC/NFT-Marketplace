import React, { useState } from "react";
import Collections from "./components/Collections";
import NFTs from "./components/NFTs";
import Users from "./components/Users";

const Explore = () => {
  const [activeTab, setActiveTab] = useState("collections");

  const tabs = [
    {
      label: "Collections",
      link: "collections",
    },
    {
      label: "NFTs",
      link: "nft",
    },
    {
      label: "Users",
      link: "users",
    },
  ];

  return (
    <section className="container mx-auto px-8 py-16 w-screen min-h-screen max-h-full dark:bg-white">
      <div className="tabs flex justify-start border-b w-full ">
        {tabs.map((item) => {
          return (
            <div
              className={
                activeTab === item.link
                  ? "border-b-2 border-b-[#23AEE3] pb-3 px-6 cursor-pointer text-[#23AEE3] font-bold"
                  : "pb-3 px-6 cursor-pointer text-white font-bold dark:text-foreground-secondary"
              }
              onClick={() => setActiveTab(item.link)}
            >
              {item.label}
            </div>
          );
        })}
      </div>
      <div className="render-tabs ">
        {activeTab === "collections" && <Collections />}
        {activeTab === "nft" && <NFTs />}
        {activeTab === "users" && <Users />}
      </div>
    </section>
  );
};

export default Explore;
