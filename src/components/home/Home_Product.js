import ezess from "../../assets/poster-2.jpg";
import elife from "../../assets/E-LIFE.jpeg";
import charging from "../../assets/e-zess icons/charging.png";
import color from "../../assets/e-zess icons/color.png";
import range from "../../assets/e-zess icons/range.png";
import speed from "../../assets/e-zess icons/speed.png";
import balance from "../../assets/e-life icons/balance-protection.png";
import overcharging from "../../assets/e-life icons/over-charging-protection.png";
import overcurrent from "../../assets/e-life icons/over-current-protection.png";
import overdischarge from "../../assets/e-life icons/over-discharge-protection.png";
import shortcircuit from "../../assets/e-life icons/short-circuit-protection.png";
import staticicon from "../../assets/e-life icons/static-protection.png";
import temperature from "../../assets/e-life icons/temperature-protection.png";
import { Typography } from "@material-ui/core";
import "./Home_Product.css";
import Button from "@mui/material/Button";

const Home_Product = () => {
  const features = [
    {
      name: "Over Charging Protection",
      icon: overcharging,
    },
    {
      name: "Over Current Protection",
      icon: overcurrent,
    },
    {
      name: "Over Discharge Protection",
      icon: overdischarge,
    },
    {
      name: "Short Circuit Protection",
      icon: shortcircuit,
    },
    {
      name: "Balance Protection",
      icon: balance,
    },
    {
      name: "Static Protection",
      icon: staticicon,
    },
    {
      name: "Temperature Protection",
      icon: temperature,
    },
  ];
  return (
    <div className="reveal">
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
              paddingBottom: 0,
              marginBottom: 0,
              fontSize: "26px",
              fontWeight: "bolder",
            }}
          >
            E-ZESS
          </Typography>
          <div class="ezess-row">
            <div class="col-6">
              <div class="list-sec">
                <img src={speed} alt="speed" />
                <h6 class="mb-0">45 Kmps*</h6>
                <p>Move it swift</p>
              </div>
            </div>
            <div class="col-6">
              <div class="list-sec">
                <img src={range} alt="range" />
                <h6 class="mb-0">
                  <span>75-85 km*</span>
                </h6>
                <p>Goes a long way </p>
              </div>
            </div>
            <div class="col-6">
              <div class="list-sec">
                <img src={color} alt="color" />
                <h6 class="mb-0">5 Colours </h6>
              </div>
            </div>
            <div class="col-6">
              <div class="list-sec">
                {" "}
                <img src={charging} alt="charging" />
                <h6 class="mb-0">
                  <span>2-4 Hrs*</span>{" "}
                </h6>
                <p>Charging isn't tedious anymore </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={ezess}
          alt="E-zess"
          style={{ height: 400, width: "50vw", margin: 30, borderRadius: 20 }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <img
          src={elife}
          alt="E-heaven"
          style={{ height: 500, width: "50vw", margin: 30, borderRadius: 20 }}
        />
        <div>
          <Typography
            variant="h5"
            align="center"
            className="secondary-heading"
            style={{
              margin: 5,
              padding: 5,
              paddingBottom: 0,
              marginBottom: 0,
              fontSize: "26px",
              fontWeight: "bolder",
            }}
          >
            E-LIFE
          </Typography>
          <div class="list">
            {features.map((feature, i) => (
              <div class="battery-sec" key={i}>
                <img class="img" src={feature.icon} alt={i} />
                <h6 class="feature-heading">{feature.name}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          size="medium"
          align="center"
          style={{
            margin: 10,
            padding: 10,
            backgroundColor: "var(--primarygreen)",
            color: "var(--darkblue)",
            width: "150px",
            borderRadius: 10,
          }}
        >
          View More
        </Button>
      </div>
    </div>
  );
};
export default Home_Product;
