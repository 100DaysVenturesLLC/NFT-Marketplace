import React from 'react'

function TimedAuction({ setStep }) {
    return (
        <div>
            <div className='text-foreground-primary text-shadow text-3xl font-bold pb-4'>
                Timed Auction
            </div>
            <div className='text-foreground-primary text-base font-light pb-6'>
                Enter starting price NFT will be pushed to the top of marketplace
            </div>
            <div className='flex pb-4'>
                <div className='basis-1/2'>
                    <div className='text-base font-semibold text-foreground-primary pb-2'>Method</div>
                    <select className="select border-[#303F50] w-full max-w-xs bg-transparent mb-6" >
                        <option disabled selected>ETH</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    <div className='text-base font-semibold text-foreground-primary pb-2'>Asking Price</div>
                    <select className="select border-[#303F50] w-full max-w-xs bg-transparent mb-6" >
                        <option disabled selected>ETH</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
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
                    <select className="select border-[#303F50] w-full max-w-xs bg-transparent">
                        <option className='text-white' disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
            </div>
            <div>
                <div onClick={() => { setStep(4) }} className='btn btn-background text-foreground-primary px-14'>Confirm</div>
                <div className='btn bg-transparent text-foreground-primary px-14 ml-6'>Cancel</div>
            </div>

        </div>
    )
}

export default TimedAuction