import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import { CircularProgress } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
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

  return (
    <>
      {!isLoaded ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: 20,
            padding: 20,
            height: "100vh",
          }}
        >
          <CircularProgress color="primary" size="large" />
          <Typography
            variant="h2"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--primarygreen)",
              margin: 10,
            }}
          >
            Products Are Loading! Please Wait
          </Typography>
        </div>
      ) : (
        // else if (!isLoaded) {
        //   return <div>Loading...</div>;
        // }
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
                  display: "flex",
                  flexDirection: "column",
                  margin: "30px 10px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  width: "30%",
                  background: "var(--darkblue)",
                  boxShadow: "lightgrey 10px 10px 50px",
                  borderRadius: "10px",
                  height: "80vh",
                }}
                key={vehicle.id}
              >
                <img
                  width="100%"
                  height="50%"
                  src={vehicle.image}
                  alt={vehicle.name}
                />
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0ea58a",
                    margin: 10,
                    height: "30%",
                    width: "100%",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    align="center"
                    style={{
                      color: "white",
                      width: "100%",
                      height: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textTransform: "uppercase",
                    }}
                  >
                    {vehicle.name}
                  </Typography>
                  {/* <Typography align="center" style={{ color: "white" }}>
                {vehicle.description}
              </Typography>
              <Rating
                name="rating"
                value={vehicle.rating}
                precision={0.5}
                readOnly
              /> */}
                  {vehicle.price > 10000 ? (
                    <Typography
                      align="center"
                      variant="h5"
                      style={{ color: "white" }}
                    >
                      Price: ₹{vehicle.price}
                    </Typography>
                  ) : (
                    <Typography
                      align="center"
                      variant="h5"
                      style={{ color: "white" }}
                    >
                      Booking Amount: ₹{vehicle.price}
                    </Typography>
                  )}
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
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ElectricVehicles;
