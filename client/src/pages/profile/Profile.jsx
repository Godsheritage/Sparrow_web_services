import React from "react";
import "./ profile.scss"
import Input from "../../components/form elements/Input";

const Profile = () => {
  return (
    <div className="profile">
      <h1>profile</h1>
      <div className="form">
        <Input
          element="input"
          type="text"
          placeholder="Upload Image"
          id="username"
          className="form-control"
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
          type="text"
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
          element="input"
          type="text"
          placeholder="Business Description"
          id="description"
          className="form-control"
        />
        <Input
          element="input"
          type="text"
          placeholder="Add Files / Images"
          id="username"
          className="form-control"
        />
        
      </div>
    </div>
  );
};

//Todo Create button components

export default Profile;
