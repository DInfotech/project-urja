// import { Link } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import SingleProduct from "../Single Product/SingleProduct";
// import "./Products.css";

// const ProductsCardData = [
//   {
//     name: "Batteries",
//     image: "https://urja-kendra.s3.us-east-2.amazonaws.com/1629564455407.jpg",
//     isTopCategory: true,
//     displayOrder: 0,
//     id: "61212e3961090c6380388818",
//   },
//   {
//     name: "Solar Inverter",
//     image: "https://urja-kendra.s3.us-east-2.amazonaws.com/1630147176997.jpg",
//     isTopCategory: true,
//     displayOrder: 0,
//     id: "612a1269b14dea0dc90f65f1",
//   },
//   {
//     name: "LED Lights",
//     image: "https://urja-kendra.s3.us-east-2.amazonaws.com/1630147216064.jpg",
//     isTopCategory: true,
//     displayOrder: 0,
//     id: "612a1290b14dea0dc90f65f2",
//   },
//   {
//     name: "PV Module",
//     image: "https://urja-kendra.s3.us-east-2.amazonaws.com/1630147417137.png",
//     isTopCategory: true,
//     displayOrder: 0,
//     id: "612a1359b14dea0dc90f65f3",
//   },
//   {
//     name: "Water Heater",
//     image: "https://urja-kendra.s3.us-east-2.amazonaws.com/1630147446479.png",
//     displayOrder: 0,
//     id: "612a1377b14dea0dc90f65f4",
//   },
//   {
//     name: "Solar Lanterns",
//     image: "https://urja-kendra.s3.us-east-2.amazonaws.com/1630147481827.png",
//     displayOrder: 0,
//     id: "612a139ab14dea0dc90f65f5",
//   },
//   {
//     name: "Power Pack",
//     image: "https://urja-kendra.s3.us-east-2.amazonaws.com/1630147514363.png",
//     displayOrder: 0,
//     id: "612a13bab14dea0dc90f65f6",
//   },
//   {
//     name: "Home Lighting",
//     image: "https://urja-kendra.s3.us-east-2.amazonaws.com/1630147581030.png",
//     displayOrder: 0,
//     id: "612a13fdb14dea0dc90f65f7",
//   },
//   {
//     name: "Solar Charge Controller",
//     image: "https://urja-kendra.s3.us-east-2.amazonaws.com/1630147610166.jpg",
//     displayOrder: 0,
//     id: "612a141ab14dea0dc90f65f8",
//   },
//   {
//     name: "LED Bulbs",
//     image: "https://urja-kendra.s3.us-east-2.amazonaws.com/1630147758810.jpg",
//     displayOrder: 0,
//     id: "612a14afb14dea0dc90f65fb",
//   },
//   {
//     isTopCategory: false,
//     name: "Electric Car",
//     image: "https://urja-kendra.s3.us-east-2.amazonaws.com/1630749860022.jpeg",
//     displayOrder: 100,
//     id: "613344a477db1b0f96b9adc9",
//   },
//   {
//     displayOrder: 0,
//     isTopCategory: true,
//     name: "E Rikshaw",
//     image: "https://urja-kendra.s3.us-east-2.amazonaws.com/1645881704422.png",
//     id: "621a2969f742661502cd4b05",
//   },
// ];

const ProductsContent = (props) => {
 


//   return (
//     <>
//       <div className="products_card">
//         <div className="flex-vertical products_card_top">
//           <img
//             src={props.cardProduct.image}
//             className="products_image"
//             alt="product"
//           ></img>

//           <div className="productl_card_heading">{props.cardProduct.name}</div>
//         </div>
//         <Link to={`/products/${props.cardProduct.id}`}>
//           <button
//           >
//             Explore
//           </button>
//         </Link>
//       </div>
//     </>
//   );
// };
  return (
    <>
      <Link to={`/products/${props.cardProduct.id}`}>
        <div className="products_card">
          <div className="flex-vertical products_card_top">
            <img
              src={props.cardProduct.image}
              className="products_image"
              alt="product"
            ></img>

            <div className="productl_card_heading">
              {props.cardProduct.name}
            </div>
          </div>
          <button
            // onClick={() => {
            //   handleClick(props.cardProduct.id);
            //   console.log(selectedValue);
            //   return (
            //     <>
            //       <SingleProduct />
            //     </>
            //   );
            // }}
          >
            Explore
          </button>
        </div>
      </Link>
    </>
  );
};

// const ProductsCardList = ({users}) => {
//   return (
//     <>
//       {ProductsCardData.map((cardProduct) => (
//         <ProductsContent cardProduct={cardProduct} key={cardProduct.id} />
//       ))}
//     </>
//   );
// };

// export default ProductsCardList;
