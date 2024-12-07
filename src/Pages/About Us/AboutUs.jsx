import Navbar from "../../components/Navbar/Navbar";
import GlobeSection from "../../components/GlobeSection/GlobeSection";
import AboutMain from "../../components/AboutMain/AboutMain";
import Benefits from "../../components/Benefits/Benefits";
import Location from "../../components/Location/Location";
import Leaders from "../../components/Leaders/Leaders";
import Driving from "../../components/DrivingResults/Driving";
import CheckNow from "../../components/CheckNow/CheckNow";
import ContactUs from "../../components/Contact/ContactUs";
import Footer from "../../components/Footer/Footer";

const AboutUs = () => {
  return (
   <>
    <Navbar/>
    <AboutMain/>
    <GlobeSection/>
    <Benefits/>
    <Location/>
    <Leaders/>
    <Driving/>
    <CheckNow/>
    <ContactUs/>
    <Footer/>
   </>
  )
}

export default AboutUs