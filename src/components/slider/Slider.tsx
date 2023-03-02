import React, {useState, useEffect, FC} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import "../../pages/home/Home.css"

const useStyles = makeStyles((theme) => ({
    carousel: {
        display: "flex",
        justifyContent: "center",
        position: "relative",
        height: "75vh",
        maxWidth: "100%",
    },
    slide: {
        position: "absolute",
        height: "100%",
        width: "100%",
        opacity: 0,
        transition: "opacity 0.7s ease-in-out",
    },
    slideActive: {
        opacity: 1,
    },
    control: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
    },
    prevButton: {
        width: "100px",
        height: "100px",
        left: 0,
    },
    nextButton: {
        right: 0,
    },
    controlButton: {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        borderRadius: "50%",
        padding: 8,
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 1)",
        },
    },
}));

type TSlider = {
    images: string[]
}

const ImageCarousel:FC<TSlider> = ({ images }) => {
    const classes = useStyles();
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
            <ArrowCircleLeftIcon onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)} style={{fontSize: '50px',color: 'black',opacity: 0.7, position: 'absolute', left: 0,zIndex: 10, bottom: '35%', cursor: 'pointer'}}/>
            <Grid container className={classes.carousel}>
                {images.map((image, index) => (
                    <Grid
                        item
                        xs={12}
                        key={index}
                        className={`${classes.slide} ${
                            index === currentIndex ? classes.slideActive : ""
                        }`}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: '5px' }}
                        />
                    </Grid>
                ))}
                <Grid item xs={12} className={classes.control}></Grid>
            </Grid>
            <ArrowCircleRightIcon onClick={nextSlide} style={{fontSize: '50px', color: 'black', opacity: 0.7,cursor: 'pointer',position: 'absolute', right: 0,zIndex: 10, bottom: '35%',}}/>
        </div>
    );
}

export default ImageCarousel;
