import React from "react";
import "./franchisee.css";

const franchiseedata = [
  {
    id: 1,
    name: "Mr. Deepak Fatehpiuria , Mr. Ankit Fatehpuria and Mr. Puneet Fatehpuria",
    firmname: "Vyapar Udyog Pratisthan",
    contact: "09414042991, 09829062991, 7023882991",
    email: "vup.1954@gmail.com",
    address:
      "Pratisthan Building , Opp. Godown no. 4, Bais Godaam , Jaipur, Rajasthan-302006",
  },
  {
    id: 2,
    name: "Pramod Saraf",
    firmname: "Shri Shyam Motors",
    contact: "07691010739",
    email: "sarafpramod0@gmail.com",
    address:
      "Arihant Tower, Near Pioneer Hospital Station Road Sikar, Rajasthan - 332001",
  },
  {
    id: 3,
    name: "Mr. Subhash Saini & Mr. Amit Saini",
    firmname: "Jai Ambey Traders",
    contact: "07014781501, 07340071633",
    email: "",
    address:
      "Shree Krishna temple, near bypass road, Mandrela Road, Chirawa, Dist. Jhunjhunu, Rajasthan-333026",
  },
];

const franchiseedat = [
  {
    id: 1,
    name: "Pramod Saraf",
    firmname: "Shri Shyam Motors",
    contact: "09681780739",
    email: "sarafpramod0@gmail.com",
    address: "Maharashtra",
  },
];

const franchiseeda = [
  {
    id: 1,
    name: "Pramod Saraf",
    firmname: "Shri Shyam Motors",
    contact: "09681780739",
    email: "sarafpramod0@gmail.com",
    address: "Gujrat",
  },
];

const franchiseed = [
  {
    id: 1,
    name: "Mr. Anil Kumar Sharma and Mr. Rajeev Sharma",
    firmname: "Hindon Traders",
    contact: "8743097773, 9654916823",
    email: "tradershindon@gmail.com",
    address: "169, Sanjay Colony Arthala, Mohan Nagar, Ghaziabad - 201007",
  },
];

const SubCardListItem = (prop) => {
  return (
    <div className="subfranchiseecards">
      <figcaption>
        <h3>
          Proprietor Name : {prop.cardDirector.name}
          <br />
          Firm Name : {prop.cardDirector.firmname}
          <br />
          Contact Details : {prop.cardDirector.contact}
          <br />
          Email Id : {prop.cardDirector.email}
          <br />
          Address : {prop.cardDirector.address}
        </h3>
      </figcaption>
    </div>
  );
};

const CardListItem = (prop) => {
    return (
        <div className="subfranchcards">
            <figcaption>
                <h3>
                    Proprietor Name : {prop.cardDirector.name}
                    <br />
                    Firm Name : {prop.cardDirector.firmname}
                    <br />
                    Contact Details : {prop.cardDirector.contact}
                    <br />
                    Email Id : {prop.cardDirector.email}
                    <br />
                    Address : {prop.cardDirector.address}
                </h3>
            </figcaption>
        </div>
    );
};

const FranchiseeContent = () => {
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
    return (
        <>
            <div className='franchiseecards reveal fade-bottom'>
                <h3>Rajasthan</h3>
                <div className='sub reveal fade-left'>
                    {franchiseedata.map((cardDirector) => {
                        return (
                            <SubCardListItem cardDirector={cardDirector} key={cardDirector.id} />
                        );
                    })}
                </div>
            </div>
            <div className='franchiseecards reveal fade-bottom'>
                <h3>Maharashtra</h3>
                <div className='reveal fade-left'>
                    {franchiseedat.map((cardDirector) => {
                        return (
                            <CardListItem cardDirector={cardDirector} key={cardDirector.id} />
                        );
                    })}
                </div>
            </div>
            <div className='franchiseecards reveal fade-bottom'>
                <h3>Gujrat</h3>
                <div className='reveal fade-left'>
                    {franchiseeda.map((cardDirector) => {
                        return (
                            <CardListItem cardDirector={cardDirector} key={cardDirector.id} />
                        );
                    })}
                </div>
            </div>
            <div className='franchiseecards reveal fade-bottom'>
                <h3>Ghaziabad</h3>
                <div className='reveal fade-left'>
                    {franchiseed.map((cardDirector) => {
                        return (
                            <CardListItem cardDirector={cardDirector} key={cardDirector.id} />
                        );
                    })}
                </div>
            </div>
        </>
    )
}
export default FranchiseeContent;
