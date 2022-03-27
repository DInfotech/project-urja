import ezess from "../../assets/poster-2.jpg";
import elife from "../../assets/E-LIFE.png";
import charging from "../../assets/e-zess icons/charging.png";
import color from "../../assets/e-zess icons/color.png";
import colors from "../../assets/e-zess icons/Colors.png";
import range from "../../assets/e-zess icons/range.png";
import speed from "../../assets/e-zess icons/speed.png";
import balance from "../../assets/e-life icons/balance-protection.png";
import overcharging from "../../assets/e-life icons/over-charging-protection.png";
import overcurrent from "../../assets/e-life icons/over-current-protection.png";
import overdischarge from "../../assets/e-life icons/over-discharge-protection.png";
import shortcircuit from "../../assets/e-life icons/short-circuit-protection.png";
import temperature from "../../assets/e-life icons/temperature-protection.png";
import { Typography } from "@material-ui/core";
import "./OurProducts.css";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";

const OurProducts = () => {
  const features1 = [
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
  ];

  const features2 = [
    {
      name: "Short Circuit Protection",
      icon: shortcircuit,
    },
    {
      name: "Balance Protection",
      icon: balance,
    },
    {
      name: "Temperature Protection",
      icon: temperature,
    },
  ];

  return (
    <div className="reveal">
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
          Our Products
        </Typography>
      </div>
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
          <div className="ezess-row">
            <div className="col-6">
              <div className="list-sec">
                <img src={speed} alt="speed" />
                <h6 className="mb-0">45 Kmps*</h6>
                <p>Move it swift</p>
              </div>
            </div>
            <div className="col-6">
              <div className="list-sec">
                <img src={range} alt="range" />
                <h6 className="mb-0">
                  <span>75-85 km*</span>
                </h6>
                <p>Goes a long way </p>
              </div>
            </div>
            <div className="col-6">
              <div className="list-sec">
                <img src={color} alt="color" />
                <h6 className="mb-0">5 Colours </h6>
                <img src={colors} alt="colors" style={{ height: "1rem" }} />
              </div>
            </div>
            <div className="col-6">
              <div className="list-sec">
                {" "}
                <img src={charging} alt="charging" />
                <h6 className="mb-0">
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
          style={{
            height: "40vh",
            width: "50vw",
            margin: 20,
            borderRadius: 20,
          }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <img
          src={elife}
          alt="E-heaven"
          style={{
            height: "25vh",
            width: "50vw",
            margin: 30,
            borderRadius: 20,
          }}
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
          <div style={{ display: "flex" }}>
            <div className="list">
              {features1.map((feature, i) => (
                <div className="battery-sec" key={i}>
                  <img className="img" src={feature.icon} alt={i} />
                  <h6 className="feature-heading">{feature.name}</h6>
                </div>
              ))}
            </div>
            <div className="list">
              {features2.map((feature, i) => (
                <div className="battery-sec" key={i}>
                  <img className="img" src={feature.icon} alt={i} />
                  <h6 className="feature-heading">{feature.name}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link href="/electric_vehicles" style={{ textDecoration: "none" }}>
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
        </Link>
      </div>
    </div>
  );
};
export default OurProducts;
