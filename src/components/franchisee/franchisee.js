import React from 'react'
import Banner from '../common_components/banner/banner';
import "./franchisee.css";
import FranchiseeContent from './franchiseeContent';
import Details from '../common_components/Details';
const Franchisee = () => {
  return (
    <div>
      <Banner banner_title={"Franchisee"} />
      <div className="max-width">
        <Details heading_title="Franchisee" />
        <FranchiseeContent />
      </div>
    </div>
  );
};

export default Franchisee;