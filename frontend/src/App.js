import "./App.css";
import AdminRoutes from "./routes/AdminRoutes";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">   
        <AllRoutes/>  
        <AdminRoutes/>
    </div>
  );
}

export default App;
