import React from 'react'
import Banner from '../common_components/banner/banner';
import './TermsConditions.css';
import TermsConditionsContent from './TermsConditionsContent';

const TermsConditions = () => {
  return (
    <>
    <Banner banner_title={'Terms And Conditions'}/>
        <TermsConditionsContent/>
    </>
  )
}

export default TermsConditions;