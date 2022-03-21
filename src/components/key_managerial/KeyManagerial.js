import React from 'react'
import "./KeyManagerial.css";
import Banner from '../common_components/banner/banner';
import KeyManagerialContent from './KeyManagerialContent';
import Details from '../common_components/Details';


const KeyManagerial = () => {
  return (
    <>
        <Banner banner_title={"Key Managerial Personnel"}/>
        
        <div className='max-width'>
        <Details heading_title={" Key Managerial Personnel"}/>
        <KeyManagerialContent/>
    </div>
    </>
  )
}

export default KeyManagerial;