import React, { useState, useEffect } from "react";
import { Row, Col, Card, Input, Select, Form, Button, Switch, InputNumber } from "antd";

import Label from "../../components/label";
import Header from "../header";

function FormScreen({
  handleStep,
  initialValues,
  handleChange,
  handleSelect,
  handleCities,
  Cities,
}) {
  const { fname, contact, province, city, contact2, commision, shop, mandi } =
    initialValues;
  const { Option } = Select;
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

                </Col>

                <Col xs={23} span={7} lg={11} sm={20} md={7}>
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

                <Col xs={23} span={7} lg={6} sm={20} md={7}>
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
                <Col xs={23} span={7} lg={6} sm={20} md={7}>
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
                <Col xs={23} span={7} lg={11} sm={20} md={11}>
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

                            <p>{data.label}</p>
                          </div>
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={23} span={7} lg={12} sm={20} md={10}>
                  <Label eLabel="City" ulabel="شہر" index={0} />

                  <Form.Item
                    name="city"
                    rules={
                      !city
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
                      defaultValue={city}
                      id="city"
                      type="text"
                      value={city}
                      onChange={handleChange}
                      name="city"
                      placeholder="City - شہر"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[24, 0]}></Row>
              <Row justify="left" >
                <Col xs={1} sm={2} lg={1}></Col>
                <Col xs={22} lg={11} sm={20} md={14}>
                  <Row justify="left">
                    <Col xs={23} sm={23} md={22}>
                      <div className="d-flex">

                        <h5 className="align-self-center">Commision shop</h5>
                        <div className="ms-auto">

                          <Label eLabel="Do you Own?" ulabel="کیا آپ مالک ہیں؟" />
                          <Form.Item name='commision'
                            valuePropName="checked">
                            <Switch
                              name='commision'
                              className="ms-auto d-block"
                              onChange={(e) => handleSelect('commision', e)}
                              value={commision}
                              min={1}
                              size="large" />
                          </Form.Item>
                        </div>
                      </div>

                      <Row justify="left" gutter={[24, 0]}>
                        {/* <Col span={7} md={0} lg={0} xl={0}></Col> */}


                        {/* <Col xs={0} span={0} lg={1} md={0}></Col> */}
                        {commision && <>
                          <Col xs={24} sm={12} span={7} className="px-0 pe-sm-3 ps-sm-0">
                            <Label eLabel="Commision Shop Name" ulabel="دکان کا نام" />

                            <Form.Item
                              name="shop"
                            >
                              <Input
                                className="contact"
                                id="shop"
                                defaultValue={shop}
                                name="shop"
                                placeholder="Shop - دکان"
                                value={shop}
                                onChange={handleChange}
                              />
                            </Form.Item>
                          </Col>
                          <Col xs={24} sm={12} span={7} className="px-0 ps-sm-3 pe-sm-0">
                            <Label eLabel="Mandi" ulabel="منڈی" />

                            <Form.Item name="mandi">
                              <Input
                                className="contact"
                                id="mandi"
                                defaultValue=""
                                name="mandi"
                                placeholder="Mandi - منڈی"
                                value={mandi}
                                onChange={handleChange}
                              />
                            </Form.Item>
                          </Col>
                        </>}

                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>



              <Row gutter={[24, 0]} justify="center">
                <Col span={6} md={0} lg={0}></Col>
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
