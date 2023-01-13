import React from "react";
import Input from "../../components/form elements/Input";
import Button from "../../components/ui/button/Button";

const UpdateOffer = () => {
  return (
    <div className="profile">
      <h1>Our Services / Offers</h1>
      <div className="form">
        <Input
          element="input"
          type="file"
          placeholder="Upload Image"
          id="username"
          className="form-control"
        />
        <Input
          element="input"
          type="text"
          placeholder="Name"
          id="name"
          className="form-control"
        />
        <Input
          element="input"
          type="number"
          placeholder="Old Price"
          id="oldprice"
          className="form-control"
        />
        <Input
          element="input"
          type="number"
          placeholder="New Price"
          id="newprice"
          className="form-control"
        />
        <Input
          element="input"
          type="text"
          placeholder="Valid Until"
          id="validuntil"
          className="form-control"
        />
        <Input
          element="textarea"
          type="text"
          placeholder="Description"
          id="description"
          className="form-control"
        />
      </div>
      <div>
        <Button>Add Another</Button>
        <Button>Promote This</Button>
      </div>
    </div>
  );
};

export default UpdateOffer;
