import React from "react";
import { Button } from "react-bootstrap";

const SingleProductContent = () => {
  return (
    <div className="max-width">
      <div className="sproduct">
        <div className="flex-horizontal">
          <div className="sproduct-left flex-vertical">
            <img src="./E-Dream.png" alt="big-img" />
            <div className="sm-img-grp">
              <img
                src="./E-Dream.png"
                alt=""
                className="sm-img"
                style={{ width: "2rem" }}
              />
              <img
                src="./E-Dream.png"
                alt=""
                className="sm-img"
                style={{ width: "2rem" }}
              />
              <img
                src="./E-Dream.png"
                alt=""
                className="sm-img"
                style={{ width: "2rem" }}
              />
            </div>
          </div>
          <div className="sproduct-right">
            <div className="product-title">E-Dream</div>
            <div className="product-details">⭐⭐⭐⭐⭐</div>
            <div
              className="product-details"
              style={{ color: "var(--primarygreen)" }}
            >
              Reserve for ₹9,999
            </div>
            <div className="product-details">
              <h5 style={{ fontWeight: "700" }}>Product Details</h5>
              <ul>
                <li>Booking amount shall be refundable at any time.</li>
                <li>GST and insurance will be extra.</li>
                <li>
                  Under ideal test conditions Delivery after 3 months of
                  booking.
                </li>
                <li>
                  3* years warrantly on battery as per the warranty policy.
                </li>
                <li>
                  3* years/30,000 KMs (whichever is earlier not applicable on
                  consumables.
                </li>
                <li>The Sooter shown is only for representativ purpose.</li>
              </ul>
            </div>
            <Button>Buy Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductContent;
