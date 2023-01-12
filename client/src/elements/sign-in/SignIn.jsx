import React from "react";
import "./signin.scss";

const SignIn = () => {
  return (
    <div className="sign-in-box">
      <h1>Sign In</h1>
      <div className="input-fields ">
        <input type="text" value="" placeholder="username" className="form-control mb-3" />
        <input type="password" value="" placeholder="password" className="form-control"/>
      </div>
      <button className="btn btn-primary">Sign In</button>
      <p>Don't have an account? Sign Up</p>
    </div>
  );
};

export default SignIn;
