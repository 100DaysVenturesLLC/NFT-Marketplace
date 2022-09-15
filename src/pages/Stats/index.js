import React, { useState } from "react";
import Activity from "./components/Activity";
import RankingTable from "./components/RankingTable";

const Stats = () => {
  const [activeTab, setActiveTab] = useState("rankings");

  const tabs = [
    // {
    //   label: "Rankings",
    //   link: "rankings",
    // },
    {
      label: "Activity",
      link: "activity",
    },
  ];

  return (
    <div className="w-full dark:bg-white">
      <section className="container mx-auto px-8 py-16 w-screen min-h-screen max-h-full dark:bg-white ">
        <div className="tabs flex justify-start border-b w-full">
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
        <div className="render-tabs">
          {activeTab === "rankings" && <RankingTable />}
          {activeTab === "activity" && <Activity />}
        </div>
      </section>
    </div>
  );
};

export default Stats;
