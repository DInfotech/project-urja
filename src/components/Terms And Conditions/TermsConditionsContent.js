import React from 'react';
import './TermsConditions.css';

/*
const data1='If this Web site contains message/bulletin boards, chat rooms, or other message or communication facilities (collectively, "Forums"), you agree to use the Forums only to send and receive messages and material that are proper and related to the particular Forum. By way of example, and not as a limitation, you agree that when using a Forum, you shall not do any of the following:

Defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as rights of privacy and publicity) of others.
publish, post, distribute or disseminate any defamatory, infringing, obscene, indecent, or unlawful material or information.
Upload files that contain software or other material protected by intellectual property laws (or by rights of privacy of publicity) unless you own or control the rights thereto or have received all necessary consents
Upload files that contain viruses, corrupted files, or any other similar software or programs that may damage the operation of another's computer
Conduct or forward surveys, contests, or chain letters.
Download any file posted by another user of a Forum that you know, or reasonably should know, cannot be legally distributed in such a manner.';

const TermsConditionsData = [
  {
  id: 1,
  tandc_heading: '2) License',
  tandc_data: 'urjaglobal.in hereby grants you a limited, non-exclusive, non-assignable and non-transferable license to access urjaglobal.in provided and expressly conditioned upon your agreement that all such access and use shall be governed by all of the terms and conditions set forth in this USER AGREEMENT.',
},
{
  id: 2,
  tandc_heading: 'Copyright & No Retransmission Of Information:',
  tandc_data: "urjaglobal.in as well as the design and information contained in this site is the valuable, exclusive property of urjaglobal.in, and nothing in this Agreement shall be construed as transferring or assigning any such ownership rights to you or any other person or entity. All stock call information on urjaglobal.in is the proprietary, confidential property of urjaglobal.in and cannot be repeated for any reason outside the urjaglobal.in. You agree not to repeat or rebroadcast in any way any of the stock call information made on urjaglobal.in for any reason whatsoever. You agree that if you do repeat or re-post any of urjaglobal.in calls by any mean, you will be liable for actual and punitive damages as determined by urjaglobal.in and additional damages to be determined by a Indian court of Law.You may not resell, redistribute, broadcast or transfer the information or use the information in a searchable, machine-readable database unless separately and specifically authorized in writing by urjaglobal.in prior to such use. You may not rent, lease, sublicense, distribute, transfer, copy, reproduce, publicly display, publish, adapt, store or time-share urjaglobal.in, any part thereof, or any of the information received or accessed the refrom to or through any other person or entity unless separately and specifically authorized in writing by urjaglobal.in prior to such use."
  
},
{
  id: 3,
  tandc_heading: '4) Delays In Services:',
  tandc_data: 'Neither urjaglobal.in (including its and their directors, employees, affiliates, agents, representatives or subcontractors) shall be liable for any loss or liability resulting, directly or indirectly, from delays or interruptions due to electronic or mechanical equipment failures, telephone interconnect problems, defects, weather, strikes, walkouts, fire, acts of God, riots, armed conflicts, acts of war, or other like causes. urjaglobal.in shall have no responsibility to provide you access to Urjaglobal.in Ecotech Limited.com while interruption of urjaglobal.in is due to any such cause shall continue.',
},
{
  id: 4,
  tandc_heading: '5) Liability Disclaimer:',
  tandc_data: 'You Expressly Agree That The Use Of The Website Is At Your Sole Risk.The Contents, Information, Software, Products, Features, And Services Published On This Website May Include Inaccuracies Or Typographical Errors. Changes Are Periodically Added To The Contents Herein. Urjaglobal.In And/Or Its Respective Suppliers May Make Improvements And/Or Changes In This Web Site At Any Time. This Web Site May Be Temporarily Unavailable From Time To Time Due To Required Maintenance, Telecommunications Interruptions, Or Other Disruptions. Urjaglobal.In (And Its Owners, Suppliers, Consultants, Advertisers, Affiliates, Partners, Employees Or Any Other Associated Entities, All Collectively Referred To As Associated Entities Hereafter) Shall Not Be Liable To User Or Member Or Any Third Party Should Urjaglobal.In Exercise Its Right To Modify Or Discontinue Any Or All Of The Contents, Information, Software, Products, Features And Services Published On This Website.Urjaglobal.In And/Or Its Respective Associated Entities Make No Representations About The Suitability Of The Contents, Information, Software, Products, Features, And Services Contained On This Web Site For Any Purpose. All Such Contents, Information, Software, Products, Features, And Services Are Provided "As Is" Without Warranty Of Any Kind. Urjaglobal.In And/Or Its Associated Entities Hereby Disclaim All Warranties And Conditions With Regard To These Contents, Information, Software, Products, Features And Services, Including All Implied Warranties And Conditions Of Merchantability, Fitness For a Particular Purpose, Title, Non-Infringement, And Availability.In No Event Shall Urjaglobal.In And/Or Its Associated Entities Be Liable For Any Direct, Indirect, Punitive, Incidental, Special Or Consequential Damages Arising Out Of Or In Any Way Connected With The Use Of This Web Site Or Any Consequences Arising Out Of Information Submitted By You Or With The Delay Or Inability To Use This Website, Or For Any Contents, Information, Software, Products, Features And Services Obtained Through This Web Site, Or Otherwise Arising Out Of The Use Of This Web Site, Whether Based On Contract, Tort, Strict Liability Or Otherwise, Even If Urjaglobal.In Or Any Of Its Associated Entities Has Been Advised Of The Possibility Of Damages.',
},
{
  id: 5,
  tandc_heading: '',
  tandc_data: {data1},
},
{
  id: 6,
  tandc_heading: '',
  tandc_data: '',
},
{
  id: 7,
  tandc_heading: '',
  tandc_data: '',
},
{
  id: 8,
  tandc_heading: '',
  tandc_data: '',
},
{
  id: 9,
  tandc_heading: '',
  tandc_data: '',
},
{
  id: 10,
  tandc_heading: '',
  tandc_data: '',
},
{
  id: 11,
  tandc_heading: '',
  tandc_data: '',
},
{
  id: 12,
  tandc_heading: '',
  tandc_data: '',
},
{
  id: 13,
  tandc_heading: '',
  tandc_data: '',
},
{
  id: 14,
  tandc_heading: '',
  tandc_data: '',
},
]*/

