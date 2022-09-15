import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useConnectWallet } from "@web3-onboard/react";
import thoriteImage from "../../assets/images/image 3 (4).png";
import ironImage from "../../assets/images/image 3 (3).png";
import nanoImage from "../../assets/images/image 3 (5).png";
import Button from "../../components/Button/Button";
import { mintNFT,mintDropNFTWithUSDC } from "../../contracts/nftCollection";
import { useSpinner } from "../../context/Spinner";
import { BACKEND_URL } from "../../utils/config/config";
const data = {
  iron: {
    uri: "https://ipfs.io/ipfs/QmPwtXNsfjMSRAkCuTtS3Uj4DKVFH6yTB6KfAyqzKe5myp",
    features:
      "5 Chain Ships,5 Cosmetic Mods,5 Legendary Ships,5 Performance Mod Boosts,Small $STFU Airdrop",
    collection: "0xbb78Eb4a7Ddf49c239eb5ead4E5055C59D52b6C1",
    price:150,
    metadata: {
      name: "STFU: IRON PILOT LICENSE",
      description:
        "5 Chain Ships,5 Cosmetic Mods,5 Legendary Ships,5 Performance Mod Boosts,Small $STFU Airdrop",
      image:
        "https://ipfs.io/ipfs/QmXNmgmMxGwrHqLiN48cPWVQYAL1PkqoyAZ8mpk8CCAbgM",
      attributes: [],
      animation_url:
        "https://ipfs.io/ipfs/QmXSksFtj5Vxc53z3LfGe3HuLrig6psnG9Y58dPrfSWPVb",
      unlockable: false,
      explicit: false,
    },
  },
  thorite: {
    uri: "https://ipfs.io/ipfs/QmSTvHqQfQzPFFCjE6VqftbAoh9dpFBRYMTGVVvGGRgpNL",
    features:
      "10 Chain Ships,10 Cosmetic Mods,10 Legendary Ships,1 Small Asteroid Run,10 Performance Mod Boosts,Medium $STFU Airdrop,On-Chain $Thorite Bonus",
    collection: "0x0F5B11Da3D6fB16d3B9725416CF968D7F0674B39",
    price:350,
    metadata: {
      name: "STFU: THORITE PILOT LICENSE",
      description:
        "10 Chain Ships, 10 Cosmetic Mods, 10 Legendary Ships, 1 Small Asteroid Run, 10 Performance Mod Boosts, Medium $STFU Airdrop, On-Chain $Thorite Bonus",
      image:
        "https://ipfs.io/ipfs/QmYBWCsnzaL2L5oNtb1jESqyktfS3bcQAyXZ8kFiDgSxNb",
      attributes: [],
      animation_url:
        "https://ipfs.io/ipfs/QmSxdszD7yYq1eKJUFp1J2krGTUpTeusfNCWPB9C25NpeR",
      unlockable: false,
      explicit: false,
    },
  },
  nano: {
    uri: "https://ipfs.io/ipfs/QmRvZdeo2QPUrsMSSX5NkKJqU8Lga99oNQHTneJkLDxq8K",
    features:
      "20 Chain Ships,20 Cosmetic Mods,20 Legendary Ships,1 Large Asteroid Run,20 Performance Mod Boosts,Large $STFU Airdrop,On-Chain $Nano Bonus",
    collection: "0x9Fc182a8Ff20f02862634a183cbffC25d8C1f318",
    price:1000,
    metadata: {
      name: "STFU: NANO PILOT LICENSE",
      description:
        "20 Chain Ships,20 Cosmetic Mods,20 Legendary Ships,1 Large Asteroid Run,20 Performance Mod Boosts,Large $STFU Airdrop,On-Chain $Nano Bonus",
      image:
        "https://ipfs.io/ipfs/QmbriC7gbDSX5ud3y1ZwcWnbtU3KxgkqC7wqUU2fq9kWP2",
      attributes: [],
      animation_url:
        "https://ipfs.io/ipfs/QmQFQThd2H4MAWQkxvxAR9TD3i5JquarpTQgxdcsfdpHP4",
      unlockable: false,
      explicit: false,
    },
  },
};
const STFU = ({ option, setOption, title }) => {
  const [{ wallet }] = useConnectWallet();
  const navigate = useNavigate();
  const spinner = useSpinner();
  const [tier, setTier] = useState("iron");
  const account = wallet?.accounts[0].address;

  const handleMint = async () => {
    spinner.setLoadingState(true);
    const response = await mintDropNFTWithUSDC(
      data[tier].collection,
      account
    );
    console.log(response);
    //TODO create backend entry
    const backendPayload = {
      metadata: JSON.stringify(data[tier].metadata),
      contractAddress: data[tier].collection,
      owner: account,
      tokenId: response.tokenId,
    };
    var config = {
      method: "post",
      url: `${BACKEND_URL}/collectibles/create`,
      data: backendPayload,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        spinner.setLoadingState(false);
        navigate(`/collectible/${data[tier].collection}/${backendPayload.tokenId}`);
        toast.success("NFT Created Successfully", { toastId: "toast-message" });
      })
      .catch(function (error) {
        console.log(error);
      });
    spinner.setLoadingState(false);
    toast.success("Minting Successful", {
      toastId: "toast-message",
    });
  };
  useEffect(() => {}, []);

  return (
    <div className="collection max-w-screen min-h-screen">
      <div className="mx-auto lg:py-16 container lg:px-8">
        {/* Pics */}
        <h1 className="text-3xl font-bold text-center text-white">
          Get Your Pilot license now!!
        </h1>
        <div className="card lg:card-side lg:my-16 bg-[#040720] text-white shadow-xl max-w-[800px] min-h-[400px] mx-auto">
          <figure className="w-1/2 bg-[#040720]">
            {tier === "iron" && (
              <img src={ironImage} className="w-3/4" alt="Album" />
            )}
            {tier === "thorite" && (
              <img src={thoriteImage} className="w-3/4" alt="Album" />
            )}
            {tier === "nano" && (
              <img src={nanoImage} className="w-3/4" alt="Album" />
            )}
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title">Get your {tier} license now</h2>
            <p>{data[tier].features}<br/><span className="font-bold	">Price: ${data[tier].price}</span></p>
            <div className="form-control">
              <label className="label cursor-pointer hover:border hover:border-[#FD3DCE]">
                <span className="label-text text-white">Iron Tier</span>
                <input
                  type="radio"
                  name="radio-6"
                  className="radio checked:bg-[#FD3DCE]"
                  checked={tier === "iron"}
                  onChange={() => setTier("iron")}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer hover:border hover:border-[#FD3DCE]">
                <span className="label-text text-white">Thorite Tier</span>
                <input
                  type="radio"
                  name="radio-6"
                  className="radio checked:bg-[#FD3DCE]"
                  checked={tier === "thorite"}
                  onChange={() => setTier("thorite")}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer hover:border hover:border-[#FD3DCE]">
                <span className="label-text text-white">Nano Tier</span>
                <input
                  type="radio"
                  name="radio-6"
                  className="radio checked:bg-[#FD3DCE]"
                  checked={tier === "nano"}
                  onChange={() => setTier("nano")}
                />
              </label>
            </div>
            <div className="card-actions justify-end">
              <Button
                className="bg-gradient-to-r from-[#23AEE3] via-[#9B71D8] to-[#FD3DCE] text-white rounded-lg font-sm font-bold border-0 outline-0 mr-3"
                onClick={handleMint}
              >
                Mint License
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default STFU;
