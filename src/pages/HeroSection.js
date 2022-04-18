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
import { useState } from "react";
import handimage from "../assets/Wood-Hand.png";
import { Input ,Form, Button} from "antd";
import { message } from "antd";

import * as api from "../api/api";
import useApi from "../Hooks/useApi";

import { Navigate, useNavigate } from "react-router-dom";
import FormItem from "antd/lib/form/FormItem";
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
function handlefarmer(){
navigate("/farmerdata")
}
function handleTrader(){
  navigate("/Trader")
  }
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
          onClick={()=>{
            navigate("./contactUs")
          }}
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
              Our <span>Services</span>
            </h2>
            <p className="serp">
              eAgriMarket is smart trading platform for all Agriculture
              stakeholders. <br />
              We empower farmers with technology and provide all Agri
              stakeholders a platform for trading.
            </p>
            {/* <p className="serp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Sed in tempus libero ornare nulla aenean vulputate
            </p> */}
            <button className="serbtn">Learn More</button>
          </div>
          <div className="col-lg-6">
            <div className="sergroup">
              <img className="grp1img" src={grp1} />
              <div className="paradiv">
                <p className="grptext">E-Mandi</p>
                <p className="serp2">
                  Platform for Sale and Purchase of Agri commodities
                </p>
              </div>
            </div>
            <div className="othergrp">
              <img className="grp1img" src={grp4} />
              <div className="paradiv">
                <p className="grptext">Input Marketplace</p>
                <p className="serp2">
                  Online marketplace for Agro Chemicals and Fertilizers
                  {/* <br />
                  Sed in tempus libero ornare */}
                </p>
              </div>
            </div>
            <div className="othergrp">
              <img className="grp1img" src={grp2} />
              <div className="paradiv">
                <p className="grptext">Machinery Marketplace</p>
                <p className="serp2">
                  Online Marketplace for Agri Machinery and Tools
                  {/* <br />
                  Sed in tempus libero ornare */}
                </p>
              </div>
            </div>
            <div className="othergrp">
              <img className="grp1img" src={grp3} />
              <div className="paradiv">
                <p className="grptext">Crop Advisory</p>
                <p className="serp2">
                  Expert Agri advisory services for Farmers
                  {/* <br />
                  Sed in tempus libero ornare */}
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
            Online Trading and Information platform for all Agriculture
            stakeholders.
            <br /> Get market insights of all Agri products across country and{" "}
            <br />
            trade with ease by exploring your desired product on our platform.
          </p>
        </div>
        <div className="row justify-content-end">
          <div className="mainprod  ">
            <div style={{ display: "grid" }} className="row">
              <div className="col-lg-9">
                <div className="mobilecontent ">
                  <h2 className="mobileapph">E-Agri Mobile App</h2>
                  <p className="paragra">
                    Online Trading and Information platform for all Agriculture
                    stakeholders. Get market insights of all Agri products
                    across country and trade with ease by exploring your desired
                    product on our platform.
                  </p>
                  <div className="markkk">
                    <div>
                      <p className="ticksp">
                        <img className="ticksimg" src={vector} />
                        <p className="marking">e-Mandi</p>
                      </p>
                      <p className="ticksp1">
                        <img className="ticksimg" src={vector} />
                        <p className="marking">Farmers Portal </p>
                      </p>{" "}
                      <p className="ticksp1">
                        <img className="ticksimg" src={vector} />
                        <p className="marking">Input Marketplace </p>
                      </p>
                    </div>
                    <div className="mark2">
                      <p className="ticksp2">
                        <img className="ticksimg" src={vector} />
                        <p className="marking">Machinery Marketplace </p>
                      </p>
                      <p className="ticksp2">
                        <img className="ticksimg" src={vector} />
                        <p className="marking"> Advisory Portal</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-lg-2 playbtns">
                <img className="playimg" src={Gplay} />
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
            and Agro-Industry. <br/>All immediate supply chain stages are covered by
            eAgriMarket and our partner network.
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
              eAgriMarket help Farmers to directly market their produce to
              Traders and Agro-Industry.
              <br /> All immediate supply chain stages are covered by
              eAgriMarket and our partner network
            </p>
          </div>
          <div className="regbtndiv">
            <button onClick={handlefarmer} className="regbtn">Farmer</button>
            <button onClick={handleTrader} className="regbtn">
              Trader
              </button>
          </div>
        </div>
      </div>

      <div className="footer ">
        <div className="row  ">
          <div className="col-lg-5 ">
            <div className="footerdiv">
              <img className="footerimg" src={logo} />
              {/* <p>Sustainable & Smart Agriculture Trading Platform</p>  */}
              <ul className="footerul">
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
              <div className="row ">
                <div className="col-lg-5">
                  <h3 className="foh">Get in touch</h3>
                  <p className="fop">we have to hear from you</p>
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
                  placeholder="Enter Name Here" className="nameinput1" /></FormItem>
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
                    //   value={fname}
                    onChange={handleChange}
                    name="contact"
                    maxLength="11"
                    minLength="11"
                    placeholder="03xx-0000000"
                    // placeholder="Enter Phone Number"
                    className="nameinput"
                  /></FormItem>
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
                  <TextArea rows={5}
                   name="message"
                  
                   onChange={handleChange} /></FormItem>
                  <Button
                      htmlType="submit"
                      type="primary"
                  // onClick={handleSubmit}
                  className="sendbtn">Send Message</Button>
                </div>
              </div>
            </div>
                   </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
