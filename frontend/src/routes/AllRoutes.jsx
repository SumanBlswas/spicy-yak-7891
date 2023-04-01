import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Login from "../pages/login";
import CartPage from "../components/Cart/cartPage";
import Payment from "../components/Checkout/Payment";
import Admin from "../pages/Admin";
import Product from "../pages/Product";
import Navbar from "../components/Navbar/Navbar";
import SignUp from "../pages/SignUp";
import { Box } from "@chakra-ui/react";

const AllRoutes = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/cart"} element={<CartPage />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/product"} element={<Product />} />
        <Route path={"/payment"} element={<Payment />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Box>
  );
};

export default AllRoutes;
