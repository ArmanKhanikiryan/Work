import React, { useState, useEffect, FC } from "react";
import { Grid } from "@mui/material";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import './Slider.css'
type TSlider = {
    images: string[]
}

const ImageCarousel: FC<TSlider> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    function nextSlide() {
        setCurrentIndex((currentIndex + 1) % images.length);
    }

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    return (
        <div className="slider_wrapper">
            <ArrowCircleLeftIcon className='left_arrow' style={{fontSize: '50px'}} onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)} />
            <Grid container className="carousel">
                {images.map((image, index) => (
                    <Grid
                        item
                        xs={12}
                        key={index}
                        className={`slide ${
                            index === currentIndex ? "slide-active" : ""
                        }`}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: '5px' }}
                        />
                    </Grid>
                ))}
                <Grid item xs={12} className="control"></Grid>
            </Grid>
            <ArrowCircleRightIcon className='right_arrow' style={{fontSize: '50px'}} onClick={nextSlide}/>
        </div>
    );
}

export default ImageCarousel;
