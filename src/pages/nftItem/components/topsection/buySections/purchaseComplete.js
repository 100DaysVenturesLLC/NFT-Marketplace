import React, { useState } from 'react'
import image1 from "../../../../../assets/images/image1.jpg"
import {FaFacebookF} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaTelegramPlane} from "react-icons/fa"

function PurchaseComplete({setBuyStep}) {
    const [walletTextfield, setWalletTextfield] = useState(false)
    return (
        <div>
            <div className='text-foreground-primary text-shadow text-3xl font-bold pb-6'>
                Complete Checkout
            </div>
            <div className='flex pb-6'>
                <div className='basis-1/2 flex'>
                    <div> <img className='w-[120px] h-[120px]' src={image1} alt="img" /></div>
                    <div className='pl-8 '>
                        <div className='text-sm text-[#23AEE3] font-bold pb-6'>Modernist Masks</div>
                        <div className='text-foreground-primary font-semibold pb-2'>Crateys #108</div>
                        <div className='text-base font-semibold background-linear-gradient'>0.001 MATIC</div>
                    </div>
                </div>
                <div className='basis-1/2 flex flex-col justify-end'>
                    <div><div onClick={()=>{setWalletTextfield(true)}} className='btn btn-background text-foreground-primary px-10 float-right normal-case'>List for sale</div></div>
                    <div><div onClick={()=>{setBuyStep(2)}} className='btn bg-transparent text-foreground-primary px-11 ml-6 mt-6 float-right normal-case'>View Item</div></div>
                </div>
            </div>
            <div className='basis-1/2 text-base font-light text-[#BFCBD9] pb-4'>Share</div>
            <div className='flex'>
                <div className='flex basis-1/2'>
                    <div className='text-foreground-primary text-xl'><FaFacebookF /></div>
                    <div className='text-foreground-primary pl-4 text-xl'><FaTwitter /></div>
                    <div className='text-foreground-primary pl-4 text-xl'><FaTelegramPlane /></div>
                </div>
                <div className='basis-1/2 flex justify-end text-base text-[#BFCBD9]'>0x12312314...19sxu32</div>
            </div>
           
        </div>
    )
}

export default PurchaseComplete