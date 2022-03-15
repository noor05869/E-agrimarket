import { Row, Col, Input, Form, Button, Card } from "antd";
import axios from "axios";
import { message } from "antd";
import Header from "./header";
import React, { useState } from "react";
import "./otp.css";
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
        `http://13.228.234.94:8080/v1/otp?phone=${number}`
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
  // async function handleOTPsubmit() {
  //   // handleStep("1")
  //   try {
  //     const {data} = await axios.post("http://13.228.234.94:8080/v1/verify", {
  //       phone: "03104739471",
  //       code: "88735",
  //     });
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }
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
                        {/* <label for="inputnumber">One Time Password</label> */}

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
                            onChange={handleChange}
                            // type="number"
                            value={otp.code}
                            class="form-control input-edit"
                            placeholder="Enter OTP"
                            id="number"
                            maxLength={6}
                          />
                        </Form.Item>

                        <label class="pull-right resend-otp">
                          OTP Send to this Number {number} <span></span>
                        </label>
                      </div>
                      <Button
                        htmlType="submit"
                        style={{
                          background: "#273A9E",
                          border: "none,",
                          color: "white",
                        }}
                        type="button"
                      >
                        Verify
                      </Button>
                      <button
                        onClick={skipOtp}
                        style={{
                          marginLeft: "12px",
                          background: "#273A9E",
                          border: "none",
                        }}
                        type="button"
                        class="btn btn-primary "
                      >
                        Not Now 
                      </button>
                      <button
                        onClick={resend}
                        className="btn btn-primary"
                        style={{
                          marginLeft: "12px",
                          background: "#273A9E",
                          border: "none",
                        }}
                      >
                        Resend OTP
                      </button>
                    </div>
                  </Row>
                </Form>
              
            
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default OTP;
