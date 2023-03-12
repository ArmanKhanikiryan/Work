import React from 'react';
import ProductsAccordion from "./productsAccordion";
import './Products.css'
import {useLocation} from "react-router";




const Products = () => {

    const location = useLocation()

    console.log(location.state)
    return (
        <div className='products_page_wrapper'>

                <ProductsAccordion navigationParameter={location.state}/>


        </div>
    );
};

export default Products;