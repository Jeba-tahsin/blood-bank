import React from 'react';
import {BsFacebook} from 'react-icons/bs';
import {FaInstagramSquare} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {FiPhoneCall} from 'react-icons/fi';
import "./Footer.css";

const Footer = () => {
    return (
        <div className='mt-5 footer' style={{ padding:'10px'}}>
            <h2>CONTACT US</h2>
            <p>Road-2/A East Shibgonh Sylhet-300, Bangladesh</p>
            <p>Cell:(+880) 0723 161 343</p>
            <p>helpme@donation.com</p>

            <div className='pb-3 d-flex justify-content-center'>
            <div className='pe-3'>
            <BsFacebook/>
            </div>
            <div className='pe-3'>
            <FaInstagramSquare/>
            </div>
            <div className='pe-3'>
            <BsTwitter/>
            </div>
            <div className='pe-3'>
            <FiPhoneCall/>
            </div>
            </div>

        </div>
    );
};

export default Footer;