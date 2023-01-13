import "./signin.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [signUp, isSignup] = useState(false);

  return (
    <div className="sign-in-box">
      <h1>Sign In</h1>
      <div className="input-fields ">
        <input
          type="text"
          placeholder="Username"
          className="form-control mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="form-control"
        />
      </div>
      <Link to="/account" className="btn btn-lg btn-primary">
        Sign In
      </Link>
      <p>
        Don't have an account? <Link> Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;
