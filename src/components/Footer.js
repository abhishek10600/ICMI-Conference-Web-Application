import React from 'react'
import SpringerLogo from "../assets/Images/Home Images/springerlogo.png";
import SmitLogo from "../assets/Images/Home Images/smitlogo.png";

const Footer = () => {
    return (
        <div className="container-fluid footer">
            <div className="d-flex justify-content-center align-content-center">
                <img src={SpringerLogo} className="footer-springer-logo w-50 h-100 my-4" />
                <img src={SmitLogo} className="footer-springer-logo w-50 h-100 mx-2 my-4" />
            </div>
        </div>
    )
}

export default Footer