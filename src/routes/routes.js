import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/index";
import NftItem from "../pages/nftItem";


export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/nftitem" element={<NftItem />} />
    </Routes>
  );
};

export default PublicRoutes;
