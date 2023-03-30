import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Login from "../pages/login";
import CartPage from "../components/Cart/cartPage";

const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/cart"} element={<CartPage />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </Box>
  );
};

export default AllRoutes;
