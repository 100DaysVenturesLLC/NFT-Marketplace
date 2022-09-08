import React, { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdIosShare } from "react-icons/md";
import PutOnSale from "./sellSections/putOnSale";
import FixedPrice from "./sellSections/fixedPrice";
import TimedAuction from "./sellSections/timedAuction";
import CompleteCheckout from "./sellSections/completeCheckout";
import Completion from "./sellSections/completion";
//buy section
import CompleteBuyCheckout from "./buySections/completeBuyCheckout";
import CheckoutProcess from "./buySections/checkoutProcess";
import PurchaseProcessing from "./buySections/purchaseProcessing";
import PurchaseComplete from "./buySections/purchaseComplete";
import { useConnectWallet } from "@web3-onboard/react";
import useListNft from "../../../../hook/auth/useListNft";

function TopSection({ metadata, nftData }) {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const [owner, setOwner] = useState(true);
  const [step, setStep] = useState(1);
  const [buyStep, setBuyStep] = useState(1);
  const account = wallet?.accounts[0].address
  const [listingData, setListingData] = useState()

  useEffect(() => {
    setListingData({
      ...listingData,
      contractAddress: nftData?.contractAddress,
      tokenId: nftData?.tokenId,
      listingId: nftData?._id,
      createdBy: account
    })
  }, [nftData])

  // useEffect(() => {
  //   if (listingData) {
  //     console.log("divyanshu bol rha print nhi ho rha", listingData)
  //   }
  // }, [listingData])

  const CreateListing = async () => {
    const response = await useListNft(listingData)
    console.log(response,"ye listing  create ka response hai")
  }



  return (
    <div className="px-14 basis-1/2">
      <div className="sticky top-20">
        <div className="text-sm font-bold text-foreground-primary py-6 dark:text-foreground-secondary">
          Modernist Masks
        </div>
        <div className="text-3xl font-bold text-foreground-primary pb-10 dark:text-foreground-secondary">
          {metadata.name}
        </div>
        <div className="columns-2 pb-6">
          <div className="flex border-r">
            <div className="w-12 h-12 rounded-full mr-6 bg-gradient-to-r from-[#FD3DCE] to-[#00F0FF]"></div>
            <div>
              <div className="text-foreground-primary text-xs font-normal dark:text-[#121A23]">
                Creator
              </div>
              <div className="text-foreground-primary text-base font-semibold dark:text-foreground-secondary">
                {nftData?.createdBy?.slice(0, 6)}..
              </div>
            </div>
          </div>
          <div className="flex pl-6">
            <div className="w-12 h-12 rounded-full mr-6 bg-gradient-to-r from-[#FD3DCE] to-[#00F0FF]"></div>
            <div>
              <div className="text-foreground-primary text-xs font-normal dark:text-[#121A23]">
                Current Owner
              </div>
              <div className="text-foreground-primary text-base font-semibold dark:text-foreground-secondary">
              {nftData?.createdBy?.slice(0, 6)}..
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pb-6">
          <div className="flex">
            <div className="flex text-[#BFCBD9] dark:text-foreground-secondary">
              <FaRegHeart className="text-xl " />
              <div className="pl-4">10</div>
            </div>
            <div className="flex text-[#BFCBD9] dark:text-foreground-secondary pl-6">
              <MdIosShare className="text-xl" />
              <div className="pl-4">225</div>
            </div>
          </div>
        </div>
        <div className="bg-[#121a23] backdrop-blur-xl bg-opacity-20 w-full h-32 rounded-lg border mb-6">
          <div className="columns-2 p-6">
            <div>
              <div className="text-foreground-primary opacity-60 text-xs font-semibold pb-2 dark:text-[#121A23]">
                Price
              </div>
              <div className="text-foreground-primary text-xl font-semibold pb-2 dark:text-foreground-secondary">
                81.8 ETH
              </div>
              <div className="text-foreground-primary opacity-60 text-xs font-semibold dark:text-[#121A23]">
                $143868
              </div>
            </div>
            <div>
              <div>
                <div className="text-foreground-primary opacity-60 text-xs font-semibold pb-2 dark:text-[#121A23]">
                  Price
                </div>
                <div className="background-linear-gradient text-foreground-primary text-xl font-semibold pb-2">
                  0.1 w-ETH
                </div>
                <div className="text-foreground-primary opacity-60 text-xs font-semibold dark:text-[#121A23]">
                  by <span class="dark:text-foreground-secondary">Penguin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {!owner ? (
          <div>
            <div className="text-xs font-semibold text-foreground-primary opacity-60 pb-6 dark:text-[#121A23]">
              Last sale price
              <span className="text-base text-foreground-primary font-semibold pl-2  opacity-100   dark:text-foreground-secondary">
                81.8 ETH
              </span>
            </div>
            <div className="flex">
              <label
                htmlFor="list-for-buy-modal"
                className="btn btn-background text-foreground-primary"
              >
                Buy Now for 81.8 Eth
              </label>
              <div className="btn secondary-btn-background w-48 ml-4 text-foreground-primary dark:text-foreground-secondary">
                Place a Bid
              </div>
            </div>
          </div>
        ) : (
          <label
            htmlFor="list-for-sale-modal"
            className="btn btn-background text-foreground-primary px-10"
          >
            List for Sale
          </label>
        )}

        <input
          type="checkbox"
          id="list-for-sale-modal"
          className="modal-toggle"
        />
        <div className="modal bg-blur-2xl">
          <div className="w-[780px] relative bg-[#121A23] py-10 px-12 rounded-2xl">
            <label
              onClick={() => {
                setStep(1);
              }}
              for="list-for-sale-modal"
              className=" bg-transparent absolute right-14 top-6 text-2xl text-foreground-primary"
            >
              ✕
            </label>
            {step === 1 && <PutOnSale setStep={setStep} setListingData={setListingData} listingData={listingData} />}
            {step === 2 && <FixedPrice setStep={setStep} setListingData={setListingData} listingData={listingData} create={CreateListing} />}
            {step === 3 && <TimedAuction setStep={setStep} setListingData={setListingData} listingData={listingData} />}
            {step === 4 && <CompleteCheckout setStep={setStep} />}
            {step === 5 && <Completion />}
          </div>
        </div>
        <input type="checkbox" id="list-for-buy-modal" className="modal-toggle" />
        <div className="modal bg-blur-2xl">
          <div className="w-[780px] relative bg-[#121A23] py-10 px-12 rounded-2xl">
            <label
              onClick={() => {
                setBuyStep(1);
              }}
              for="list-for-buy-modal"
              className=" bg-transparent absolute right-14 top-6 text-2xl text-foreground-primary"
            >
              ✕
            </label>
            {buyStep === 1 && <CompleteBuyCheckout setBuyStep={setBuyStep} />}
            {buyStep === 2 && <CheckoutProcess setBuyStep={setBuyStep} />}
            {buyStep === 3 && <PurchaseProcessing setStep={setBuyStep} />}
            {buyStep === 4 && <PurchaseComplete setStep={setBuyStep} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
