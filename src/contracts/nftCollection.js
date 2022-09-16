import Web3 from "web3";
import { GenericCollectionABI } from "../abis/GenericCollection";
import { PixelParkABI } from "../abis/PixelParkCollection";
import { DropNFTABI } from "../abis/DropNFTABI";
import { ERC20ABI } from "../abis/ERC20";
import { CollectionFactoryABI } from "../abis/CollectionFactory";
import {
  GenericCollectionAddress,
  PixelParkCollectionAddress,
  CollectionFactoryAddress,
} from "../utils/constants/constants";

export const mintNFT = async (collection, uri, from) => {
  const web3 = new Web3(window.ethereum);
  const collectionInstance = new web3.eth.Contract(PixelParkABI, collection);
  const tokenId = await collectionInstance.methods.tokenCounter().call();

  const receipt = await collectionInstance.methods
    .createCollectible(uri)
    .send({ from });

  return { receipt, tokenId };
};
export const createCollection = async (name, symbol, from) => {
  const web3 = new Web3(window.ethereum);
  const collectionInstance = new web3.eth.Contract(
    CollectionFactoryABI,
    CollectionFactoryAddress
  );
  const receipt = await collectionInstance.methods
    .createCollection(name, symbol)
    .send({ from });
  return receipt.events[0].address;
};
export const mintDropNFTWithUSDC = async (collection, from, noOfTokens) => {
  const web3 = new Web3(window.ethereum);
  const contractInstance = new web3.eth.Contract(DropNFTABI, collection);
  const tokenId = await contractInstance.methods.tokenCounter().call();
  const receipt = await contractInstance.methods
    .mintUsingTokens(from, noOfTokens)
    .send({ from });
  return { receipt, tokenId };
};

export const approve = async (contractAddress, to, amount, from) => {
  const web3 = new Web3(window.ethereum);
  const contractInstance = new web3.eth.Contract(ERC20ABI, contractAddress);
  const receipt = await contractInstance.methods
    .approve(to, amount)
    .send({ from });
  return receipt;
};
export const getTokenCount = async (contractAddress) => {
  const web3 = new Web3(window.ethereum);
  const contractInstance = new web3.eth.Contract(PixelParkABI, contractAddress);
  const count = await contractInstance.methods.tokenCounter().call();
  return count;
};
