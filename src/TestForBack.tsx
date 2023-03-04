import React, {useEffect, useState} from "react";

function ImageUploader() {
    const [file, setFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
        }
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (file){
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                const base64Image = reader.result;
                console.log(base64Image)
                fetch('http://localhost:3333/post', {
                    method: 'POST',
                    body: JSON.stringify({image: base64Image}),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then()
            }
        }
    }

    useEffect(() => {
        fetch('http://localhost:3333/get')
            .then(res => res.json())
            .then(r => {
                setImageUrl(r[0].url);
            }).catch(err => {
            console.log(err)
        })
    }, [])




    return (
        <div>
                <input type="file" onChange={onFileChange} />
                <button onClick={handleSubmit}>Upload</button>
                {imageUrl && <img src={imageUrl} alt="Uploaded Image" />}
        </div>
    );
}

export default ImageUploader;