

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import React, { useEffect, useState } from "react";
const url = "https://gateway.pinata.cloud/ipfs/QmNXUTHomuVcwTWfwCkTrBj3EWiRbfv5N9Nhrd2qaJVAJ2";

function Load() {
  const [img, setImg] = useState([]);
  
 //fetch api 20 times
    const fetchImage = async () => {
        for (let i = 0; i < 20; i++){
        const res = await fetch(url);
        console.log('URL Fetched');
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        img.push({imageObjectURL});
        }
        console.log({img});
    }
    useEffect(() => {
        fetchImage();
    }
    , []);

   
  return (
    <>
        <div className="container">
            <div className="row" width="100%">
                <div className="col-md-20">
                    <div className="card">
                        <div className="card-header">
                            <h4>Lazy Load</h4>
                        </div>
                        <div className="card-body">
                        <img src={img[0]} alt="icons" height="200" width="400" loading="lazy" />
                        <img src={img[1]} alt="icons" height="200" width="400" loading="lazy"/>
                        <img src={img[2]} alt="icons" height="200" width="400" loading="lazy"/>
                        <img src={img[3]} alt="icons" height="200" width="400" loading="lazy"/>
                        <img src={img[4]} alt="icons" height="200" width="400" loading="lazy"/>
                        <img src={img[5]} alt="icons" height="200" width="400" loading="lazy"/>
                        <img src={img[6]} alt="icons" height="200" width="400" loading="lazy"/>
                        <img src={img[7]} alt="icons" height="200" width="400" loading="lazy"/>
                        <img src={img[8]} alt="icons" height="200" width="400" loading="lazy"/>
                        <img src={img[9]} alt="icons" height="200" width="400" loading="lazy"/>
                        <img src={img[10]} alt="icons" height="200" width="400" loading="lazy"/>
                        <img src={img[11]} alt="icons" height="200" width="400" loading="lazy"/>
                        <img src={img[12]} alt="icons" height="200" width="400" loading="lazy"/>
                        <img src={img[13]} alt="icons" height="200" width="400" loading="lazy"/>
                        <img src={img[14]} alt="icons" height="200" width="400" loading="lazy"/>
                        <img src={img[15]} alt="icons" height="200" width="400" loading="lazy"/>
                        <img src={img[16]} alt="icons" height="200" width="400" loading="lazy"/>
                        <img src={img[17]} alt="icons" height="200" width="400" loading="lazy"/>
                        <img src={img[18]} alt="icons" height="200" width="400" loading="lazy"/>
                        <img src={img[19]} alt="icons" height="200" width="400" loading="lazy"/>

                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
//     <img src={img[0]} alt="icons" height="200" width="400" />
    
//   </>
  );
}

export default Load;
