import './Location.css';
import location from '../../assets/location.png';
import india from "../../assets/india.png";
import uae from "../../assets/uae.png";
import usa from "../../assets/usa.png";
import indo from "../../assets/indo.png";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import React from "react";
const Location = () => {
    return (
        <>

            <div className="Location">

                <div className="location-box">
                    <div className="location-left">
                        <h1>Our Locations</h1>
                        <div className="locations">
                            <div className="loc">
                                <img src={india} alt="" />
                                <h3>IND</h3>
                            </div>
                            <div className="loc loc-grey">
                                <img src={uae} alt="" />
                                <h3>UAE</h3>
                            </div>
                            <div className="loc loc-grey">
                                <img src={usa} alt="" />
                                <h3>USA</h3>
                            </div>
                            <div className="loc loc-grey">
                                <img src={indo} alt="" />
                                <h3>INDO</h3>
                            </div>
                        </div>
                        <div className="cities">
                            <h2>Gurugram</h2>
                            <h2>Banglore</h2>
                            <h2>Pune</h2>
                            <h2>Lucknow</h2>
                        </div>
                        <h2 className='address'><IoLocationOutline className='icon' />Etihad Airways Centre, Al Rahah, Al Muneera, Abu Dhabi, UAE</h2>
                        <h2 className='address'><CiMail />hello@hubnex.in</h2>
                        <h2 className='address'><IoCallOutline />+91 1223432544</h2>
                        <button className='con-btn'>Contact Us<FaArrowRight /></button>
                    </div>
                    <div className="location-right">
                        <img src={location} alt="" />
                    </div>
                </div>

            </div>
        </>

    )
}

export default Location