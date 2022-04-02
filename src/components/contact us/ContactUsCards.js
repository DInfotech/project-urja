import React from 'react'
import { FiMail } from "react-icons/fi";
import {HiOutlineLocationMarker} from "react-icons/hi"


const style = { color: "white", fontSize: "2rem" }
const ContactUsCards = ({ ContactUsData }) => {

  return (
    <div style={{ borderRadius: "1rem" }} >
      <div className='contact-card-outline'>
        <div className='head-title'>{ContactUsData.heading}</div>
        <div className='padding-card'>
          {/* <div>{ContactUsData.sub_heading}</div> */}
          <div className='flex-horizontal-spacearound'>
            <div className='align-item'><FiMail style={style} /></div>
            <div className='flex-vertical' style={{ marginLeft: ".5rem" }}>
              <div ><b>{ContactUsData.mail_id}</b></div>
              <div>{ContactUsData.mail_id_disc}</div>
            </div>
          </div>
          <div className='flex-horizontal-spacearound'>

            <div className='align-item' style={{ fontSize: "2rem" }}>{ContactUsData.call_icon}</div>
            <div className='align-item' style={{ fontSize: "2rem" }}>{ContactUsData.mail_icon}</div>
            <div className='flex-vertical' style={{ marginLeft: ".5rem" }} >


              <div ><b>{ContactUsData.contact2}</b></div>

              <div>{ContactUsData.tollfree_no}</div>
              <div>{ContactUsData.mail_id2}</div>
            </div>
          </div>
        </div>

      </div>

    </div>

  )
}







const ContactUsOfficeCards = ({ ContactUsOfficeData }) => {

  return (
    <div style={{ borderRadius: "1rem" }} >
      <div className='contact-card-outline'>
        <div className='head-title'>Registered Office</div>
        <div className='padding-card' style={{padding:'2.5rem'}}>
        
          <div className='flex-horizontal-spacearound'>
            <div className='align-item'><HiOutlineLocationMarker style={style} /></div>
            <div className='flex-vertical' style={{ marginLeft: ".5rem" }}>
              <div >{ContactUsOfficeData.heading1}</div>
              <div>{ContactUsOfficeData.location1}</div>
            </div>
          </div>
<hr/>
          <div className='flex-horizontal-spacearound'>
            <div className='align-item'><HiOutlineLocationMarker style={style} /></div>
            <div className='flex-vertical' style={{ marginLeft: ".5rem" }}>
              <div >{ContactUsOfficeData.heading2}</div>
              <div>{ContactUsOfficeData.location2}</div>
            </div>
          </div>
          <hr/>
          <div className='flex-horizontal-spacearound'>
            <div className='align-item'><HiOutlineLocationMarker style={style} /></div>
            <div className='flex-vertical' style={{ marginLeft: ".5rem" }}>
              <div >{ContactUsOfficeData.heading3}</div>
              <div>{ContactUsOfficeData.location3}</div>
            </div>
          </div>
         
        </div>

      </div>

    </div>

  )
}

export default ContactUsCards;
export {ContactUsOfficeCards};