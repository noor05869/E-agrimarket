import React, { useEffect } from "react";
import logo from "../assets/LogoH.png";
import logo3 from "../assets/LogoHeader.png";
import Final from "../assets/Final.gif";


import Slider from "../components/Carousel";
import grp1 from "../assets/Group1.png";
import grp2 from "../assets/Group2.png";
import grp3 from "../assets/Group3.png";
import grp4 from "../assets/Group4.png";
import vector from "../assets/Vector.png";
import App from "../assets/Apps.png";

import Gplay from "../assets/Gplay.png";
import vimage from "../assets/vimage.png";
import { useState } from "react";
import handimage from "../assets/Wood-Hand.png";
import { Input, Form, Button } from "antd";
import { message } from "antd";
import vedio from "../assets/vedios.mp4";
import * as api from "../api/api";
import useApi from "../Hooks/useApi";

import { Navigate, useNavigate } from "react-router-dom";
import FormItem from "antd/lib/form/FormItem";
import { CaretUpOutlined, FacebookFilled, InstagramFilled, LinkedinFilled } from "@ant-design/icons";
function HeroSection() {
  const { TextArea } = Input;
  const navigate = useNavigate();
  const [initialvalues, setinitialvalues] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const { error, request } = useApi(api.postContact);

  const handleChange = (e) => {
    const { value, name, id } = e.target;
    console.log(e.target.value);
    setinitialvalues({ ...initialvalues, [name]: value });
  };
  async function handleSubmit(values) {
    console.log("submit", values);
    // setloading(true);
    try {
      const { data } = await request(values);
      console.log("ressssssss", data);
      message.success({
        content: "Form Submit succsessfully",
        className: "custom-class",
        style: {
          marginTop: "74vh",
        },
      });
      // navigate("/contactSubmission");
    } catch {}

    // setloading(false);
  }
  const [showButton, setShowButton] = useState(false);
  const [shownav, setShownav] = useState(false);


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
setShownav(true)
      } else {
        setShowButton(false);
        setShownav(false)
      }
    });
    
  }, []);
  function handlefarmer() {
    navigate("/farmerdata");
  }
  function handleTrader() {
    navigate("/Trader");
  }
  function handlescroll() {
    window.scrollTo(0, 0);
  }
  return (
    <div>
      {showButton && (
        <div className="setting-drwer" onClick={handlescroll}>
          {/* {setting} */}
          <CaretUpOutlined className="hypericon" />
        </div>
      )}
       <header id="header" class={`fixed-top header-scrolled ${shownav&&"headerafter"}`}>
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand navlogo" >
        <img className="footerimg"   src={logo3}  />
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
          <span></span>
          <span></span>
        </button>
        </a>
       

        <div
          class="collapse navbar-collapse navlidiv "
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active navli">
              <a class="nav-link navlink" href="#">
                Home{" "}
              </a>
            </li>
            <li class="nav-item dropdown navli">
              <a class="nav-link navlink" href="#ourServices">
                Our Services
              </a>
            </li>
            <li class="nav-item navli">
              <a class="nav-link navlink" href="#Products">
                About Us
              </a>
            </li>
            
            <li class="nav-item dropdown navli">
            <a class="nav-link navlink dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Register
          </a>
          <ul class="dropdown-menu" aria-labelledby="">
            <li><a class="dropdown-item" href="/Farmerdata">Farmer</a></li>
            <li><a class="dropdown-item" href="/Trader">Trader</a></li>
          
          </ul>
            </li>
            <li class="nav-item dropdown navli ">
              <a
                onClick={() => {
                  navigate("./contactUs");
                }}
                class="nav-link navlink "
                href="#Contact"
              >
                Contact us
              </a>
            </li>
          
          </ul>
        
        </div>
      </nav></header>
      {/* <header id="header" class="fixed-top header-scrolled">
        <div class="container d-flex align-items-center">
         
          <nav id="navbar" class="navbar navbar-expand-lg navbar-light ">
            <a class="navbar-brand navlogo" href="#">
          <img className="footerimg  "  src={logo3}  />
        </a>{" "}
              
         
          <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
          <span></span>
          <span></span>
        </button>

        <div
          class="collapse navbar-collapse  "
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
              <li class="nav-item dropdown navli ">
                <a 
                  onClick={() => {
                    navigate("./contactUs");
                  }}
                  class="nav-link navlink "
                  href="#"
                >
                  Contact us
                </a>
              </li>
         
            </ul>{" "}
        </div>
          </nav>
        </div>
      </header> */}
      <Slider />
      {/* <video width="80%" playsinline="true" autoplay="autoplay" muted="muted" loop="loop" type="video/mp4" src="https://agrimp-prod.s3.amazonaws.com/public/OVP_Video.mp4"></video> */}

      {/* Services */}
      {/* <div  className="container-fluid" > */}
      <div className="servicesdiv  p-3 p-md-4 p-lg-5" id="ourServices">
        <div className="row justify-content-center">
          <div className="col-md-6 sercol">
            <div className="row serow justify-content-center">
              <div className="col-lg-4 col-sm-4 flexcenter ">
            <h2 className="serviceHead font-bold Headings ">Our Services</h2></div>
            <div className="flexcenter">
            <p className="serp col-lg-11  disText ">
              eAgriMarket is smart trading platform for all Agriculture
              stakeholders. 
              We empower farmers with technology and provide all Agri
              stakeholders a platform for trading.
            </p></div>
            {/* <button className="serbtn">Learn More</button> */}
            </div>
           
         
           
          </div>
          <div className="col-md-6 mt-3 mt-md-0">
            <div className="d-flex">
              <img className="grp1img" src={grp1} />
              {/* <img className="grp1img" src={grp4} /> */}

              <div className="paradiv">
                <p className="grptext ms-3 ms-md-4 Headings ">E-Mandi</p>
                <p className="serp2 ms-3 ms-md-4 disText" >
                  Platform for Sale and Purchase of Agri commodities
                </p>
              </div>
            </div>
            <div className="othergrp">
              <img className="grp1img" src={grp2} />
              {/* <img className="grp1img" src={grp4} /> */}
              <div className="paradiv">
                <p className="grptext  ms-3 ms-md-4 Headings">Input Marketplace</p>
                <p className="serp2 ms-3 ms-md-4 disText">
                  Online marketplace for Agro Chemicals and Fertilizers
                  {/* <br />
                  Sed in tempus libero ornare */}
                </p>
              </div>
            </div>
            <div className="othergrp">
              <img className="grp1img" src={grp3} />
              {/* <img className="grp1img" src={grp2} /> */}
              <div className="paradiv">
                <p className="grptext  ms-3 ms-md-4 Headings">Machinery Marketplace</p>
                <p className="serp2 ms-3 ms-md-4 disText">
                  Online Marketplace for Agri Machinery and Tools
                  {/* <br />
                  Sed in tempus libero ornare */}
                </p>
              </div>
            </div>
            <div className="othergrp">
              <img className="grp1img" src={grp4} />

              <div className="paradiv">
                <p className="grptext  ms-3 ms-md-4 Headings">Crop Advisory</p>
                <p className="serp2 ms-3 ms-md-4 disText">
                  Expert Agri advisory services for Farmers
                  {/* <br />
                  Sed in tempus libero ornare */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* Products */}
      <div className="Products p-3 p-md-4 p-lg-5" id="Products">
        <div className="head">
          <div className="heading">
            <h2 className="prdhead Headings">Our Products</h2>
          </div>
          <p className="prdp  mb-3 mb-md-4 mb-lg-5 disText">
            Online Trading and Information platform for all Agriculture
            stakeholders. Get market insights of all Agri products across
            country and trade with ease by exploring your desired product on our
            platform.
          </p>
        </div>
        <div className="row justify-content-end">
          <div className="mainprod ">
            <div style={{ display: "grid" }} className="row">
              <div className="col-lg-9">
                <div className="mobilecontent p-3 p-md-4 p-lg-3   ">
                  <h2 className="mobileapph flexcenter Headings">E-Agri Mobile App</h2>
                  <p className="paragra disText">
                    Online Trading and Information platform for all Agriculture
                    stakeholders. Get market insights of all Agri products
                    across country and trade with ease by exploring your desired
                    product on our platform.
                  </p>
                  <div className="markkk">
                    <div>
                      <p className="ticksp">
                        <img className="ticksimg" src={vector} />
                        <p className="marking disText">e-Mandi</p>
                      </p>
                      <p className="ticksp1">
                        <img className="ticksimg" src={vector} />
                        <p className="marking disText">Farmers Portal </p>
                      </p>{" "}
                      <p className="ticksp1">
                        <img className="ticksimg" src={vector} />
                        <p className="marking disText">Input Marketplace </p>
                      </p>
                    </div>
                    <div className="mark2">
                      <p className="ticksp2">
                        <img className="ticksimg" src={vector} />
                        <p className="marking disText">Machinery Marketplace </p>
                      </p>
                      <p className="ticksp2">
                        <img className="ticksimg" src={vector} />
                        <p className="marking disText"> Advisory Portal</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-lg-3 col-xl-2 col-sm-4 col-md-2 playbtns p-3 p-md-4   ">
                <img className="playimg " src={Gplay} width="100%" height="100%" />
                <img className="playimg" src={App} width="100%" />
              </div>
            </div>

            <div className="mobilediv">
              <img className="mobileimg"  src={handimage} />
            </div>
          </div>
        </div>
      </div>
      <div className="Proposition">
        <div className="head">
          <div className="heading">
            <h2 className="prdhead Headings">Our Value Proposition</h2>
          </div>
          <p className="prdp disText">
            eAgriMarket help Farmers to directly market their produce to Traders
            and Agro-Industry. <br />
            All immediate supply chain stages are covered by eAgriMarket and our
            partner network.
          </p>
        </div>
        <div className="container vediocontainer">
        <div className=" vedios  justify-content-center">
          {/* <video
            className="vedios"
            width="80%"
            playsinline="true"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
            type="video/mp4"
            src={vedio}
          ></video> */}
          <img src={Final} className="gif" alt="...loading"   />
          {/* <img className="vimage" src={vimage} /> */}
        </div></div>
      </div>
      <div className="Register " id="Register">
        <div className="reginner p-2 p-md-4 p-lg-3">
          <div className="head">
            <div className="heading">
              <h2 className="regcontent Headings">Register Yourself</h2>
            </div>
            <p className="regp disText">
              eAgriMarket help Farmers to directly market their produce to
              Traders and Agro-Industry.
              <br /> All immediate supply chain stages are covered by
              eAgriMarket and our partner network
            </p>
          </div>
          <div className="regbtndiv ">
            <button className="regbtn">
              <a className="farmera" href="/farmerdata">
                {" "}
                Farmer
              </a>
            </button>
            <button className="regbtn ">
              <a className="farmera" href="/Trader">
                {" "}
                Trader
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* <div className="footer p-3 p-md-4 p-lg-5 ">
        <div className="row  ">
          <div className="col-lg-5 ">
            <div className="footerdiv row justify-content-center">
              <img className="footerimg col-7 col-md-5 " src={logo} />
              <ul className="footerul col-lg-6  p-3">
                <li className="footerli1">Home </li>
                <li className="footerli">About Us </li>
                <li className="footerli">Our Services </li>
                <li className="footerli">Register </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7">
            <Form onFinish={handleSubmit}>
              <div className="footer1">
                <div className="row justify-content-center">
                  <div className="col-lg-5">
                    <div className="footerin">
                      <h3 className="foh">Get in touch</h3>
                      <p className="fop">we have to hear from you</p>
                    </div>
                    <FormItem
                      name="name"
                      rules={
                        !initialvalues.name
                          ? [
                              {
                                required: true,
                                message: "Please Fill",
                              },
                            ]
                          : ""
                      }
                      className="formitem"
                    >
                      <Input
                        //  className="contact"

                        onChange={handleChange}
                        id="name"
                        type="text"
                        value={initialvalues.name}
                        placeholder="Enter Name Here"
                        className="nameinput1"
                      />
                    </FormItem>
                    <FormItem
                      name="contact"
                      rules={
                        !initialvalues.contact
                          ? [
                              {
                                required: true,
                                message: "Please Fill",
                              },
                            ]
                          : ""
                      }
                    >
                      <Input
                        id="fname"
                        onChange={handleChange}
                        name="contact"
                        maxLength="11"
                        minLength="11"
                        placeholder="03xx-0000000"
                        className="nameinput"
                      />
                    </FormItem>
                  </div>
                  <div className="col-lg-5 textArea">
                    <FormItem
                      name="message"
                      rules={
                        !initialvalues.message
                          ? [
                              {
                                required: true,
                                message: "Please Fill",
                              },
                            ]
                          : ""
                      }
                    >
                      <TextArea
                        rows={5}
                        name="message"
                        onChange={handleChange}
                      />
                    </FormItem>
                    <Button
                      htmlType="submit"
                      type="primary"
                      // onClick={handleSubmit}
                      className="sendbtn"
                    >
                      Send Message
                    </Button>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div> */}
      <div class="footer-top" id="Contact">
        <div class="container">
          <Form onFinish={handleSubmit}>
          <div class="row">
            <div class="col-lg-3 col-md-6  footer-contact footermargin">
              <img className="footerimg  "  src={logo} width="96%" />

              <p className="footerp disText">
                Sustainable & Smart Agriculture Trading Platform
               Empowering Farmers with Technology
            
                Making Farm to Fork a Reality</p>
                <div class="credits flexcenter">
          {" "}
        <a className="footericon" href="https://www.facebook.com/eagrimart"> <FacebookFilled className="footericon"   /></a>
        <a className="footericon" href="https://www.instagram.com/eagrimart/"> <InstagramFilled /></a> 
        <a className="footericon" href="https://www.linkedin.com/company/eagrimarket/">  <LinkedinFilled /></a> 
        </div>
            </div>
            <div class="col-lg-3 col-md-6 footer-links footermargin">
              {/* <h4 className="footerh4">Useful Links</h4> */}
              <ul className="footerUl ">
                <li className="footerLi">
                  <i class="bx bx-chevron-right footeri"></i>{" "}
                  <a className="footera disText" href="#">
                    Home
                  </a>
                </li>
                <li className="footerLi">
                  <i class="bx bx-chevron-right footeri"></i>{" "}
                  <a className="footera disText" href="#Products">
                    About Us
                  </a>
                </li>
                <li className="footerLi">
                  <i class="bx bx-chevron-right footeri"></i>{" "}
                  <a className="footera disText" href="#ourServices">
                    Our Services
                  </a>
                </li>
                <li className="footerLi">
                  <i class="bx bx-chevron-right footeri"></i>{" "}
                  <a className="footera disText" href="#Register">
                    Register
                  </a>
                </li>
                <li className="footerLi">
                  <i class="bx bx-chevron-right footeri"></i>{" "}
                  <a className="footera disText" href="/contactUs">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          
            <div class="col-lg-5 col-md-6 footer-links footermargin  ">
            <div className="footerin ">
                <h3 className="foh">Get in touch</h3>
                <p className="fop">We Love to hear from you</p>
              </div>
              <div className=" row d-flex">
                <div className="col-lg-6">
              <FormItem
                name="name"
                rules={
                  !initialvalues.name
                    ? [
                        {
                          required: true,
                          message: "Please Fill",
                        },
                      ]
                    : ""
                }
                className="formitem"
              >
                <Input
                  //  className="contact"

                  onChange={handleChange}
                  id="name"
                  type="text"
                  value={initialvalues.name}
                  placeholder="Enter Name Here"
                  className="nameinput1"
                />
              </FormItem></div>
              <div className="col-lg-6">  <FormItem
                name="contact"
                rules={
                  !initialvalues.contact
                    ? [
                        {
                          required: true,
                          message: "Please Fill",
                        },
                      ]
                    : ""
                }
              >
                <Input
                  id="fname"
                  //   value={fname}
                  onChange={handleChange}
                  name="contact"
                  maxLength="11"
                  minLength="11"
                  placeholder="03xx-0000000"
                  // placeholder="Enter Phone Number"
                  className="nameinput"
                />
              </FormItem></div></div>
              <div className="row">
                <div className="col-lg-9">
              <FormItem
                name="message"
                rules={
                  !initialvalues.message
                    ? [
                        {
                          required: true,
                          message: "Please Fill",
                        },
                      ]
                    : ""
                }
              >
                <TextArea className="" rows={3} name="message" onChange={handleChange} />
              </FormItem></div>
              {/* <div class="col-lg-1 col-md-6 footer-links textArea "> */}
             
          <div className="col-lg-3 col-sm-6">
              
             <Button
               htmlType="submit"
               type="primary"
               // onClick={handleSubmit}
               className="sendbtn"
             >
               Send Message
             </Button>
             </div>
             </div>
           {/* </div> */}
     </div>
            </div>
            
           
          
          </Form>
        </div>
      </div>
      <div class="container-fluid footer-bottom clearfix">
        <div className="container footerlastdiv">
        <div class="copyright">
          {" "}
          © Copyright  2022,{" "}
          <strong>
            <span>e-Agri Market</span>
          </strong>
          . All Rights Reserved
        </div>
       
      </div>
      </div>
    </div>
  );
}

export default HeroSection;
