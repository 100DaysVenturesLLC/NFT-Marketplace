import React, { useState } from "react";
import Button from "../../components/Button/Button";
import upload from "../../assets/images/upload.png";
import { Link } from "react-router-dom";
import overlay from "../../assets/images/Ellipse 3.png";
import Dropdown from "../../components/DropDown";
import lock from "../../assets/icons/lock.png";
import Toggle from "../../components/ToggleButton";
const CreateNFT = () => {
  const [addproperty, setAddProperty] = useState();
  const [counter, setCounter] = useState(1);
  const [level, setLevel] = useState(1);
  const [stats, setStats] = useState(1);

  const handleClick = () => {
    if (counter) {
      setCounter(counter + 1);
    } else if (level) {
      setLevel(level + 1);
    } else {
      setStats(stats + 1);
    }
  };
  return (
    <div className="createnft">
      <div className="lg:px-60 lg:py-32 flex flex-col  container mx-auto">
        <p className="text-3xl text-white font-bold text-shadow ">Create NFT</p>
        <div className="flex justify-between ">
          <div className="columns-4xl mr-5">
            <p className="font-semibold text-xl text-white mt-12 mb-2">
              Upload file
            </p>
            <div class="flex flex-col justify-center items-center">
              <div class="flex items-center justify-start w-full">
                <label class="flex flex-col w-full h-[330px] border-2 rounded-lg border-dashed border-gray-500 ">
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

                  <input type="file" class="opacity-0 " />
                </label>
              </div>
            </div>
            <div className="flex flex-col mt-32">
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
                  className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
       bg-clip-padding
        border border-solid border-gray-300
        rounded-lg
        transition
        bg-[#0c111a]
        ease-in-out
        m-0
        focus:text-gray-700  focus:border-blue-600 focus:outline-none
        "
                  id="exampleFormControlTextarea1"
                  rows={3}
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="flex flex-col mt-10">
                <label className="text-base text-white font-semibold  mb-2">
                  Collection
                </label>
                <Dropdown title="No Collection Found" />
                <div className="flex flex-end justify-end text-background-highlight font-bold text-sm mt-2">
                  Create Collection
                </div>
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
                className="text-white border-1 mb-10 w-2/5"
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
                className="text-white border-1 mb-10 w-2/5"
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
            <Link to="/">
              <Button className="bg-gradient-to-r from-[#23AEE3] via-[#9B71D8] to-[#FD3DCE] border-0 text-white rounded-lg font-sm font-bold  outline-0 mr-3 w-1/4">
                Create
              </Button>
            </Link>
          </div>

          <div className="columns-xs">
            <p className="mt-12 mb-2 font-semibold text-xl text-white">
              Preview
            </p>
            <div className="preview-box grid place-items-center items-center p-8 text-center w-[280px] h-[330px]">
              Upload file and choose collection to preview your brand new NFT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNFT;
