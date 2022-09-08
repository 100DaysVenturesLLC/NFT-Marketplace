import React from "react";
import { WalletProvider } from "./Wallet/index";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Zoom } from "react-toastify";
import { UseSpinnerProvider } from "./Spinner";

export const AppProviders = ({ children }) => {
  return (
    <UseSpinnerProvider>
      <WalletProvider>{children}</WalletProvider>
    </UseSpinnerProvider>
  );
};

export default AppProviders;
