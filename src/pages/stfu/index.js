import Rectangle from "../../assets/images/Rectangle.jpeg";
import Robo from "../../assets/images/Robo.jpeg";
import { FiUserPlus, FiUpload } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Dropdown from "../../components/DropDown";
import copybutton from "../../assets/images/carbon_copy.png";
import { useConnectWallet } from "@web3-onboard/react";

import fetchAccount from "../../hook/queries/account/fetchAccount";

import thoriteImage from "../../assets/images/image 3 (4).png";
import ironImage from "../../assets/images/image 3 (3).png";
import nanoImage from "../../assets/images/image 3 (5).png";
import Button from "../../components/Button/Button";
import { mintNFT } from "../../contracts/nftCollection";
import { useSpinner } from "../../context/Spinner";
const data = {
  iron: {
    uri: "https://ipfs.io/ipfs/",
    features:
      "5 Chain Ships,5 Cosmetic Mods,5 Legendary Ships,5 Performance Mod Boosts,Small $STFU Airdrop",
    collection: "0x4262a0867b653144794e8eab397d7b6e3e695ea5",
    metadata: {},
  },
  thorite: {
    uri: "https://ipfs.io/ipfs/",
    features:
      "10 Chain Ships,10 Cosmetic Mods,10 Legendary Ships,1 Small Asteroid Run,10 Performance Mod Boosts,Medium $STFU Airdrop,On-Chain $Thorite Bonus",
    collection: "0x4262a0867b653144794e8eab397d7b6e3e695ea5",
    metadata: {},
  },
  nano: {
    uri: "https://ipfs.io/ipfs/",
    features:
      "20 Chain Ships,20 Cosmetic Mods,20 Legendary Ships,1 Large Asteroid Run,20 Performance Mod Boosts,Large $STFU Airdrop,On-Chain $Nano Bonus",
    collection: "0x4262a0867b653144794e8eab397d7b6e3e695ea5",
    metadata: {},
  },
};
const STFU = ({ option, setOption, title }) => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const spinner = useSpinner();
  const [active, setActive] = useState("onsale");
  const [snackopen, setSnackOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [open, setOpen] = useState(false);
  const [copyText, setCopyText] = useState("");
  const [accDetails, setAccDetails] = useState();
  const [tier, setTier] = useState("iron");
  const account = wallet?.accounts[0].address;

  const handleMint = async () => {
    spinner.setLoadingState(true);
    const response = await mintNFT(
      "0x4262a0867b653144794e8eab397d7b6e3e695ea5",
      data[tier].uri,
      account
    );
    spinner.setLoadingState(false);
    toast.success("Minting Successfull", {
      toastId: "toast-message",
    })
  };
  useEffect(() => { }, []);
  const handleClick = () => {
    setSnackOpen(true);
    toast.success("Copied to clipboard", {
      toastId: "toast-message",
    });
  };

  return (
    <div className="collection max-w-screen min-h-screen">
      <div className="mx-auto lg:py-16 container lg:px-8">
        {/* Pics */}
        <h1 className="text-3xl font-bold text-center text-white">
          Get Your Pilot license now!!
        </h1>
        <div className="card lg:card-side lg:my-16 bg-[#040720] text-white shadow-xl max-w-[800px] min-h-[400px] mx-auto">
          <figure className="w-1/2 bg-[#040720]">
            {tier == "iron" && (
              <img src={ironImage} className="w-3/4" alt="Album" />
            )}
            {tier == "thorite" && (
              <img src={thoriteImage} className="w-3/4" alt="Album" />
            )}
            {tier == "nano" && (
              <img src={nanoImage} className="w-3/4" alt="Album" />
            )}
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title">Get your {tier} license now</h2>
            <p>{data[tier].features}</p>
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
