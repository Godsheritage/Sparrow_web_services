import Home from "./Home/Home";
import Navbar from "./components/ui/navbar/Navbar";
import Footer from "./components/ui/footer/Footer";
import Account from "./pages/account/Account";
import { Route, Routes, Router } from "react-router-dom";

function App() {
  return (
    <div className="home">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/account"
          element={
            <>
              <Navbar />
              <Home/>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
