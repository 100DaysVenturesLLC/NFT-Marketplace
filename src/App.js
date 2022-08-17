import logo from "./logo.svg";
import Navbar from "./components/Navbar/Navbar.js";
import "./App.css";
import HeroSection from "./pages/Homepage/components/HeroSection";
import Projects from "./pages/Homepage/components/Projects";
import Home from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
