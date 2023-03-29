import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";

const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </Box>
  );
};

export default AllRoutes;
