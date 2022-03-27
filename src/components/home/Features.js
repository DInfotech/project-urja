import { Typography } from "@material-ui/core";
import feature1 from "../../assets/features/1.png";
import feature2 from "../../assets/features/2.png";
import feature3 from "../../assets/features/3.png";
import feature4 from "../../assets/features/4.png";

const Features = () => {
  return (
    <div style={{ marginTop: 20 }} className="reveal">
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Typography
          variant="h3"
          align="center"
          style={{
            margin: 5,
            padding: 10,
            fontSize: 38,
            color: "white",
            backgroundColor: "#58aa97",
            borderRadius: "0px 30px",
            boxShadow: "grey 15px 15px 8px",
            width: "50%",
          }}
        >
          Mighty Features
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          margin: 10,
          padding: 20,
        }}
      >
        <img
          src={feature1}
          alt="feature1"
          style={{ height: "30vh", width: "25vw" }}
        />
        <img
          src={feature2}
          alt="feature2"
          style={{ height: "30vh", width: "25vw" }}
        />
        <img
          src={feature3}
          alt="feature3"
          style={{ height: "30vh", width: "25vw" }}
        />
        <img
          src={feature4}
          alt="feature4"
          style={{ height: "30vh", width: "25vw" }}
        />
      </div>
    </div>
  );
};

export default Features;
