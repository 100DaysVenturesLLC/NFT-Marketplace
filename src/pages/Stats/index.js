import React, { useState } from 'react'
import Activity from './components/Activity';
import RankingTable from './components/RankingTable';

const Stats = () => {


    const [activeTab, setActiveTab] = useState("rankings");

    const tabs = [
        {
            label: "Rankings",
            link: "rankings"
        },
        {
            label: "Activity",
            link: "activity"
        },
    ]

    return (
        <section className="container mx-auto px-8 py-16 w-screen min-h-screen max-h-full">
            {/* <div className="flex py-4">
                <div class="relative inline-block text-left">
                    <div>
                        <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Options
                            <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="py-1" role="none">
                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                            <form method="POST" action="#" role="none">
                                <button type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            */}
            <div className="tabs flex justify-start border-b w-full">
                {tabs.map((item) => {
                    return (
                        <div className={activeTab === (item.link) ? "border-b-2 border-b-[#23AEE3] pb-3 px-6 cursor-pointer text-[#23AEE3] font-bold" : "pb-3 px-6 cursor-pointer text-white font-bold"} onClick={() => setActiveTab(item.link)}>
                            {item.label}
                        </div>
                    )
                })}
            </div>
            <div className="render-tabs">
                {activeTab === "rankings" && <RankingTable />}
                {activeTab === "activity" && <Activity />}
            </div>
        </section>
    )
}

export default Stats
