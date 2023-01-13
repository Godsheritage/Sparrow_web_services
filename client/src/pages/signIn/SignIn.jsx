import "./signin.scss";
import Input from "../../components/form elements/Input";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Button } from "bootstrap";
import Button from "../../components/ui/button/Button";

const SignIn = () => {
  const [signUp, isSignup] = useState(false);

  return (
    <div className="sign-in-box">
      <h1>Sign In</h1>
      <div className="input-fields ">
        <Input
          element="input"
          type="text"
          placeholder="Username"
          id = "username"
          className="form-control"
        />
        <Input
          element="input"
          type="password"
          placeholder="Password"
          className="form-control"
          id = "password"
        />
      </div>
      <Button to="/account" className="btn btn-lg btn-primary">
        Sign In
      </Button>
      <p>
        Don't have an account? <Link> Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;
