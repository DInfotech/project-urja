import React from 'react'
import "./KeyManagerial.css";
import Banner from '../common_components/banner/banner';
import KeyManagerialContent from './KeyManagerialContent';
import Details from '../common_components/Details';


const KeyManagerial = () => {
  return (
    <>
        <Banner banner_title={"Top Managment"}/>
        
        <div className='max-width'>
        <Details heading_title={" Top Managment"}/>
        <div className='cards-flex'>
        <KeyManagerialContent/>
    </div>
    </div>
    </>
  )
}

export default KeyManagerial;