import logo from "./logo.svg";
import Navbar from "./components/Navbar/Navbar.js";
import "./App.css";
import HeroSection from "./pages/Homepage/components/HeroSection";
import Projects from "./pages/Homepage/components/Projects";
import Home from "./pages/Homepage";
import Card from "./pages/Homepage/components/card";
import Smallcard from "./pages/Homepage/components/smallcard";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <Card /> */}
      <Smallcard />/
    </div>
  );
}

export default App;
