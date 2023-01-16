import React from "react";
import "./ profile.scss";
import { motion } from "framer-motion";
import Input from "../../components/form elements/input/Input";
import Button from "../../components/form elements/button/Button";

const Profile = () => {
  const handleChange = (e, name) => {
    let value = new Map()
    value.set(name , e.target.value)
    console.log(value);
  };
  return (
    <motion.div
      className="profile"
    //   initial={{ x: "100%" }}
    //   animate={{ x: 0 }}
    //   exit={{ x: "2000%" }}
    >
      <h1>Profile</h1>
      <div className="form">
        <Input
          element="input"
          type="file"
          placeholder="Upload Logo"
          id="username"
          className="form-control"
          label
        />
        <Input
          element="input"
          type="text"
          placeholder="Business Name"
          id="businessname"
          className="form-control"
          changeHandler = {(e) => handleChange(e, e.target.id)}
        />
        <Input
          element="input"
          type="text"
          placeholder="Opening Hours"
          id="openinghours"
          className="form-control"
        />
        <Input
          element="input"
          type="text"
          placeholder="Locations"
          id="locations"
          className="form-control"
        />
        <Input
          element="input"
          type="number"
          placeholder="Phone Number"
          id="phonenumber"
          className="form-control"
        />
        <Input
          element="input"
          type="text"
          placeholder="Business Type"
          id="businesstype"
          className="form-control"
        />
        <Input
          element="textarea"
          type="text"
          placeholder="Business Description"
          id="description"
          className="form-control"
        />
        <Input
          element="input"
          type="file"
          placeholder="Add Files / Images"
          id="username"
          className="form-control"
          label
          multiple
        />
      </div>
      <Button>Save Changes</Button>
    </motion.div>
  );
};


export default Profile;
