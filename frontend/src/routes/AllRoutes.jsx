
import { Box } from "@chakra-ui/react";

import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Login from "../pages/login";
import CartPage from "../components/Cart/cartPage";
import Product from "../pages/Product";
import Payment from "../components/Checkout/Payment";
import Admin from "../pages/Admin";



const AllRoutes = () => {
  return (
      <Routes>
        <Route path={"/"} element={<Home />} />        
        <Route path={"/cart"} element={<CartPage />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/product"} element={<Product/>}/>
        <Route path={"/payment"} element={<Payment />} />
        <Route path='/admin' element={<Admin/>} />

      </Routes>
    
  );
};

export default AllRoutes;
