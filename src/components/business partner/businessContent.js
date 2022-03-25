import React from 'react'
import "./business.css";
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
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      window.addEventListener("scroll", reveal);
    const imagestyle = {
        width: "45%",
        borderRadius: "1rem",
        marginTop: "1rem",
        marginRight: "8rem",
        marginBottom: "2rem",
    }


    return (
        <div className='content reveal fade-bottom'>
            {cardDirectorsDa.map((cardDirector) => {
                return (
                    <CardListItem cardDirector={cardDirector} key={cardDirector.id} />
                );
            })}
            <div className='reveal fade-left'>
                <div>
                    <div className='med-heading reveal fade-left'>
                        <h2>Core focus area:</h2>
                    </div>
                </div>
                <div className='flex-img-cont'>
                    <img src='vision.jpg' alt='energy' style={imagestyle} className='reveal fade-left'/>
                    <div className='reveal fade-right'>
                        <div className='secondary-heading'>
                            <h2>Solar Consultants</h2>
                        </div>
                        <p className='paragraph-css'> Consulting in digital and enterprise transformation services.</p>

                        <div className='secondary-heading'>
                            <h2>IT Consultant</h2>
                        </div>
                        <p className='paragraph-css'> Consulting in digital and enterprise transformation services.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default BusinessContent;
