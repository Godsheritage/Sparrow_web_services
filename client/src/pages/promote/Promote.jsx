import React from "react";
import "./promote.scss";
import Button from "../../components/ui/button/Button";
import Input from "../../components/form elements/Input";

const Promote = () => {
  return (
    <div className="profile">
      <h1>Our Services / Offers</h1>
      <div className="form">
        <Input
          element="input"
          type="text"
          placeholder="Enter Location"
          id="username"
          className="form-control"
        />

        <Input
          element="input"
          type="number"
          placeholder="Radius from Location"
          id="radiusfromlocation"
          className="form-control"
        />
        <Input
          element="input"
          type="number"
          placeholder="Promotion Period Date"
          id="promotionperioddate"
          className="form-control"
        />
        <Input
          element="input"
          type="text"
          placeholder="Promotion Period Time"
          id="promotionperiodtime"
          className="form-control"
        />
      </div>

      <Button>Add Another</Button>
    </div>
  );
};

export default Promote;
