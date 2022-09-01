import React from 'react'
import Table from './table/table'
import carbonLight from "../../../../assets/icons/carbonLight.png"
import twitterLight from "../../../../assets/icons/twitterLight.png"
import etherscan from "../../../../assets/icons/etherscanLight.png"

function Overview() {
    return (
        <div>
            <div className='text-foreground-primary text-shadow text-xl font-semibold pb-6'>
                Latest Bids
            </div>
            <div className='pb-14'><Table /></div>
            <div className='w-full  text-white py-6 px-6 bg-[#121a23] backdrop-blur-xl bg-opacity-30  rounded-2xl mb-14'>
                <div className='text-foreground-primary text-shadow text-xl font-semibold pb-6'>
                    About XYZ Official
                </div>
                <div className='text-base font-light pb-6'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                </div>
                <div className='flex pb-2'>
                    <div><img src = {twitterLight} alt="twitter"/></div>
                    <div className='pl-6'><img src={carbonLight} alt="carbon"/></div>
                    <div className='pl-6'><img src={etherscan} alt="etherscan"/></div>
                </div>
            </div>

            <div className='w-full h-[280px] text-white py-6 px-6 bg-[#121a23] bg-opacity-30 backdrop-blur-xl rounded-2xl'>
                <div className='text-foreground-primary text-shadow text-xl font-semibold pb-4'>
                    Details
                </div>
                <div className='flex justify-between pb-4'>
                    <div>Contract Address</div>
                    <div className='text-[#23AEE3] text-base font-semibold'>0xb47e...3bbb</div>
                </div>
                <div className='flex justify-between pb-4'>
                    <div>Token Id</div>
                    <div className='text-base font-semibold'>8399</div>
                </div>
                <div className='flex justify-between pb-4'>
                    <div>Token Standard</div>
                    <div className=' text-base font-semibold'>CryptoPunks</div>
                </div>
                <div className='flex justify-between pb-4'>
                    <div>Blockchain</div>
                    <div className=' text-base font-semibold'>Ethereum</div>
                </div>
                <div className='flex justify-between pb-4'>
                    <div>Creator Earnings</div>
                    <div className=' text-base font-semibold'>0%</div>
                </div>
            </div>
        </div>
    )
}

export default Overview