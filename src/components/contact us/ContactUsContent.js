import React from 'react'
import "./ContactUs.css";
import ContactUsCards from './ContactUsCards';
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";


const ContactUsDatas=[{
id:1,
heading:"For Solar Products & Battery – Sales",
sub_heading:"Urja Global Limited",
mail_id:"info@urjaglobal.in",
mail_id_disc:"Email Adress for online support",
contact2:"Tollfree",
tollfree_no:"8000-500-789",
call_icon:<FiPhone/>,
},
{
id:2,
heading:"For Grievances/Investor Communications",
sub_heading:"Company Secretary",
mail_id:"cs@urjaglobal.in",
mail_id_disc:"Email ID for Company Secretary",
contact2:"hr@urjaglobal.in",
mail_id2:"Email ID For Careers",
mail_icon:<FiMail/>,

},
];
const ContactUsContent = () => {

    const ContactUsList= ContactUsDatas.map(ContactUsData=>
        <ContactUsCards ContactUsData={ContactUsData}/>)
    return (
        <div style={{backgroundColor:"whitesmoke"}}>
        <div className='max-width'>
            <div className='heading'>Urja Global Limited Contact Us</div>
            <div className='sub-heading'>One of India’s leading Renewable Energy developers.</div>

            <div>
            <div className='secondary-heading' style={{fontSize:"25px"}}>Contact Us</div>
              <div className='flex-horizontal contact-cards-parent'>  
              <div className='flex-vertical contact-child1' >
            {ContactUsList}
            </div>
            <div className='contact-child1' style={{background:"var(primarygreen)"}}></div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default ContactUsContent;