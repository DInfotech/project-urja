import React from "react";
import "./banner.css";

const Banner = (props) => {
  console.log(props);
  return (
<<<<<<< HEAD
    <div className='banner'>
    <div className='max-width'>
    <div className='banner-heading'><span>{props.banner_title}</span></div>
    {/* <div>
      <span>Home</span> / Company Overview
    </div> */}
=======
    <div className="banner">
      <div className="max-width">
        <div className="banner-heading">
          Urja Global <span>{props.banner_title}</span>
        </div>
      </div>
>>>>>>> c0e09d6f012a5f9767c9d04a696d0e314e99c1dc
    </div>
  );
};

export default Banner;
