import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Collection from "../pages/Collection";
import CreateNFT from "../pages/CreateNFT";
import LandingPage from "../pages/LandingPage/index";


export const PublicRoutes = () => {
  return (
    
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/createnft" element={<CreateNFT />} />
      <Route path="/collection" element={<Collection />} />
      {/* <Route path="/explore" element={<Build />} /> */}
    </Routes>
  );
};

export default PublicRoutes;
