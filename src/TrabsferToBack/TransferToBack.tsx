import React, {useEffect, useState} from 'react';
import axios from 'axios';
import pako from 'pako'

const TransferToBack: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [image, setImage] = useState<string>('')

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };


    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (!file) {
            return;
        }
        // Compress the file using pako
        const fileBuffer = await file.arrayBuffer();
        const compressedBuffer = pako.gzip(fileBuffer);

        // Create a FormData object and append the compressed file
        const formData = new FormData();
        const compressedFile = new File([compressedBuffer], file.name);
        formData.append('file', compressedFile);

        // Send the compressed file to the server using Axios
        const response = await axios.post('http://localhost:3333/post', formData);
    };

    const getData = async () => {
        const response = await axios.get("http://localhost:3333/get");
        const data = new Uint8Array(Object.values(response.data));
        const decompressedData = pako.inflate(data);
        const blob = new Blob([decompressedData.buffer]);
        const imageUrl = URL.createObjectURL(blob);
        setImage(imageUrl)
    }

    return (

        <div style={{display: 'flex', justifyContent: "center", height: '100vh', alignItems: "center"}}>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleSubmit}>Upload</button>
            <button onClick={getData}>Download</button>
            {image && <img src={image} style={{height: '500px', marginTop: '150px',width: "50vw"}} alt=""/>}
        </div>
    );
};

export default TransferToBack;