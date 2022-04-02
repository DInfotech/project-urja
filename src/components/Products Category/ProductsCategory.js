import React, { useState, useEffect } from 'react';
// import ProductCategoryContent from './ProductCategoryContent';
import './ProductsCategory.css';
import { Link } from "react-router-dom";
import Banner from '../common_components/banner/banner';
const ProductsCategory = () => {


    const [data, setData] = useState([]);

    const getCategory = () => {
      fetch("http://13.58.168.111:5544/api/category")
        .then((response) => response.json())
        .then ((json) => {
        //    console.log(json);
           setData(json.data);
        });
    };
    useEffect (() => {
      getCategory();
    },[])
  return (
    <>
     {/* <div className="max-width">
        <div className="cards-flex"> */}





        <Banner banner_title="Products Category" />

      <h1 className="product_card_heading heading">
        Products Category We Offer
     </h1>
           <div
        className="general_cards_design max-width"
        style={{ marginTop: "5rem" }}
      >


         {
            data.map((curElem)=>{
                 return(
                     <>
                     <div className="products_card">
        <div className="flex-vertical products_card_top">
          <img
            src={curElem.image}
            className="products_image"
            alt="product"
          ></img>

          <div className="productl_card_heading">{curElem.name}</div>
        </div>
        <Link to={`/products/${curElem.id}`}>
          <button
          >
            Explore
          </button>
        </Link>
      </div>
                     </>
                 )
             })
         }
        </div>
      
    
    
    </>
  )
}

export default ProductsCategory