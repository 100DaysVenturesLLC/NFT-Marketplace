import React, { useEffect, useState } from 'react'
import NFTCard from '../../../components/Cards/NFTCard';
import getAllNft from '../../../hook/queries/account/getAllNft';
import { useConnectWallet } from "@web3-onboard/react";


const AllNFTs = ({NftDetails}) => {


  return (

    <div className="grid grid-cols-4 gap-4 pt-12 h-auto">
      {NftDetails?.data.map((resource, index) => {
        return <NFTCard index={index} resource={resource} />;
      })}
      {!NftDetails?.data.length&&<div className="text-white">No NFTs Found</div>}
    </div>
  )
}

export default AllNFTs