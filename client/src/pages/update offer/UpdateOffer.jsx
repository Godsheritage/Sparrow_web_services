import React from "react";
import { motion } from "framer-motion";
import Input from "../../components/form elements/input/Input";
import Button from "../../components/form elements/button/Button";

const UpdateOffer = () => {
  return (
    <motion.div className="profile"
    // initial={{x:"100%"}}
    // animate={{x:0}}
    // exit={{x:"2000%" }}
    >
      <h1>Our Services / Offers</h1>
      <div className="form">
        <Input
          element="input"
          type="file"
          placeholder="Upload Image"
          id="username"
          className="form-control"
          label
        />
        <Input
          element="input"
          type="text"
          placeholder="Product Name"
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
          onFocus={ (e) =>  e.target.type='date'}
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
    </motion.div>
  );
};

export default UpdateOffer;
