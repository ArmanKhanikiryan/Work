import React from 'react';
import './Home.css'
import ImageSlider from "../../components/slider/Slider";
import testPicture from '../../assets/images/facade.jpg'
import testPicture2 from '../..//assets/images/facade2.jpg'
import testPicture3 from '../../assets/images/facade3.jpg'
import testPicture4 from '../../assets/images/facade4.jpg'
import testPicture6 from '../../assets/images/facade6.avif'
import door from  '../../assets/icons/door.png'
import window from  '../../assets/icons/window.png'
import balcony from '../../assets/icons/balcony.png'
import slide from '../../assets/icons/sliding-door.png'


const images: string[] = [
    testPicture,
    testPicture2,
    testPicture3,
    testPicture4,
    testPicture6
];

function Home() {
    return (
        <div>
            <div className='home_header_wrapper'>
                <div className='home_header'>
                    <div className='header_image_div'>
                        <div className='icons_wrapper'>
                            <img className='header_icons' src={door} alt="door"/>
                            <span> Doors </span>
                        </div>

                        <div className='icons_wrapper'>
                            <img className='header_icons' src={window} alt="window"/>
                            <span> Windows </span>
                        </div>

                        <div className='icons_wrapper'>
                            <img className='header_icons' src={balcony} alt="window"/>
                            <span>Balcony</span>
                        </div>
                        <div className='icons_wrapper'>
                            <img className='header_icons' src={slide} alt="slide"/>
                            <span>Slide</span>
                        </div>
                    </div>
                </div>
            </div>
            <ImageSlider images={images} />


            <div className='test_div'>

            </div>
        </div>
    );
}

export default Home;
