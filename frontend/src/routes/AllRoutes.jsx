import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Login from "../pages/login";
import SignUp from "../pages/SignUp";
import CartPage from "../components/Cart/cartPage";
import Product from "../pages/Product";
import Payment from "../components/Checkout/Payment";

import Singleproductpage from "../pages/SingleProductPage";
import Navbar from "../components/Navbar/Navbar";
import Account from "../components/Account/Account";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path={"/cart"}
          element={
            <>
              <Navbar />
              <CartPage />
            </>
          }
        />
        <Route
          path={"/login"}
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        />
        <Route
          path={"/product"}
          element={
            <>
              <Navbar />
              <Product />
            </>
          }
        />
        <Route
          path={"/payment"}
          element={
            <>
              <Navbar />
              <Payment />
            </>
          }
        />
        <Route
          path={"/signup"}
          element={
            <>
              <Navbar />
              <SignUp />
            </>
          }
        />
        <Route
          path={"/product/:id"}
          element={
            <>
              <Navbar />
              <Singleproductpage />
            </>
          }
        />
        <Route
          path={"/account"}
          element={
            <>
              <Navbar />
              <Account />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
