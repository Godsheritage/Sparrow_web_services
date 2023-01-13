import "./home.scss";
import React from "react";
import SignIn from "../signIn/SignIn"
import Account from "../account/Account";
import { useLocation } from "react-router-dom";
import Profile from "../profile/Profile";
import UpdateOffer from "../update offer/UpdateOffer";
import Promotion from "../promote/Promote";

const Home = () => {
  const location = useLocation();
  let currentLocation = location.pathname;
  let currentComponent;

  if (currentLocation === "/") {
    currentComponent = <SignIn />;
  }
  else if (currentLocation === "/account") {
    currentComponent = < Account/>;
  }
  else if (currentLocation === "/profile") {
    currentComponent = < Profile/>;
  }
  else if (currentLocation === "/updateoffer") {
    currentComponent = < UpdateOffer/>;
  }
  else if (currentLocation === "/promote") {
    currentComponent = < Promotion/>;
  }

  return (
    <div className="home">
      <div className="sub-home">{currentComponent}</div>
    </div>
  );
};

export default Home;
