import "./GlobeSection.css";
import dailyhunt from "../../assets/dailyhuntimg.svg";
import toi from "../../assets/TOIimg.svg";
import hindustan from "../../assets/hindustanimg.svg";
import globe from "../../assets/globe.svg";
import React from "react";
const GlobeSection = () => {
  return (
    <div className="globe">
            <div className="right">
                <h1>Unleash the full power of data</h1>
                <p className="text-right">We guide global businesses through the challenges of developing purposeful technology that addresses their needs and advances their growth. We have established offices in India, the UAE, and the USA.</p>
                <div className="boxes">
                    <div className="box">
                        <h2>60+</h2>
                        <p>Integrations</p>
                    </div>
                    <div className="box">
                        <h2>600%</h2>
                        <p>Return on Investment</p>
                    </div>
                    <div className="box">
                        <h2>4K+</h2>
                        <p>Globe Customers</p>
                    </div>
                </div>
                <div className="featured-logo">
                    <div><h3>Featured</h3></div>
                    <div><img src={dailyhunt} alt="" /></div>
                    <div><img src={toi} alt="" /></div>
                    <div><img src={hindustan} alt="" /></div>
                </div>
            </div>
            <div className="left">
                <img src={globe} alt="" />
            </div>
    </div>
  )
}

export default GlobeSection