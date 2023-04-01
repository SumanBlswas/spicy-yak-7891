import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import AllRoutes from "./routes/AllRoutes";
import Singleproductpage from "./pages/SingleProductPage";
function App() {
  return (
    <div className="App"> 
    {/* <Navbar/>        */}
      <AllRoutes/>  
      <Singleproductpage/>
    </div>
  )

}

export default App;
