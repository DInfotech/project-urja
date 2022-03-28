import React from 'react'
import "./Ceo.css";
import Banner from '../common_components/banner/banner';
import Details from '../common_components/Details';


const Ceo = () => {
    return (
        <>
            <Banner banner_title={"CEO & Director"} />
            <div className='max-width'>

                <Details heading_title={"CEO & Director"} />

                {/* <BoardDirectorsContent/> */}

                <div className="flex-horizontal profilecard">
                    <div className="profile-image"><img src="../dummyceo.jpg" alt="profile-sample2" /></div>
                    <figcaption  className='m1'>
                        <h3  className='secondary-heading' style={{color:"var(--primarygreen)", fontWeight:'400'}}>Gaurav Aggarwal</h3>
                        <h5>CEO & Director</h5>
                        <p style={{paddingLeft:'0'}}>Has over 16 years of experience in Managing Business as a profit centre with the Telecom / Broadband / IT / Service industries. 
                        He has led the evolution & growth of CA TV & broadband services in North India.<br/><br/> An effective leader with distinguished ability of building, leading & motivating large multicultural teams. Have represented organizations at many world forums.</p>

                    </figcaption>
                </div>
            </div>
        </>
    )
}

export default Ceo;



