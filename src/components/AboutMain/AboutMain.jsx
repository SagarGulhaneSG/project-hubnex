import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "./AboutMain.css";
import { useState,useEffect } from "react";

const AboutMain = () => {

    const[count,setCount]=useState(1);
    const[count2,setCount2]=useState(100);

    useEffect(()=>{
        const counter = setInterval(()=>{
            if(count < 5){
                setCount((prev)=>prev + 1 );
            }
            else{
                clearInterval(counter);
            }
        },800)
        return () => clearInterval(counter);

      

    },[count])


    useEffect(()=>{
        const counter2 = setInterval(()=>{
            if(count2 < 920){
                setCount2((prev)=> prev +1 )
            }
            else(
                clearInterval(counter2)
            )
        },10)
        return () => clearInterval(counter2);

    },[count2])



    return (
        <div className='about-main'>
            <div className="about-page-name">
                <a href="">Home</a>
                <IoIosArrowForward />
                <a href="">About Us</a>
            </div>
            <div className="main-text">
                <div className="text-contain">
                    <h1>We’re empowering businesses with the technology they need to lead change and innovate in a business landscape that waits for no one.</h1>
                </div>
                <div className="About-buttons">
                    <button className='about-btn-contact'>Contact Us <FaArrowRight /></button>
                    <button className='about-btn-join'>Join Us <FaArrowRight /></button>
                </div>
                <div className='about-ratings'>
                        <div className='companies-about'>
                            <h2><span>{count}</span><span>,</span><span>{count2}</span><span>+</span></h2>
                            <p className="about-text">Companies are using & it’s growing everyday</p>
                        </div>
                        <div className='rating-about'>
                            <h2>4.5/5 <FaStar className='star' /><FaStar className='star' /><FaStar className='star' /><FaStar className='star' /><FaStar className='star' /></h2>
                            <p className="about-text">Trusted by the top companies worldwide</p>
                        </div>
                </div>
            </div>

        </div>
    )
}

export default AboutMain