import { Typography } from "@material-ui/core";
import product1 from "../../assets/poster-2.jpg";
import product2 from "../../assets/POSTER.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "../../common_styles/commonClasses.css";
import Banner from "../common_components/banner/banner";

const ElectricVehicles = () => {
  const vehicles = [
    {
      img: product1,
      name: "E-ZESS",
    },
    {
      img: product2,
      name: "E-HEAVEN",
    },
  ];

  return (
    <>
      <Banner banner_title="Electric Vehicles" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: 10,
        }}
      >
        {vehicles.map((vehicle) => (
          <Card
            sx={{
              minWidth: 345,
              height: 400,
              margin: "20px",
              borderRadius: 10,
            }}
            key={vehicle.name}
          >
            <CardMedia
              component="img"
              height="200"
              width="100%"
              image={vehicle.img}
              alt={vehicle.name}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                align="center"
                className="sub-heading"
              >
                {vehicle.name}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                variant="contained"
                size="medium"
                align="center"
                style={{
                  margin: 10,
                  padding: 8,
                  backgroundColor: "var(--primarygreen)",
                  color: "var(--darkblue)",
                  width: "120px",
                  borderRadius: 10,
                }}
              >
                Know More
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};
export default ElectricVehicles;
