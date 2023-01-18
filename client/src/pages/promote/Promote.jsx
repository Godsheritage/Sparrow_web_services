import "./promote.scss";
import React from "react";
import {motion} from "framer-motion";
import Map from "../../components/ui/map/Map";
import { useLoadScript } from "@react-google-maps/api";
import Input from "../../components/form elements/input/Input";
import Button from "../../components/form elements/button/Button";



const Promote = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBc4aQkvACIYYDgqY4Bt5DByygvOOyHQ7E",
  });

  return (
    <motion.div
      className="promote"
      // initial={{ x: "100%" }}
      // animate={{ x: 0 }}
      // exit={{ x: "2000%" }}
    >
      <h1>Promote</h1>
      <div className="form">
        <Input
          element="input"
          type="text"
          placeholder="Enter Location"
          id="username"
          className="form-control"
        />

        <div className="map-box">
          {!isLoaded ? <div>Loading...</div> : <Map />}
        </div>

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
    </motion.div>
  );
};

export default Promote;
