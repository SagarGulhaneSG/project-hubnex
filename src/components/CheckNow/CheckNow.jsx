import React from "react";
import './CheckNow.css';
import crown from "../../assets/crown.svg";
import { FaArrowRight } from "react-icons/fa";


const CheckNow = () => {
  return (
    <div className='CheckNow'>
        <div className="content">
            <div className="iconCrown">
                <img src={crown} alt="" />
            </div>
            <div className="free-text">
                <p>Work better, Together</p>
                <h2>Get Evaluate Your Business Score for Free!</h2>
            </div>
            <div className="button-check"><button>Check Now!<FaArrowRight /></button></div>
        </div>
    </div>
  )
}

export default CheckNow