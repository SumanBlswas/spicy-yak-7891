import { Box } from "@chakra-ui/react";
import "./App.css";
import Home from "./pages/Home";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <Box className="App">
      <AllRoutes />
    </Box>
  );
}

export default App;
