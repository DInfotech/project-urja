import carousel1 from "../../assets/carousel/urja.jpeg";
import carousel2 from "../../assets/carousel/WEB_1.jpg";
import carousel3 from "../../assets/carousel/LEO_1.jpg";
import Carousel from "react-material-ui-carousel";
import About from "./About";
import Product from "./OurProducts";
// import Features from "./Features";
import CompanyStats from "./CompanyStats";
import EnquiryForm from "./EnquiryForm";
import Faq from "../FAQ/Faq";
import booking from "../../assets/booking.png";

const Home = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 30;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  const items = [
    {
      name: "carousel1",
      src: carousel1,
    },
    {
      name: "carousel2",
      src: carousel2,
    },
    {
      name: "carousel3",
      src: carousel3,
    },
  ];
  return (
    <div>
      <Carousel sx={{ height: "600px", width: "100%" }}>
        {items.map((item, i) => (
          <img
            src={item.src}
            alt={item.name}
            key={i}
            height="600px"
            width="100%"
          />
        ))}
      </Carousel>
      <About />
      <Product />
      <CompanyStats />
      {/* <Features /> */}
      <img
        src={booking}
        alt="How to book your dream scooter"
        width="100%"
        style={{ marginTop: 10, backgroundColor: "whitesmoke" }}
      />
      <EnquiryForm />
      <Faq />
    </div>
  );
};
export default Home;
