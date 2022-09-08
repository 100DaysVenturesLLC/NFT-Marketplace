import React from "react";
import Table from "./table/table";
import carbonLight from "../../../../assets/icons/carbonLight.png";
import twitterLight from "../../../../assets/icons/twitterLight.png";
import etherscan from "../../../../assets/icons/etherscanLight.png";

function Overview({metadata,nftData}) {
  return (
    <div>
      <div className="w-full  text-white py-6 px-6 bg-[#121a23] backdrop-blur-xl bg-opacity-30  rounded-2xl mb-14 dark:bg-white ">
        <div className="text-foreground-primary text-shadow text-xl font-semibold pb-6 dark:text-foreground-secondary">
          About {metadata.name}
        </div>
        <div className="text-base font-light pb-6 dark:text-[#121A23]">
          {metadata.description}
        </div>
        <div className="flex pb-2">
          <div>
            <img src={twitterLight} alt="twitter" />
          </div>
          <div className="pl-6">
            <img src={carbonLight} alt="carbon" />
          </div>
          <div className="pl-6">
            <img src={etherscan} alt="etherscan" />
          </div>
        </div>
      </div>

      <div className="w-full h-[280px] text-white py-6 px-6 bg-[#121a23] bg-opacity-30 backdrop-blur-xl rounded-2xl dark:text-[#121A23] dark:bg-white">
        <div className="text-foreground-primary text-shadow text-xl font-semibold pb-4 dark:text-foreground-secondary">
          Details
        </div>
        <div className="flex justify-between pb-4">
          <div>Contract Address</div>
          <div className="text-[#23AEE3] text-base font-semibold">
            {nftData.contractAddress?.slice(0, 6)}..{nftData.contractAddress?.slice(-4)}
          </div>
        </div>
        <div className="flex justify-between pb-4">
          <div>Token Id</div>
          <div className="text-base font-semibold">{nftData.tokenId}</div>
        </div>
        <div className="flex justify-between pb-4">
          <div>Token Standard</div>
          <div className=" text-base font-semibold">CryptoPunks</div>
        </div>
        <div className="flex justify-between pb-4">
          <div>Blockchain</div>
          <div className=" text-base font-semibold">Matic</div>
        </div>
        <div className="flex justify-between pb-4">
          <div>Creator Earnings</div>
          <div className=" text-base font-semibold">0%</div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
