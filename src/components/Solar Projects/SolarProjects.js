import React from 'react'
import "./SolarProjects.css";
// import Banner from '../common_components/banner/banner';
import Details from '../common_components/Details';
import SolarProjectsContent from './SolarProjectsContent';
const SolarProjects = () => {
  return (
    <>
        {/* <Banner banner_title={"Solar Projects"}/> */}
        <div className='solarprojects_header'>
        <div className='max-width' style={{backgroundColor:'var(--ghostwhite)', color:'white'}}>
        <Details heading_title={" Solar Projects"}/>
        
        <div className='general_cards_design'>

        <SolarProjectsContent/>
</div>
        </div>
        </div>
    </>
  )
}

export default SolarProjects;