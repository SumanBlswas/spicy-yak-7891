import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import AllRoutes from "./routes/AllRoutes";
// import Home from "./pages/Home";

function App() {
  return (
    <div className="App">   
      <Navbar/>
      <AllRoutes/>
    </div>
  )

}

export default App;
