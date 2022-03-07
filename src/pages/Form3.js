import React from "react";
import {
  Row,
  Col,
  Card,
  Statistic,
  Input,
  Select,
  message,
  Form,
  InputNumber,
  Button,
  List,
  Descriptions,
  Avatar,
} from "antd";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./header";
function Form3({ handleStep, initialValues, handleChange, handleSelect }) {
  // const history = useHistory();
  const { Option } = Select;
  const {
    modeOfInvestment,
    percentage,
    cropsSale,
    seed,
    machinery,
    cropAdvisory,
  } = initialValues;
  function handleSubmit() {
    if (cropAdvisory.children) {
      message.success("Form Submitted Successfully");
    }
  }
  return (
    <div>
      <Header />
      <Row justify="center">
        <Col xs={24} lg={17} className="mb-24">
          <Form>
            <Card
              style={{ background: "#e7e7e7", borderRadius: "20px" }}
              className="payment-method-card"
              className="header-solid h-full ant-card-p-0"
              title={
                <>
                  <Row
                    gutter={[24, 0]}
                    className="ant-row-flex ant-row-flex-middle"
                  >
                    <Col xs={24} md={7}></Col>
                    <Col xs={14} md={6} className="d-flex">
                      <h6 className="font-semibold m-0">Agri Form</h6>
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
                  <Form.Item
                    className="username"
                    label={`Mode of Investment`}
                    name="modeOfInvestment"
                    rules={
                      !modeOfInvestment.children
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
                      onSelect={(value, event) =>
                        handleSelect("modeOfInvestment", event)
                      }
                      //   onChange={handleMode}
                      name="modeOfInvestment"
                      size="large"
                      defaultValue={modeOfInvestment.children}
                    >
                      <Option key="Aarhti"> Aarhti</Option>
                      <Option key="personal "> personal </Option>
                    </Select>
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
                  >
                    Percentage %
                  </label>
                  <Form.Item
                    name="percentage"
                    rules={
                      !percentage
                        ? [
                            {
                              required: true,
                              message: "Please fill",
                            },
                          ]
                        : ""
                    }
                  >
                    <Input
                      name="percentage"
                      defaultValue={percentage}
                      value={percentage}
                      onChange={handleChange}
                      type="number"
                      style={{
                        width: "100%",
                        fontWeight:"normal",
                        color:"black",
                        height: "40px",
                      }}
                      // onChange={onChange}
                    />
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
                  <Form.Item
                    className="username"
                    label="CropSale"
                    name="cropsSale"
                    rules={
                      !cropsSale.children
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
                      onSelect={(value, event) =>
                        handleSelect("cropsSale", event)
                      }
                      size="large"
                      name="cropsSale"
                      defaultValue={cropsSale.children}
                    >
                      <Option key="On Farm">On Farm</Option>
                      <Option key="Mandi ">Mandi </Option>
                      <Option key="Company ">Company </Option>
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
                  <Form.Item
                    className="username"
                    label="Seed"
                    name="seed"
                    rules={
                      !seed.children
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
                      name="seed"
                      size="large"
                      onSelect={(value, event) => handleSelect("seed", event)}
                      defaultValue={seed.children}
                    >
                      <Option key="Own">Own</Option>

                      <Option key="Market">Market</Option>
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
                  <Form.Item
                    className="username"
                    label="Machinery"
                    name="machinery"
                    rules={
                      !machinery.children
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
                      onSelect={(value, event) =>
                        handleSelect("machinery", event)
                      }
                      defaultValue={machinery.children}
                    >
                      <Option value="Own">Own</Option>

                      <Option value="Rented">Rented</Option>
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
                  <Form.Item
                    className="username"
                    label="Crop Advisory "
                    name="cropAdvisory"
                    rules={
                      !cropAdvisory.children
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
                      name="cropAdvisory"
                      onSelect={(value, event) =>
                        handleSelect("cropAdvisory", event)
                      }
                      defaultValue={cropAdvisory.children}
                    >
                      <Option value="Self-Experience">Self-Experience</Option>

                      <Option value="Relative or Friend">
                        Relative or Friend
                      </Option>
                      <Option value="Govt. Extension services ">
                        Govt. Extension services{" "}
                      </Option>
                      <Option value="Input Companies">Input Companies</Option>
                      <Option value="Consultant or Advisor ">
                        Consultant or Advisor{" "}
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row
                gutter={[24, 0]}
                className="ant-row-flex ant-row-flex-middle"
              >
                <Col xs={24} md={11}>
                  <h6 className="font-semibold m-0"></h6>
                </Col>
                <Col xs={24} md={9} className="d-flex">
                  <Button
                    style={{ marginRight: "10px" }}
                    //  onClick={()=>history.push("/CropsDistribution")}
                    onClick={() => handleStep("2")}
                    type="primary"
                  >
                    Back
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={handleSubmit}
                  >
                    Submit
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

export default Form3;
