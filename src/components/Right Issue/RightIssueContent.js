import React, { useState, useMemo } from 'react'
import Select from 'react-select';
import './RightIssue.css';
import countryList from 'react-select-country-list';
const RightIssueContent = () => {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
  
    const changeHandler = value => {
      setValue(value)
    }

  return (
    <>
         <div className='max-width-bg'>
        <div className='max-width' >
          <h1 className='heading2'>Right Issue</h1>
          {/* <div style={{ fontSize: '3rem' }} className='heading'>Terms of Use</div> */}
          <div className='box-shadow-div' >
            <div style={{fontWeight:'500', color:'grey'}}>IMPORTANT: You must read and agree with the terms and conditions of the following disclaimer before continuing.</div>
            <hr />
            <div>
            Please Read This Notice Carefully. It Applies To All Persons Who View This Website. Viewing This Information May Not Be Lawful In Certain Jurisdictions. Please Note That The Disclaimer Set Out Below May Be Altered Or Updated. You Should Read It In Full Each Time You Visit The Website. By Accessing This Information On This Website, You Agree To The Terms And Conditions Below, Including Any Modifications That May Be Made To Them From Time To Time. These Materials Are Not Directed At Or Intended To Be Accessed By Persons Located In The United States Or Other Jurisdictions Outside India.
<br/><br/>
The following disclaimer applies to the documents of Urja Global Limited (the “Company”, and such documents, the “Documents” and each, a “Document”) hosted on this website in connection with the Company’s issue of equity shares on a rights basis (the “Issue” and the “Rights Equity Shares”, respectively). The Documents have been made available on this website in electronic form solely to comply with the provisions of the Securities and Exchange Board of India (Issue of Capital and Disclosure Requirements) Regulations, 2018, as amended. You are advised to read this disclaimer carefully before reading, accessing or making any other use of the Documents. By accessing the Documents, you agree to follow the following terms and conditions, including any modifications to them from time to time. References to the Company herein include its subsidiaries, affiliates, and joint venture, as applicable, which are consolidated in its accounts.
            </div>
         
            <div>
              <div className='general_card_heading' style={{marginTop:'1rem'}}>Nothing Herein Constitutes An Offer Of Securities For Sale In Any Jurisdiction Where It Is Unlawful To Do So.</div>
              <div className='tc_subdata'>
              The contents of the Documents are for your information only. No part of the contents herein shall be copied or duplicated in any form by any means or redistributed. Neither the Company, nor any of its representatives or agents are soliciting any action based on any of the information contained on this website, including the Documents, and such information should not be construed as an offer, or invitation or offer to sell or the solicitation of any offer to buy or subscribe for or purchase any security. Neither the Company, nor any of its representatives or agents represents that the contents of the Documents are accurate or complete. The information contained in the Documents may not be updated since its original publication date and may not reflect the latest updates.
<br/><br/>
The Documents may contain statements about future events and expectations that constitute forward-looking statements. There can be no assurance that the results and events contemplated by the forward-looking statements contained there will in fact occur. The Company, its Directors or any of their respective affiliates do not make any representation or warranty, express or implied, as to, and do not accept any responsibility or liability with respect to, the fairness, accuracy, completeness or correctness of any information or opinion in the Documents.
<br/><br/>
Please note that because of restrictions imposed by applicable law or regulation on soliciting securities business in various jurisdictions, subscription to the Issue will not be permitted to residents of certain jurisdictions. The information contained in this portion of our website and the Documents are not intended to be, and should not be, viewed by any person in the United States or in any other jurisdiction outside India where the offer and sale of the securities is not permitted under the laws of such jurisdictions. The Documents are not intended for distribution to, or use by, any person or entity in any jurisdiction or country where (a) distribution or use of such information would not be permissible under or in violation of any applicable law or regulation; or (b) the Company would by virtue of such distribution become subject to new or additional registration requirements.
<br/><br/>
The information on this website and the Documents are directed solely to Eligible Equity Shareholders of the Company as on the Record Date, as contemplated in the Documents. This website and the Documents should not be reproduced, transmitted or distributed to any other person.
<br/><br/>     
I hereby declare that I am a resident of <Select options={options} placeholder={'Select Country'} value={value} onChange={changeHandler} />
 and am entitled to receive information contained on this website.
              </div>
              <div>
              <input type="checkbox" id="topping" name="topping" value="Paneer" style={{paddingRight:'1rem'}}/> I have read the Legal Disclaimer and am entitled to receive information contained in this web site.      
              </div>
              <div> <button type="submit" className='sumbitbutton'>Sumbit</button></div>
            </div>
            </div>
            </div>
            </div>
    </>
  )
}

export default RightIssueContent;