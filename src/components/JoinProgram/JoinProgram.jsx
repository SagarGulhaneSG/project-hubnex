import handshake from "../../assets/handshake.png";
import React from "react";
import './JoinProgram.css';
import Driving from "../DrivingResults/Driving";

const JoinProgram = () => {
    return (
        <div className='JoinProgram'>
            <div className="twoparts">
                <div className="right-part">
                    <img src={handshake} alt="" />
                </div>
                <div className="left-part">
                    <h1>Join our Preferred Partners Programme</h1>
                    <p>We proudly offer exclusive benefits to our partners who have consistently shown trust in our platform and delivered outstanding work.These privileges are designed to ensure business stability and promise up to 3x returns to our partners.</p>
                    <button className='btn-blue'>Connect Sales &rarr;</button>
                </div>
            </div>
            <Driving/>
        </div>
    )
}

export default JoinProgram