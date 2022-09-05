import React from "react";
import { Route, Routes } from "react-router-dom";
import Collection from "../pages/Collection";
import CreateNFT from "../pages/CreateNFT";
import LandingPage from "../pages/LandingPage/index";
import NftItem from "../pages/nftItem";
import Explore from "../pages/Explore"
import Stats from "../pages/Stats";
import Profile from "../pages/ProfilePage";

export const PublicRoutes = () => {
  return (
<div className="">
<Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/createnft" element={<CreateNFT />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="/nftitem" element={<NftItem />} />
      <Route path="/stats" element={<Stats />} />
    </Routes>
</div>
  
  );
};

export default PublicRoutes;
