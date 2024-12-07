import "./ContactUs.css"
import { FaArrowRight } from "react-icons/fa";
import React from "react";

const ContactUs = () => {
  return (
    <div className="ContactUs">
      <div className="connect-sales">
        <h1>See all that you can accomplish with Hubnex Labs</h1>
        <button className="btn-connect-sales">Connect Sales<FaArrowRight /></button>
      </div>
      <div className="contact">
        <div className="contact-text"><h1>Let's grow💪</h1>
          <h1>together with the faster ecosystem</h1>
        </div>
        <div className="contact-btn-div">
          <button className="btn-contact">Contact us <FaArrowRight /></button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs