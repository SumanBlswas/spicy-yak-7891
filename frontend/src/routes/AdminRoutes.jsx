
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin";

const AdminRoutes = () => {
  return (
    <>
      <Routes>       
        <Route path={"/admin"} element={<Admin />} />        
      </Routes>
    </>
  );
};

export default AdminRoutes;