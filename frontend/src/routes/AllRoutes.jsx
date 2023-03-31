
import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import Home from "../pages/Home";
import Login from "../pages/login";
import CartPage from "../components/Cart/cartPage";
import Payment from "../components/Checkout/Payment";

const AllRoutes = () => {
  return (
    
      <Routes>
        <Route path={"/"} element={<Home />} />
        {/* <Route path="/men" element={<Men/>}/> */}
        <Route path={"/cart"} element={<CartPage />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/payment"} element={<Payment />} />
      </Routes>
    
  );
};

export default AllRoutes;
