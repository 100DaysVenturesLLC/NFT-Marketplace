import React, { useState } from "react";
import Button from "../../components/Button/Button";
import upload from "../../assets/images/upload.png";
import { Link } from "react-router-dom";
import overlay from "../../assets/images/Ellipse 3.png";
import Dropdown from "../../components/DropDown";
import lock from "../../assets/icons/lock.png";
import Toggle from "../../components/ToggleButton";
import PutOnSale from "../nftItem/components/topsection/sellSections/putOnSale";
import CreateCollection from "./components/CreateCollection";
import { create } from "ipfs-http-client";

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

  const handleClick = () => {
    if (counter) {
      setCounter(counter + 1);
    } else if (level) {
      setLevel(level + 1);
    } else {
      setStats(stats + 1);
    }
  };
  const [fileUrl, setFileUrl] = useState(null);

  async function onChange(e) {
    const file = e.target.files[0];
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
                  {fileUrl ?
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
                          className="w-full h-[330px] rounded-lg object-cover cursor-pointer"
                          src={fileUrl}
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
                  ></textarea>
                </div>
                <div className="flex flex-col mt-10">
                  <label className="text-base text-white font-semibold  mb-2">
                    Collection
                  </label>
                  <Dropdown title="No Collection Found" />
                  <label htmlFor="my-modal-3" className="flex flex-end justify-end text-background-highlight font-bold text-sm mt-2 cursor-pointer">
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
                  {Array.from(Array(counter)).map((c, index) => {
                    return (
                      <div className="flex gap-2 mb-4">
                        <input
                          type="text"
                          placeholder="Type here"
                          class="input input-bordered w-full text-sm bg-[#0C111A] text-white  border border-gray-500 "
                        />
                        <input
                          type="text"
                          placeholder="Type here"
                          class="input input-bordered w-full text-sm  bg-[#0C111A] text-white border border-gray-500"
                        />
                      </div>
                    );
                  })}
                </div>

                <Button
                  className="text-white border-1 mb-10"
                  onClick={handleClick}
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
                  {Array.from(Array(level)).map((c, index) => {
                    return (
                      <div className="flex gap-4 mb-4">
                        <input
                          type="text"
                          placeholder="Type here"
                          class="input input-bordered w-full text-sm bg-[#0C111A] text-white  border border-gray-500 "
                        />

                        <input
                          type="text"
                          placeholder="Type here"
                          class="input input-bordered w-2/5 text-sm  bg-[#0C111A] text-white border border-gray-500"
                        />
                        <input
                          type="text"
                          placeholder="Type here"
                          class="input input-bordered w-2/5 text-sm  bg-[#0C111A] text-white border border-gray-500"
                        />
                      </div>
                    );
                  })}
                </div>
                <Button
                  className="text-white border-1 mb-10 px-10"
                  onClick={handleClick}
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
                  {Array.from(Array(stats)).map((c, index) => {
                    return (
                      <div className="flex gap-4 mb-4">
                        <input
                          type="text"
                          placeholder="Type here"
                          class="input input-bordered w-full text-sm bg-[#0C111A] text-white  border border-gray-500 "
                        />

                        <input
                          type="text"
                          placeholder="Type here"
                          class="input input-bordered w-2/5 text-sm  bg-[#0C111A] text-white border border-gray-500"
                        />
                        <input
                          type="text"
                          placeholder="Type here"
                          class="input input-bordered w-2/5 text-sm  bg-[#0C111A] text-white border border-gray-500"
                        />
                      </div>
                    );
                  })}
                </div>
                <Button
                  className="text-white border-1 mb-10 px-12"
                  onClick={handleClick}
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
                        Unlockable Content
                      </p>
                      <p className="text-[#BFCBD9] text-base font-light">
                        Include unlockable content that can only be
                        <br /> revealed by the owner
                      </p>
                    </div>
                  </div>
                  <Toggle />
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
                  <Toggle />
                </div>
              </div>

              <label
                className="bg-gradient-to-r from-[#23AEE3] via-[#9B71D8] to-[#FD3DCE] border-0 text-white rounded-lg font-sm font-bold  outline-0 mr-3 w-1/4 btn"
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

          <input type="checkbox" id="my-modal-3" class="modal-toggle" />
          <div class="modal bg-blur-2xl">
            <div className="w-[780px] relative bg-[#121A23] py-10 px-12 rounded-2xl">
              <label
                for="my-modal-3"
                className="bg-transparent absolute right-0 px-8 text-2xl text-foreground-primary"
              >
                ✕
              </label>
              <CreateCollection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNFT;
