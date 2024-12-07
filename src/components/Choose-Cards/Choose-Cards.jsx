import './Choose-Cards.css'
import card1 from "../../assets/card-1.png";
import card2 from "../../assets/card-2.png";
import card3 from "../../assets/card-3.png";
import React from "react";

const ChooseCards = () => {
  return (
    <div className='full'>
        <h1>Why Choose Us?</h1>
        <div className="card-container">
            <div className='card'>
                    <img src={card1} alt="" />
                    <div className='card-text'>
                        <h3>Fast Mvp Development</h3>
                        <p>We develop the prototypes and MVP for the ERP System within a few months and optimise the final product based on its performance metrics and your feedback.</p>
                    </div>
            </div>
            <div className='card'>
                    <img src={card2} alt="" />
                    <div className='card-text'>
                        <h3>Maintainance & support</h3>
                        <p> Our work does not end with delivery. We offer complete support and maintenance post the launch of the ERP systems to ensure their smooth functioning.</p>
                    </div>
            </div>
            <div className='card'>
                    <img src={card3} alt="" />
                    <div className='card-text'>
                        <h3>Smooth ERP Intergration</h3>
                        <p> We ensure smooth ERP integration with other business parts, including other ERPs, Salesforce, Office Suite, and IoT systems, for effective, seamless business operations.</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseCards