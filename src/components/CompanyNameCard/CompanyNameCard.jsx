import "./CompanyNameCard.css";
import slackdarkimg from "../../assets/slack-dark.png";
import { MdOutlineDoubleArrow } from "react-icons/md";
import React from "react";

const CompanyNameCard = () => {
  return (
    <div className="CompanyNameCard">
        <div className="company-card">
            <div className="contain">
                <div className="logo">
                    <img src={slackdarkimg} alt="" />
                </div>
                <div className="cardtext">
                        <h1>Company Name</h1>
                        <h3>Company Location</h3>
                        <span>Specialised</span>
                        <p>We proudly offer exclusive benefits to our partners who have consistently shown trust in our platform. </p>
                </div>
            </div>
            <p className="text-two">A trusted Software Development Company, delivering forward-thinking mobile, web, and app solutions. With 10+ years' experience and 700+ projects completed, their team of 50+ developers prioritize innovation and transparent communication for profitable outcomes.</p>
            <div className="small">
                <div className="special">
                    <h4>Specialized</h4>
                    <p>2013</p>
                </div>
                <div className="special">
                  <h4>Team Size</h4>
                  <p>59</p>
                </div>
                <div className="special">
                <h4>Business Impact</h4>
                <p>30% growth in annual revenue</p>    
                </div>
            </div>
            <p className="journey"> Journey</p>
            <div className="journey-section">
                <h4 className="flex-col"><span className="dark">Sept, 2021</span> Onboarded on our Platform</h4>
                <MdOutlineDoubleArrow className="icon-size" />
                <h4 className="flex-col"><span className="dark">Oct, 2021</span> First project closed</h4>
                <MdOutlineDoubleArrow className="icon-size" />
                <h4 className="flex-col"><span className="dark">June, 2022</span> First project delivered</h4>
                <MdOutlineDoubleArrow className="icon-size" />
                <h4 className="flex-col"><span className="dark">Feb, 2024</span> 7 projects delivered so far</h4>
            </div>
        </div>
    </div>
  )
}

export default CompanyNameCard