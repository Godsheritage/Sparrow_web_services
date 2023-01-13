import "./home.scss";
import React from "react";
import SignIn from "../signIn/SignIn";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  let currentLocation = location.pathname;
  let currentComponent;

  if (currentLocation === "/") {
    currentComponent = <SignIn />;
  }
  if (currentLocation === "/account") {
    currentComponent = <SignIn />;
  }

  return (
    <div className="home">
      <div className="sub-home">{currentComponent}</div>
    </div>
  );
};

export default Home;
