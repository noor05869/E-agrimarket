import React, { useEffect, useRef } from "react";
import logo from "../assets/LogoH.png";
import logo3 from "../assets/LogoHeader.png";
import Final from "../assets/Final.gif";

import Slider from "../components/Carousel";
import grp1 from "../assets/Group1.png";
import grplast from "../assets/Group 83.png";

import grp2 from "../assets/Group2.png";
import grp3 from "../assets/Group3.png";
import grp4 from "../assets/Group4.png";
import vector from "../assets/Vector.png";
import frame from "../assets/Frame.png";
import vedio from "../assets/vedios.wmv";

import App from "../assets/Apps.png";

import Gplay from "../assets/Gplay.png";
import { useState } from "react";
import handimage from "../assets/Wood-Hand.png";
import { Input, Form, Button } from "antd";
import { message } from "antd";
import * as api from "../api/api";
import useApi from "../Hooks/useApi";

import { Navigate, useNavigate } from "react-router-dom";
import FormItem from "antd/lib/form/FormItem";
import {
  CaretUpOutlined,
  EnvironmentFilled,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  MessageFilled,
  PhoneFilled,
} from "@ant-design/icons";
function HeroSection() {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const navigate = useNavigate();
  const [initialvalues, setinitialvalues] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const { error, request } = useApi(api.postContact);
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  const handleChange = (e) => {
    const { value, name, id } = e.target;
    console.log(e.target.value);
    setinitialvalues({ ...initialvalues, [name]: value });
  };
  async function handleSubmit(values) {
    console.log("submit", values);
    // setloading(true);
    try {
      const { data } = await request(initialvalues);
      console.log("ressssssss", data);
      setinitialvalues({ name: "", contact: "", message: "" });
      // form.setFieldsValue({ name: "", contact: "", message: "" };
      message.success({
        content: "Form Submit succsessfully",
        className: "custom-class",
        style: {
          marginTop: "74vh",
        },
      });
      form.resetFields();
      // navigate("/contactSubmission");
      console.log("afterfffff", initialvalues);
    } catch {}

    // setloading(false);
  }
  useEffect(() => {}, [initialvalues]);

  const [showButton, setShowButton] = useState(false);
  const [shownav, setShownav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
        setShownav(true);
      } else {
        setShowButton(false);
        setShownav(false);
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
      <header
        id="header"
        class={` header-scrolled ${shownav && "headerafter"}`}
      >
        <div className="row">
          <div className="col-11 mx-auto">
            <nav class="navbar navbar-expand-lg navbar-light">
              <a class="navbar-brand navlogo">
                <img className="footerimg" src={logo3} />
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
                <ul class="navbar-nav mr-auto w-100  navwidth justify-content-between align-items-center ">
                  <li class="nav-item active navli">
                    <a class="nav-link navlink" href="#">
                      HOME
                    </a>
                  </li>
                  <li class="nav-item dropdown navli">
                    <a class="nav-link navlink" href="#ourServices">
                      OUR SERVICES
                    </a>
                  </li>
                  <li class="nav-item navli">
                    <a class="nav-link navlink" href="#Products">
                      ABOUT US
                    </a>
                  </li>

                  <li class="nav-item dropdown navli">
                    <a
                      class="nav-link navlink dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      REGISTER
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="">
                      <li className="">
                        <a class="dropdown-item regli" href="/Farmerdata">
                          FARMER
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item regli" href="/Trader">
                          TRADER
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <li class="nav-item dropdown navli ">
                    <a
                      onClick={() => {
                        navigate("./contactUs");
                      }}
                      class="nav-link navlink "
                      href="#Contact"
                    >
                      CONTACT US
                    </a>
                  </li> */}
                  <li class="nav-item dropdown navli ">
                    <a href="#Getin" className="getin">
                      Get in touch
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <Slider executeScroll={executeScroll} />
      {/* <video width="80%" playsinline="true" autoplay="autoplay" muted="muted" loop="loop" type="video/mp4" src="https://agrimp-prod.s3.amazonaws.com/public/OVP_Video.mp4"></video> */}

      {/* Services */}
      {/* <div  className="container-fluid" > */}
      <div style={{ background: "white" }}>
        <div className="servicesdiv  p-3 p-md-4 p-lg-5" id="ourServices">
          <div className=" serow justify-content-center">
            <div className="flexcenter mb-5 ">
              <h2 className="serviceHead font-bold Headings">Our Services</h2>
              <p className="serp  disText mb-0 fs-20 ">
                eAgriMarket is smart trading platform for all Agriculture
                stakeholders. We empower <br />
                farmers with technology and provide all Agri stakeholders a
                platform for trading.
              </p>
            </div>

            {/* <button className="serbtn">Learn More</button> */}
          </div>
          <div className="row  justify-content-center">
            <div className="col-md-3 col-lg-2 mb-5">
              <div className="servicescards px-3 h-100 ">
                <div className="mx-auto img">
                  <img className="sericon" src={grp1} />
                </div>
                <div className="h-100">
                  <h5>E-mandi</h5>
                  <p className="np my-4">
                    Platform for Sale and Purchase of Agri commodities
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-2 mb-5">
              <div className="servicescards px-3 h-100 ">
                <div className="mx-auto img">
                  <img className="sericon" src={grp2} />
                </div>
                <div className="h-100">
                  <h5>Input Marketplace </h5>
                  <p className="np my-4">
                    Online marketplace for Agro Chemicals and Fertilizers
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="   col-md-3 col-lg-2 mb-5">
              <div className="servicescards px-3 h-100 ">
                <div className="mx-auto img">
                  <img className="sericon" src={grp3} />
                </div>
                <div className="h-100">
                  <h5>Machinery Marketplace</h5>
                  <p className="np my-4">
                    Online Marketplace for Agri Machinery and Tools
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-2 mb-5">
              <div className="servicescards px-3 h-100 ">
                <div className="mx-auto img">
                  <img className="sericon" src={grp4} />
                </div>
                <div className="h-100">
                  <h5>Crop Advisory</h5>
                  <p className="np my-4">
                    Expert Agri advisory services for Farmers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* Products */}
      <div className="Products p-3 p-md-4 p-lg-5 " id="Products">
        <div className="head">
          <div className="heading ">
            <h2 className="prdhead Headings flexcenter">
              Our Products
              <hr className="spline mt-lg-3"></hr>
            </h2>
          </div>
          <p className="prdp  mb-3 mb-md-4 mb-lg-5 disText">
            Online Trading and Information platform for all Agriculture
            stakeholders. Get market insights of all <br /> Agri products across
            country and trade with ease by exploring your desired product on our
            platform.
          </p>
        </div>
        <div className="row ">
          <div className=" ">
            <div className="row d-flex justify-content-around">
              <div className="col-lg-5 col-md-5 ">
                <div className="mobilecontent p-3 p-md-4 p-lg-3   ">
                  <h2 className="mobileapph  Headings">E-Agri Mobile App</h2>
                  {/* <p className="paragra disText ">
                    Online Trading and Information platform for all Agriculture
                    stakeholders. Get market insights of all Agri products
                    across country and trade with ease by exploring your desired
                    product on our platform.
                  </p> */}
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
                      <p className="ticksp1">
                        <img className="ticksimg" src={vector} />
                        <p className="marking disText">
                          Machinery Marketplace{" "}
                        </p>
                      </p>
                      <p className="ticksp1">
                        <img className="ticksimg" src={vector} />
                        <p className="marking disText"> Advisory Portal</p>
                      </p>
                      <div className="tickspimages mt-5">
                        {" "}
                        <img
                          className="playimg p-lg-2 "
                          src={Gplay}
                          width="90%"
                        />
                        <img className="playimg p-lg-2" src={App} width="80%" />{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-3">
                <img className="mobileimage" height="90%" src={handimage} />
              </div>
              {/* <div className=" col-lg-3 col-xl-2 col-sm-4 col-md-2 playbtns p-3 p-md-4   ">
                <img
                  className="playimg "
                  src={Gplay}
                  width="100%"
                  height="100%"
                />
                <img className="playimg" src={App} width="100%" />
              </div> */}
            </div>
            {/* 
            <div className="mobilediv">
              <img className="mobileimg" src={handimage} />
            </div> */}
          </div>
        </div>
      </div>
      <div className="py-3 py-lg-4 Proposition">
        <div className="head">
          <div className="heading">
            <h2 className="prdhead Headings flexcenter mt-3">
              Our Value Proposition
              <hr className="spline mt-lg-3"></hr>
            </h2>
          </div>
          <p className="prdp disText px-5">
            eAgriMarket help Farmers to directly market their produce to Traders
            and Agro-Industry. <br />
            All immediate supply chain stages are covered by eAgriMarket and our
            partner network.
          </p>
        </div>
        <div className="container vediocontainer">
          <div className="   justify-content-center">
            {/* <video
            className="vedios"
            width="80%"
            playsinline="true"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
            type="video/wmv"
            src="https://eagri-images.s3.ap-southeast-1.amazonaws.com/Value.gif"
          ></video> */}
            <img
              src="https://eagri-images.s3.ap-southeast-1.amazonaws.com/Value.gif"
              className="gif"
              alt="...loading"
            />
            {/* <img className="vimage" src={vimage} /> */}
          </div>
        </div>
      </div>
      <div className="Register " ref={myRef} id="Register">
        <div className="reginner p-2 p-md-4 p-lg-3">
          <div className="head">
            <div className="heading">
              <h2 className="regcontent Headings flexcenter">
                Register Yourself
                <hr className="spline mt-lg-3"></hr>
              </h2>
            </div>
            <p className="regp disText">
              eAgriMarket help Farmers to directly market their produce to
              Traders and Agro-Industry.
              <br /> All immediate supply chain stages are covered by
              eAgriMarket and our partner network
            </p>
          </div>
          <div className="regbtndiv mb-3  ">
            {/* <button className="regbtn my-2"> */}
            <a className="farmera regbtn my-2  " href="/farmerdata">
              {" "}
              Farmer
            </a>
            {/* </button> */}
            {/* <button className="regbtn regbtnmarginb  "> */}
            <a className="farmera regbtn regbtnmarginb" href="/Trader">
              {" "}
              Trader
            </a>
            {/* </button> */}
          </div>
        </div>
      </div>

      <div class="footer-top" id="Getin">
        <div className=" container contactsection">
          <Form form={form} onFinish={handleSubmit}>
            <div className="row d-flex justify-content-around mx-3 ">
              <div class="col-lg-5 col-md-6 col-sm-9 footer-links footermargin   ">
                <div className=" ">
                  <h3 className="foh Headings ">
                    Get in touch
                    <hr className="spline mt-lg-3"></hr>
                  </h3>
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
                        name="name"
                        onChange={handleChange}
                        id="name"
                        type="text"
                        defaultValue={initialvalues.name}
                        value={initialvalues.name}
                        placeholder="Name - نام"
                        className="nameinput1"
                      />
                    </FormItem>
                  </div>
                  <div className="col-lg-6">
                    {" "}
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
                        // id="fname"
                        //   value={fname}
                        onChange={handleChange}
                        name="contact"
                        maxLength="11"
                        minLength="11"
                        placeholder="03xx-0000000"
                        value={initialvalues.contact}
                        // placeholder="Enter Phone Number"
                        className="nameinput"
                      />
                    </FormItem>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <FormItem
                      className="mb-0"
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
                        className="resize-none"
                        rows={4}
                        name="message"
                        onChange={handleChange}
                        value={initialvalues.message}
                        placeholder="Message - پیغام"
                      />
                    </FormItem>
                  </div>
                  {/* <div class="col-lg-1 col-md-6 footer-links textArea "> */}
                </div>
                <div className="col-lg-4 col-sm-6 mb-3  mt-3">
                  <Button
                    htmlType="submit"
                    type="primary"
                    // onClick={handleSubmit}
                    className="sendbtn h-100"
                  >
                    Send
                  </Button>
                </div>
                {/* </div> */}
              </div>
              <div className="col-lg-2 col-md-3 col-sm-3 mt-4">
                <img className=" contactimage " src={frame} />
              </div>
            </div>{" "}
          </Form>
        </div>
        <div class="container-fluid footercon ">
          <div className="row">
            <div className="col-11 mx-auto">
              <div class="row justify-content-between">
                <div class="col-lg-3 col-md-6  footer-contact footermargin">
                  <img className="  " src={grplast} />

                  <p className="footerp credits mb-3">
                    Sustainable & Smart Agriculture Trading Platform Empowering
                    Farmers with Technology Making Farm to Fork a Reality
                  </p>
                  {/* <div class="credits flexcenter">
                  {" "}
                  <a
                    className="footericon"
                    href="https://www.facebook.com/eagrimart"
                  >
                    {" "}
                    <FacebookFilled />
                  </a>
                  <a
                    className="footericon"
                    href="https://www.instagram.com/eagrimart/"
                  >
                    {" "}
                    <InstagramFilled />
                  </a>
                  <a
                    className="footericon"
                    href="https://www.linkedin.com/company/eagrimarket/"
                  >
                    {" "}
                    <LinkedinFilled />
                  </a>
                </div> */}
                </div>

                <div class="col-lg-2 col-md-4 footer-links  footer-contact footermargin">
                  {/* <h4 className="footerh4">Useful Links</h4> */}
                  <div class="vl">
                    <ul className="footerUl d-flex flex-column justify-content-around h-100 p-0">
                      <li className="textleft">
                        <i class="bx bx-chevron-right footeri"></i>{" "}
                        <a className="credits" href="#">
                          Home
                        </a>
                      </li>
                      <li className="textleft">
                        <i class="bx bx-chevron-right footeri"></i>{" "}
                        <a className="credits" href="#Products">
                          About Us
                        </a>
                      </li>
                      <li className="textleft">
                        <i class="bx bx-chevron-right footeri"></i>{" "}
                        <a className="credits" href="#ourServices">
                          Our Services
                        </a>
                      </li>
                      <li className="textleft">
                        <i class="bx bx-chevron-right footeri"></i>{" "}
                        <a className="credits" href="#Register">
                          Register
                        </a>
                      </li>
                      <li className="textleft">
                        <i class="bx bx-chevron-right footeri"></i>{" "}
                        <a className="credits" href="/contactUs">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 footer-links footer-contact  footermargin  ">
                  <h5>Find Us</h5>
                  <div class="credits d-grid ">
                    {" "}
                    <a
                      className="footericon"
                      href="https://www.facebook.com/eagrimart"
                    >
                      {" "}
                      <FacebookFilled />
                      <a className="folinks">facebook.com/eagrimart</a>
                    </a>
                    <a
                      className="footericon"
                      href="https://www.instagram.com/eagrimart/"
                    >
                      {" "}
                      <InstagramFilled />
                      <a className="folinks">instagram.com/eagrimart</a>
                    </a>
                    <a
                      className="footericon"
                      href="https://www.linkedin.com/company/eagrimarket/"
                    >
                      {" "}
                      <LinkedinFilled />
                      <a className="folinks">
                        linkedin.com/company/eagrimarket
                      </a>
                    </a>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 footer-links footer-contact  footermargin mb-5 ">
                  <h5>Contact Us</h5>
                  <div class="credits d-grid">
                    {" "}
                    <a className="footericon" href="">
                      {" "}
                      <EnvironmentFilled />
                      <a className="folinks">
                        Kickstart, Building 62 Block C2 Guldberg 3, Lahore
                      </a>
                    </a>
                    {/* <a
                      className="footericon"
                      href=""
                    >
                      {" "}
                      <PhoneFilled />
                      <a className="folinks"></a>
                    </a> */}
                    <a className="footericon" href="">
                      {" "}
                      <MessageFilled />
                      <a className="folinks">eagriculturemarket@gmail.com</a>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid footer-bottom clearfix ">
          <div className="container footerlastdiv credits ">
            <span>Terms And Condition</span>
            <div class="credits ">
              {" "}
              © Copyright 2022,{" "}
              <strong>
                <span>eAgriMarket</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
