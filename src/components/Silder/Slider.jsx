import './Slider.css';
import protocolImg from "../../assets/protocol.png";
import connect from "../../assets/connectivity.png";
import edge from "../../assets/edgecomputing.png";
import development from "../../assets/development.png";
import cloud from "../../assets/cloud.png";
import os from "../../assets/os.png";
import analytics from "../../assets/analytics.png";
import React from "react";


const Slider = () => {
    return (
        <div className="slider">
            <div className="name">
                <h2>Technologies We Use!</h2>
            </div>
            <div className="slides">
               <div className="tech-row">
               <div className="tech">
                    <h3> <img src={connect} alt="" />Connectivity</h3>
                </div>
                <div className="tech">
                    <h3> <img src={protocolImg} alt="" />Protocols and Standards</h3>
                </div>
                <div className="tech">
                    <h3><img src={edge} alt="" />Edge Computing</h3>
                </div>
                <div className="tech">
                    <h3><img src={cloud} alt="" />Cloud Platforms</h3>
                </div>
               
               </div>
               <div className="tech-row">
                      
                <div className="tech">
                    <h3> <img src={os} alt="" />Oprating Systems</h3>
                </div>
                <div className="tech">
                    <h3> <img src={development} alt="" />Development Tools and Platforms</h3>
                </div>
                <div className="tech">
                    <h3> <img src={analytics} alt="" />Data analytics and AI</h3>
                </div>
                <div className="tech">
                    <h3><img src={protocolImg} alt="" />Protocols and Standards</h3>
                </div>
               </div>
            </div>
        </div>
    )
}

export default Slider