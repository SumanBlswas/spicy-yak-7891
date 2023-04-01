import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Login from "../pages/login";
import CartPage from "../components/Cart/cartPage";
import Payment from "../components/Checkout/Payment";
import Admin from "../pages/Admin";
import Product from "../pages/Product";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
// import { Footer } from "../components/footer/Footer";
import Account from "../components/Account/Account";

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
        <Route path={"/account"} element={<Account />} />
      </Routes>
      {/* <Footer /> */}
    </Box>
  );
};

export default AllRoutes;
