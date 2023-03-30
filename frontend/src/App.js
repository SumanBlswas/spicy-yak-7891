import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Login from "./pages/login";
import AllRoutes from "./routes/AllRoutes";
// import Home from "./pages/Home";

function App() {
  return (
    <div className="App">   
      <Navbar/>
      <AllRoutes/>
      {/* <Login/> */}
    </div>
  )

}

export default App;
