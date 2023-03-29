// import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import AllRoutes from "./routes/AllRoutes";
// import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
