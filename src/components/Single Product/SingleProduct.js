import React, { useState, useEffect } from "react";
import "./SingleProduct.css";
// import SingleProductContent from "./SingleProductContent";
import { Typography } from "@material-ui/core";
import { Rating } from "@mui/material/";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import "../../common_styles/commonClasses.css";
import { borderRadius } from "@mui/system";

const SingleProduct = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // console.log(categoryID);

  useEffect(() => {
    let pathName = window.location.pathname.split("/");
    // alert(pathName[pathName.length - 1]);
    pathName = pathName[pathName.length - 1];
    // console.log(pathName);
    fetch(`http://13.58.168.111:5544/api/${pathName}/product`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
          // console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {items.map((product) => (
          <Card
            sx={{
              display: "flex",
              margin: "30px 10px",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "30%",
              background: "var(--darkblue)",
              boxShadow: "lightgrey 10px 10px 50px",
              borderRadius: "10px",
              height: "80vh",
            }}
            key={product.name}
          >
            <img
              width="100%"
              height="50%"
              src={product.image}
              alt={product.name}
            />
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#0ea58a",
                margin: 10,
              }}
            >
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                align="center"
                style={{ color: "white" }}
              >
                {product.name}
              </Typography>
              <Typography align="center" style={{ color: "white" }}>
                {product.description}
              </Typography>
              <Rating
                name="rating"
                value={product.rating}
                precision={0.5}
                readOnly
              />
              <Typography align="center" style={{ color: "white" }}>
                Price: ${product.price}
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

export default SingleProduct;
