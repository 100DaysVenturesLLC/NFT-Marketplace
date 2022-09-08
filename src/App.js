import React, { useState, useEffect } from 'react'
import Navbar from "./components/Navbar/Navbar.js";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./routes/routes.js";
import GlobalSpinner from './components/global-spinner/GlobalSpinner.js';
import { ToastContainer } from 'react-toastify';

function App() {


  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <PublicRoutes />
        <GlobalSpinner />
        <ToastContainer
          id="toast-message"
          position="bottom-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
