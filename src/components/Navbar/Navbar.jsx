import './Navbar.css'
import arrow from "../../assets/arrow.svg"
import logo from "../../assets/hubnex.svg"
import downarrow from "../../assets/downarrow.svg"
import { Link } from 'react-router-dom';
import React from "react";

const Navbar = () => {
    return (
        <div className='nav'>
            <div className="nav-top">
                <a href=""><p>Jobpreneur</p> <img src={arrow} alt="" /></a>
                <a href=""><p>Skillup</p> <img src={arrow} alt="" /></a>
                <a href=""><p>TechFund</p> <img src={arrow} alt="" /></a>
            </div>
            <div className="nav-bottom">
                <div className='logo-hubnex'>
                    <img src={logo} alt="" />
                </div>
                <div className='nav-list'>
                        <ul>
                        <li>Explore Services <img src={downarrow} alt="" /></li>
                        <li>Resources <img src={downarrow} alt="" /></li>
                        <li>Comunnity <img src={downarrow} alt="" /></li>
                        <Link to={"/about"} className='nav-link'><li>About</li></Link>
                        </ul>
                </div>
                <div className="nav-buttons">
                    <button className='btn-white'>Login</button>
                    <button className='btn-blue'>Connect Sales &rarr;</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar