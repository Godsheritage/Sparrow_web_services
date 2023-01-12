import Navbar from "./elements/Navbar/Navbar";
import "./App.css";
import Footer from "./elements/Footer/Footer";
import Home from "./elements/Home/Home";

function App() {
  return (
    <div className="home">
      <Navbar />
      < Home/>
      <Footer/>
    </div>
  );
}

export default App;
