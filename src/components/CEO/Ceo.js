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

                <div className="profilecards">
                    <div className="profile-image"><img src="../profile.jpg" alt="profile-sample2" /></div>
                    <figcaption>
                        <h3>Gaurav Aggarwal</h3>
                        <h4>CEO & Director</h4>
                        <p>Has over 16 years of experience in Managing Business as a profit centre with the Telecom / Broadband / IT / Service industries. He has led the evolution & growth of CA TV & broadband services in North India. An effective leader with distinguished ability of building, leading & motivating large multicultural teams. Have represented organizations at many world forums.</p>

                    </figcaption>
                </div>
            </div>
        </>
    )
}

export default Ceo;



