import React, { useState, useEffect } from "react";
import "./required.css";
import { Tehsils } from "../utility/tehsil";
import { Row, Col, Card, Input, Select, Form, Button } from "antd";

import Header from "./header";
import Label from "../components/label";

function FormScreen({
  handleStep,
  initialValues,
  handleChange,
  handleSelect,
  handleCities,
  Cities,
}) {
  const { fname, contact, province, district, tehsil, village, contact2 } =
    initialValues;
  const { Option } = Select;
  // console.log("ttttt", Tehsils);
  function handleSubmit(values) {
    // console.log(values);
    handleStep("2");
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const Provinces = [
    { value: "06", label: "Fedral Capital", Province_code: "06" },
    { value: "03", label: "Punjab", Province_code: "03" },
    { value: "02", label: "Sindh", Province_code: "02" },
    { value: "05", label: "Balochistan", Province_code: "05" },
    { value: "04", label: "Khyber Pakhtunkhwa", Province_code: "04" },
    { value: "07", label: "Azad And Jamu Kashmir", Province_code: "07" },
    { value: "01", label: "Fata / Fana", Province_code: "01" },
  ];

  return (
    <div>
      <Header />
      <Row style={{ marginBottom: "100px" }} justify="center">
        <Col xs={24} lg={17} className="mb-24 ">
          <Form onFinish={handleSubmit}>
            <Card
              className=" formBody"
              title={
                <>
                  <Row justify="" gutter={[0, 24]} className=" header title">
                    <h2 className="font-semibold m-0 ">Personal Info</h2>
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
                <Col span={7} md={0} lg={0}>
                  {" "}
                </Col>

                <Col xs={19} span={7} lg={11} sm={20} md={6}>
                  <Label eLabel="Name" ulabel="نام" index={0} />
                  <Form.Item
                    name="fname"
                    rules={
                      !fname
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
                      defaultValue={fname}
                      id="fname"
                      type="text"
                      value={fname}
                      onChange={handleChange}
                      name="fname"
                      placeholder="Name - نام"
                    />
                  </Form.Item>
                </Col>

                <Col xs={19} span={7} lg={6} sm={20} md={6}>
                  <Label eLabel="Primary Phone" ulabel="فون نمبر" index={0} />

                  <Form.Item
                    name="contact"
                    rules={
                      !contact
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
                      id="contact"
                      defaultValue={contact}
                      name="contact"
                      maxLength="11"
                      minLength="11"
                      placeholder="03xx - 0000000"
                      value={contact}
                      onChange={handleChange}
                    />
                  </Form.Item>
                </Col>
                <Col xs={19} span={7} lg={6} sm={20} md={6}>
                  <Label eLabel="Secondary Phone" ulabel="فون نمبر" index={1} />

                  <Form.Item name="contact2">
                    <Input
                      className="contact"
                      id="optionalContact"
                      defaultValue=""
                      name="contact2"
                      maxLength="11"
                      minLength="11"
                      placeholder="03xx - 0000000"
                      value={contact2}
                      onChange={handleChange}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[24, 0]} justify="center">
                <Col span={6} md={0} lg={0}></Col>
                <Col xs={19} span={7} lg={11} sm={20} md={9}>
                  <Label eLabel="Province" ulabel="صوبہ" index={0} />

                  <Form.Item
                    className="username"
                    name="Province"
                    defaultValue={province.value}
                    rules={
                      !province.children
                        ? [
                            {
                              required: true,
                              message: "Please Select",
                            },
                          ]
                        : ""
                    }
                  >
                    <Select
                      placeholder="Select Province - صوبہ "
                      showSearch
                      onChange={handleCities}
                      filterOption={(input, option) =>
                        option.value
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      onSelect={(value, event) =>
                        handleSelect("province", event)
                      }
                      size="large"
                      name="province"
                      defaultValue={province.value}
                    >
                      {Provinces.map((data) => (
                        <Option key={data.label}>
                          <div>
                            {" "}
                            <p>{data.label}</p>
                          </div>
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={19} span={7} lg={12} sm={20} md={9}>
                  <Label eLabel="District" ulabel="ضلع" index={0} />

                  <Form.Item
                    className="username"
                    name="District"
                    rules={
                      !district.children
                        ? [
                            {
                              required: true,
                              message: "Please Select",
                            },
                          ]
                        : ""
                    }
                  >
                    <Select
                      placeholder="Select District - ضلع "
                      showSearch
                      filterOption={
                        (input, option) =>
                          option.value
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        // console.log(input,"-----",option)
                      }
                      name="district"
                      size="large"
                      onSelect={(value, event) =>
                        handleSelect("district", event)
                      }
                      defaultValue={district.value}
                    >
                      {Cities &&
                        Cities.map((data) => (
                          <Option key={data.value}>
                            <div className="optionaStyle">
                              <p>{data.label}</p>
                              <p>{data.ulabel}</p>
                            </div>
                          </Option>
                        ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[24, 0]} justify="center">
                <Col span={6} md={0} lg={0}></Col>
                <Col xs={19} span={7} lg={11} sm={20} md={9}>
                  <Label eLabel="Tehsil" ulabel="تحصیل" index={0} />

                  <Form.Item
                    className="username"
                    name="Tehsil"
                    rules={
                      !tehsil.children
                        ? [
                            {
                              required: true,
                              message: "Please Select",
                            },
                          ]
                        : ""
                    }
                  >
                    <Select
                      placeholder="Select Tehsil - تحصیل"
                      showSearch
                      size="large"
                      name="tehsil"
                      defaultValue={tehsil.children}
                      onSelect={(value, event) => handleSelect("tehsil", event)}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {Tehsils.map((data) => (
                        <Option key={data.value}>{data.label}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={19} span={7} lg={12} sm={20} md={9}>
                  <Label eLabel="Village" ulabel="گاؤں" index={0} />

                  <Form.Item
                    name="village"
                    rules={
                      !village
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
                      name="village"
                      placeholder="Village - گاؤں"
                      value={village}
                      defaultValue={village}
                      onChange={handleChange}
                      type="text"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row
                justify="start"
                gutter={[24, 0]}
                className="ant-row-flex ant-row-flex-middle"
              >
                <Col span={7} xs={6} md={18} sm={18} lg={18} xl={20}></Col>
                <Col
                  style={{ marginTop: "10px" }}
                  xs={12}
                  span={7}
                  lg={5}
                  xl={2}
                  xxl={3}
                  sm={20}
                  md={5}
                  className="d-flex"
                >
                  <Button
                    shape="round"
                    size="large"
                    className="nextbtn"
                    type="primary"
                    htmlType="submit"
                  >
                    Next
                  </Button>
                </Col>
              </Row>
            </Card>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default FormScreen;
