import { Row, Col, Input, Form, Button, Card, Spin } from "antd";

import React, { useState } from "react";
import Header from "./header";

import "./landing.css";
import { message } from "antd";

import * as api from "../api/api";
import useApi from "../Hooks/useApi";
import Label from "../components/label";
import { useNavigate } from "react-router-dom";
function ContactForm() {
  const { TextArea } = Input;
  const navigate = useNavigate();

  const [initialvalues, setinitialvalues] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const handleChange = (e) => {
    const { value, name, id } = e.target;
    console.log(e.target.value);
    setinitialvalues({ ...initialvalues, [name]: value });
  };
  console.log("state", initialvalues);
  const [loading, setloading] = useState(false);
  const { error, request } = useApi(api.postContact);

  async function handleSubmit(values) {
    console.log("submit", values);
    setloading(true);
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
      navigate("/contactSubmission");
    } catch {}

    setloading(false);
  }

  return (
    <div>
      <Header />
      <Spin size="large" spinning={loading}>
        <Row style={{ marginBottom: "100px" }} justify="center">
          <Col xs={21} lg={10} className="mb-24 ">
            <Form onFinish={handleSubmit}>
              <Card
                className=" formBody"
                title={
                  <>
                    <Row justify="" gutter={[0, 24]} className=" header title">
                      <h2 className="font-semibold m-0 ">Contact Us</h2>
                    </Row>
                  </>
                }
                headStyle={{
                  backgroundColor: "#96CC5C",
                  borderRadius: " 20px 20px 0px 0px",
                }}
              >
                <Row> </Row>
                <Row gutter={[24, 0]} justify="center">
                  <Col className="" span={7} md={0} lg={0}></Col>

                  <Col xs={19} span={7} lg={14} sm={20} md={6}>
                    <Label eLabel="Full Name" ulabel="نام" index={0} />
                    <Form.Item
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
                    >
                      <Input
                          className="contact"

                     
                        onChange={handleChange}
                        id="name"
                        type="text"
                        value={initialvalues.name}
                       
                        placeholder="Name"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 0]} justify="center">
                  <Col span={7} md={0} lg={0}></Col>

                  <Col xs={19} span={7} lg={14} sm={20} md={6}>
                    <Label eLabel="Phone Number" ulabel="نام" index={0} />
                    <Form.Item
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
                        className="contact"
                        //   defaultValue={fname}
                        id="fname"
                        //   value={fname}
                        onChange={handleChange}
                        name="contact"
                        maxLength="11"
                        minLength="11"
                        placeholder="03xx-0000000"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[24, 0]} justify="center">
                  <Col className="" span={7} md={0} lg={0}>
                  
                  </Col>

                  <Col xs={19} span={7} lg={14} sm={20} md={6}>
                    <Label eLabel="Message" ulabel="نام" index={0} />
                    <Form.Item
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
                        className="contact"
                        name="message"
                        rows={4}
                        onChange={handleChange}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row
                  justify="center"
                  gutter={[24, 0]}
                  className="ant-row-flex ant-row-flex-middle"
                >
                  {/* <Col span={7} xs={6} md={18} sm={18} lg={17} xl={15}></Col> */}
                  <Col
                    style={{ marginTop: "10px" }}
                    xs={12}
                    span={7}
                    lg={8}
                    xl={12}
                    xxl={5}
                    sm={12}
                    md={8}
                    className="d-flex"
                  >
                    <Button
                      shape="round"
                      size="large"
                      className="nextbtn"
                      type="primary"
                      htmlType="submit"
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Form>
          </Col>
        </Row>
      </Spin>
    </div>
  );
}

export default ContactForm;
