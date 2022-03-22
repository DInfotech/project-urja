import React from 'react'
import "./banner.css";

const Banner =props => {
  console.log(props)
  return (
    <div className='banner'>
    <div className='max-width'>
    <div className='banner-heading'><span>{props.banner_title}</span></div>
    {/* <div>
      <span>Home</span> / Company Overview
    </div> */}
    </div>
    </div>
  )
}

export default Banner