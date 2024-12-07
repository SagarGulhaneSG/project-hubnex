import Blogs from "../../components/Blogs-card/Blogs";
import CheckNow from "../../components/CheckNow/CheckNow";
import ChooseCards from "../../components/Choose-Cards/Choose-Cards";
import CompanyNameCard from "../../components/CompanyNameCard/CompanyNameCard";
import ContactUs from "../../components/Contact/ContactUs";
import Footer from "../../components/Footer/Footer";
import GlobeSection from "../../components/GlobeSection/GlobeSection";
import Howto from "../../components/Howto/Howto";
import JoinProgram from "../../components/JoinProgram/JoinProgram";
import MainSection from "../../components/Main-Section/MainSection"
import Navbar from "../../components/Navbar/Navbar"
import Slider from '../../components/Silder/Slider';
import React from "react";

const Partners = () => {
  return (
    <>
    <Navbar/>
     <MainSection/>
     <Slider/>
     <ChooseCards/>
     <GlobeSection/>
     <Howto/>
     <JoinProgram/>
     <CompanyNameCard/>
     <CheckNow/>
     <Blogs/>
     <ContactUs/>
     <Footer/>
    </>
  )
}

export default Partners