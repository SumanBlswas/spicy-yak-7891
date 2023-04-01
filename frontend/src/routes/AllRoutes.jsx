import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin";


const AllRoutes = () => {
  return <Box>
    <Routes>
    <Route path='/admin' element={<Admin/>} />
    </Routes>
  </Box>;
};

export default AllRoutes;
