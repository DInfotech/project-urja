import React from "react";
import "../../common_styles/commonClasses.css";
const Details = (props) => {
  return (
    <div>
      <div className="heading">Urja Global Limited {props.heading_title}</div>
      <div className="sub-heading">
        Urja Global Limited is in one of India’s leading Renewable Energy
        developers.
      </div>
      <p className="paragraph-css">
        Urja Global Limited is in one of India’s leading Renewable Energy
        developers and operators. Urja is engaged in design, consultancy,
        integration, supply, installation, commissioning & maintenance of
        off-grid and grid connected Solar Power Plants. We are approved Channel
        Partners of Ministry of New and Renewable Energy (MNRE), Govt. of India.
      </p>
    </div>
  );
};

export default Details;
