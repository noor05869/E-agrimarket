import React from "react";
import logo from "../assets/Group 100.png";
import Slider from "../components/Carousel";
import grp1 from "../assets/Group1.png";
import grp2 from "../assets/Group2.png";
import grp3 from "../assets/Group3.png";
import grp4 from "../assets/Group4.png";
import vector from "../assets/Vector.png";
import App from "../assets/Apps.png";
import Gplay from "../assets/Gplay.png";
import vimage from "../assets/vimage.png";


import handimage from "../assets/Wood-Hand.png";
import { Input } from "antd";
function HeroSection() {


  const { TextArea } = Input;


  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand navlogo" href="#">
          <img className="imageStylenav " src={logo} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse navlidiv"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active navli">
              <a class="nav-link navlink" href="#">
               Home{" "}
              </a>
            </li>
            <li class="nav-item navli">
              <a class="nav-link navlink" href="#">
                About Us
              </a>
            </li>
            <li class="nav-item dropdown navli">
              <a class="nav-link navlink" href="#">
                Our Services
              </a>
            </li>
            <li class="nav-item dropdown navli">
              <a class="nav-link navlink" href="#">
                Register
              </a>
            </li>
          </ul>
          {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
          <button
            class="btn btn-outline-success my-2 my-sm-0 navbutton font-bold"
            type="submit"
          >
            Contact Us
          </button>
        </div>
      </nav>
      <Slider />
      {/* <video width="80%" playsinline="true" autoplay="autoplay" muted="muted" loop="loop" type="video/mp4" src="https://agrimp-prod.s3.amazonaws.com/public/OVP_Video.mp4"></video> */}

      {/* Services */}
      <div className="servicesdiv">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="serviceHead font-bold">
              Our <span style={{ color: "#96CC5C" }}>Services</span>
            </h2>
            <p className="serp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Sed in tempus libero ornare nulla aenean vulputate
              <br /> malesuada. Massa sodales urna sapien nunc in <br />
              sem ipsum molestie diam.
            </p>
            <p className="serp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Sed in tempus libero ornare nulla aenean vulputate
            </p>
            <button className="serbtn">Learn More</button>
          </div>
          <div className="col-lg-6">
            <div className="sergroup">
              <img className="grp1img" src={grp1} />
              <div className="paradiv">
                <p className="grptext">E-Mandi</p>
                <p className="serp2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit .
                  <br />
                  Sed in tempus libero ornare
                </p>
              </div>
            </div>
            <div className="othergrp">
              <img className="grp1img" src={grp4} />
              <div className="paradiv">
                <p className="grptext">E-Mandi</p>
                <p className="serp2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit .
                  <br />
                  Sed in tempus libero ornare
                </p>
              </div>
            </div>
            <div className="othergrp">
              <img className="grp1img" src={grp2} />
              <div className="paradiv">
                <p className="grptext">E-Mandi</p>
                <p className="serp2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit .
                  <br />
                  Sed in tempus libero ornare
                </p>
              </div>
            </div>
            <div className="othergrp">
              <img className="grp1img" src={grp3} />
              <div className="paradiv">
                <p className="grptext">E-Mandi</p>
                <p className="serp2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit .
                  <br />
                  Sed in tempus libero ornare
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Products */}
      <div className="Products">
        <div className="head">
          <div className="heading">
            <h2 className="prdhead">Our Products</h2>
          </div>
          <p className="prdp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            tempus libero ornare nulla aenean <br /> vulputate malesuada. Massa
            sodales urna sapien nunc in sem ipsum molestie diam.
          </p>
        </div>
        <div className="row justify-content-end">
          <div className="mainprod  ">
            <div className="row">
              <div className="col-lg-9">
                <div className="mobilecontent ">
                  <h2 className="mobileapph">E-Agri Mobile App</h2>
                  <p className="paragra">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br /> Sed in tempus libero ornare nulla aenean vulputate{" "}
                    <br /> malesuada.Massa sodales urna sapien nunc in <br />
                    sem ipsum molestie diam.
                  </p>
                  <p className="ticksp">
                    <img className="ticksimg" src={vector} />
                    <p className="marking">Representative</p>
                  </p>
                  <p className="ticksp1">
                    <img className="ticksimg" src={vector} />
                    <p className="marking">Pharya</p>
                  </p>{" "}
                  <p className="ticksp1">
                    <img className="ticksimg" src={vector} />
                    <p className="marking">Arti</p>
                  </p>
                  <p className="ticksp1">
                    <img className="ticksimg" src={vector} />
                    <p className="marking">Seed / Fertilizers </p>
                  </p>
                  <p className="ticksp1">
                    <img className="ticksimg" src={vector} />
                    <p className="marking">Machinery</p>
                  </p>
                </div>
              </div>
              <div className="col-lg-2 playbtns">
                <img src={Gplay} />
                <img src={App} />
              </div>
            </div>

            <div className="mobilediv">
              <img className="mobileimg" src={handimage} />
            </div>
          </div>
        </div>
      </div>
      <div className="Proposition">
        <div className="head">
          <div className="heading">
            <h2 className="prdhead">Our Value Proposition</h2>
          </div>
          <p className="prdp">
            eAgriMarket help Farmers to directly market their produce to Traders
            and Agro-Industry.<br/> All immediate supply chain stages are covered by
            eAgriMarket and our partner network
          </p>
        </div>
        <div className=" vedios justify-content-center">

      {/* <video width="80%" playsinline="true" autoplay="autoplay" muted="muted" loop="loop" type="video/mp4" src="https://agrimp-prod.s3.amazonaws.com/public/OVP_Video.mp4"></video> */}
       <img className="vimage" src={vimage} />
        </div>

      </div>
      <div className="Register">
        <div className="reginner">
        <div className="head">
          <div className="heading">
            <h2 className="regcontent">Register Yourself</h2>
          </div>
          <p className="regp">
            eAgriMarket help Farmers to directly market their produce to Traders
            and Agro-Industry.<br/> All immediate supply chain stages are covered by
            eAgriMarket and our partner network
          </p>
        </div>
        <div className="regbtndiv">
<button className="regbtn">Farmer</button>
<button className="regbtn">Trader</button>

        </div>

        </div>

      </div>

      <div className="footer ">
<div   className="row  ">
  <div className="col-lg-5 ">
    <div className="footerdiv">
<img className="footerimg" src={logo} />
{/* <p>Sustainable & Smart Agriculture Trading Platform</p>  */}
<ul className="footerul">
  <li className="footerli1">About </li>
  <li className="footerli">Home </li>
  <li className="footerli">Contact Us </li>

  </ul>
  </div>
  </div>
  <div className="col-lg-7">
    <div className="footer1">
      <div className="row ">
        <div className="col-lg-5">
    <h3 className="foh">Get in touch</h3>
    <p className="fop">we have to hear from you</p>
    
    <Input  placeholder="Enter Name Here" className="nameinput1"/>
    <Input placeholder="Enter Phone Number" className="nameinput"/>

    </div>
    <div className="col-lg-5 textArea">
      <TextArea rows={5} />
      <button className="sendbtn">Send Message</button>
    </div>
    </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default HeroSection;
