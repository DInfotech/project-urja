import product1 from "../../assets/poster-2.jpg";
import { Typography } from "@material-ui/core";

const Home_Product = () => {
  return (
    <div style={{ backgroundColor: "lightgrey" }}>
      <Typography
        variant="h3"
        align="center"
        style={{
          color: "#fe7701",
          margin: 5,
          padding: 5,
        }}
      >
        <u>Products</u>
      </Typography>
      <div style={{ display: "flex" }}>
        <div>
          <Typography
            variant="h5"
            align="center"
            style={{
              color: "#fe7701",
              margin: 5,
              padding: 5,
            }}
          >
            <u>E-ZESS</u>
          </Typography>
          <Typography
            align="center"
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
          </Typography>
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
            style={{
              color: "#fe7701",
              margin: 5,
              padding: 5,
            }}
          >
            <u>E-HEAVEN</u>
          </Typography>
          <Typography
            align="center"
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
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default Home_Product;
