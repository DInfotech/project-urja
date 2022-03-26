import office from "../../assets/home-products/zonal-office.png";
import dealers from "../../assets/home-products/dealers.png";
import customers from "../../assets/home-products/customers.png";
import "./CompanyStats.css";
import { Typography } from "@material-ui/core";

const CompanyStats = () => {
  return (
    <div className="reveal ">
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
        Company Statistics
      </Typography>
      <div style={{ display: "flex" }}>
        <div className="outer-wrap">
          <div className="icon">
            <img className="project-img" src={office} alt="office" />
          </div>
          <div className="counter-text">
            <h3 className="count-box counted">
              <span className="count-text">4th</span>
            </h3>
            <h5>Best Eco-friendly Company For 2 Years In A Row!</h5>
          </div>
        </div>

        <div className="outer-wrap">
          <div className="icon">
            <img className="project-img" src={dealers} alt="dealers" />
          </div>
          <div className="counter-text">
            <h3 className="count-box counted">
              <span className="count-text">22</span>+
            </h3>
            <h5>Years In Innovative Conservation Of Energy</h5>
          </div>
        </div>

        <div className="outer-wrap">
          <div className="icon">
            <img className="project-img" src={customers} alt="customers" />
          </div>
          <div className="counter-text">
            <h3 className="count-box counted">
              <span className="count-text">1322</span>+
            </h3>
            <h5>Residential Intallations</h5>
          </div>
        </div>

        <div className="outer-wrap">
          <div className="icon">
            <img className="project-img" src={customers} alt="customers" />
          </div>
          <div className="counter-text">
            <h3 className="count-box counted">
              <span className="count-text">100</span>+
            </h3>
            <h5>Corporate Turnkey Projects</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyStats;
