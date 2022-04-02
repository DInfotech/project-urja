import React from "react";
import "./ContactUs.css";
import ContactUsCards from "./ContactUsCards";
import { ContactUsOfficeCards } from "./ContactUsCards";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const ContactUsDatas = [
  {
    id: 1,
    heading: "For Solar Products & Battery – Sales",
    sub_heading: "Urja Global Limited",
    mail_id: "info@urjaglobal.in",
    mail_id_disc: "Email Adress for online support",
    contact2: "Tollfree",
    tollfree_no: "8000-500-789",
    call_icon: <FiPhone />,
  },
  {
    id: 2,
    heading: "For Grievances/Investor Communications",
    sub_heading: "Company Secretary",
    mail_id: "cs@urjaglobal.in",
    mail_id_disc: "Email ID for Company Secretary",
    contact2: "hr@urjaglobal.in",
    mail_id2: "Email ID For Careers",
    mail_icon: <FiMail />,
  },

];


const ContactUsOfficeDatas = [
  {
    id: 1,
    heading1: "Urja Global Limited",
    heading2:"Urja Incubation/Training Center",
    heading3:"Factory Address",
    location1:"487/63, 1st Floor, National Market, Peeragarhi, New Delhi-110087",
    location2:"487/63, 1st Floor, National Market, Peeragarhi, New Delhi-87",
    location3:"Plot No.11, Sec.16, HSIIDC, Industrial complex, Bahadurgarh, Distt. Jhajjar, Haryana – 124507, India",
  },
];




const ContactUsContent = () => {
  const ContactUsList = ContactUsDatas.map((ContactUsData) => (
    <ContactUsCards ContactUsData={ContactUsData} />
  ));

  const ContactUsOfficeList = ContactUsOfficeDatas.map((ContactUsOfficeData) => (
    <ContactUsOfficeCards ContactUsOfficeData={ContactUsOfficeData} />
  ));
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <div className="max-width">
        <div className="heading">Urja Global Limited Contact Us</div>
        <div className="sub-heading">
          One of India’s leading Renewable Energy developers.
        </div>

        <div>
          {/* <div className="secondary-heading" style={{ fontSize: "25px" }}>
            Contact Us
          </div> */}
          <div className="flex-horizontal contact-cards-parent">
            <div className="flex-vertical contact-child1">{ContactUsList}</div>
            <div
              className="flex-vertical contact-child1"
              style={{ background: "var(primarygreen)" }}
            >{ContactUsOfficeList}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsContent;
