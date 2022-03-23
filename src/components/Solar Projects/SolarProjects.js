import React from 'react'
import "./SolarProjects.css";
import Banner from '../common_components/banner/banner';
import Details from '../common_components/Details';
import SolarProjectsContent from './SolarProjectsContent';
const SolarProjects = () => {
  return (
    <>
        <Banner banner_title={"Solar Projects"}/>
        
        <div className='max-width'>
        <Details heading_title={" Solar Projects"}/>
        <div className='general_cards_design'>
        <SolarProjectsContent/>
        </div>
        </div>
    </>
  )
}

export default SolarProjects;