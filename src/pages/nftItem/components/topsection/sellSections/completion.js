import React from 'react'
import image1 from "../../../../../assets/images/image1.jpg"
import {FaFacebookF} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaTelegramPlane} from "react-icons/fa"

function Completion() {
    return (
        <div>
            <div className='text-foreground-primary text-shadow text-3xl font-bold pb-6'>
                Your item has been listed
            </div>
            <div className='text-base font-semibold text-foreground-primary pb-6'>Congratulations your ite has been listed</div>
            <div className='flex pb-6'>
                <div className='basis-1/2 flex'>
                    <div> <img className='w-[120px] h-[120px]' src={image1} /></div>
                    <div className='pl-8 pt-8'>
                        <div className='text-sm text-[#23AEE3] font-bold'>Modernist Masks</div>
                        <div className='text-foreground-primary font-semibold'>Crateys #108</div>
                    </div>
                </div>
                <div className='basis-1/2 flex justify-end'>
                    <div className='btn btn-background text-foreground-primary px-14 mt-6 '>View Item</div>
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

export default Completion