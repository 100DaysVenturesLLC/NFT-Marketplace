import Navbar from "./components/Navbar/Navbar.js";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./routes/routes.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <PublicRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
