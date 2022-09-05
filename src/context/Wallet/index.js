import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { init, useConnectWallet } from "@web3-onboard/react";
import { ethers } from "ethers";

import Onboard, { InitOptions, OnboardAPI } from "@web3-onboard/core";
import OnboardConfig, { onboardConfigFactory } from "./OnboardConfig";
// interface IWalletContext {
//   onboard?: OnboardAPI;
//   ethersSigner?: ethers.providers.JsonRpcSigner;
//   ethersProvider?: ethers.providers.Web3Provider;
//   address?: string;
// }

const onboard = init(
  onboardConfigFactory({
    name: "Martel Invest",
    icon: "https://martelinvest.s3.amazonaws.com/2022/5/8/1654685957817/icon128.jpg",
    description: "Connect your wallet to purchase tokens",
  })
);
const WalletContext = createContext()

const WalletProvider = (props) => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  const ethersProvider = useMemo(() => {
    if (wallet?.provider)
      return new ethers.providers.Web3Provider(wallet.provider);
  }, [wallet]);

  const ethersSigner = useMemo(() => {
    if (ethersProvider) {
      return ethersProvider.getSigner();
    }
  }, [ethersProvider]);

  const address = wallet?.accounts[0].address;

  return (
    <WalletContext.Provider
      value={{ onboard, ethersSigner, ethersProvider, address }}
      {...props}
    />
  );
};

const useWallet = () => {
  const walletContext = useContext(WalletContext);
  if (!walletContext) throw new Error("Wallet hooks used without provider");
  return walletContext;
};
export { WalletProvider, useWallet };
