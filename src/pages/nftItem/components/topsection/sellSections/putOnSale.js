import React from 'react'
import { TbCurrencyDollar } from "react-icons/tb"
import { MdTimer } from "react-icons/md"

function PutOnSale({setStep}) {
  return (
    <div>
    <div className='text-foreground-primary text-shadow text-3xl font-bold pb-6'>
        Put On Sale
    </div>
    <div className='flex justify-between pb-2'>
        <div onClick={() => { setStep(2) }} className='w-[320px] h-[157px] bg-[#303f50] bg-opacity-20 backdrop-blur-2xl rounded-2xl flex flex-col justify-center cursor-pointer'>
            <div className='mx-auto pb-2 text-foreground-primary text-xl'><TbCurrencyDollar /></div>
            <div className='mx-auto text-foreground-primary text-base font semibold'>Fixed Price</div>
        </div>
        <div onClick={() => setStep(3)} className='w-[320px] h-[157px] bg-[#303f50] bg-opacity-20 backdrop-blur-2xl rounded-2xl flex flex-col justify-center cursor-pointer'>
            <div className='mx-auto pb-2 text-foreground-primary text-xl'><MdTimer /></div>
            <div className='mx-auto text-foreground-primary text-base font semibold'>Timed Auction</div>
        </div>
    </div>
</div>
  )
}

export default PutOnSale