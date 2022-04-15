/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/



import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import Form from "./pages/form";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import OTP from "./pages/OTP";
import LandingPage from "./pages/LandingPage";
import ThankyouPage from "./pages/ThankyouPage";
import ContactForm from "./pages/Contact.js";
import ContactSubmissiom from "./pages/ContactSubmission";
import HeroSection from "./pages/HeroSection";


function App() {



  return (
    
     <>
     {/* <OTP/> */}
     <Router>
     <Routes>
          
         
            
         
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/farmerdata" element={<Form/>}/>
          <Route path="/thankyou" element={<ThankyouPage/>}/>
          <Route path="/contactUs" element={<ContactForm/>}/>
          <Route path="/contactSubmission" element={<ContactSubmissiom/>}/>
          <Route path="/home" element={<HeroSection/>}/>






            
          
        </Routes>
         </Router>
  </>
  );
}

export default App;
