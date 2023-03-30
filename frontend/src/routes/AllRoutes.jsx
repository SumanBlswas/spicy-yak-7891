
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
// import Men from "../pages/Men";

const AllRoutes = () => {
  return (
    
      <Routes>
        <Route path={"/"} element={<Home />} />
        {/* <Route path="/men" element={<Men/>}/> */}
      </Routes>
    
  );
};

export default AllRoutes;
