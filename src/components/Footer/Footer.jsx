import './Footer.css';
import logo from "../../assets/hubnex.svg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import React from "react";

const Footer = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
  return (
    <>
    <div className='footer'>
        <div className='footer-left'>
            <div className="hubnex-logo">
                <img src={logo} alt="" />
                <div>
                    <h1>Hubnex</h1>
                    <h2>Labs</h2>
                </div>
            </div>
            <h3>About Hubnex Labs</h3>
            <p>We are a leading IT consultancy with expertise in innovative solutions for modern challenges. Our client-centric approach enables us to design tailored solutions that keep businesses ahead in the ever-evolving digital landscape. </p>
            <div className='social-media'>
            <FaTwitter  className='social-icon'/>
            <FaFacebookF className='social-icon' />
            <FaInstagram className='social-icon'/>
            <FaGithub className='social-icon'/>
            </div>
        </div>
        <div className='footer-right'>
            <ul>
                <li>Company</li>
                <li>Help</li>
                <li>Resources</li>
                <li><Link to="/about">About</Link>  </li>       
                <li>Grievance Redressal policy</li>
                <li>Insights</li>
                <li>Services</li>
                <li>Community</li>
                <li>Blogs</li>
                <li>Careers</li>
                <li>Terms & Conditions</li>
                <li>Case Studies</li>
                <li><Link to="/partners">For Partners</Link></li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        
    </div>
    <div className="copyright">
     &copy;Copyright 2024, All Rights Reserved by Hubnex Labs
    </div>
    </>

  )
}

export default Footer