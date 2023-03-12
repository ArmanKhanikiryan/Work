import React from 'react';
import ProductsAccordion from "./productsAccordion";
import './Products.css'
import {useLocation} from "react-router";




const Products = () => {

    const location = useLocation()

    return (
        <div className='products_page_wrapper'>

            <div className='products_list'>

                <ProductsAccordion navigationParameter={location.state}/>


                <div className='product_items_list'>

                    <div className='product_card'>


                    </div>
                </div>


            </div>


        </div>
    );
};

export default Products;