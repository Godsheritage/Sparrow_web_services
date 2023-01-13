import Home from "./pages/Home/Home";
import Navbar from "./components/ui/navbar/Navbar";
import Footer from "./components/ui/footer/Footer";
import { Route, Routes} from "react-router-dom";
import Profile from "./pages/profile/Profile";

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
        <Route
          path="/profile"
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
