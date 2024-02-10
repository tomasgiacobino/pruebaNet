import React from 'react'
import Logo from '../Assets/logo.png';

const Footer = () => {
  return (
    <div className="footer-wrapper">
    <div className="footer-section-one">
      <div className="footer-logo-container">
        <img src={Logo} alt="" />
      </div>
    </div>
    <div className="footer-section-two">
      <div className="footer-section-columns">
        <span>244-5333-7783</span>
        <span>marce@gmail.com</span>
      </div>
      <div className="footer-section-columns">
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  </div>
  )
}

export default Footer