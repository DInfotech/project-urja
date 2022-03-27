import React from 'react'



const KeyManagerialData = [
    {
        id: 1,
        name: "Mr. Kamal Kumar Sharma",
        designation: "Chief Financial Officer",
        detail: "Having an experience of Thirty Years in the field of Accounting & Finance management. His last assignment was with Orient Press Limited Which is listed at National Stock Exchange. Prior to which he had worked with large Public Companies. Further, his broad vision and strategies will help the company to emerge from the challenging situations that the company may come across."
    },
    {
        id: 2,
        name: "Ms. Neha Shukla",
        designation: "Company Secretary ",
        detail: "A qualified company secretary passed her professional programme in December 2015 from “The Institute of Company Secretaries of India” and has been awarded a degree in August 2016. Have experience of  5 years in handling secretarial and legal compliances. Holding a degree of LLB (3 years), M.COM and B.com from reputed universities of India. Her impressive profile, good knowledge, and personality will ensure a company complies with financial and legal requirements and maintains its high standards of corporate governance."
    },
    {

      id: 3,
      name: "Mr. Mohan Jagdish Agarwal",
      designation: "Managing Director",
      detail:
        "He worked as President-Programming and Marketing in Mudra Lifestyle Limited from 2003-2012 and in Bombay Rayon Fashions Limited from 1999-2003 in Production-Planning and Marketing. Currently he is Director of Mega Nirman and Industries Limited, Urja Batteries Limited and Leaf Fashions Private Limited. Further, his broad vision and strategies will help the company to emerge from the challenging situations that the company may come across.",
    },
    
]


const KeyManagerialContent = (props) => {

  return (
    <>
         <div className="profilecards">
        <div className="profile-image"><img src="../profile.jpg" alt="profile-sample2" /></div>
        <figcaption>
          <h3>{props.cardDirector.name}</h3>
          <h4>{props.cardDirector.designation}</h4>
          <p>{props.cardDirector.detail}</p>
          
        </figcaption>
      </div> 
 
    </>
  )
}


const KeyManagerialCardList = () => {
    return (
    <>
        {KeyManagerialData.map(cardDirector => {
          return <KeyManagerialContent cardDirector={cardDirector} key={cardDirector.id} />;
        })}
        </>
      
    );
  };

export default KeyManagerialCardList;