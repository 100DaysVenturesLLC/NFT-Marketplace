import React, { useState, useEffect } from "react";
import upload from "../../../assets/images/upload.png";
import Button from "../../../components/Button/Button";
import { useWeb3React } from "@web3-react/core";
import { create } from "ipfs-http-client";
import { BACKEND_URL } from "../../../utils/config/config";
import axios from "axios"
import Web3 from "web3";

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


const CreateCollection = () => {

  const [address, setAddress] = useState([]);
  const [bannerFile, setBannerFile] = useState();
  const [avatarFile, setAvatarFile] = useState();
  const [fileUrl, setFileUrl] = useState(null);
  const [avatarfileUrl, setAvatarFileUrl] = useState(null);
  const { account, active } = useWeb3React();

  async function onChange(e) {
    const file = e.target.files[0];
    setBannerFile(URL.createObjectURL(file));
    setFileUrl(file);
  }

  async function onChangeAvatar(e) {
    const file = e.target.files[0];
    setAvatarFile(URL.createObjectURL(file));
    setAvatarFileUrl(file);
  }

  async function selectImage1(e) {
    const file = e.target.files[0];
    setBannerFile(URL.createObjectURL(file));
    setFileUrl(file);
  };

  async function selectImage2(e) {
    const file = e.target.files[0];
    setAvatarFile(URL.createObjectURL(file));
    setAvatarFileUrl(file);
  };

  const [formInput, updateFormInput] = useState({
    customCollectionURL: "",
    name: "",
    symbol: "",
    description: "",
  });

  const sendCollectionData = async () => {
    var form_data = new FormData();
    const { name, description, customCollectionURL, symbol } = formInput;
    // const collectionAddress = await createCollection(name, symbol, account)
    // console.log("collectionAddress", collectionAddress)
    // form_data.append('description', description);
    form_data.append('avatar', avatarfileUrl);
    form_data.append('contractAddress', "abc");
    form_data.append('name', name);
    form_data.append('symbol', symbol);
    form_data.append('customCollectionURL', customCollectionURL);
    form_data.append('banner', fileUrl);
    form_data.append('createdBy', "abc");
    form_data.append('nsfw', true);

    console.log("form data ye hai", form_data);

    // if (active) {
    //   data.append('createdBy', account);
    // }
    // else {
    //   alert("connect wallet")
    // }

    var config = {
      method: 'post',
      url: `${BACKEND_URL}/collections/create`,
      data: form_data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  async function createCollectionData() {
    if (active) {
      try {
        sendCollectionData();
      } catch (error) {
        console.log(error);
      }
    }
    else {
      alert("connect wallet")
    }
  }
  useEffect(() => {
    const checkConnection = async () => {
      // Check if browser is running Metamask
      let web3;
      if (window.ethereum) {
        web3 = new Web3(window.ethereum);
      } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
      }

      if (web3) {
        // Check if User is already connected by retrieving the accounts
        web3.eth.getAccounts().then(async (addr) => {
          // Set User account into state
          setAddress(addr);
          if (addr.length > 0) {
            // Code here
            console.log("Current metamask wallet: ", addr);
          }
        });
      }
    };

    checkConnection();
  }, []);

  return (
    <div className="container ">
      <p className="text-3xl text-white font-bold text-shadow w-full mb-6">
        Create Collection
      </p>
      <div className=" ">
        <div class="flex justify-start mt-4 mb-4">
          <div class="flex flex-col mr-5">
            {bannerFile ?
              <label className="flex flex-col w-[331px] h-[143px] border-2 rounded-lg border-dashed border-gray-500 hover:bg-gray-100 hover:border-gray-300">
                <label htmlFor="upload-document">
                  <input
                    class="hidden"
                    id="upload-document"
                    name="upload-document"
                    type="file"
                    onChange={selectImage1}
                  />
                  <img
                    className="w-full h-[139px] rounded-lg object-cover cursor-pointer"
                    src={bannerFile}
                    alt=""
                  />
                </label></label>
              : <label class="flex flex-col w-[331px] h-[143px] border-2 rounded-lg border-dashed border-gray-500">
                <div class="flex flex-col place-items-center justify-center items-center mt-6">
                  <img src={upload} />
                </div>
                <input type="file" class="opacity-0" onChange={onChange} />
              </label>
            }
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
            {avatarFile ?
              <label class="flex flex-col w-[143px] h-[143px] border-2 rounded-lg border-dashed border-gray-500">
                <label htmlFor="upload-document">
                  <input
                    class="hidden"
                    id="upload-document"
                    name="upload-document"
                    type="file"
                    onChange={selectImage2}
                  />
                  <img
                    className="w-[143px] h-[139px] rounded-lg object-cover cursor-pointer"
                    src={avatarFile}
                    alt=""
                  />
                </label></label>
              : <label class="flex flex-col w-[143px] h-[143px] border-2 rounded-lg border-dashed border-gray-500 cursor-pointer">
                <div class="flex flex-col place-items-center justify-center items-center mt-6">
                  <img src={upload} />
                </div>
                <input type="file" class="opacity-0" onChange={onChangeAvatar} />
              </label>
            }
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
            class="input input-bordered w-full text-sm bg-[#0C111A] text-white  border border-gray-500"
            onChange={(e) =>
              updateFormInput({ ...formInput, name: e.target.value })
            }
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
            class="input input-bordered w-full text-sm bg-[#0C111A] text-white  border border-gray-500"
            onChange={(e) =>
              updateFormInput({ ...formInput, symbol: e.target.value })
            }
          />
        </div>
        <div className="mt-4 mb-4">
          <label htmlFor="" className="font-semibold text-base text-white">
            Description (Optional)
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full text-sm bg-[#0C111A] text-white  border border-gray-500"
            onChange={(e) =>
              updateFormInput({ ...formInput, description: e.target.value })
            }
          />
        </div>
        <div className="mt-4 mb-4">
          <label htmlFor="" className="font-semibold text-base text-white">
            Short url (Optional)
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full text-sm bg-[#0C111A] text-white  border border-gray-500"
            onChange={(e) =>
              updateFormInput({ ...formInput, customCollectionURL: e.target.value })
            }
          />
        </div>
        <div className="flex justify-end">
          <Button className="bg-gradient-to-r from-[#23AEE3] via-[#9B71D8] to-[#FD3DCE] border-0 text-white rounded-lg font-sm font-bold  outline-0  w-full btn" onClick={sendCollectionData}>
            Create Collection
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateCollection;
