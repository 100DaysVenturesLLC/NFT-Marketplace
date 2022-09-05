import React from "react";
import upload from "../../../assets/images/upload.png";
import Button from "../../../components/Button/Button";
const CreateCollection = () => {
  return (
    <div className="container ">
      <p className="text-3xl text-white font-bold text-shadow w-full mb-6">
        Create Collection
      </p>
      <div className=" ">
        <div class="flex justify-start mt-4 mb-4">
          <div class="flex flex-col mr-5">
            <label class="flex flex-col w-[331px] h-[143px] border-2 rounded-lg border-dashed border-gray-500 hover:bg-gray-100 hover:border-gray-300">
              <div class="flex flex-col place-items-center justify-center items-center mt-6">
                <img src={upload} />
              </div>
              <input type="file" class="opacity-0" />
            </label>
            <p className="text-white font-semibold text-base mt-6">
              Cover Image
            </p>
            <p className="text-[#BFCBD9] font-semibold text-base">
              We recommend atleast 1366 x 320.
              <br />
              Max 5 MB
            </p>
          </div>
          <div>
            <label class="flex flex-col  w-[143px] h-[143px] border-2 rounded-lg border-dashed border-gray-500 hover:bg-gray-100 hover:border-gray-300">
              <div class="flex flex-col place-items-center justify-center items-center mt-6">
                <img src={upload} />
              </div>
              <input type="file" class="opacity-0" />
            </label>
            <p className="text-white font-semibold text-base mt-6">
              Collection Avatar
            </p>
            <p className="text-[#BFCBD9] font-semibold text-base">
              We recommend atleast 320 x 320.
              <br />
              Max 5 MB
            </p>
          </div>
        </div>
        <div className="mt-12 mb-4">
          <label htmlFor="" className="font-semibold text-base text-white">
            Display Name
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full text-sm bg-[#0C111A] text-white  border border-gray-500 "
          />
          <p className="text-[#BFCBD9] text-sm font-normal">Token name cannot be changed in the future</p>
        </div>
        <div className="mt-4 mb-4">
          <label htmlFor="" className="font-semibold text-base text-white">
            Symbol
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full text-sm bg-[#0C111A] text-white  border border-gray-500 "
          />
        </div>
        <div className="mt-4 mb-4">
          <label htmlFor="" className="font-semibold text-base text-white">
            Description (Optional)
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full text-sm bg-[#0C111A] text-white  border border-gray-500 "
          />
        </div>
        <div className="mt-4 mb-4">
          <label htmlFor="" className="font-semibold text-base text-white">
            Short url (Optional)
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full text-sm bg-[#0C111A] text-white  border border-gray-500 "
          />
        </div>
        <div className="flex justify-end">
          <Button className="bg-gradient-to-r from-[#23AEE3] via-[#9B71D8] to-[#FD3DCE] border-0 text-white rounded-lg font-sm font-bold  outline-0  w-full btn">
            Create Collection
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateCollection;
