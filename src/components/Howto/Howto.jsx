import './Howto.css';
import { MdDoubleArrow } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaFolderOpen } from "react-icons/fa6";
import { FaCheckDouble } from "react-icons/fa";
import React from "react";

const Howto = () => {
    return (
        <div className='Howto'>
            <div className="cards-how">
                <h1>How to get boards with us</h1>
                <div className="cards-in">
                    <div className="card1">
                         <MdDoubleArrow className='icon' />
                        <FaPencil  className='icon'/>
                        <p className='step1'>Step 1</p>
                        <h3>Free sign-up</h3>
                        <p className='card-text'>Register on our Partner Dashboard and have your contact details verified instantly.</p>
                    </div>
                    <div className="card1">
                         <MdDoubleArrow className='icon' />
                        <CgProfile   className='icon'/>
                        <p className='step1'>Step 2</p>
                        <h3>Profile setup</h3>
                        <p className='card-text'>Access your personalised dashboard to complete your profile.</p>
                    </div>
                    <div className="card1">
                         <MdDoubleArrow className='icon' />
                        <FaFolderOpen   className='icon'/>
                        <p className='step1'>Step 3</p>
                        <h3>Showcase your work</h3>
                        <p className='card-text'>Upload your portfolio and past work examples to attract clients to your profile.</p>
                    </div>
                    <div className="card1">
                         <MdDoubleArrow className='icon' />
                        <FaCheckDouble  className='icon'/>
                        <p className='step1'>Step 4</p>
                        <h3>Start Working</h3>
                        <p className='card-text'>Get verified by our team and easily manage your work through our Partner Dashboard.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Howto