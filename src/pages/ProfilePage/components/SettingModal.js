import React, { useState, useEffect } from "react";
import upload from "../../../assets/images/upload.png";
import Button from "../../../components/Button/Button";
import { useWeb3React } from "@web3-react/core";
import { create } from "ipfs-http-client";
import { BACKEND_URL } from "../../../utils/config/config";
import { useConnectWallet } from "@web3-onboard/react";
import useUpdateAccount from "../../../hook/queries/account/useUpdateAccount";
import axios from "axios";
import Web3 from "web3";
import { useSpinner } from "../../../context/Spinner";

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

const SettingModal = ({ setOpen, open, accDetails }) => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const spinner= useSpinner();
  const [address, setAddress] = useState([]);
  const [bannerFile, setBannerFile] = useState();
  const [avatarFile, setAvatarFile] = useState();
  const [fileUrl, setFileUrl] = useState(null);
  const [avatarfileUrl, setAvatarFileUrl] = useState(null);

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
  }

  async function selectImage2(e) {
    const file = e.target.files[0];
    setAvatarFile(URL.createObjectURL(file));
    setAvatarFileUrl(file);
  }

  const [formInput, updateFormInput] = useState({
    externalURL: "",
    name: "",
    bio: "",
  });

  const account = wallet?.accounts[0].address;

  const SendProfileData = async () => {
    spinner.setLoadingState(true);
    var form_data = new FormData();
    const { name, customCollectionURL, bio } = formInput;
    console.log(account, "ye acc address hai");
    form_data.append("avatar", avatarfileUrl);
    form_data.append("nickname", name);
    form_data.append("address", account);
    form_data.append("bio", bio);
    form_data.append("customCollectionURL", customCollectionURL);
    form_data.append("banner", fileUrl);
    console.log("form data ye hai", form_data);
    const res = await useUpdateAccount(form_data).then(
      wipeData(),
      setOpen(false)
    );
    console.log(res);
    spinner.setLoadingState(false);
  };
  const wipeData = () => {
    if (accDetails) {
      setAvatarFileUrl(null);
      setAvatarFile(`https://pixelpark-images.s3.amazonaws.com/${accDetails.avatarImageURI}`);
      setBannerFile(`https://pixelpark-images.s3.amazonaws.com/${accDetails.bannerImageURI}`);
      setFileUrl(null);
      setAddress(null);
      const { externalURL, nickname, bio } = accDetails
      updateFormInput({
        externalURL,
        name: nickname,
        bio
      });
    }
  };
  useEffect(() => {
    if (!open) {
      wipeData();
    }
  }, [open]);
  useEffect(() => { }, [fileUrl, avatarfileUrl, formInput]);

  // async function createCollectionData() {
  //   if (active) {
  //     try {
  //       sendCollectionData();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   else {
  //     alert("connect wallet")
  //   }
  // }
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
        Update Profile
      </p>
      <div className=" ">
        <div class="flex justify-start mt-4 mb-4">
          <div class="flex flex-col mr-5">
            {bannerFile ? (
              <label className="flex flex-col w-[331px] h-[143px] border-2 rounded-lg border-dashed border-gray-500 hover:bg-gray-100 hover:border-gray-300 cursor-pointer">
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
                </label>
              </label>
            ) : (
              <label class="flex flex-col w-[331px] h-[143px] border-2 rounded-lg border-dashed border-gray-500 cursor-pointer">
                <div class="flex flex-col place-items-center justify-center items-center mt-6">
                  <img src={upload} />
                </div>
                <input type="file" class="opacity-0" onChange={onChange} />
              </label>
            )}
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
            {avatarFile ? (
              <label class="flex flex-col w-[143px] h-[143px] border-2 rounded-lg border-dashed border-gray-500">
                <label htmlFor="upload-document-2">
                  <input
                    class="hidden"
                    id="upload-document-2"
                    name="upload-document-2"
                    type="file"
                    onChange={selectImage2}
                  />
                  <img
                    className="w-[143px] h-[139px] rounded-lg object-cover cursor-pointer"
                    src={avatarFile}
                    alt=""
                  />
                </label>
              </label>
            ) : (
              <label class="flex flex-col w-[143px] h-[143px] border-2 rounded-lg border-dashed border-gray-500 cursor-pointer">
                <div class="flex flex-col place-items-center justify-center items-center mt-6">
                  <img src={upload} />
                </div>
                <input
                  type="file"
                  class="opacity-0"
                  onChange={onChangeAvatar}
                />
              </label>
            )}
            <p className="text-white font-semibold text-base mt-6">
              Profile Avatar
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
            Profile Name
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full text-sm bg-[#0C111A] text-white  border border-gray-500"
            value={formInput.name}
            onChange={(e) =>
              updateFormInput({ ...formInput, name: e.target.value })
            }
          />
          <p className="text-[#BFCBD9] text-sm font-normal">
            Token name cannot be changed in the future
          </p>
        </div>

        <div className="mt-4 mb-4">
          <label htmlFor="" className="font-semibold text-base text-white">
            Bio (Optional)
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full text-sm bg-[#0C111A] text-white  border border-gray-500"
            value={formInput.bio}
            onChange={(e) =>
              updateFormInput({ ...formInput, bio: e.target.value })
            }
          />
        </div>
        <div className="mt-4 mb-4">
          <label htmlFor="" className="font-semibold text-base text-white">
            External url
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full text-sm bg-[#0C111A] text-white  border border-gray-500"
            value={formInput.externalURL}
            onChange={(e) =>
              updateFormInput({
                ...formInput,
                externalURL: e.target.value,
              })
            }
          />
        </div>
        <div className="flex justify-end">
          <Button
            className="bg-gradient-to-r from-[#23AEE3] via-[#9B71D8] to-[#FD3DCE] border-0 text-white rounded-lg font-sm font-bold  outline-0  w-full btn"
            onClick={SendProfileData}
          >
            Update Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingModal;
