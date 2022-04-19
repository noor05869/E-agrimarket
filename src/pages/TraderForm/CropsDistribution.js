import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";
import "../required.css";
import {
  Row,
  Col,
  Card,
  Input,
  Select,
  Form,
  InputNumber,
  DatePicker,
  Button,
  Switch,
  Alert
} from "antd";
import Header from "../header";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import Label from "../../components/label";
function CropsDistribution({
  handleStep,
  initialValues,
  handleChange,
error,
  cropDistribution,
  handleDistributionAdd,
  handleDistributionRemove,
  valuues,
  handleSelectChange,
  handleSelect,

  addCattles,
  removeCattle,
  cattless,
  response,
  handleSubmit,
}) {
  const { Land } = initialValues;

  // const [Fruits, setFruits] = useState(true);
  // const [Sabziyaat, setSabziyaat] = useState(false);
  // const [cropCycle, setcropCycle] = useState([
  //   {
  //     Commodity: "",
  //     Maize: "",
  //     Maize2: "",
  //     Potato: "",
  //   },
  // ]);
  const { RangePicker } = DatePicker;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { Option } = Select;

  const Crops = [
    { value: "Fruits", lable: "Fruits", ulabel: "پھل" },
    { value: "Vegetables", lable: "Vegetables", ulabel: "سبزیاں" },
    { value: "FoodLegumes", lable: "Food Legumes", ulabel: "کھانے کی پھلیاں" },
    { value: "CEREALCROPS", lable: "Cereal Crops", ulabel: "اناج کی فصلیں" },
    {
      value: "OilSeedCrops",
      lable: "Oil Seed Crops",
      ulabel: "تیل کے بیجوں کی فصلیں",
    },
    { value: "ForageCrops", lable: "Forage Crops", ulabel: "چارے کی فصل" },
    { value: "SugarCrops", lable: "Sugar Crops", ulabel: "چینی کی فصلیں" },
  ];

  return (
    <div>
      <Header />
      <Row style={{ marginBottom: "100px" }} justify="center">
        <Col xs={24} lg={22} xl={17} className="mb-24">
          <Form onFinish={handleSubmit}>
            <Card
              className="formBody"
              title={
                <>
                  <Row className="title">
                    <h2
                      className="font-semibold m-0"
                      style={{ marginLeft: "20px" }}
                    >

                      Crops Distribution / Cycle
                    </h2>
                  </Row>
                </>
              }
              headStyle={{
                backgroundColor: "#96CC5C",
                borderRadius: " 20px 20px 0px 0px",
              }}
            >

              {cropDistribution &&
                cropDistribution.map((data, i) => (
                  <>
                    <Row> </Row>
                    <Row
                      key={i}
                      gutter={[24, 0]}
                      justify="center"
                    >
                      {/* <Col span={7} md={0} lg={0} xl={0}></Col> */}
                      <Col key={i}  span={7} xs={23} sm={20} md={7} lg={7} xl={7}
                      >
                        <Label eLabel="Crops" ulabel="فصلیں" index={i} />

                        <Form.Item
                          id={i}
                          className="username"
                          name={`${i}crops`}
                          value={data.crops}
                          rules={
                            !data.crops && i === 0
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
                            onChange={(event) =>
                              handleSelectChange(i, event, "crops")
                            }
                            showSearch
                            filterOption={(input, option) =>
                              option.value
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                            name={`${i}crops`}
                            placeholder="Select Crops -  فصلوں کو منتخب کریں"
                            size="large"
                            defaultValue={data.crops ? data.crops : undefined}
                          >
                            {Crops.map((data) => (
                              <Option id={i} key={data.value}>
                                <div className="optionaStyle">
                                  <p>{data.lable}</p>
                                  <p>{data.ulabel}</p>
                                </div>
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col  span={7} xs={23} sm={20} md={7} lg={7} xl={7}>
                        <Label eLabel="Commodities" ulabel=" اشیاء" index={i} />

                        <Form.Item
                          className="username "
                          name={`${i}commodities`}
                          rules={
                            !data.commodities && i === 0
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
                        mode="multiple"

                            placeholder="Select Commodities - اشیاء "
                            name={`${i}commodities`}
                            onChange={(event) =>
                              handleSelectChange(i, event, "commodities")
                            }
                            showSearch
                            size="large"
                            filterOption={(input, option) =>
                              option.value
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                            defaultValue={
                              data.commodities ? data.commodities : undefined
                            }
                          >
                            {valuues &&
                              valuues.map((data) => (
                                <Option id={i} key={data.value}>
                                  <div className="optionaStyle">
                                    <p>{data.value}</p>
                                    <p>{data.ulabel}</p>
                                  </div>
                                </Option>
                              ))}
                          </Select>
                        </Form.Item>
                      </Col>

                      {/* <Col className="Add1button"  span={7} xs={0} sm={0} lg={9}
                      ></Col> */}
                    </Row>



                    <Row justify="center">
                      {/* <Col span={7} md={0} lg={0} xl={0}></Col> */}
                      <Col xs={24} span={7} sm={20} md={14} lg={14} xl={14}>

                        <hr />
                      </Col>
                      {/* <Col xs={0} span={7} sm={0} lg={9} xl={9}></Col> */}
                    </Row>

                    <Row justify="center" gutter={[24, 0]}>
                      <Col span={7} md={0} lg={0} xl={0}></Col>
                      {i === cropDistribution.length - 1 ? (
                        <Col className="icondiv justify-content-end" xs={23} span={7} sm={20} md={14} lg={14}
                        >
                          <PlusCircleOutlined
                            onClick={handleDistributionAdd}
                            size="large"
                            className="icon"
                          />
                          <a onClick={handleDistributionAdd}>add more</a>
                          {cropDistribution.length > 1 ? (
                            <>
                              <MinusCircleOutlined
                                onClick={() => handleDistributionRemove(i)}
                                fill="currentColor"
                                className="ricon"
                              />
                              <a onClick={() => handleDistributionRemove(i)}>
                                Remove
                              </a>
                            </>
                          ) : (
                            ""
                          )}
                        </Col>
                      ) : (
                        <
                        ></>
                      )}
                      {/* <Col xs={23} span={7} sm={20} md={0} lg={9}
                      ></Col> */}
                    </Row>
                  </>
                ))}
              <Row gutter={[24, 0]}></Row>
              <Row justify="center">
                <Col md={14} lg={23}>
                <h5 className="text-center mt-4">Cattles</h5>
                </Col>
              </Row>
              {cattless.map((data, i) => (
                <>
                  <Row justify="center" gutter={[24, 0]}>
                    {/* <Col span={7} md={0} lg={0} xl={0}></Col> */}

                    <Col xs={23} span={7} sm={20} md={7} lg={7} xl={7}>
                      {i === 0 && <><Label eLabel="Quantity " ulabel="  تعداد" index={i} />


                        <Form.Item name='LiveStock'
                          valuePropName="checked">
                          <Switch
                            name='LiveStock'
                            onChange={(e) => handleSelect('LiveStock', e)}
                            value={data.LiveStock}
                            min={1}
                            size="large" />
                        </Form.Item>
                      </>}


                    </Col>
                    <Col xs={23} span={7} sm={20} md={7} lg={7} xl={7}
                    >
                      <Label eLabel="Cattles " ulabel=" مویشی" index={i} />

                      <Form.Item
                        className="username"
                        name={`${i}cattle`}
                      >
                        <Select
                          className="userName"
                          placeholder="Select Cattles - مویشی"
                          value={data.Cattles}
                          size="large"
                          name={`${i}cattle`}
                          defaultValue={data.Cattles ? data.Cattles : undefined}
                          onChange={(event) =>
                            handleSelectChange(i, event, "Cattles")
                          }
                        >
                          <Option key="Buffalo">Buffalo</Option>
                          <Option key="Goat">Goat</Option>
                        </Select>
                      </Form.Item>
                    </Col>
{/* 
                    <Col className="Add1button" xs={0} span={7} sm={0} lg={9}
                    ></Col> */}
                  </Row>

                    <Row justify="center" gutter={[24, 0]}>
                      <Col span={7} md={0} lg={0} xl={0}></Col>
                    <Col xs={24} span={7} sm={20} md={14} lg={14} xl={14}>

                      <hr />
                    </Col>
                    {/* <Col xs={0} span={7} lg={9} sm={0} xl={9}></Col> */}
                  </Row>
                  <Row justify="center" gutter={[24, 0]}>
                      <Col span={7} md={0} lg={0} xl={0}></Col>
                      {i === cattless.length - 1 ? (
                      <Col className="icondiv justify-content-end" xs={23} span={7} sm={20} md={14} lg={14}
                      >
                        <PlusCircleOutlined
                          onClick={addCattles}
                          size="large"
                          className="icon"
                        />
                        <a onClick={addCattles}>add more</a>
                        {cattless.length > 1 ? (
                          <>
                            <MinusCircleOutlined
                              onClick={() => removeCattle(i)}
                              fill="currentColor"
                              className="ricon"
                            />
                            <a onClick={() => removeCattle(i)}>Remove </a>
                          </>
                        ) : (
                          ""
                        )}
                      </Col>
                    ) : (
                      <></>
                    )}
                    {/* <Col xs={0} span={7} sm={0} lg={9}
                    ></Col> */}
                  </Row>
                </>
              ))}


                  {error.data ? (
                  <Row justify="center">
                    <Alert
                      style={{ marginBottom: "10px" }}
                      message={error?.data?.message}
                      type="error"
                    />
                  </Row>
                ) : (
                  ""
                )}
              <Row
                gutter={[24, 0]}
                className="ant-row-flex ant-row-flex-middle"
              >
                <Col span={7} xs={2} md={18} sm={18} lg={18} xl={17}></Col>
                <Col style={{ marginLeft: "10px" }} xs={24} span={7} lg={5} xl={6} xxl={6} sm={24} md={5}
                  className="d-flex justify-content-center justify-content-md-end"
                >
                  <Button
                    shape="round"
                    size="large"
                    className="backbtnStyle"
                    onClick={() => handleStep("1")}
                    type="primary"
                  >
                    Back
                  </Button>
                  <Button
                    className="nextbtn"
                    size="large"
                    shape="round"
                    type="primary"
                    htmlType="submit"
                    style={{ background: "#273A9E", border: "none" }}
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

export default CropsDistribution;
