
import './MainSection.css'
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import banner from "../../assets/mainImg.png"
import { useEffect, useState } from 'react';
import React from "react";




const MainSection = () => {

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
        <div className='main'>
            <div className="page-name">
                <a href="">Home </a>
                <IoIosArrowForward />
                <a href="">Partners</a>
            </div>
            <div className="text-img">
                <div className="text">
                <h1>Join Your Partner Network </h1>
                    <p>Clarity gives you the blocks & components you need to create a truly professional website, landing page, or admin panel for your SaaS.Clarity gives you the blocks & components you need. Clarity gives you the blocks.</p>
                    <div className="buttons">
                        <button className='btn-contact'>Contact Us <FaArrowRight /></button>
                        <button className='btn-join'>Join Us <FaArrowRight /></button>
                    </div>
                    <div className='company-ratings'>
                        <div className='companies'>
                            <h2><span>{count}</span><span>,</span><span>{count2}</span><span>+</span></h2>
                            <p>Companies are using & it’s growing everyday</p>
                        </div>
                        <div className='rating'>
                            <h2>4.5/5 <FaStar className='star' /><FaStar className='star' /><FaStar className='star' /><FaStar className='star' /><FaStar className='star' /></h2>
                            <p>Trusted by the top companies worldwide</p>
                        </div>
                    </div>
                </div>
                <div className="image">
                        <img src={banner} alt="" />
                </div>
            </div>
           
           
        </div>
    )
}

export default MainSection