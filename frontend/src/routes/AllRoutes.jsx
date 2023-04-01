
import { Box } from "@chakra-ui/react";

import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import Home from "../pages/Home";
import Login from "../pages/login";
import CartPage from "../components/Cart/cartPage";
import Product from "../pages/Product";
import Payment from "../components/Checkout/Payment";
import Admin from "../pages/Admin";
import Navbar from "../components/Navbar/Navbar";
import Men from "../pages/Men";
import Women from "../pages/Women";
import { Footer } from "../components/footer/Footer";



const AllRoutes = () => {
  return (
    
      <Routes>       
        <Route path={"/"} element={<Home />} />  
        
        {/* <Route path="/men" element={<Men/>}/>       */}
        {/* <Route path={"/cart"} element={<CartPage />} /> */}
        <Route path={"/login"} element={<Login />} />
        <Route path={"/product"} element={<Product/>}/>
        {/* <Route path={"/payment"} element={<Payment />} /> */}
        {/* <Route path='/admin' element={<Admin/>} /> */}


      </Routes>
    
  );
};

export default AllRoutes;
