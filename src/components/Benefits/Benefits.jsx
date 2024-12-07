import React from "react";
import './Benefits.css';
import cardimg from '../../assets/benefits-card-img.png';
import card1 from "../../assets/benefit-card-1.png";
import card2 from "../../assets/benefit-card-2.png";
import blogcard from "../../assets/blog1.svg";
import card3 from "../../assets/benefit-card-3.png";
import satisfaction from "../../assets/satisfaction.svg";
import card4 from "../../assets/benefit-card-4.png";
import card5 from '../../assets/benefit-card-5.png';


const Benefits = () => {
  return (
    <>
     <h1 className='text-center'>Benefits to Join Hubnex Labs</h1>
     <div className="benefits">
       
        <div className="-benefit-cards">
            
            <div className='card-benefit'>  
                    <img className='mainImg' src={cardimg} alt="" />
                    <div className='card-text'>
                        <img className='card-icon' src={card1} alt="" />
                        <h3>On Time Delivery</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
            </div>
            
        </div>
        <div className="benefit-card">
            <div className='small-card'>
                <img className='card-icon' src={card2} alt="" />
                <h3>Dedicated Project Manager</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="card-big">
                <img className='img-big' src={blogcard} alt="" />
               <div className='big-card-img'>
                <img  src={card3} alt="" />
                <h3>24x7 round the clock support</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div> 
            </div>
        </div>
        <div className="benefit-card">
        <div className="card-big">
                <img className='img-stisfaction' src={satisfaction} alt="" />
               <div className='big-card-img'>
                <img  src={card4} alt="" />
                <h3>100% customer satisfaction</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div> 
            </div>
            <div className='small-card'>
                <img className='card-icon' src={card5} alt="" />
                <h3>Escrow account keeping your money safe</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
           
        </div>
    </div>
    </>
   
  )
}

export default Benefits