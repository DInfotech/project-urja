import product1 from "../../assets/poster-2.jpg";
import { Typography } from "@material-ui/core";
import "./Home_Product.css";

const Home_Product = () => {
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
    <div style={{ backgroundColor: "#31c36c17" }} className="reveal">
      <Typography
        variant="h3"
        align="center"
        className="pro-heading"
        style={{
          margin: 5,
          padding: 5,
          fontSize: 40,
        }}
      >
        Products
      </Typography>
      <div style={{ display: "flex" }}>
        <div>
          <Typography
            variant="h5"
            align="center"
            className="secondary-heading"
            style={{
              margin: 5,
              padding: 5,
            }}
          >
            <b>E-ZESS</b>
          </Typography>
          <p
            align="center"
            className="pro-paragraph-css"
            style={{
              margin: 5,
              padding: 20,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            maiores vitae temporibus accusamus dolore sequi libero cupiditate
            esse ex, molestiae similique laboriosam, suscipit, perspiciatis
            praesentium exercitationem eaque deserunt illo ut voluptates alias.
            Recusandae nesciunt dolorum vitae! Beatae enim commodi, distinctio
            fugiat id voluptates, molestiae accusantium eos, accusamus eius
            exercitationem laborum modi? Nulla ipsa tempora error blanditiis hic
            accusantium repudiandae architecto facilis fugit, sunt eos debitis
            nesciunt veritatis nostrum rerum alias modi eum! Quisquam commodi
            unde dolorum quam, dignissimos eveniet eaque, modi possimus iure
            error maiores velit. Facere tenetur aperiam amet. Placeat
            repellendus voluptatum praesentium, autem corporis iure quos
            assumenda animi?
          </p>
        </div>
        <img
          src={product1}
          alt="E-zess"
          style={{ height: 300, width: 4000, margin: 20 }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <img
          src={product1}
          alt="E-heaven"
          style={{ height: 300, width: 4000, margin: 20 }}
        />
        <div>
          <Typography
            variant="h5"
            align="center"
            className="secondary-heading"
            style={{
              margin: 5,
              padding: 5,
            }}
          >
            <b>E-HEAVEN</b>
          </Typography>
          <p
            align="center"
            className="pro-paragraph-css"
            style={{
              margin: 5,
              padding: 20,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            maiores vitae temporibus accusamus dolore sequi libero cupiditate
            esse ex, molestiae similique laboriosam, suscipit, perspiciatis
            praesentium exercitationem eaque deserunt illo ut voluptates alias.
            Recusandae nesciunt dolorum vitae! Beatae enim commodi, distinctio
            fugiat id voluptates, molestiae accusantium eos, accusamus eius
            exercitationem laborum modi? Nulla ipsa tempora error blanditiis hic
            accusantium repudiandae architecto facilis fugit, sunt eos debitis
            nesciunt veritatis nostrum rerum alias modi eum! Quisquam commodi
            unde dolorum quam, dignissimos eveniet eaque, modi possimus iure
            error maiores velit. Facere tenetur aperiam amet. Placeat
            repellendus voluptatum praesentium, autem corporis iure quos
            assumenda animi?
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home_Product;
