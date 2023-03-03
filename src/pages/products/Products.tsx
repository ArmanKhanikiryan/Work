import React, {useState} from 'react';
import './Products'
import DialogComponent from "../../components/dialog";
const Products = () => {

    const [flag, setFlag] = useState<boolean>(false)
    return (
        <div>
            <h1>Welcome to Products</h1>


            <button onClick={() => setFlag(true)}>Dialog Open</button>

            {
                flag ? <DialogComponent/>
            :
                null
            }
        </div>
    );
};

export default Products;