import React, {useEffect, useState} from 'react';
import TestForBack from "../../TestForBack";
import ImageUploader from "../../TestForBack";
import FileInput from "../../TestForBack";

const Service = () => {

    const [data, setData] = useState<string>('')
    const getData = () => {
        fetch('http://localhost:3333/get').then(res => res.blob())
            .then(blob => {
                const info = URL.createObjectURL(blob)
                console.log(info)
                setData(info)
            })
    }

    const handleSubmit = async (formData: FormData) => {
        const response = await fetch('http://localhost:3333/post', {
            method: 'POST',
            body: formData
        });
        // Handle response
    };

    return (
        <div>
            <img src={data} alt='' />
            <ImageUploader/>
        </div>
    );
};

export default Service;