import './NewSlider.css';
import React, {FC, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import './NewSlider.css'
import { Autoplay, Pagination, Navigation } from "swiper";
import {useAppDispatch, useAppSelector} from "../../features/store";
import {getImagesArplas} from "../../features/arplas/arplasSlicer";


const NewSlider= () => {

    const stateArplas = useAppSelector(state1 => state1.arplas)
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(getImagesArplas())
    }, [])
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
                {stateArplas.length ?  stateArplas.map((elem, index) => {
                    return <SwiperSlide key={index}>
                        <img src={elem.url} alt=""/>
                    </SwiperSlide>
                }) : null}
            </Swiper>
        </>
    );
}
export default NewSlider;