import React from "react";
import Banner from "../common_components/banner/banner";
import "./ContactUs.css";
import ContactUsContent from "./ContactUsContent";
import "../../common_styles/commonClasses.css";

const ContactUs = () => {
  return (
    <>
      <Banner banner_title={"Contact Us"} />
      {/* <ContactUsCardItem/> */}
      <ContactUsContent />
      {/* <ContactUsCard/> */}
    </>
  );
};

export default ContactUs;
