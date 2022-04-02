import React from 'react'
import Details from '../common_components/Details';
const AboutusContent = () => {
  const imagestyle = {
    width: "45%",
    borderRadius: "1rem",
    marginTop: "1rem",
    marginRight: "0",
    marginBottom: "2rem",
  }
  return (
    <div className='content'>
      <div className='max-width'>
        <Details details_title="About Us" />
        <div>
          <div className="mainsection">
            <div className="secondcontainer">
              <div className="scon">
                <p className='paragraph-css'>
                  Our team comprises of seasoned professionals with a proven track
                  record in design and integration of off grid and grid connected
                  solar projects.
                </p>
                <p className='paragraph-css'>
                  We own one of the largest sales/installation networks PAN India
                  backed by our team.Urja Global Limited is promoted by the
                  promoters group hailing from Rajasthan, India.
                </p>
                <p className='paragraph-css'>
                  With more than two decades of experience, they have established as
                  one of the country’s leading industrial companies and a strong
                  well-diversified conglomerate which is active in: Renewable
                  Energy, IT&ITES, Tours & Travels, and Education & Training having
                  presence across the globe.
                </p>
                <p className='paragraph-css'>
                  We assure customer’s satisfaction in terms of product quality and
                  service. Urja offers outstanding quality varied Solar Products
                  which makes use of green and clean energy simple viz.
                </p>
              </div>
              <img src='vision.jpg' alt='energy' style={imagestyle}/>
            </div>
          </div>
          <div className="thirdcontainer">
            <img src='vision.jpg' alt='energy' style={imagestyle}/>
            <div>
              <br />
              <p className='paragraph-css'>
                Solar Home Lighting Systems, Solar Lanterns, Solar Street Lighting Systems, Roof Top Systems,
                Solar PV Pannels with quality and standards conforming to ISO 9001 .
                All our Solar products range comply with MNRE standards.
              </p>
              <p className='paragraph-css'>
                We at Urja are committed to providing world-class services to
                rapidly develop rural India focusing on rural electrification
                especially in hilly areas, forest regions, deserts, islands, far
                flung villages, unmanned locations and other areas which require
                reliable and uninterrupted power supply.
              </p>
              <p className='paragraph-css'>
                With a strong design and manufacturing back ground UGL has developed
                themselves as a leading manufacturer of Solar Energy Systems to
                cater to almost the complete range of customer requirements
              </p>
            </div>
          </div>
          <div className="scont">
            <iframe
              width="800"
              height="400"
              src="https://www.youtube.com/embed/utmFXSZAo58"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutusContent;
