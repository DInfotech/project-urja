import { Typography } from "@material-ui/core";
import feature1 from "../../assets/features/1.png";
import feature2 from "../../assets/features/2.png";
import feature3 from "../../assets/features/3.png";
import feature4 from "../../assets/features/4.png";
import booking from "../../assets/booking.png";

const Home_Features = () => {
  return (
    <div style={{ marginTop: 20 }} className="reveal">
      <Typography
        variant="h4"
        align="center"
        style={{
          margin: 5,
          padding: 10,
          fontSize: 38,
          color: "white",
          backgroundColor: "#58aa97",
          borderRadius: 12,
        }}
      >
        Mighty Features
      </Typography>
      <div
        style={{
          display: "flex",
          margin: 20,
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
      <img
        src={booking}
        alt="How to book your dream scooter"
        width="100%"
        style={{ marginTop: 10, backgroundColor: "#58aa97" }}
      />
    </div>
  );
};

export default Home_Features;
