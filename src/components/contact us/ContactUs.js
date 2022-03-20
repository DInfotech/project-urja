import React from 'react'
import Banner from '../common_components/banner/banner';
import "./ContactUs.css"
import ContactUsContent from './ContactUsContent';


const ContactUs = () => {
  return (
    <>
        <Banner banner_title={"Contact Us"}/>
      {/* <ContactUsCardItem/> */}
      <ContactUsContent/>
        {/* <ContactUsCard/> */}
    </>
  )
}

export default ContactUs;