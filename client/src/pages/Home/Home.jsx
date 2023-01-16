import "./home.scss";
import React from "react";
import SignIn from "../signIn/SignIn"
import { motion } from "framer-motion";
import Account from "../account/Account";
import Profile from "../profile/Profile";
import Promotion from "../promote/Promote";
import { useLocation } from "react-router-dom";
import UpdateOffer from "../update offer/UpdateOffer";

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
    <div className="home"
   
    >
      <motion.div className="sub-home"
      //  initial={{ translateX: "100%" }}
      //  animate={{ translateX: 0 }}
      //  exit={{ translateX: "2000%" }}
      >{currentComponent}</motion.div>
    </div>
  );
};

export default Home;
