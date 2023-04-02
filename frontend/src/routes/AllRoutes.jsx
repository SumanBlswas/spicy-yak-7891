import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Login from "../pages/login";
import CartPage from "../components/Cart/cartPage";
import Product from "../pages/Product";
import Payment from "../components/Checkout/Payment";
import Singleproductpage from "../pages/SingleProductPage";
import Navbar from "../components/Navbar/Navbar";

const AllRoutes = () => {
  return (
    <>
      <Navbar/>
      <Routes>       
        <Route path={"/"} element={<Home />} />        
        <Route path={"/cart"} element={<CartPage />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/product"} element={<Product />} />
        <Route path={"/payment"} element={<Payment />} />
        <Route path={"/product/:id"} element={<Singleproductpage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
