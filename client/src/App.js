import "./App.css";
import Home from "./elements/Home/Home";
import Navbar from "./elements/Navbar/Navbar";
import Footer from "./elements/Footer/Footer";
import { Route, Routes, Router } from "react-router-dom";

function App() {
  return (
    <div className="home">
      <Router>
        <Routes>
          <Navbar />
          <Home />
          <Footer />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
