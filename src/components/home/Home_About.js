import { Button, Typography } from "@material-ui/core";
import "../../common_styles/commonClasses.css";

const Home_About = () => {
  return (
    <div style={{ display: "flex", margin: 40 }}>
      <div style={{ display: "flex", flexDirection: "column", margin: 20 }}>
        <Typography
          variant="h4"
          align="center"
          className="heading"
          // style={{
          //   color: "#fe7701",
          //   margin: 5,
          //   padding: 5,
          // }}
        >
          Welcome to Urja Global Limited
        </Typography>
        <Typography
          align="center"
          className="paragraph-css"
          style={{
            margin: 5,
            padding: 5,
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
            justifyContent: "flex-end",
            margin: 10,
          }}
        >
          <Button
            variant="contained"
            size="medium"
            align="right"
            style={{
              margin: 10,
              padding: 8,
              backgroundColor: "var(--primarygreen)",
              color: "var(--darkblue)",
              width: "100px",
              borderRadius: 10,
            }}
          >
            Know More
          </Button>
        </div>
      </div>
      <iframe
        width="2200"
        height="315"
        src="https://www.youtube.com/embed/0XOe0ZxwXCg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
export default Home_About;
