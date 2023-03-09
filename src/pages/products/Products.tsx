import React, {} from 'react';
import './Products'
import NewSlider from "../../components/newSlider";
import UploadImage from "../../transfersToBack/google/GoogleCloude";


const Products = () => {


    return (

        <div style={{display: "flex", alignItems: "center", justifyContent: 'center', height: '100vh'}}>

            {/*<NewSlider/>*/}
            <UploadImage/>

        </div>

    );
};

export default Products;