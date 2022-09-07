import React,{useEffect, useState} from 'react'
import NFTCard from '../../../components/Cards/NFTCard';
import getAllNft from '../../../hook/queries/account/getAllNft';
import { useConnectWallet } from "@web3-onboard/react";


const AllNFTs = () => {
    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
    const account =wallet?.accounts[0].address
    const [NftDetails,setNftDetails] = useState()
    const getNftDetails = async() => {
       const response = await getAllNft(account)
       console.log(response,"hello")
       setNftDetails(response)
    }

    useEffect(() => {
      getNftDetails()
    }, [wallet])
    

  return (
 
          <div className="grid grid-cols-4 grid-rows-3 gap-4 pt-12">
          {NftDetails?.data.map((resource, index) => {
            return <NFTCard index={index} resource={resource} />;
          })}
        </div>
  )
}

export default AllNFTs