
import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import upload from "../../assets/images/upload.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import overlay from "../../assets/images/Ellipse 3.png";
import Dropdown from "../../components/DropDown";
import { useWeb3React } from "@web3-react/core";
import lock from "../../assets/icons/lock.png";
import Toggle from "../../components/ToggleButton";
import PutOnSale from "../nftItem/components/topsection/sellSections/putOnSale";
import CreateCollection from "./components/CreateCollection";
import { create } from "ipfs-http-client";
import { CollectionAddress } from "../../utils/constants/constants";
import { mintNFT } from "../../contracts/nftCollection";
import { useConnectWallet } from "@web3-onboard/react";
import useCreateNft from "../../hook/auth/useCreateNFT";
import { BACKEND_URL } from "../../utils/config/config";
import axios from "axios";


const projectId = "2E7kseWOlNiuhKeOt2dGpkYRhT2";
const projectSecret = "287cf1e138ac39c18b1f38b12463ceef";
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");
const ipfs = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

const CreateNFT = () => {
  const [addproperty, setAddProperty] = useState();
  const [counter, setCounter] = useState(1);
  const [level, setLevel] = useState(1);
  const [stats, setStats] = useState(1);
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false)
  const [fileUrl, setFileUrl] = useState(null);
  const [fileImage, setFileImage] = useState()
  const [formValues, setFormValues] = useState([]);
  const [formLevelsValues, setFormLevelsValues] = useState([]);
  const [userCollections,setUserCollections] =useState();
  const [selectedCollection, setSelectedCollection] = useState(0);
  const [formStatsValues, setFormStatsValues] = useState([]);
  const [formInput, updateFormInput] = useState({
    externallink: "",
    name: "",
    description: "",
  });
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const navigate = useNavigate()

  const account = wallet?.accounts[0].address



  async function mintnft(collection, url) {
    console.log("checking 3 parameters", collection, url,);
    const {receipt,tokenId} = await mintNFT(collection, url, account);
    console.log(receipt);
    return tokenId
  }

  async function onChange(e) {
    const file = e.target.files[0];
    setFileImage(URL.createObjectURL(file));
    let ipfsResponse;
    try {
      ipfsResponse = await ipfs.add(file);
      console.log("response on IPFS success", ipfsResponse);
    } catch (e) {
      console.log("error during ipfs upload", e);
    }
    const url = `https://ipfs.io/ipfs/${ipfsResponse.path}`;
    setFileUrl(url);
  }

  async function selectImage1(e) {
    const file = e.target.files[0];
    setFileImage(URL.createObjectURL(file));

    let ipfsResponse;
    try {
      ipfsResponse = await ipfs.add(file);
      console.log("response on IPFS success", ipfsResponse);
    } catch (e) {
      console.log("error during ipfs upload", e);
    }
    const url = `https://ipfs.io/ipfs/${ipfsResponse.path}`;
    setFileUrl(url);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { trait_type: "", value: "" }]);
  };
  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addLevelsFields = () => {
    setFormLevelsValues([...formLevelsValues, { trait_type: "", value: "" }]);
  };
  let handleLevelsChange = (i, e) => {
    let newFormLevelsValues = [...formLevelsValues];
    newFormLevelsValues[i][e.target.name] = e.target.value;
    setFormLevelsValues(newFormLevelsValues);
  };

  let addStatsFields = () => {
    setFormStatsValues([...formStatsValues, { trait_type: "", value: "" }]);
  };
  let handleStatsChange = (i, e) => {
    let newFormStatsValues = [...formStatsValues];
    newFormStatsValues[i][e.target.name] = e.target.value;
    setFormStatsValues(newFormStatsValues);
  };

  const [explicitCheck, setExplicitCheck] = useState(false);
  const handleToggleExplicitCheck = () => {
    setExplicitCheck(!explicitCheck);
  };
  const [unlockableCheck, setUnlockableCheck] = useState(false);
  const handleToggleUnlockableCheck = () => {
    setUnlockableCheck(!unlockableCheck);
  };


  async function createData() {
    try {
      const { name, description } = formInput;

      if (!name || !description || !fileUrl) return;
      /* first, upload to IPFS */

      if (formLevelsValues.length !== 0) {
        Array.prototype.push.apply(formValues, formLevelsValues);
      }
      if (formStatsValues.length != 0) {
        Array.prototype.push.apply(formValues, formStatsValues);
      }

      /* Checkboxes */

      const data = {
        name,
        description,
        image: fileUrl,
        attributes: [...formValues],
        unlockable: unlockableCheck,
        explicit: explicitCheck,
      };
      

      console.log("ye create karne ka data hai", data);
      let ipfsResponse = await ipfs.add(JSON.stringify(data));
      const url = `https://ipfs.io/ipfs/${ipfsResponse.path}`;
      /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
      console.log(url);
      const {contractAddress} = userCollections[selectedCollection]
      const tokenId = await mintnft(contractAddress, url);
      const backendPayload = {
        metadata: JSON.stringify(data),
        contractAddress,
        owner: account,
        tokenId
      }
      var config = {
        method: 'post',
        url: `${BACKEND_URL}/collectibles/create`,
        data: backendPayload
      };

      axios(config)
        .then(function (response) {
          console.log(response.data);
          setFileUrl(null)
          navigate(`/collectible/${contractAddress}/${tokenId}`)
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }
  const fetchUserCollections = async () =>{
    const response = await axios.get(`${BACKEND_URL}/account/collections/${account}`)
    console.log(response.data.data)
    setUserCollections(response.data.data)
  }
  useEffect(()=>{
    if(wallet){
      //TODO fetch collections for this user
      fetchUserCollections()
    }
  },[wallet])

  return (
    <div className="createnft dark:bg-white">
      <div className="container mx-auto">
        <div className="pl-60  lg:py-16 flex flex-col">
          <p className="text-3xl text-white font-bold text-shadow ">
            Create NFT
          </p>
          <div className="flex ">
            <div className="columns-2xl mr-5">
              <p className="font-semibold text-xl text-white mt-12 mb-2">
                Upload file
              </p>
              <div class="flex flex-col justify-center items-center">
                <div class="flex items-center justify-start w-full">
                  {fileImage ?
                    <label className="flex flex-col w-full h-[330px] box-border border-2 rounded-lg border-dashed border-gray-500">
                      <label htmlFor="upload-document">
                        <input
                          class="hidden"
                          id="upload-document"
                          name="upload-document"
                          type="file"
                          onChange={selectImage1}
                        />
                        <img
                          className="w-full h-[327px] rounded-lg object-cover cursor-pointer"
                          src={fileImage}
                          alt=""
                        />
                      </label></label>
                    :
                    <label class="flex flex-col w-full h-[330px] box-border border-2 rounded-lg border-dashed border-gray-500">
                      <div class="flex flex-col place-items-center justify-center mt-32">
                        <div className="btn bg-white text-black px-8 py-2 font-bold text-sm">
                          Choose File
                        </div>
                        <p className="mt-12 text-white text-base font-semibold">
                          Files Supported
                        </p>
                        <p className="text-[#BFCBD9] font-light text-base">
                          JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF
                        </p>
                      </div>
                      <input type="file" class="opacity-0" id="upload-photo" onChange={onChange} />
                    </label>
                  }
                </div>
              </div>
              <div className="flex flex-col mt-16">
                <div className="flex flex-col ">
                  <label className="text-base text-white font-semibold  mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered w-full text-white bg-[#0C111A] border border-gray-500"
                    onChange={(e) =>
                      updateFormInput({ ...formInput, name: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col mt-16">
                  <label className="text-base text-white font-semibold  mb-2">
                    Description{" "}
                    <font className="text-color-[#BFCBD9] font-normal text-base">
                      (Optional)
                    </font>{" "}
                  </label>
                  <textarea
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded-lg transition bg-[#0c111a] ease-in-out m-0 focus:text-gray-700  focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlTextarea1"
                    rows={6}
                    placeholder="Your message"
                    onChange={(e) =>
                      updateFormInput({ ...formInput, description: e.target.value })
                    }
                  ></textarea>
                </div>
                <div className="flex flex-col mt-10">
                  <label className="text-base text-white font-semibold  mb-2">
                    Collection
                  </label>
                  <Dropdown options={userCollections} setSelectedIndex={setSelectedCollection} selectedIndex={selectedCollection} />
                  <label onClick={() => setOpen(true)} htmlFor="my-modal-3" className="flex flex-end justify-end text-background-highlight font-bold text-sm mt-2">
                    Create Collection
                  </label>
                </div>
              </div>
              <div className=" mt-24">
                <div className="flex">
                  <label className="text-base text-white font-semibold  mb-2">
                    Properties
                    <font className="color-[#BFCBD9] font-normal text-base  ml-2">
                      (Optional)
                    </font>
                  </label>
                </div>
                <div className="">
                  {formValues.map((element, index) => {
                    return (
                      <div className="flex gap-2 mb-4">
                        <input
                          type="text"
                          placeholder="Type here"
                          class="input input-bordered w-full text-sm bg-[#0C111A] text-white  border border-gray-500"
                          name="trait_type"
                          value={element.trait_type || ""}
                          onChange={(e) => handleChange(index, e)}
                        />
                        <input
                          type="text"
                          placeholder="Type here"
                          class="input input-bordered w-full text-sm  bg-[#0C111A] text-white border border-gray-500"
                          name="value"
                          value={element.value || ""}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </div>
                    );
                  })}
                </div>

                <Button
                  className="text-white border-1 mb-10"
                  onClick={addFormFields}
                >
                  Add More Property
                </Button>
              </div>

              <div>
                <div className="flex">
                  <label className="text-base text-white font-semibold  mb-2">
                    Levels
                    <font className="color-[#BFCBD9] font-normal text-base ml-2">
                      (Optional)
                    </font>
                  </label>
                </div>
                <div className="">
                  {formLevelsValues.map((element, index) => {
                    return (
                      <div className="flex gap-2 mb-4">
                        <input
                          type="text"
                          placeholder="Type here"
                          class="input input-bordered w-full text-sm bg-[#0C111A] text-white  border border-gray-500"
                          name="trait_type"
                          value={element.trait_type || ""}
                          onChange={(e) => handleLevelsChange(index, e)}
                        />
                        <input
                          type="text"
                          placeholder="Type here"
                          class="input input-bordered w-full text-sm  bg-[#0C111A] text-white border border-gray-500"
                          name="value"
                          value={element.value || ""}
                          onChange={(e) => handleLevelsChange(index, e)}
                        />
                      </div>
                    );
                  })}
                </div>
                <Button
                  className="text-white border-1 mb-10 px-10"
                  onClick={addLevelsFields}
                >
                  Add More Levels
                </Button>
              </div>

              <div>
                <div className="flex">
                  <label className="text-base text-white font-semibold  mb-2">
                    Stats
                    <font className="color-[#BFCBD9] font-normal text-base ml-2">
                      (Optional)
                    </font>
                  </label>
                </div>
                <div className="">
                  {formStatsValues.map((element, index) => {
                    return (
                      <div className="flex gap-2 mb-4">
                        <input
                          type="text"
                          placeholder="Type here"
                          class="input input-bordered w-full text-sm bg-[#0C111A] text-white  border border-gray-500"
                          name="trait_type"
                          value={element.trait_type || ""}
                          onChange={(e) => handleStatsChange(index, e)}
                        />
                        <input
                          type="text"
                          placeholder="Type here"
                          class="input input-bordered w-full text-sm  bg-[#0C111A] text-white border border-gray-500"
                          name="value"
                          value={element.value || ""}
                          onChange={(e) => handleStatsChange(index, e)}
                        />
                      </div>
                    );
                  })}
                </div>
                <Button
                  className="text-white border-1 mb-10 px-12"
                  onClick={addStatsFields}
                >
                  Add More Stats
                </Button>
              </div>

              <div className="bg-[#121A23] backdrop-blur-xl p-8 rounded-lg place-items-center mb-6">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img src={lock} alt="" className="mb-6" />
                    <div className="flex-col ml-4">
                      <p className="text-base text-white font-semibold">
                        Explicit
                      </p>
                      <p className="text-[#BFCBD9] text-base font-light">
                        Explicit content that can only be
                        <br /> revealed by the owner
                      </p>
                    </div>
                  </div>
                  <Toggle onChange={handleToggleExplicitCheck} />
                </div>
              </div>

              <div className="bg-[#121A23] backdrop-blur-xl p-8 rounded-lg place-items-center mb-10 ">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img src={lock} alt="" className="mb-6" />
                    <div className="flex-col ml-4">
                      <p className="text-base text-white font-semibold">
                        Unlockable Content
                      </p>
                      <p className="text-[#BFCBD9] text-base font-light">
                        Include unlockable content that can only be
                        <br /> revealed by the owner
                      </p>
                    </div>
                  </div>
                  <Toggle onChange={handleToggleUnlockableCheck} />
                </div>
              </div>

              <label
                className="bg-gradient-to-r from-[#23AEE3] via-[#9B71D8] to-[#FD3DCE] border-0 text-white rounded-lg font-sm font-bold  outline-0 mr-3 w-1/4 btn"
                onClick={createData}
              >
                Create
              </label>
            </div>
            <div className="">
              <div className="columns-xs sticky top-20 ">
                <p className="mt-12 mb-2 font-semibold text-xl text-white">
                  Preview
                </p>
                <div className="preview-box grid place-items-center items-center p-8 text-center w-[280px] h-[330px]">
                  Upload file and choose collection to preview your brand new
                  NFT
                </div>
              </div>
            </div>
          </div>

          <input type="checkbox" checked={open} id="my-modal-3" class="modal-toggle" />
          <div class="modal bg-blur-2xl">
            <div className="w-[780px] relative bg-[#121A23] py-10 px-12 rounded-2xl">
              <label
                for="my-modal-3"
                className="bg-transparent absolute right-0 px-8 text-2xl text-foreground-primary"
                onClick={() => setOpen(false)}
              >
                ✕
              </label>
              <CreateCollection open={open} setOpen={setOpen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNFT;