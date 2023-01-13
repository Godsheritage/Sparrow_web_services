import React from "react";
import "./account.scss";
import { Link } from "react-router-dom";
import bookImg from "../../assets/book.svg";
import jetImg from "../../assets/jet.svg";
import writeImg from "../../assets/write.svg";

const Account = () => {
  return (
    <div className="account">
      <h1>What would you like to do?</h1>
      <div className="option-boxes">
        <Link to="/profile" className="option-links">
          <div className="">
            <img src={bookImg} alt="this is a book" size="1rem" />
            <p>Update Profile</p>
          </div>
        </Link>
        <div>
          <img src={writeImg} alt="this is a book" size="1rem" />
          <p>Update Offers</p>
        </div>
        <div>
          <img src={jetImg} alt="this is a book" size="1rem" />
          <p>promote Event</p>
        </div>
      </div>
    </div>
  );
};

export default Account;