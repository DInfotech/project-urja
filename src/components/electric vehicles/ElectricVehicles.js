import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "../../common_styles/commonClasses.css";
import Banner from "../common_components/banner/banner";

const ElectricVehicles = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://13.58.168.111:5544/api/61212df361090c6380388817/product")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>;
  // } else {
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
        {items.map((vehicle) => (
          <Card
            sx={{
              width: "25vw",
              height: "60vh",
              margin: "20px",
              borderRadius: 10,
              background: "var(--darkblue)",
            }}
            key={vehicle.name}
          >
            <img
              height="60%"
              width="100%"
              src={vehicle.image}
              alt={vehicle.name}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                align="center"
                style={{ color: "white" }}
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
  // }
};
export default ElectricVehicles;
