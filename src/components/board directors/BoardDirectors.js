import React from 'react';
import "./BoardDirectors.css";
import BoardDirectorsContent from './BoardDirectorsContent';
import Banner from '../common_components/banner/banner';
import Details from '../common_components/Details';
const BoardDirectors = () => {
  return (
      <>
     
      <Banner banner_title={"Board of Director"}/>
      <div className='max-width'>

      <Details/>

      <BoardDirectorsContent/>
      </div>
      </>
    
    
  )
}

export default BoardDirectors;