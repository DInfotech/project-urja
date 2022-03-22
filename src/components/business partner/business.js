import React from 'react'
import Banner from '../common_components/banner/banner';
import "./business.css";
import BusinessContent from './businessContent';
import Details from '../common_components/Details';
const BusinessPartner = () => {

  return (
    <>
      <Banner banner_title="Business Partner" />
      <div className='max-width'>
        <Details details_title="Business Partner" />
        <BusinessContent />
      </div>
    </>
  )
}

export default BusinessPartner;
