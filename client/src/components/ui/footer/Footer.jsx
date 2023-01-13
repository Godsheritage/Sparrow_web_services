import React from "react";
import "./footer.scss"

const Footer = () => {
  const Year = new Date().getFullYear();
  
  return (
    <div className="footer">
      <p>Copywright © {Year} Sparrow Services</p>
    </div>
  );
};

export default Footer;
