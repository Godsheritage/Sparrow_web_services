import React from "react";
import "./account.scss";
import { Link } from "react-router-dom";
import bookImg from "../../assets/../assets/icons/book.svg";
import jetImg from "../../assets/icons/jet.svg";
import writeImg from "../../assets/icons/write.svg";

const Account = () => {
  return (
    <div className="account">
      <h1>What would you like to do?</h1>
      <div className="option-boxes">
        <Link to="/profile" className="option-links">
          <div className="">
            <img src={bookImg} alt="this is a book"  />
            <p>Update Profile</p>
          </div>
        </Link>
        <Link to="/updateoffer" className="option-links">
          <div>
            <img src={writeImg} alt="this is a book"  />
            <p>Update Offers</p>
          </div>
        </Link>
        <Link to="/promote" className="option-links">
        
        <div>
          <img src={jetImg} alt="this is a book" />
          <p>promote Event</p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Account;
