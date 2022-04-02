import React from 'react'
import Banner from '../common_components/banner/banner';
import './PrivacyPolicy.css';
import PrivacyPolicyContent from './PrivacyPolicyContent';

const PrivacyPolicy = () => {
  return (
    <>
    <Banner banner_title={'Privacy Policy'}/>
        <PrivacyPolicyContent/>
    </>
  )
}

export default PrivacyPolicy;