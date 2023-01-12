import React from "react";
import "./signin.scss";

const SignIn = () => {
  return (
    <div className="sign-in-box">
      <h1>Sign In</h1>
      <div className="input-fields ">
        <input type="text"  placeholder="Username" className="form-control mb-3" />
        <input type="password"  placeholder="Password" className="form-control"/>
      </div>
      <button className="btn btn-lg btn-primary">Sign In</button>
      <p>Don't have an account? Sign Up</p>
    </div>
  );
};

export default SignIn;
