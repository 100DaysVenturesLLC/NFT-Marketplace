import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/index";


export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/explore" element={<Build />} /> */}
    </Routes>
  );
};

export default PublicRoutes;
