import carousel1 from "../../assets/carousel/urja.jpeg";
import carousel2 from "../../assets/carousel/E - LIFE.png";
import carousel3 from "../../assets/carousel/WEB_1.jpg";
import carousel4 from "../../assets/carousel/LEO_1.jpg";
import carousel5 from "../../assets/carousel/go green_1.jpg";
import booking from "../../assets/booking.png";
import Carousel from "react-material-ui-carousel";
import About from "./Home_About";
import Product from "./Home_Product";
import Features from "./Home_Features";

const Home = () => {
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
    {
      name: "carousel4",
      src: carousel4,
    },
    {
      name: "carousel5",
      src: carousel5,
    },
  ];
  return (
    <div>
      <Carousel sx={{ height: "600px", width: "100%" }}>
        {items.map((item) => (
          <img
            src={item.src}
            alt={item.name}
            key={item.name}
            height="600px"
            width="100%"
          />
        ))}
      </Carousel>
      <About />
      <Product />
      <Features />
      <img
        src={booking}
        alt="How to book your dream scooter"
        width="100%"
        style={{ marginTop: 10, backgroundColor: "#58aa97" }}
      />
    </div>
  );
};
export default Home;
