import React, { useState } from "react";
import Button from "../../components/Button/Button";
import upload from "../../assets/images/upload.png";
import { Link } from "react-router-dom";
import overlay from "../../assets/images/Ellipse 3.png";
const CreateNFT = () => {
  const [addproperty, setAddProperty] = useState();
  const [counter, setCounter] = useState(1);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  return (
    <div className="createnft">
      <div className="lg:px-80 lg:py-32 flex flex-col  container mx-auto">
        <p className="text-3xl text-white font-bold text-shadow ">Create NFT</p>

        <div class="flex justify-center mt-8 mb-4 w-full">

          <div class="flex items-center justify-start w-full">

            <label class="flex flex-col w-5/6 h-[330px] border-2 rounded-lg border-dashed border-gray-500 ">
              <div class="flex flex-col place-items-center justify-center pt-32">
                <div className="btn bg-white text-black px-8 py-2 font-bold text-sm">
                  Choose File
                </div>
                <p className="pt-12 text-white text-base font-semibold">Files Supported</p>
                <p>JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF</p>
              </div>

              <input type="file" class="opacity-0 " />
            </label>
          </div>
        <div>
          <p>preb</p>
<div>
  asdasd
</div>
        
        </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label className="text-base text-white font-semibold mt-4 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full text-white bg-[#0C111A] border border-gray-500"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-base text-white font-semibold mt-4 mb-1">
              Description{" "}
              <font className="text-color-[#BFCBD9] font-normal text-base">
                (Optional)
              </font>{" "}
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full py-16 text-white  bg-[#0C111A] border border-gray-500"
            />
          </div>
        </div>
        <label className="text-base text-white font-semibold mt-4 mb-1">
          Properties{" "}
          <font className="color-[#BFCBD9] font-normal text-base">
            (Optional)
          </font>
        </label>
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

        <Button className="text-white border-1 mb-12" onClick={handleClick}>
          Add More Property
        </Button>

        <Link to="/">
          <Button className="bg-gradient-to-r from-[#23AEE3] via-[#9B71D8] to-[#FD3DCE] border-0 text-white rounded-lg font-sm font-bold  outline-0 mr-3 w-2/5">
            Next{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CreateNFT;
