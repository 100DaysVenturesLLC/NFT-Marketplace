import React from "react";
import { WalletProvider } from "./Wallet/index";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Zoom } from "react-toastify";

export const AppProviders = ({ children }) => {
  return (
      <WalletProvider>{children}</WalletProvider>
  );
};

export default AppProviders;
