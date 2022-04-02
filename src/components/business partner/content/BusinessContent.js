import React from "react";
import "../business.css";
const cardDirectorsDa = [
  {
    id: 1,
    name: "Mohmmad Tarique",
    mobile: "7606945027",
  },
];

const CardListItem = (props) => {
  return (
    <div className="businesscards">
      <div className="profile-image">
        <img src="../profile.jpg" alt="profile-sample2" />
      </div>
      <figcaption>
        <h3>{props.cardDirector.name}</h3>
        <h4>{props.cardDirector.mobile}</h4>
      </figcaption>
    </div>
  );
};
const BusinessContent = () => {
  const imagestyle = {
    width: "45%",
    borderRadius: "1rem",
    marginTop: "1rem",
    marginRight: "8rem",
    marginBottom: "2rem",
  };

  return (
    <div className="content">
      {cardDirectorsDa.map((cardDirector) => {
        return (
          <CardListItem cardDirector={cardDirector} key={cardDirector.id} />
        );
      })}
      <div>
        <div>
          <div className="med-heading">
            <h2>Core focus area:</h2>
          </div>
        </div>
        <div className="flex-img-cont">
          <img
            src="vision.jpg" alt="energy" style={imagestyle}
          />
          <div>
            <div className="secondary-heading">
              <h2>Solar Consultants</h2>
            </div>
            <p className="paragraph-css">
              {" "}
              Consulting in digital and enterprise transformation services.
            </p>

            <div className="secondary-heading">
              <h2>IT Consultant</h2>
            </div>
            <p className="paragraph-css">
              {" "}
              Consulting in digital and enterprise transformation services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BusinessContent;
