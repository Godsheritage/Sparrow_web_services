import "./home.scss";
import React from "react";
import SignIn from "../signIn/SignIn"
import Account from "../account/Account";
import { useLocation } from "react-router-dom";
import Profile from "../profile/Profile";

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
  if (currentLocation === "/profile") {
    currentComponent = < Profile/>;
  }

  return (
    <div className="home">
      <div className="sub-home">{currentComponent}</div>
    </div>
  );
};

export default Home;
