// // import React from 'react'

// // const SolarProjectsContent = () => {
// //   return (
// //     <div>SolarProjectsContent</div>
// //   )
// // }

// // export default SolarProjectsContent





// import React from 'react'
// import "./SolarProjects.css";
// import Banner from '../common_components/banner/banner';
// import Details from '../common_components/Details';
// import SolarProjectsContent from './SolarProjectsContent';
// const SolarProjects = () => {
//   return (
//     <>
//         <Banner banner_title={"Solar Projects"}/>
//         <div className='solarprojects_header'>
//         <div className='max-width' style={{backgroundColor:'var(--ghostwhite)', color:'white'}}>
//         <Details heading_title={" Solar Projects"}/>

//         <div className='general_cards_design'>

//         <SolarProjectsContent/>
// </div>
//         </div>
//         </div>
//     </>
//   )
// }

// export default SolarProjects;








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
      <div className='general_card flex-horizontal reveal fade-left'>
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
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  return (
    <>

      {SolarProjectsData.map(cardProject => {
        return <SolarProjectsContent cardProject={cardProject} key={cardProject.id} />;
      })}
    </>

  );
};
export default SolarProjectsCardList;

