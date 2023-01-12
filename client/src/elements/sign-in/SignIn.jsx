import React from "react";
import "./signin.scss";

const SignIn = () => {
  return (
    <div className="sign-in-box">
      <h1>Sign In</h1>
      <div className="input-fields ">
        <input type="text" value="" placeholder="username" className="form-control" />
        <input type="password" value="" placeholder="password" className="form-control"/>
      </div>
      <button className="btn btn-primary">Sign In</button>
    </div>
  );
};

export default SignIn;
