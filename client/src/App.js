import Home from "./pages/Home/Home";
import Navbar from "./components/ui/navbar/Navbar";
import Footer from "./components/ui/footer/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Profile from "./pages/profile/Profile";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="home">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
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
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/updateoffer"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/promote"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
