import React from 'react';
import './footer.css';
import footer_logo from '../../assets/logo_big.png';
import insta_icon from '../../assets/instagram_icon.png';
import priterest_icon from '../../assets/pintester_icon.png';
import wtsapp_icon from '../../assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt=""/>
            <p>SHOPPER</p>
        </div>
        <ul className={'footer-links'}>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <img src={insta_icon} alt=""/>
            </div>
            <div className='footer-icons-container'>
                <img src={priterest_icon} alt=""/>
            </div>
            <div className='footer-icons-container'>
                <img src={wtsapp_icon} alt=""/>
            </div>
            <div className='footer-copyright'>
                <hr/>
                <p>Copyright @ 2024 - All</p>
            </div>
        </div>
    </div>
  );
};

export default Footer;
