import React from 'react'
import Banner from '../common_components/banner/banner';
import "./Products.css";
import ProductsCardList from './ProductsContent';



const Products = () => {
  return (
    <>
    <Banner banner_title="Products"/>
    {/* <div style={{backgroundColor:"var(--darkblue)"}}> */}
    <h1 className='product_card_heading heading'>Products We Offer</h1>
    <div className='general_cards_design max-width'>
   
    <ProductsCardList/>
    </div>
    {/* </div> */}
    </>
  )
}

export default Products;