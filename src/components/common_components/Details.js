import React from "react";
import "../../common_styles/commonClasses.css";
const Details = (props) => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  return (
    <div className="reveal fade-bottom">
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
