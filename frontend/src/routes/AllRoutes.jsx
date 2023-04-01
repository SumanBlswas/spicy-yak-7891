import { Box } from "@chakra-ui/react";

import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Login from "../pages/login";
import CartPage from "../components/Cart/cartPage";
import Payment from "../components/Checkout/Payment";
import Admin from "../pages/Admin";
import Navbar from "../components/Navbar/Navbar";

const AllRoutes = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/cart"} element={<CartPage />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/payment"} element={<Payment />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Box>
  );
};

export default AllRoutes;
