import React from 'react';
import ProductsAccordion from "./productsAccordion";
import './Products.css'
import {useLocation} from "react-router";




const Products = () => {

    const location = useLocation()

    return (
        <div className='products_page_wrapper'>

                <ProductsAccordion navigationParameter={location.state}/>


        </div>
    );
};

export default Products;