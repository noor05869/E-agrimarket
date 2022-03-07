import React from "react";
import {
  Row,
  Col,
  Card,
  Statistic,
  Input,
  Select,
  Form,
  InputNumber,
  Button,
  List,
  Descriptions,
  Avatar,
} from "antd";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./header";

function FormScreen({ handleStep, initialValues, handleChange, handleSelect }) {
  const { fname, contact, province, district, tehsil, village } = initialValues;
  const { Option } = Select;
  // const history = useHistory();
  const Provinces = [
    { value: "06", label: "Fedral Capital", Province_code: "06" },
    { value: "03", label: "Punjab", Province_code: "03" },
    { value: "02", label: "Sindh", Province_code: "02" },
    { value: "05", label: "Balochistan", Province_code: "05" },
    { value: "04", label: "Khyber Pakhtunkhwa", Province_code: "04" },
    { value: "07", label: "Azad And Jamu Kashmir", Province_code: "07" },
    { value: "01", label: "Fata / Fana", Province_code: "01" },
  ];

  const City = [
    { value: "Lahore", label: "Lahore" },
    { value: "Multan", label: "Multan" },
    { value: "Rawalpindi", label: "Rawalpindi" },
    { value: "Islamabad", label: "Islamabad" },
  ];
  const sindh = [
    { value: "Hydrabad", label: "Hydrabad" },
    { value: "KhairPur", label: "KhairPur" },
    { value: "Karachi", label: "Karachi" },
    { value: "Sukkhur", label: "Sukkhur" },
  ];
  const Tehsil = [
    { value: "Pakpattan ", label: "Pakpattan Tehsil" },
    { value: "Phalia", label: "Phalia" },
    { value: "Pasrur ", label: "Pasrur Tehsil" },
    { value: "PindDadan", label: "Pind Dadan Khan Tehsil" },
    { value: "PindiBhattian", label: "Pindi Bhattian" },
    { value: "Piplan ", label: "Piplan Tehsil" },
  ];

  function handleSubmit(values) {
    console.log(values);
    handleStep("2");
  }
  return (
    <div>
      <Header />
      <Row justify="center">
        <Col xs={24} lg={17} className="mb-24">
          <Form onFinish={handleSubmit}>
            <Card
              style={{ background: "#e7e7e7", borderRadius: "20px" }}
              // className="payment-method-card"
              className="header-solid h-full ant-card-p-0"
              title={
                <>
                  <Row
                    gutter={[24, 0]}
                    className="ant-row-flex ant-row-flex-middle"
                  >
                    <Col xs={24} md={7}></Col>
                    <Col xs={14} md={7} className="d-flex">
                      <h2 className="font-semibold m-0">Agri Form</h2>
                    </Col>
                  </Row>
                </>
              }
            >
              <Row gutter={[24, 0]}>
                <Col span={7} md={4}></Col>

                {/* <Card style={{background:"#e7e7e7",border:"none"}} > */}
                <Col
                  style={{ marginLeft: "10px" }}
                  xs={20}
                  span={7}
                  lg={8}
                  sm={20}
                  md={6}
                >
                 <label
                        htmlFor="contact"
                        className="col-12 col-form-label fw-500"
                        style={{fontWeight:"bold"}}
                      >
                       Name :
                       <span style={{color:"red",fontWeight:"bold",fontSize:"large"}} > *</span>
                      </label>
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
                    style={{color:"black",fontWeight:"normal"}}
                      defaultValue={fname}
                      id="fname"
                      type="text"
                      value={fname}
                      onChange={handleChange}
                      name="fname"
                      placeholder="Name"
                    />
                  </Form.Item>
                </Col>
                {/* </Card> */}

                <Col
                  style={{ marginLeft: "10px" }}
                  xs={20}
                  span={7}
                  lg={8}
                  sm={20}
                  md={6}
                >
                  <label
                        htmlFor="contact"
                        className="col-12 col-form-label fw-500"
                        style={{fontWeight:"bold"}}
                      >
                       Contact :
                       <span style={{color:"red",fontWeight:"bold",fontSize:"large"}} > *</span>
                      </label>
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
                      id="contact"
                      // type="number"
                      defaultValue={contact}
                      name="contact"
                      maxLength="11"
                      placeholder="03xx-0000000"
                      value={contact}
                      onChange={handleChange}
                      style={{
                        color:"black",
                        width: "100%",
                        fontWeight:"normal",
                        border: "rounded",
                        height: "40px",
                      }}
                      // onChange={onChange}
                    />
                  </Form.Item>
                  {/* </Form.Item> */}
                </Col>
              </Row>
              <Row gutter={[24, 0]}>
                <Col span={6} md={4}></Col>
                <Col
                  style={{ marginLeft: "10px" }}
                  xs={20}
                  span={7}
                  lg={8}
                  sm={20}
                  md={6}
                >
                   <label
                        htmlFor="contact"
                        className="col-12 col-form-label fw-500"
                        style={{fontWeight:"bold"}}
                      >
                       Province :
                       <span style={{color:"red",fontWeight:"bold",fontSize:"large"}} > *</span>
                      </label>
                  <Form.Item
                    className="username"
                    
                    name="Province"
                    defaultValue={province && province.children}
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
                      // onChange={handleSelect("province")}
                      onSelect={(value, event) =>
                        handleSelect("province", event)
                      }
                      size="large"
                      name="province"
                      defaultValue={province.children}
                    >
                      {Provinces.map((data) => (
                        <Option key={data.value}>{data.label}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col
                  style={{ marginLeft: "10px" }}
                  xs={20}
                  span={7}
                  lg={8}
                  sm={20}
                  md={6}
                >
                   <label
                        htmlFor="contact"
                        className="col-12 col-form-label fw-500"
                        style={{fontWeight:"bold"}}
                      >
                       District :
                       <span style={{color:"red",fontWeight:"bold",fontSize:"large"}} > *</span>
                      </label>
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
                      name="district"
                      size="large"
                      onSelect={(value, event) =>
                        handleSelect("district", event)
                      }
                      defaultValue={district.children}
                    >
                      {province.children === "Punjab"
                        ? City.map((data) => (
                            <Option key={data.value}>{data.label}</Option>
                          ))
                        : sindh.map((data) => (
                            <Option key={data.value}>{data.label}</Option>
                          ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[24, 0]}>
                <Col span={6} md={4}></Col>
                <Col
                  style={{ marginLeft: "10px" }}
                  xs={20}
                  span={7}
                  lg={8}
                  sm={20}
                  md={6}
                >
                   <label
                        htmlFor="contact"
                        className="col-12 col-form-label fw-500"
                        style={{fontWeight:"bold"}}
                      >
                       Tehsil :
                       <span style={{color:"red",fontWeight:"bold",fontSize:"large"}} > *</span>
                      </label>
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
                      size="large"
                      name="tehsil"
                      defaultValue={tehsil.children}
                      onSelect={(value, event) => handleSelect("tehsil", event)}
                    >
                      {Tehsil.map((data) => (
                        <Option key={data.value}>{data.label}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col
                  style={{ marginLeft: "10px" }}
                  xs={20}
                  span={7}
                  lg={8}
                  sm={20}
                  md={6}
                >
                 <label
                        htmlFor="contact"
                        className="col-12 col-form-label fw-500"
                        style={{fontWeight:"bold"}}
                      >
                       Village :
                       <span style={{color:"red",fontWeight:"bold",fontSize:"large"}} > </span>
                      </label>
                  <Input
                  style={{color:"black",fontWeight:"normal"}}
                    name="village"
                    value={village}
                    onChange={handleChange}
                    type="text"
                  />
                </Col>
              </Row>
              <Row
                gutter={[24, 0]}
                className="ant-row-flex ant-row-flex-middle"
              >
                <Col xs={24} md={9}>
                  <h6 className="font-semibold m-0"></h6>
                </Col>
                <Col xs={24} md={11} className="d-flex">
                  <Button
                    // onClick={()=>history.push("/CropsDistribution")}
                    // onClick={handleSubmit}
                    type="primary"
                    htmlType="submit"
                    className="btn btn-primary"
                    // type="primary"
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
