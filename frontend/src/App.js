import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home";
import Singleproductpage from "./pages/SingleProductPage";
import AllRoutes from "./routes/AllRoutes";
function App() {
  return (
    <div className="App">  
    <Navbar/>   
    <Home/>    
      {/* <AllRoutes/>   */}
      {/* <Singleproductpage/> */}
    </div>
  )
}

export default App;
