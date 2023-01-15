import React from "react";
import "./promote.scss";
import Button from "../../components/ui/button/Button";
import Input from "../../components/form elements/Input";

import Map from "../../components/ui/map/Map";
import { useLoadScript } from "@react-google-maps/api";

const Promote = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBc4aQkvACIYYDgqY4Bt5DByygvOOyHQ7E",
  });

  return (
    <div className="promote">
      <h1>Our Services / Offers</h1>
      <div className="form">
        <Input
          element="input"
          type="text"
          placeholder="Enter Location"
          id="username"
          className="form-control"
        />

        <div className="map-box">{!isLoaded ? <div>Loading...</div> : <Map />}</div>

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
          onFocus={(e) => (e.target.type = "date")}
          placeholder="Promotion Period Date"
          id="promotionperioddate"
          className="form-control"
        />
        <Input
          element="input"
          type="text"
          onFocus={(e) => (e.target.type = "date")}
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
