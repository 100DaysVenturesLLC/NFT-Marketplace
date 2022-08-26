import React, { useState } from 'react'
import Collections from './components/Collections';
import NFTs from './components/NFTs';

const Explore = () => {

    const [activeTab, setActiveTab] = useState("collections");

    const tabs = [
        {
            label: "Collections",
            link: "collections"
        },
        {
            label: "NFTs",
            link: "nft"
        },
        {
            label: "Users",
            link: "users"
        },
    ]

    return (
        <section className="container mx-auto px-32 py-16 w-screen min-h-screen max-h-full">
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
                {activeTab === "collections" && <Collections />}
                {activeTab === "nft" && <NFTs />}
            </div>
        </section>
    )
}

export default Explore
