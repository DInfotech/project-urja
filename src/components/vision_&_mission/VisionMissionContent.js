import React from 'react'
import Details from '../common_components/Details';

const VisionMissionContent = () => {
const imagestyle={
    width: "40%",
    borderRadius: "1rem",
    marginTop: "1rem",
    marginRight:"4rem",
    marginBottom:"2rem",
}


    return (
        <div className='content'>
            <div className='max-width'>
               <Details heading_title={"Mission & Vision"}/>

                <div className='flex-horizontal'>
                    <img src='vision.jpg' alt='energy' style={imagestyle} />
                    <div >
                        <div className='secondary-heading'>
                            <h2>Vision</h2></div>
                        <p className='paragraph-css'>  Our vision is to implement URJA KENDRA in 2.48 Lakhs GRAM PANCHAYATS  across the geography, enlightening rural life and creating sources of livelihood wherein the villagers shall be trained on time & off time at Urja Incubation Centers and Government ITI’s.</p>

                        <div className='secondary-heading'>
                            <h2>Mission</h2></div>
                        <p className='paragraph-css'>  Our mission is to become the market –driven global leader in the renewable energy industry.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default VisionMissionContent;