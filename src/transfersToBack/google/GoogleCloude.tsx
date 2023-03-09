import React, { useState } from 'react';
import { Storage } from '@google-cloud/storage';
import google_json from '../amazing-plateau-380104-c669648e5d8c.json'




const UploadImage = () => {



    const storage = new Storage({
        projectId: 'amazing-plateau-380104',
        keyFilename: google_json
    });


    async function listBucketContents(bucketName: string) {
        try {
            const [files] = await storage.bucket(bucketName).getFiles();

            console.log(`Files in ${bucketName}:`);
            files.forEach(file => {
                console.log(file.name);
            });
        } catch (err) {
            console.error('Error listing bucket contents:', err);
        }
    }

    listBucketContents('proffsystem');

    return (
        <div>
            <button onClick={() => listBucketContents('proffsystem')}>Fetch</button>
        </div>
    );
}
export default UploadImage;