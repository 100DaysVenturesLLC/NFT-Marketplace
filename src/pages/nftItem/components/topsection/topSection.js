import React from 'react'
import { FaRegHeart } from "react-icons/fa"
import { MdIosShare } from "react-icons/md"
import image1 from "../../../../assets/images/image1.jpg"


function TopSection() {
  return (
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
        <div className='btn btn-background text-foreground-primary'>Buy Now for 81.8 Eth</div>
        <div className='btn secondary-btn-background w-48 ml-4 text-foreground-primary'>Place a Bid</div>
    </div>
</div>
  )
}

export default TopSection