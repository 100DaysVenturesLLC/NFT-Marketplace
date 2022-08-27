import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa"
import { MdIosShare } from "react-icons/md"
import image1 from "../../../../assets/images/image1.jpg"
import { TbCurrencyDollar } from "react-icons/tb"
import { MdTimer } from "react-icons/md"
import {FaFacebookF} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaTelegramPlane} from "react-icons/fa"
import loader from "../../../../assets/icons/loader.svg"

function TopSection() {
    const [owner, setOwner] = useState(true)
    const [step, setStep] = useState(1)
    return (
        <div className='px-14 basis-1/2 '>
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
            <div className='bg-[#121a23] backdrop-blur-xl bg-opacity-20 w-full h-32 rounded-lg border mb-6'>
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
            {!owner ? <div><div className='text-xs font-semibold text-foreground-primary opacity-60 pb-6'>
                Last sale price <span className='text-base text-foreground-primary font-semibold pl-2'>81.8 ETH</span>
            </div>
                <div className='flex'>
                    <div className='btn btn-background text-foreground-primary'>Buy Now for 81.8 Eth</div>
                    <div className='btn secondary-btn-background w-48 ml-4 text-foreground-primary'>Place a Bid</div>
                </div></div> : <label htmlFor="my-modal-3" className='btn btn-background text-foreground-primary px-10'>List for Sale</label>}

            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div className="modal bg-blur-2xl">
                <div className="w-[780px] relative bg-[#121A23] py-10 px-12 rounded-2xl">
                    <label onClick={()=>{setStep(1)}} for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {step === 1 &&
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
                    }
                    {step === 2 &&
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
                    }
                    {step === 3 &&
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
                    }
                    {step === 4 &&
                        <div>
                            <div className='text-foreground-primary text-shadow text-3xl font-bold pb-6'>
                                Complete Checkout
                            </div>
                            <div className='flex pb-8'>
                                <div className='pt-4 mr-4'>
                                    <svg aria-hidden="true" class="mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                                    </svg>
                                    <span class="sr-only">Loading...</span>
                                </div>
                                <div>
                                    <div className='text-base font-semibold text-foreground-primary pb-2'> Approve</div>
                                    <div className='text-base font-semibold w-80 font-light text-[#BFCBD9]'> This transaction is conducted only once per collection</div>
                                </div>
                            </div>
                            <div className='flex pb-8'>
                                <div className='pt-2 mr-4'>
                                    <svg aria-hidden="true" class="mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                                    </svg>
                                    <span class="sr-only">Loading...</span>
                                </div>
                                <div>
                                    <div className='text-base font-semibold text-foreground-primary pb-2'> Confirm Listing</div>
                                    <div className='text-base font-semibold w-80 font-light text-[#BFCBD9]'> Sign message to confirm listing</div>
                                </div>
                            </div>
                            <div className='btn bg-transparent text-foreground-primary px-14 ml-6'>Cancel</div>
                        </div>
                    }
                    {step === 5 &&
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
                                    <div className='text-foreground-primary text-xl'><FaFacebookF/></div>
                                    <div className='text-foreground-primary pl-4 text-xl'><FaTwitter/></div>
                                    <div className='text-foreground-primary pl-4 text-xl'><FaTelegramPlane/></div>
                                </div>
                                <div className='basis-1/2 flex justify-end text-base text-[#BFCBD9]'>0x12312314...19sxu32</div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default TopSection