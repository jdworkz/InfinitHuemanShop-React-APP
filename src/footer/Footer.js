import React from "react"
import './Footer.css'
import {FaFacebook, FaInstagram, FaTwitter, FaTiktok} from 'react-icons/fa'


const Footer = () => {
    return(
        <div className="footer">
            <div className="copyright">
            
        <p>Copyright<span>&#169;</span>2022 Infinite Hueman</p>
        </div>
        <div className="social">
            <p>Follow us on </p>
                <FaFacebook className='icon' />
                <FaInstagram className='icon' />
                <FaTwitter className='icon' />
                <FaTiktok className='icon' />


        </div>
        </div>

    )
}
export default Footer;