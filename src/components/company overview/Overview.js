import React from 'react';
import "./overview.css";
import Banner from '../common_components/banner/banner';
import OverviewContent from './OverviewContent';


const CompanyOverview = () => {
  return (
     <>
         <Banner banner_title="Overview" />
         <OverviewContent/>

     </>
  )
}

export default CompanyOverview;