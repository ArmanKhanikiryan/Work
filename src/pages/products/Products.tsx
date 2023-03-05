import React, {useState} from 'react';
import './Products'
import {useTranslation} from "react-i18next";


const Products = () => {

    const [flag, setFlag] = useState<boolean>(false)

    const { t, i18n } = useTranslation()

    return (

        <div style={{display: "flex", alignItems: "center", justifyContent: 'center', height: '100vh'}}>


            <button onClick={() => i18n.changeLanguage('hy')}>
                change to armenian
            </button>
            <h1>{t("Doors")}</h1>
        </div>

    );
};

export default Products;