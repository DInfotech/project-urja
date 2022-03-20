import React from 'react'
import Details from '../common_components/Details';

const OverviewContent = () => {
    return (
        <div className='content'>
            <div className='max-width'>
                <Details heading_title={"Overview"}/>
                <div className='flex-horizontal'>
                    <p className='paragraph-css'>Our team comprises of seasoned professionals with a proven track record in design and integration of off grid and grid connected solar projects. We own one of the largest sales/installation networks PAN India backed by our team.
                        Urja Global Limited is promoted by the promoters group hailing from Rajasthan, India. With more than two decades of experience, they have established as one of the country’s leading industrial companies and a strong well-diversified conglomerate which is active in: Renewable Energy, IT&ITES, Tours & Travels, and Education & Training having presence across the globe.
                        <br />
                        <br />
                        We assure customer’s satisfaction in terms of product quality and service. Urja offers outstanding quality varied Solar Products which makes use of green and clean energy simple viz. Solar Home Lighting Systems, Solar Lanterns, Solar Street Lighting Systems, Roof Top Systems, Solar PV Pannels with quality and standards conforming to ISO 9001. All our Solar products range comply with MNRE standards.
                        <br />
                        <br />
                        We at Urja are committed to providing world-class services to rapidly develop rural India focusing on rural electrification especially in hilly areas, forest regions, deserts, islands, far flung villages, unmanned locations and other areas which require reliable and uninterrupted power supply.</p>
                    <br />
                    <br />
                    <img src='overviewimg.png' alt='energy' style={{ width: "40%" }} />
                </div>
                <p className='paragraph-css'>With a strong design and manufacturing back ground UGL has developed themselves as a leading manufacturer of Solar Energy Systems to cater to almost the complete range of customer requirementsUrja Global Limited is promoted by the promoters group hailing from Rajasthan, India.
                    <br />
                    <br />
                    With more than two decades of experience, they have established as one of the country’s leading industrial companies and a strong well-diversified conglomerate which is active in: Renewable Energy, IT&ITES, Tours & Travels, and Education & Training having presence across the globe.</p>
            </div>
        </div>
    )
}

export default OverviewContent;