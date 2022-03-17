import carousel1 from "../../assets/e-dream.jpg";
import carousel2 from "../../assets/POSTER.jpg";
import Carousel from "react-material-ui-carousel";
import About from "./Home_About";
import Product from "./Home_Product";

const Home = () => {
  const items = [
    {
      name: "carousel1",
      src: carousel1,
    },
    {
      name: "carousel2",
      src: carousel2,
    },
  ];
  return (
    <div>
      <Carousel sx={{ height: "600px", width: "100%" }}>
        {items.map((item, i) => (
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
    </div>
  );
};
export default Home;
