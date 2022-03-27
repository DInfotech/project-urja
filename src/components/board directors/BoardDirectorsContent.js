
import React from 'react';

import "./BoardDirectors.css";

const cardDirectorsData = [
  {
    id: 1,
    name: "Mr. Yogesh Kumar Goyal",
    designation: "Whole Time Director",
    detail:
      "He plays an instrumental role in the Marketing and Sales Development of the Company. He has been successful while associating the Company with the worthy projects to the credits of the Company viz. PEC Ltd, Mecon Ltd, etc. Mr. Goyal is holding a Master’s Degree in Commerce.",
  },
  {
    id: 2,
    name: "Mr. Mohan Jagdish Agarwal",
    designation: "Managing Director",
    detail:
      "He worked as President-Programming and Marketing in Mudra Lifestyle Limited from 2003-2012 and in Bombay Rayon Fashions Limited from 1999-2003 in Production-Planning and Marketing. Currently he is Director of Mega Nirman and Industries Limited, Urja Batteries Limited and Leaf Fashions Private Limited. Further, his broad vision and strategies will help the company to emerge from the challenging situations that the company may come across.",
  },
  {
    id: 3,
    name: "Mrs. Payal Sharma",
    designation: "Independent Director",
    detail:
      "Mrs. Sharma holds Independent Directorship in the Company. She guides the board for adopting Good Governance practices and updation of the recent legal updations. She is a law Graduate and the Member of Institute of Company Secretaries of India.",
  },
  {
    id: 4,
    name: "Mr. P. C. Das",
    designation: "Independent Director",
    detail:
      "Mr. Das has more than two decades of experience in Projects, he has handled many Central Government Projects with NHPC /NPCC at Managerial Ranks. He plays an important role in liasioning with various statutory agencies for getting approvals/ permission/ clearances to commence the project. Mr. Das holds Master’s Degree in Humanities.",
  },
  {
    id: 5,
    name: "Dr. Mita Sinha",
    designation: "Independent Director",
    detail:
      "For successful marketing and brand integration, Dr. Sinha is an ideal, seasoned professional in the field of Marketing Communications, Training & Development. She brings a rich experience of more than 25 years at creating strategic alliances with organization leaders to effectively align with and support key business initiatives. In addition, she stands out in developing new marketing strategies to quickly capitalize on trends and social media.",
  },
  {
    id: 6,
    name: "Mr. Puneet Kumar Mohlay",
    designation: "Independent Director",
    detail:
      "Mr. Mohlay holds Independent Directorship in the Company. He guides the board for adopting Audit and Finance Policies. He is the Member of Institute of Chartered Accountants of India.",
  },
];

const CardListItem = (props) => {
  return (
    <div className="profilecards">
      <div className="profile-image">
        <img src="../profile.jpg" alt="profile-sample2" />
      </div>
      <figcaption>
        <h3>{props.cardDirector.name}</h3>
        <h4>{props.cardDirector.designation}</h4>
        <p>{props.cardDirector.detail}</p>
      </figcaption>
    </div>
  );
};

const CardList = () => {
  return (
    <>
      
      {cardDirectorsData.map((cardDirector) => {
        return (
          <CardListItem cardDirector={cardDirector} key={cardDirector.id} />
        );
      })}
     
    </>
  );
};



export default CardList;