const TermsConditionsContent = () => {
  return (
    <>
      <div className='max-width-bg'>
        <div className='max-width' >
          <h1 className='heading2'>Terms Of Use</h1>
          {/* <div style={{ fontSize: '3rem' }} className='heading'>Terms of Use</div> */}
          <div className='box-shadow-div' >
            <div style={{fontWeight:'500', color:'grey'}}>By visiting our site you are agreeing to be bound by the following terms and conditions. We may change these terms and conditions at any time. Your continued use of urjaglobal.in means that you accept any new or modified terms and conditions that we come up with. Please re-visit the `Terms of Use’ link at our site from time to time to stay abreast of any changes that we may introduce. The term urjaglobal.in is used through this entire Terms of Use document to refer to the website, its owners, and the employees and associates of the owner</div>
            <hr />
            <div>
              <div className='general_card_heading'>1- Registration</div>
              <div>
                By registering, you certify that all information you provide, now or in the future, is accurate. Urja reserves the right, in its sole discretion, to deny you access to this website or any portion thereof without notice for the following reasons
                <ul color='blue'>
                  <li> Immediately by urjaglobal.in for any unauthorized access or use by you</li>
                  <li> Immediately by urjaglobal.in if you assign or transfer (or attempt the same) any rights granted to you under this Agreement</li>
                  <li> Immediately, if you violate any of the other terms and conditions of this User Agreement</li>
                  <li> I agree to get periodic SMS alerts.</li>
                  <li> I agree to get periodic newsletters.</li>
                </ul>
                By registering, you agree that you are knowingly sharing your personal information with us for the purpose of sharing with a broker or, brokers chosen by you, and that you are aware that the said broker or, brokers chosen by you, shall use your contact details shared by us with them, to contact you for selling their legitimate products and services to you.
              </div>
            </div>

 <hr />
            <div>
              <div className='general_card_heading'>2- License</div>
              <div className='tc_subdata'>
                urjaglobal.in hereby grants you a limited, non-exclusive, non-assignable and non-transferable license to access urjaglobal.in provided and expressly conditioned upon your agreement that all such access and use shall be governed by all of the terms and conditions set forth in this USER AGREEMENT.
              </div>
            </div>

            <hr />
            <div>
              <div className='general_card_heading'> 3- Copyright & No Retransmission Of Information</div>
              <div className='tc_subdata'>
                urjaglobal.in as well as the design and information contained in this site is the valuable, exclusive property of urjaglobal.in, and nothing in this Agreement shall be construed as transferring or assigning any such ownership rights to you or any other person or entity. All stock call information on urjaglobal.in is the proprietary, confidential property of urjaglobal.in and cannot be repeated for any reason outside the urjaglobal.in. You agree not to repeat or rebroadcast in any way any of the stock call information made on urjaglobal.in for any reason whatsoever. You agree that if you do repeat or re-post any of urjaglobal.in calls by any mean, you will be liable for actual and punitive damages as determined by urjaglobal.in and additional damages to be determined by a Indian court of Law.
                <br /><br />
                You may not resell, redistribute, broadcast or transfer the information or use the information in a searchable, machine-readable database unless separately and specifically authorized in writing by urjaglobal.in prior to such use. You may not rent, lease, sublicense, distribute, transfer, copy, reproduce, publicly display, publish, adapt, store or time-share urjaglobal.in, any part thereof, or any of the information received or accessed the refrom to or through any other person or entity unless separately and specifically authorized in writing by urjaglobal.in prior to such use.
              </div>
            </div>

            <hr />
            <div>
              <div className='general_card_heading'>4- Delays In Services</div>
              <div className='tc_subdata'>
                Neither urjaglobal.in (including its and their directors, employees, affiliates, agents, representatives or subcontractors) shall be liable for any loss or liability resulting, directly or indirectly, from delays or interruptions due to electronic or mechanical equipment failures, telephone interconnect problems, defects, weather, strikes, walkouts, fire, acts of God, riots, armed conflicts, acts of war, or other like causes. urjaglobal.in shall have no responsibility to provide you access to Urjaglobal.in Ecotech Limited.com while interruption of urjaglobal.in is due to any such cause shall continue.
              </div>
            </div>

            <hr />

            <div>
              <div className='general_card_heading'>5- Liability Disclaimer:</div>
              <div className='tc_subdata'>
                You Expressly Agree That The Use Of The Website Is At Your Sole Risk.
                <br /><br />
                The Contents, Information, Software, Products, Features, And Services Published On This Website May Include Inaccuracies Or Typographical Errors. Changes Are Periodically Added To The Contents Herein. Urjaglobal.In And/Or Its Respective Suppliers May Make Improvements And/Or Changes In This Web Site At Any Time. This Web Site May Be Temporarily Unavailable From Time To Time Due To Required Maintenance, Telecommunications Interruptions, Or Other Disruptions. Urjaglobal.In (And Its Owners, Suppliers, Consultants, Advertisers, Affiliates, Partners, Employees Or Any Other Associated Entities, All Collectively Referred To As Associated Entities Hereafter) Shall Not Be Liable To User Or Member Or Any Third Party Should Urjaglobal.In Exercise Its Right To Modify Or Discontinue Any Or All Of The Contents, Information, Software, Products, Features And Services Published On This Website.
                <br /><br />
                Urjaglobal.In And/Or Its Respective Associated Entities Make No Representations About The Suitability Of The Contents, Information, Software, Products, Features, And Services Contained On This Web Site For Any Purpose. All Such Contents, Information, Software, Products, Features, And Services Are Provided "As Is" Without Warranty Of Any Kind. Urjaglobal.In And/Or Its Associated Entities Hereby Disclaim All Warranties And Conditions With Regard To These Contents, Information, Software, Products, Features And Services, Including All Implied Warranties And Conditions Of Merchantability, Fitness For a Particular Purpose, Title, Non-Infringement, And Availability.
                <br /><br />
                In No Event Shall Urjaglobal.In And/Or Its Associated Entities Be Liable For Any Direct, Indirect, Punitive, Incidental, Special Or Consequential Damages Arising Out Of Or In Any Way Connected With The Use Of This Web Site Or Any Consequences Arising Out Of Information Submitted By You Or With The Delay Or Inability To Use This Website, Or For Any Contents, Information, Software, Products, Features And Services Obtained Through This Web Site, Or Otherwise Arising Out Of The Use Of This Web Site, Whether Based On Contract, Tort, Strict Liability Or Otherwise, Even If Urjaglobal.In Or Any Of Its Associated Entities Has Been Advised Of The Possibility Of Damages.
              </div>
            </div>

            <hr />

            <div>
              <div className='general_card_heading'>6- Use Of Message Boards, Chat Rooms, And Other Communication Forums</div>
              <div className='tc_subdata'>
                If this Web site contains message/bulletin boards, chat rooms, or other message or communication facilities (collectively, "Forums"), you agree to use the Forums only to send and receive messages and material that are proper and related to the particular Forum. By way of example, and not as a limitation, you agree that when using a Forum, you shall not do any of the following:
                <ul color='blue'>
                  <li> Defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as rights of privacy and publicity) of others.</li>
                  <li> publish, post, distribute or disseminate any defamatory, infringing, obscene, indecent, or unlawful material or information.</li>
                  <li> Upload files that contain software or other material protected by intellectual property laws (or by rights of privacy of publicity) unless you own or control the rights thereto or have received all necessary consents</li>
                  <li> Upload files that contain viruses, corrupted files, or any other similar software or programs that may damage the operation of another's computer</li>
                  <li> Conduct or forward surveys, contests, or chain letters.</li>
                  <li> Download any file posted by another user of a Forum that you know, or reasonably should know, cannot be legally distributed in such a manner.</li>
                </ul>

              </div>
            </div>

            <hr />
            <div>
              <div className='general_card_heading'>7- Equipment And Operation</div>
              <div className='tc_subdata'>
                You shall provide and maintain all telephone/internet and other equipment necessary to access urjaglobal.in, and the costs of any such equipment and/or telephone/internet connections or use, including any applicable taxes, shall be borne solely by you. You are responsible for operating your own equipment used to access urjaglobal.in
              </div>
            </div>
            <hr />

            <div>
              <div className='general_card_heading'>8- Information Disclaimer</div>
              <div className='tc_subdata'>
                You Acknowledge That The Information Provided Through Urjaglobal.In Is Compiled From Sources, Which Are Beyond The Control Of Urjaglobal.In Though Such Information Is Recognized By The Parties To Be Generally Reliable, The Parties Acknowledge That Inaccuracies May Occur And Urjaglobal.In Does Not Warrant The Accuracy Or Suitability Of The Information. For This Reason, As Well As The Possibility Of Human And Mechanical Errors And Other Factors, You Acknowledge That Urjaglobal.In Is Provided To You On An "As Is, With All Faults" Basis.
                <br /><br />
                Urjaglobal.In Expressly Disclaims Any And All Warranties, Whether Express, Oral, Implied, Statutory Or Otherwise, Of Any Kind To The Users And/Or Any Third Party, Including Any Implied Warranties Of Accuracy, Timeliness, Completeness, Merchantability, And Fitness For a Particular Purpose, As Well As Any Warranties Arising By Virtue Of Custom Of Trade Or Course Of Dealing And Any Implied Warranties Of Title Or Non-Infringement. In Addition, Urjaglobal.In, In Providing The Information Makes No Endorsement Of Any Particular Security, Martket Participant, Or Brokerage. Further, Urjaglobal.In Does Not Represent Or Warrant That It Will Meet Your Requirements Or Is Suitable For Your Needs.
                <br /><br />
                Under This User Agreement, You Assume All Risk Of Errors And/Or Omissions In Urjaglobal.In, Including The Transmission Or Translation Of Information. You Assume Full Responsibility For Implementing Sufficient Procedures And Checks To Satisfy Your Requirements For The Accuracy And Suitability Of Urjaglobal.In, Including The Information, And For Maintaining Any Means, Which You May Require For The Reconstruction Of Lost Data Or Subsequent Manipulations Or Analyses Of The Information Under The User Agreement. Under This User Agreement, You Assume All Risk Of Errors And/Or Omissions In Urjaglobal.In, Including The Transmission Or Translation Of Information. You Assume Full Responsibility For Implementing Sufficient Procedures And Checks To Satisfy Your Requirements For The Accuracy And Suitability Of Urjaglobal.In, Including The Information, And For Maintaining Any Means, Which You May Require For The Reconstruction Of Lost Data Or Subsequent Manipulations Or Analyses Of The Information Under The User Agreement.
                <br /><br />
                You Agree That Urjaglobal.In (Including Its And Their Officers, Directors, Employees, Affiliates, Group Companies Agents, Representatives Or Subcontractors) Shall Not In Any Event Be Liable For Any Special, Incidental Or Consequential Damages Arising Out Of The Use Or Inability To Use Urjaglobal.In For Any Purpose Whatsoever. Urjaglobal.In And It's Affiliates, Officers, Directors, Employees And Agents Shall Have No Liability In Tort, Contract, Or Otherwise To User And/Or Any Third Party.
              </div>
            </div>

            <hr />
            <div>
              <div className='general_card_heading'>9- Links To Third Party Sites</div>
              <div className='tc_subdata'>
                The links in this site will allow you to leave urjaglobal.in. The linked sites are not under the control of urjaglobal.in. urjaglobal.in has not reviewed, nor approved these sites and is not responsible for the contents or omissions of any linked site or any links contained in a linked site. The inclusion of any linked site does not imply endorsement by urjaglobal.in of the site. Third-party links to urjaglobal.inshall be governed by a separate agreement.
              </div>
            </div>

            <hr />
            <div>
              <div className='general_card_heading'>10- Indemnification</div>
              <div className='tc_subdata'>
                you shall indemnify, defend and hold harmless urjaglobal.in (including its and their officers, directors, employees, affiliates, group companies, agents, representatives or subcontractors) from any and all claims and losses imposed on, incurred by or asserted as a result of or related to:
                <br /><br />
                <ul color='blue'>
                  <li>  your access and use of urjaglobal.in</li>
                  <li> any non-compliance by user with the terms and conditions hereof; or</li>
                  <li> any third party actions related to users receipt and use of the information,</li>
                </ul>
              </div>
            </div>

            <hr />

            <div>
              <div className='general_card_heading'>11- Conflicting Terms</div>
              <div className='tc_subdata'>
                If there is any conflict between this User Agreement and other documents, this User Agreement shall govern, whether such order or other documents is prior to or subsequent to this User Agreement, or is signed or acknowledged by any director, officer, employee, representative or agent of urjaglobal.in
              </div>
            </div>

            <hr />

            <div>
              <div className='general_card_heading'>12- Entire Agreement</div>
              <div className='tc_subdata'>
                this user agreement constitutes the entire agreement between the parties, and no other agreement, written or oral, exists between you and urjaglobal.in. by using the information on urjaglobal.in, you assume full responsibility for any and all gains and losses, financial, emotional or otherwise, experienced, suffered, or incurred by you. urjaglobal.in does not guarantee the accuracy, completeness or timeliness of, or otherwise endorse in any way, the views, opinions or recommendations expressed in the information, does not give investment advice, and does not advocate the purchase or sale of any security or investment by you or any other individual. the information is not intended to provide tax, legal or investment advice, which you should obtain from your professional advisor prior to making any investment of the type discussed in the information. the information does not constitute a solicitation by the information providers, urjaglobal.in or other of the purchase or sale of securities. the service is provided "as is," without warranty of any kind, either express or implied, including without limitation, any warranty for information, data, services, uninterrupted access, or products provided through or in connection with the service. specifically, urjaglobal.in disclaims any and all warranties, including, but not limited to: (i) any warranties concerning the availability, accuracy, usefulness, or content of information, products or services; and (ii) any warranties of title, warranty of non-infringement, warranties of merchantability or fitness for a particular purpose. this disclaimer of liability applies to any damages or injury caused by any failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communication line failure, theft or destruction or unauthorized access to, alteration of, or use of record, whether for breach of contract, tort, negligence, or under any other cause of action.neither urjaglobal.innor any of its employees, agents, successors, assigns, affiliates, group companies or content or service providers shall be liable to you or other third party for any direct, indirect, incidental, special or consequential damages arising out of use of service or inability to gain access to or use the service or out of any breach of any warranty. because some countries do not allow the exclusion or limitation of liability for consequential or incidental damages, the above limitation may not apply to you. in such countries, the respective liability of urjaglobal.in, its employees, agents, successors, assigns, affiliates, group companies, and content or service providers respective liability is limited to the amount provided under said law. further, you agree and understand that all services provided are non-refundable and that you should carefully consider whether our services are able to meet your needs.

              </div>
            </div>

            <hr />


            <div>
              <div className='general_card_heading'>13- Termination</div>
              <div className='tc_subdata'>
                This User Agreement and the license rights granted hereunder shall remain in full force and effect unless terminated or canceled for any of the following reasons: (a) immediately by urjaglobal.infor any unauthorized access or use by you (b) immediately by urjaglobal.in if you assign or transfer (or attempt the same) any rights granted to you under this Agreement; (c) immediately, if you violate any of the other terms and conditions of this User Agreement. Termination or cancellation of this Agreement shall not effect any right or relief to which urjaglobal.inmay be entitled, at law or in equity. Upon termination of this User Agreement, all rights granted to you will terminate and revert to urjaglobal.in. Except as set forth herein, regardless of the reason for cancellation or termination of this User Agreement, the fee charged if any for access to urjaglobal.in is non-refundable for any reason.
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default TermsConditionsContent;