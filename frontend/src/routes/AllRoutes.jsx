
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";

// import Men from "../pages/Men";

import Login from "../pages/login";
import CartPage from "../components/Cart/cartPage";


const AllRoutes = () => {
  return (
    
      <Routes>
        <Route path={"/"} element={<Home />} />

        {/* <Route path="/men" element={<Men/>}/> */}

        <Route path={"/cart"} element={<CartPage />} />
        <Route path={"/login"} element={<Login />} />

      </Routes>
    
  );
};

export default AllRoutes;
