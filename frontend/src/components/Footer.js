import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="justify-content-center d-flex">
        <div className="card-name">
          <img
            alt="Mobile money"
            src="/images/mtn.jpg"
          />
        </div>
        <div className="card-name">
          <img
            alt="orange money"
            src="/images/orange.jpg"
          />
        </div>
        <div className="card-name">
          <img
            alt="Paypal"
            src="/images/paypal.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
