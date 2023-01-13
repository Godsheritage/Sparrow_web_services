import "./home.scss";
import React from "react";
import SignIn from "../pages/signIn/SignIn";
import Account from "../pages/account/Account";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  let currentLocation = location.pathname;
  let currentComponent;

  if (currentLocation === "/") {
    currentComponent = <SignIn />;
  }
  if (currentLocation === "/account") {
    currentComponent = < Account/>;
  }

  return (
    <div className="home">
      <div className="sub-home">{currentComponent}</div>
    </div>
  );
};

export default Home;
