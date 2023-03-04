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

            <div className='home_body'>


                <div className='location'>




                <div className='google_maps_div'>

                    <div className='location_info'>

                    <h1>Our Location</h1>

                    </div>


                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453.08926518724064!2d44.594324779614496!3d40.18661068286544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa35f52008a29%3A0xf9eb20a3f7c2d59e!2s20%20Kochinyan%20St%2C%20Yerevan!5e0!3m2!1sru!2sam!4v1677957485773!5m2!1sru!2sam"
                        className='google_map'
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                </div>



            </div>
        </div>
    );
}

export default Home;
