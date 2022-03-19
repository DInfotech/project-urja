import React from 'react'
import Banner from '../common_components/banner/banner';
import "./Projects.css";
import ProjectContent from './projectContent';
import Details from '../common_components/Details';
const Projects = () => {
 
  return (
    <>
    <Banner banner_title="Projects"/>
    <div className='max-width'>
        <Details details_title="Projects" />
        <ProjectContent />
      </div>
    </>
  )
}

export default Projects;
