import React from "react";
import "./account.scss";
import { Link } from "react-router-dom";
import houseImg from "../../assets/../assets/icons/house.svg";
import speakerImg from "../../assets/icons/speaker.svg";
import { motion } from "framer-motion";
import envelopeImg from "../../assets/icons/envelope.svg";

const Account = () => {
  return (
    <motion.div className="account"
    // initial={{x:"100%"}}
    // animate={{x:0}}
    // exit={{x:"2000%" }}
    
    
    >
      <h1>What would you like to do?</h1>
      <div className="option-boxes">
        <Link to="/profile" className="option-links">
          <div className="">
            <img src={houseImg} alt="this is a book" height="80rem" />
            <p className="mt-3">Edit Business Profile</p>
          </div>
        </Link>
        <Link to="/updateoffer" className="option-links">
          <div>
            <img src={envelopeImg} alt="this is a book" className="mb-3" height="80rem" />
            <p>Edit Products</p>
          </div>
        </Link>
        <Link to="/promote" className="option-links">
        <div>
          <img src= {speakerImg} alt="this is a book" height="100rem"/>
          <p>Promote My Business</p>
        </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Account;