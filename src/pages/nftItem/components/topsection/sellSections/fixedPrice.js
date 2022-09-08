import React, { useState } from 'react'

function FixedPrice({ setStep, setListingData, listingData, create }) {

    return (
        <div>
            <div className='text-foreground-primary text-shadow text-3xl font-bold pb-4'>
                Fixed Price
            </div>
            <div className='text-foreground-primary text-base font-light pb-6'>
                Enter price NFT will be pushed to the top of marketplace
            </div>
            <div className='flex pb-4'>
                <div className='basis-1/2'>
                    <div className='text-base font-semibold text-foreground-primary pb-2'>Price</div>
                    <div class="border-[#303F50] border text-white w-full h-12 rounded-lg max-w-xs bg-transparent mb-6" data-mdb-toggle-button="false">
                        <input onChange={(e) =>
                            setListingData({ ...listingData, price: e.target.value })
                        } type="text"
                            class="w-full h-full bg-transparent text-white px-2"
                            placeholder="Enter amount" data-mdb-toggle="datepicker" />
                    </div>
                    <div className='flex pb-2 justify-between'>
                        <div className='text-xs font-normal text-[#BFCBD9]'>Service Fee</div>
                        <div className=' text-sm font-normal pr-10 text-foreground-primary'>0.025 ETH<span className='pl-2 text-sm font-bold text-foreground-primary'>2.5%</span></div>
                    </div>
                    <div className='flex pb-2 justify-between'>
                        <div className='text-xs font-normal text-[#BFCBD9]'>You Will Receive</div>
                        <div className=' text-sm font-normal pr-10 text-foreground-primary'>$ 1616<span className='pl-2 text-sm font-bold text-foreground-primary'>0.925 ETH</span></div>
                    </div>
                </div>
                <div className='basis-1/2'>
                    <div className='text-base font-semibold text-foreground-primary pb-2'>Duration</div>

                    <div class="flex items-center justify-center">
                        <div class="border-[#303F50] border text-white w-full h-12 rounded-lg max-w-xs bg-transparent mb-6" data-mdb-toggle-button="false">
                            <input type="date"
                                onChange={(e) =>
                                    setListingData({ ...listingData, expirationTime:new Date(e.target.value).getTime() })
                                }
                                class="w-full h-full bg-transparent text-white px-2"
                                placeholder="Select a date" data-mdb-toggle="datepicker" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div onClick={create} className='btn btn-background text-foreground-primary px-14'>Confirm</div>
                <div className='btn bg-transparent text-foreground-primary px-14 ml-6'>Cancel</div>
            </div>

        </div>
    )
}

export default FixedPrice