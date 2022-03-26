import { Button, Link, Typography } from "@material-ui/core";
import "../../common_styles/commonClasses.css";

const About = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", margin: "40px 0px" }}
      className="reveal"
    >
      <Typography
        variant="h3"
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
        Welcome to Urja Global Limited
      </Typography>
      <div style={{ display: "flex", flexDirection: "column", margin: 20 }}>
        <Typography
          align="center"
          className="paragraph-css"
          style={{
            margin: 5,
            padding: 5,
            fontSize: 20,
          }}
        >
          <b>Urja Global Limited</b> is an <b>ISO 9001, 14001 & 18001 </b>
          certified leading integrated Solar Power Company. The group provides
          total Solar Solutions and is known for Design, Supply, Distribution
          and Comprehensive approach of delivering Standalone Solar Products...
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: 10,
          }}
        >
          <Link href="/about" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              size="medium"
              style={{
                margin: 10,
                padding: 10,
                backgroundColor: "var(--primarygreen)",
                color: "var(--darkblue)",
                width: "150px",
                borderRadius: 10,
              }}
            >
              Know More
            </Button>
          </Link>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          width="50%"
          height="315"
          src="https://www.youtube.com/embed/0XOe0ZxwXCg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};
export default About;
