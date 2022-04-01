import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";
import { useNavigate } from 'react-router-dom';

import "./required.css";
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
} from "antd";
import Header from "./header";
import { MinusCircleOutlined, PhoneOutlined, PlusCircleOutlined } from "@ant-design/icons";
import Label from "../components/label";
function CropsDistribution({
  handleStep,
  initialValues,
  handleChange,

  cropDistribution,
  handleDistributionAdd,
  handleDistributionRemove,
  valuues,
  handleSelectChange,

  addCattles,
  removeCattle,
  cattless,
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
  function handleSubmit(values) {
    console.log(values);
    handleSelectChange();
    handleStep("3");
  }
  let navigate = useNavigate();
  function handlecontact(){
navigate("/contactUs")
  }
  return (
    <div>
     
          <div className="setting-drwer"     onClick={handlecontact} >
        {/* {setting} */}
        <PhoneOutlined  className="hypericon"
      
         />
      </div>
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
                      {" "}
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
              <Row justify="center" gutter={[24, 0]}>
                {" "}
                <Col span={7} md={1} xs={0} xl={0}></Col>{" "}
                <Col xs={19} span={7} lg={7} sm={20} md={9} xl={7}>
                  <Label
                    eLabel=" Total Land (Acers)"
                    ulabel="کل زمین - ایکڑ"
                    index={0}
                  />

                  <Form.Item
                    name="Land"
                    rules={
                      !Land
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
                      placeholder=" کل زمین - ایکڑ"
                      className="inputnumber"
                      onChange={handleChange}
                      name="Land"
                      defaultValue={Land}
                      min={1}
                      value={Land}
                      type="number"
                      size="large"
                    />
                  </Form.Item>
                </Col>
                <Col xs={19} span={7} lg={5} sm={20} md={6} xl={5}></Col>
                <Col xs={19} span={7} lg={4} sm={20} md={6} xl={7}></Col>
              </Row>

              {cropDistribution &&
                cropDistribution.map((data, i) => (
                  <>
                    <Row> </Row>
                    <Row
                      key={i}
                      gutter={[24, 0]}
                      span={24}
                      style={{ border: "black" }}
                      justify="center"
                    >
                      <Col span={7} md={1} lg={0}></Col>
                      <Col
                        key={i}
                        xs={19}
                        span={7}
                        lg={7}
                        sm={20}
                        md={7}
                        xl={7}
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
                            placeholder="  فصلوں کو منتخب کریں"
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
                      <Col xs={19} span={7} lg={7} sm={20} md={7} xl={7}>
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
                            placeholder=" اشیاء "
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
                      <Col xs={19} span={7} lg={4} sm={20} md={7} xl={5}>
                        <Label eLabel="Area" ulabel="  رقبہ - ایکڑ" index={i} />
                        <Form.Item
                          name={`${i}area`}
                          id={i}
                          rules={
                            !data.area && i === 0
                              ? [
                                  {
                                    required: true,
                                    message: "Please Fill",
                                  },
                                ]
                              : ""
                          }
                        >
                          <InputNumber
                            placeholder=" رقبہ"
                            className="inputnumber"
                            onChange={(event) =>
                              handleSelectChange(i, event, "area")
                            }
                            name={`${i}area`}
                            id={i}
                            defaultValue={data.area}
                            min={1}
                            value={data.area}
                            // type="number"
                            size="large"
                            // onChange={onChange}
                          />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row justify="center">
                      <Col sm={11} xs={11}></Col>
                    </Row>

                    <Row justify="center" gutter={[24, 0]}>
                      <Col span={7} md={1} lg={0}></Col>
                      <Col xs={19} span={7} lg={7} sm={20} md={9} xl={7}>
                        <Label
                          eLabel=" Yield - Mound / Acer Max"
                          ulabel="  پیداوار  فی من ایکڑ"
                          index={i}
                        />

                        <Form.Item
                          name={`${i}max_yield`}
                          rules={
                            !data.max_yield && i === 0
                              ? [
                                  {
                                    required: true,
                                    message: "Please Fill",
                                  },
                                ]
                              : ""
                          }
                        >
                          <InputNumber
                            placeholder=" زیادہ سے زیادہ پیداوار"
                            className="inputnumber"
                            onChange={(event) =>
                              handleSelectChange(i, event, "max_yield")
                            }
                            name={`${i}max_yield`}
                            defaultValue={data.max_yield}
                            min={1}
                            // vale={data.Amount}
                            // value={cropscycleAmount}
                            // type="number"
                            // onChange={handleCropDisChange}
                            // type="number"
                            size="large"
                            // onChange={onChange}
                          />
                        </Form.Item>
                      </Col>

                      <Col x xs={19} span={7} lg={7} sm={20} md={9} xl={7}>
                        <Label
                          eLabel="  Yield - Mound / Acer Min"
                          ulabel="  پیداوار فی من ایکڑ"
                          index={i}
                        />

                        <Form.Item
                          name={`${i}min_yield`}
                          rules={
                            !data.min_yield && i === 0
                              ? [
                                  {
                                    required: true,
                                    message: "Please Fill",
                                  },
                                ]
                              : ""
                          }
                        >
                          <InputNumber
                            placeholder=" کم سے کم پیداوار"
                            className="inputnumber"
                            onChange={(event) =>
                              handleSelectChange(i, event, "min_yield")
                            }
                            name={`${i}min_yield`}
                            defaultValue={data.min_yield}
                            min={0}
                            max={data.max_yield ? data.max_yield - 1 : 0}
                            size="large"
                          />
                        </Form.Item>
                        {/* {max} */}
                      </Col>

                      <Col xs={19} span={7} lg={4} sm={20} md={4} xl={5}>
                        <Label
                          eLabel="  Start Date- End Date"
                          ulabel="  مہینہ"
                          index={i}
                        />
                        <Form.Item
                          name={`${i}month`}
                          rules={
                            !data.startDate && i === 0
                              ? [
                                  {
                                    required: true,
                                    message: "Please Fill Date!",
                                  },
                                ]
                              : ""
                          }
                        >
                          <RangePicker
                            className="inputnumber"
                            style={{ width: "100%" }}
                            defaultValue={data.startDate}
                            // defaultValue={initialValues.month}
                            value={data.month}
                            size="large"
                            name={`${i}month`}
                            picker="month"
                            // format="YYYY/MM/DD"
                            onChange={(event) =>
                              handleSelectChange(i, event, "month")
                            }
                          />
                        </Form.Item>
                      </Col>
                    </Row>

                    {i === 0 ? (
                      ""
                    ) : (
                      <Row justify="center">
                        <Col span={7} md={0} lg={0} xl={2}></Col>
                        <Col xs={24} span={7} lg={20} sm={20} md={20} xl={19}>
                          {" "}
                          <hr />
                        </Col>
                        <Col xs={24} span={7} lg={3} sm={3} md={3} xl={2}></Col>
                      </Row>
                    )}

                    <Row justify="center" gutter={[24, 0]}>
                      <Col span={7} md={0} lg={0} xl={0}></Col>
                      <Col
                        // style={{ marginLeft: "30px" }}
                        xs={19}
                        span={7}
                        lg={14}
                        sm={20}
                        md={15}
                        xl={15}
                      ></Col>
                      {i === cropDistribution.length - 1 ? (
                        <Col
                          className="icondiv"
                          xs={19}
                          span={7}
                          lg={6}
                          sm={6}
                          md={6}
                          xl={4}
                        >
                          <PlusCircleOutlined
                            onClick={handleDistributionAdd}
                            size="large"
                            className="icon"
                          />{" "}
                          <a onClick={handleDistributionAdd}>Add More</a>
                          {cropDistribution.length > 1 ? (
                            <>
                              <MinusCircleOutlined
                                onClick={() => handleDistributionRemove(i)}
                                fill="currentColor"
                                className="ricon"
                              />{" "}
                              <a onClick={() => handleDistributionRemove(i)}>
                                Remove{" "}
                              </a>
                            </>
                          ) : (
                            ""
                          )}
                        </Col>
                      ) : (
                        <Col
                          className="Addbutton"
                          xs={19}
                          span={7}
                          lg={4}
                          sm={6}
                          md={2}
                          xl={4}
                        ></Col>
                      )}
                    </Row>
                  </>
                ))}
              <Row gutter={[24, 0]}></Row>
              <Row>
                {" "}
                <h5 className="cropsdiss">Cattles</h5>
              </Row>
              {cattless.map((data, i) => (
                <>
                  <Row justify="center" gutter={[24, 0]}>
                    <Col span={7} md={0} lg={0} xl={0}></Col>
                    <Col
                      // style={{ marginLeft: "30px" }}
                      xs={19}
                      span={7}
                      lg={7}
                      sm={20}
                      md={6}
                      xl={7}
                    >
                      <Label eLabel="Cattles " ulabel=" مویشی" index={i} />

                      <Form.Item
                        className="username"
                        name={`${i}cattle`}
                        rules={
                          !data.Cattles && i === 0
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
                          className="userName"
                          placeholder=" مویشی"
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
                    <Col xs={19} span={7} lg={7} sm={20} md={6} xl={7}>
                      <Label eLabel="Quantity " ulabel="  تعداد" index={i} />

                      <Form.Item
                        name={`${i}quantity`}
                        rules={
                          !data.qt && i === 0
                            ? [
                                {
                                  required: true,
                                  message: "Please Fill",
                                },
                              ]
                            : ""
                        }
                      >
                        <InputNumber
                          className="inputnumber"
                          placeholder=" مقدار"
                          name={`${i}quantity`}
                          onChange={(event) =>
                            handleSelectChange(i, event, "qt")
                          }
                          defaultValue={data.qt}
                          min={1}
                          size="large"
                        />
                      </Form.Item>
                    </Col>

                    <Col
                      className="Add1button"
                      xs={19}
                      span={7}
                      lg={5}
                      sm={6}
                      md={2}
                    ></Col>
                  </Row>

                  {i === 0 ? (
                    ""
                  ) : (
                    <Row justify="center">
                      <Col span={7} md={0} lg={0} xl={0}></Col>
                      <Col xs={24} span={7} lg={20} sm={20} md={20} xl={14}>
                        {" "}
                        <hr />
                      </Col>
                      <Col xs={24} span={7} lg={3} sm={3} md={3} xl={5}></Col>
                    </Row>
                  )}
                  <Row justify="center" gutter={[24, 0]}>
                    <Col span={7} md={0} lg={0} xl={0}></Col>
                    <Col
                      // style={{ marginLeft: "30px" }}
                      xs={19}
                      span={7}
                      lg={7}
                      sm={20}
                      md={6}
                      xl={6}
                    ></Col>
                    {i === cattless.length - 1 ? (
                      <Col
                        className="icondiv"
                        xs={19}
                        span={7}
                        lg={4}
                        sm={6}
                        md={2}
                      >
                        <PlusCircleOutlined
                          onClick={addCattles}
                          size="large"
                          className="icon"
                        />{" "}
                        <a onClick={addCattles}>Add More</a>
                        {cattless.length > 1 ? (
                          <>
                            <MinusCircleOutlined
                              onClick={() => removeCattle(i)}
                              fill="currentColor"
                              className="ricon"
                            />{" "}
                            <a onClick={() => removeCattle(i)}>Remove </a>
                          </>
                        ) : (
                          ""
                        )}
                      </Col>
                    ) : (
                      <Col
                        className="Add1button"
                        xs={19}
                        span={7}
                        lg={4}
                        sm={6}
                        md={2}
                      ></Col>
                    )}
                  </Row>
                </>
              ))}

              <Row gutter={[0, 24]} className="">
                <Col xs={2} sm={18} md={18} lg={20} xl={18}></Col>

                <Col xs={20} sm={5} md={5} lg={1} xl={6} className="d-flex">
                  <Button
                    className="backbtnStyle"
                    onClick={() => handleStep("1")}
                    type="primary"
                    shape="round"
                    size="large"
                  >
                    Back
                  </Button>
                  <Button
                    className="nextbtn"
                    htmlType="submit"
                    type="primary"
                    shape="round"
                    size="large"
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

export default CropsDistribution;
