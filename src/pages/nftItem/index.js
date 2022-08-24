import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa"
import { MdIosShare } from "react-icons/md"
import image1 from "../../assets/images/image1.jpg"
import TopSection from './components/topsection/topSection'
import Overview from './components/overview/overview'
import Bids from './components/bids/bids'
import NftItemCard from '../../components/Card/nftItemCard/nftItemCard'

const sections = [
    { name: "Overview", id: 1 },
    { name: "Properties", id: 2 },
    { name: "Bids", id: 3 },
    { name: "Activity", id: 4 },
]

function NftItem() {
    const [selected, setSelected] = useState("Overview")
    console.log(selected)
    return (
        <div className='px-40 h-full'>
            <div className='mt-14 pb-6 flex flex-row'>
                <div className="basis-1/2 ">
                    <div className='px-14'>
                    <figure className='flex justify-center pb-6'>
                        <img className='w-full' src={image1} alt="pic" />
                    </figure>
                    <div className='pt-6 flex justify-center pb-14'>
                        <div className='w-full h-[80px] bg-[#303f50] backdrop-blur-2xl opacity-90 rounded-2xl p-4 py-3 flex justify-around' >
                            {sections.map((item) => {
                                return (<div onClick={() => { setSelected(item.name) }} className={selected == item.name ? "text-foreground-primary border border-[#9b71d8]  rounded-xl cursor-pointer bg-[#9b71d8] text-base font-bold px-[14px] py-[16px]" : "text-foreground-primary cursor-pointer text-base font-bold px-[14px] py-[16px]"}><div>
                                    {item.name}
                                </div>
                                </div>)
                            })}
                        </div>
                    </div>
                    <div className='pb-10'>
                        {selected==="Overview" && <Overview/>}
                        {selected==="Bids" && <Bids/>}
                    </div>
                    <div className='text-foreground-primary text-shadow text-xl font-semibold pb-10'>More From This Collection</div>
                    <div><NftItemCard/></div>
                    </div>
                </div>
                <div className='px-14 basis-1/2'>
                    <div className='text-sm font-bold text-foreground-primary py-6'>Modernist Masks</div>
                    <div className='text-3xl font-bold text-foreground-primary pb-10'>Cratey's #108</div>
                    <div className='columns-2 pb-6'>
                        <div className='flex border-r'>
                            <div className='w-12 h-12 rounded-full mr-6 bg-gradient-to-r from-[#FD3DCE] to-[#00F0FF]'></div>
                            <div>
                                <div className='text-foreground-primary text-xs font-normal'> Creator</div>
                                <div className='text-foreground-primary text-base font-semibold'>Pransky</div>
                            </div>
                        </div>
                        <div className='flex pl-6'>
                            <div className='w-12 h-12 rounded-full mr-6 bg-gradient-to-r from-[#FD3DCE] to-[#00F0FF]'></div>
                            <div>
                                <div className='text-foreground-primary text-xs font-normal'> Current Owner</div>
                                <div className='text-foreground-primary text-base font-semibold'>Cradle</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between pb-6'>
                        <div className='flex'>
                            <div className='flex text-[#BFCBD9]'><FaRegHeart className='text-xl' /><div className='pl-4'>225</div></div>
                            <div className='flex text-[#BFCBD9] pl-6'><MdIosShare className='text-xl' /><div className='pl-4'>225</div></div>
                        </div>
                    </div>
                    <div className='bg-[#121a23] backdrop-blur-xl w-full h-32 rounded-lg border mb-6'>
                        <div className='columns-2 p-6'>
                            <div>
                                <div className='text-foreground-primary opacity-60 text-xs font-semibold pb-2'>Price</div>
                                <div className='text-foreground-primary text-xl font-semibold pb-2'>81.8 ETH</div>
                                <div className='text-foreground-primary opacity-60 text-xs font-semibold'>$143868</div>
                            </div>
                            <div>
                                <div>
                                    <div className='text-foreground-primary opacity-60 text-xs font-semibold pb-2'>Price</div>
                                    <div className='background-linear-gradient text-foreground-primary text-xl font-semibold pb-2'>0.1 w-ETH</div>
                                    <div className='text-foreground-primary opacity-60 text-xs font-semibold'>by <span>Penguin</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-xs font-semibold text-foreground-primary opacity-60 pb-6'>
                        Last sale price <span className='text-base text-foreground-primary font-semibold pl-2'>81.8 ETH</span>
                    </div>
                    <div className='flex'>
                        <div className='btn btn-background'>Buy Now for 81.8 Eth</div>
                        <div className='btn secondary-btn-background w-48 ml-4'>Place a Bid</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NftItem