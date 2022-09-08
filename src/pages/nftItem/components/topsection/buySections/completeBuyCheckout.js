import React, { useState } from 'react'
import image1 from "../../../../../assets/images/image1.jpg"

function CompleteBuyCheckout({setBuyStep}) {
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
                    <div><div onClick={()=>{setWalletTextfield(true)}} className='btn btn-background text-foreground-primary px-4 float-right normal-case'>Send to a different wallet</div></div>
                    <div><div onClick={()=>{setBuyStep(2)}} className='btn bg-transparent text-foreground-primary px-8 ml-6 mt-6 float-right normal-case'>Complete Purchase</div></div>
                </div>
            </div>
            {walletTextfield?  <div>
                <div className='text-base font-semibold text-foreground-primary pb-4'>Send to a different wallet</div>
                <input type="text" placeholder="eg. 0x21340" class="input text-white input-bordered input-accent bg-transparent w-full " />
            </div>:"" }
           
        </div>
    )
}

export default CompleteBuyCheckout