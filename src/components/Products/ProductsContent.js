import React from 'react'
import "./Products.css";
import { FcFlashOn } from "react-icons/fc";

const ProductsCardData = [
    {
        id: 1,
        image: "", 
        name: "E-Rickshaw",
    },
    {
        id: 2,
        image: "",
        name: "Batteries",
    },
    {
        id: 3,
        image: "",
        name: "Solar Inverter",

    },
    {
        id: 4,
        image: "",
        name: "LED Lights",

    },
    {
        id: 5,
        image: "",
        name: "PV Module",

    },
    {
        id: 6,
        image: "",
        name: "Power Pack",

    },
    {
        id: 7,
        image: "",
        name: "Solar Lanterns",

    },
    {
        id: 8,
        image: "",
        name: "Home Lightning",

    },
]




const ProductsContent = (props) => {
    return (
        <>
            <div className='products_card '>
                {/* <div  className="products_image">{}</div> */}
                
             <div  className='flex-vertical products_card_top'>
               <img src='../product.png' className='products_image'></img>

                    <div className='productl_card_heading'>{props.cardProduct.name}</div>
                  </div>
                    <button>Explore</button>
                </div>

            
        </>
    );
};





const ProductsCardList = () => {
    return (
        <>

            {ProductsCardData.map(cardProduct => {
                return <ProductsContent cardProduct={cardProduct} key={cardProduct.id} />;
            })}

        </>
    )
}

export default ProductsCardList;