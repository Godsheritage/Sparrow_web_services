import React from "react";
import "./ profile.scss"
import Button from "../../components/ui/button/Button";
import Input from "../../components/form elements/Input";

const Profile = () => {
  return (
    <div className="profile">
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
    </div>
  );
};

//Todo Create button components

export default Profile;
