import React from 'react'
import Banner from '../common_components/banner/banner';
import './RefundPolicy.css';
import RefundPolicyContent from './RefundPolicyContent';

const RefundPolicy = () => {
  return (
    <>
    <Banner banner_title={'Refund Policy'}/>
        <RefundPolicyContent/>
    </>
  )
}

export default RefundPolicy;