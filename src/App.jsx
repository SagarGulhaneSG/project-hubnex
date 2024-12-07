import AboutUs from "./Pages/About Us/AboutUs"
import Partners from "./Pages/Partners/Partners"
import { Routes,Route } from "react-router-dom"



const App = () => {
  return (
   <Routes>
    
     <Route path="/" element={<Partners/>}/>
   
     <Route path="/about" element={<AboutUs/>}/>
    
     
   </Routes>
     
   
  )
}

export default App