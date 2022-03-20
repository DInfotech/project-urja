import React from "react";
import "./ContactUs.css";
// import ContactUsCards from "./ContactUsCards";

// const ContactUsDatas = [
//   {
//     id: 1,
//     heading: "For Solar Products & Battery – Sales",
//     sub_heading: "Urja Global Limited",
//     mail_id: "info@urjaglobal.in",
//   },
//   {
//     id: 2,
//     heading: "For Grievances/Investor Communications",
//     sub_heading: "Company Secretary",
//     mail_id: "cs@urjaglobal.in",
//   },
// ];
const ContactUsContent = () => {
  // const contactUsList= ContactUsDatas.map(ContactUsData=>
  //     <ContactUsCards ContactUsData={ContactUsData}/>)
  return (
    <div className="max-width">
      <div className="heading">Urja Global Limited Contact Us</div>
      <div className="sub-heading">
        One of India’s leading Renewable Energy developers.
      </div>

      <div>
        <div className="secondary-heading" style={{ fontSize: "25px" }}>
          Contact Us
        </div>

        <contactUsList />
        {/* <div className='flex-img-content'>
                    <div>hello</div>
                    <div>world</div>
                </div> */}
      </div>
    </div>
  );
};

export default ContactUsContent;
