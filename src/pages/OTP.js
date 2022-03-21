import { Row, Col, Input, Form, Button, Card } from "antd";
import axios from "axios";
import { message } from "antd";
import Header from "./header";
import React, { useState } from "react";
// import "./otp.css";
function OTP({ number, handleStep,handleOTPsubmit }) {
  console.log(number);
  const [first, setfirst] = useState();
  const otp = {
    phone: number,
    code: "",
  };
  async function resend() {
    try {
      const { data } = await axios.get(
        `https://backend.eagrimarket.com/v1/otp?phone=${number}`
      );
      console.log(data);
      message.success({
        content: "Code Resend succsessfully",
        className: "custom-class",
        style: {
          marginTop: "74vh",
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  function skipOtp() {
    handleStep("3");
  }
 
  function handleChange(e) {
    console.log(e.target.value);
    otp.code = e.target.value;
    console.log("otp", otp);
  }
  console.log("otp", otp);
  return (
    <>
      <Header />
      <Row justify="center">
        <Col xs={24} lg={16} className="mb-24">
          <Card
            style={{ background: "#e7e7e7", borderRadius: "20px" }}
            // className="payment-method-card"
            className="header-solid h-full ant-card-p-0"
            
           >
                <Form onFinish={()=>handleOTPsubmit(otp)}>
                  {" "}
                  <Row justify="center">
                    {" "}
                    <div id="verify-otp" class="login-setup-section">
                      <i class="fa fa-chevron-left" aria-hidden="true"></i>
                      <Row
                        style={{ marginTop: "30px", marginBottom: "30px" }}
                        justify="center"
                      >
                        <h3>Verify OTP</h3>
                      </Row>
                      <div class="form-group login-label">
                       
                        <Form.Item
                          name="code"
                          rules={
                            !otp.code
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
                            name="code"
                            className="codeinput"
                            onChange={handleChange}
                            // type="number"
                            value={otp.code}
                            class="form-control input-edit"
                            placeholder="Enter OTP"
                            id="number"
                            maxLength={6}
                          />
                        </Form.Item>

                        <label class="otpLabel">
                          OTP Send to this Number {number} <span></span>
                        </label>
                      </div>
                      
                    </div>
                  </Row>
                  <Row justify="center">
                      <Button
                      className="otpVerifybtn"

                        htmlType="submit"
                       size="large"
                       shape="round"
                        type="button"
                      >
                        Verify
                      </Button>
                      <Button
                      className="otpNotnowbtn"
                        onClick={skipOtp}
                      size="large"
                      shape="round"
                        type="button"
                       
                      >
                        Not Now 
                      </Button>
                      <Button
                      size="large"
                      shape="round"
                        onClick={resend}
                        className="Resendotp"
                        
                      >
                        Resend 
                      </Button>
                     
                    </Row>
                </Form>
              
            
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default OTP;
