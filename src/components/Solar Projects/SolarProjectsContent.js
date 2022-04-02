import React from 'react'
import { FcFlashOn } from "react-icons/fc";
const SolarProjectsData = [
  {
    id: 1,
    name: "Supply of Solar Lanterns to CRPF",
    location: "Meghalaya",

  },
  {
    id: 2,
    name: "Supply of AC LED Lights in Ardh Kumbh Mela, 2016",
    location: "Haridwar",
  },
  {
    id: 3,
    name: "Installed SPV Power Plant at Shulabh Toilet Complex",
    location: "Jharkhand",

  },
  {
    id: 4,
    name: "Installed Solar LED Street Lights in Gram Panchayats",
    location: "Across India",

  },
  {
    id: 5,
    name: "Installed Solar Panels in Gram Panchayats",
    location: "Across India",

  },
]



const SolarProjectsContent = (props) => {
  return (
    <>
      <div className='general_card flex-horizontal'>
        <div style={{ width: "15%" }} className="project_icons"><FcFlashOn /></div>
        <div className='flex-vertical solarproject_card_content' style={{ width: "85%" }}>

          <div className='general_card_heading'>{props.cardProject.name}</div>
          <div className='general_card_subheading'>{props.cardProject.location}</div>
        </div>

      </div>
    </>
  );
};


const SolarProjectsCardList = () => {
  return (
    <>

      {SolarProjectsData.map(cardProject => {
        return <SolarProjectsContent cardProject={cardProject} key={cardProject.id} />;
      })}
    </>

  );
};
export default SolarProjectsCardList;

