import './NewSlider.css';
import React, {FC, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import './NewSlider.css'
import { Autoplay, Pagination, Navigation } from "swiper";
import {TMainSlider} from "../../features/mainSlider/mainSliderSlice";

type TNewSlide = {
    imagesArray: TMainSlider[]
}


const NewSlider:FC<TNewSlide> = ({imagesArray}) => {

    return (
        <>
            <Swiper
                rewind={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
            >
                {imagesArray.map((elem, index) => {
                    return <SwiperSlide key={index}>
                        <img style={{height: '60vh'}} src={elem.url} alt=""/>
                    </SwiperSlide>
                })}
            </Swiper>
        </>
    );
}
export default NewSlider;