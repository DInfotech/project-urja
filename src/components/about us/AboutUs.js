
import React from 'react'
import Banner from '../common_components/banner/banner';
import "./Aboutus.css";
import AboutusContent from './AboutUsContent';

const Aboutus = () => {
  return (
    <div>
      <Banner banner_title="About Us" />
      <AboutusContent />
    </div>
  );
};

export default Aboutus;