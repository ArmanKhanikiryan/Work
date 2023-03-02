import React from 'react';
import './Navbar.css'
import logo from '../../assets/images/logo.png'
import {useNavigate} from "react-router";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LanguageSelector from "../languageSelector";


function Navbar() {
    const navigate = useNavigate()
    return (
        <div className='navbar_wrapper'>


            <div className='navbar'>
                <img className='logo' onClick={() => navigate('/')} src={logo} alt=""/>
                <div className='nav_container'>
                    <ul className='ul_container'>
                        <div className='home_btn'>
                            <span className='dropdown_span' onClick={() => navigate('/')}>Home</span>
                        </div>
                        <div className='dropdown_component'>
                            <span className='dropdown_span' onClick={() => navigate('/products')}>Products</span>
                            <div className='dropdown'>
                                <div onClick={() => navigate('/products/1p')} className='dropdown_element'>
                                    <span>1 Product</span>
                                </div>
                                <div onClick={() => navigate('/products/2p')} className='dropdown_element'>
                                    <span>2 Product</span>
                                </div>
                                <div onClick={() => navigate('/products/3p')} className='dropdown_element'>
                                    <span>3 Product</span>
                                </div>
                            </div>
                        </div>
                        <div className='dropdown_component'>
                            <span className='dropdown_span' onClick={() => navigate('/service')}>Service</span>
                            <div className='dropdown'>
                                <div onClick={() => navigate('/service/1s')} className='dropdown_element'>
                                    <span>1 Service</span>
                                </div>
                                <div onClick={() => navigate('/service/2s')} className='dropdown_element'>
                                    <span>2 Service</span>
                                </div>
                                <div onClick={() => navigate('/service/3s')} className='dropdown_element'>
                                    <span>3 Service</span>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
            <div className='change_language'>
                <div>

                    <div className='contact'>
                        <div className='contact_container'>
                            <span className='dropdown_span_contact'>Contact to Us</span>
                            <PhoneInTalkIcon style={{fontSize: '30px'}} className='phone'/>
                        </div>
                        <LanguageSelector/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
