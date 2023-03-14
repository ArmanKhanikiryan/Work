import React, {useEffect, useState} from 'react';
import ProductsAccordion from "./productsAccordion";
import './Products.css'
import {useLocation} from "react-router";
import {useAppDispatch, useAppSelector} from "../../features/store";
import {getImagesArplas} from "../../features/arplas/arplasSlicer";




const Products = () => {

    const arplasState = useAppSelector(state => state.arplas)
    const location = useLocation()
    const dispatch = useAppDispatch()
    useEffect(() => {
            dispatch(getImagesArplas())
    },[])

    console.log(arplasState);


    return (
        <div className='products_page_wrapper'>

            <div className='products_list'>

                <ProductsAccordion navigationParameter={location.state}/>


                <div className='product_items_list'>

                    {/*<div className='product_card'>*/}
                    {/*    <img src={arplasState.length ? arplasState[0].url : ''} alt=""/>*/}
                    {/*    <span className='product_card_span'>{arplasState.length ? arplasState[0].name : 'empty'}</span>*/}
                    {/*</div>*/}
                    {arplasState.length ? arplasState.map((elem, index) => {
                        return <div key={index} className='product_card'>
                            <img src={elem.url} width="300px" alt=""/>
                            <span className='product_card_span'>{elem.name}</span>

                        </div>
                    }) : null}
                </div>


            </div>


        </div>
    );
};

export default Products;