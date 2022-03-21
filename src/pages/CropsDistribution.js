import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";
import "./required.css";
import {
  Row,
  Col,
  Card,
  Statistic,
  Input,
  Select,
  Form,
  InputNumber,
  DatePicker,
  Space,
  Button,
  List,
  Descriptions,
  Avatar,
} from "antd";
// import { useNavigate } from 'react-router-dom';
import Header from "./header";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
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
  const {
    crops,
    cropsAmount,
    commodities,
    cropsCycle,
    cropscycleType,
    cropscycleAmount,
    cattles,
    Land,
    cattlesAmount,
    date,
  } = initialValues;

  const [Fruits, setFruits] = useState(true);
  const [Sabziyaat, setSabziyaat] = useState(false);
  const [cropCycle, setcropCycle] = useState([
    {
      Commodity: "",
      Maize: "",
      Maize2: "",
      Potato: "",
    },
  ]);
  const { RangePicker } = DatePicker;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const history=useHistory()
  const { Option } = Select;
  // console.log("max", cropDistribution[0].max_yield);

  const monthchange = (i) => {
    alert(i);
  };
  const handleRemoveClick = (index) => {
    const list = [...cropCycle];
    list.splice(index, 1);
    setcropCycle(list);
  };

  function handleMode(value) {
    if (value === "fruits") {
      setFruits(true);
    } else {
      setFruits(false);
    }
  }

  function handleAdd() {
    setcropCycle([
      ...cropCycle,
      { Commodity: "", Maize: "", Maize2: "", Potato: "" },
    ]);
  }


  function onChange1(value, dateString) {
    console.log("Selected Time: ", value[0]._d);
    let abc = moment(value[0]._d).format("MM/DD/YYYY");
    console.log("Selected Time =========: ", abc);
    console.log("Formatted Selected Time: ", dateString);
  }
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
    handleSelectChange()
    handleStep("3");
  }
  function handleDate(date, dateString) {
    console.log(date, dateString);
  }
  const cerealCrops = [
    { value: "Wheat", lable: "Wheat" },
    { value: "Barley", lable: "Barley" },
    { value: "Maize", lable: "Maize" },
    { value: "Great Millet", lable: "Great Millet" },
    { value: "Pearl Millet", lable: "Pearl Millet" },
  ];

  return (
    <div>
      <Header />
      <Row style={{ marginBottom: "100px" }} justify="center">
        <Col xs={24} lg={22} xl={17} className="mb-24">
          <Form onFinish={handleSubmit}>
            <Card
              // c  lassName="payment-method-card"
              className="formBody"
              title={
                <>
                  <Row
                    
                    // gutter={[0, 24]}
                    className="title"
                  >
                   
                    <h2 className="font-semibold m-0"  style={{marginLeft:"20px"}} > Crops Distribution / Cycle</h2>
                  
                  </Row>
                 
                </>
              }
              headStyle={{backgroundColor: '#96CC5C', borderRadius:" 20px 20px 0px 0px" }}
            >
              <Row justify="center" gutter={[24, 0]}>
                {" "}
                <Col span={7} md={1} xs={0} xl={0}></Col>{" "}
                <Col xs={19} span={7} lg={7} sm={20} md={9} xl={7}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>
                      Total Land (Acers){" "}
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "large",
                          width: "100%",
                        }}
                      >
                        {" "}
                        *
                      </span>{" "}
                    </span>
                    <span style={{ fontSize: "1rem", marginRight: "5px" }}>
                      {" "}
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "large",
                        }}
                      >
                        {" "}
                        *
                      </span>{" "}
                      کل زمین - ایکڑ
                    </span>

                    {/* </label>  */}
                  </div>
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
                      placeholder="Total Land  -  کل زمین - ایکڑ"
                      style={{
                        color: "black",
                        fontWeight: "normal",
                        width: "100%",
                      }}
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
                <Col
              
                  xs={19}
                  span={7}
                  lg={5}
                  sm={20}
                  md={6}
                  xl={5}
                ></Col>
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
                        // style={{ marginLeft: "15px" }}
                        xs={19}
                        span={7}
                        lg={7}
                        sm={20}
                        md={6}
                        xl={7}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                         
                          <span>
                            Crops {i===0? "":i}
                          { i===0? <span
                              style={{
                                color: "red",
                                fontWeight: "bold",
                                fontSize: "large",
                              }}
                            >
                          
                              *
                            </span>:""}
                          </span>
                          <span
                            style={{ fontSize: "1rem", marginRight: "5px" }}
                          >
                        
                           {i===0? <span
                              style={{
                                color: "red",
                                fontWeight: "bold",
                                fontSize: "large",
                              }}
                            >
                             
                              *
                            </span>:""}
                            فصلیں 
                          </span>

                        </div>
                        <Form.Item
                          id={i}
                          className="username"
                          style={{ content: "*", color: "red" }}
                          name={`${i}crops`}
                          value={data.crops}
                          rules={
                            !data.crops&&i===0
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
                            // onBlur={(event) =>
                            //   handleSelectChange(i,)}

                            onChange={(event) =>
                              handleSelectChange(i, event, "crops")
                            }
                            showSearch
                            filterOption={
                              (input, option) =>
                                option.value
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              // console.log(input,"-----",option)
                            }
                            name={`${i}crops`}
                            placeholder="Select Crops -  فصلوں کو منتخب کریں"
                            // id={i}
                            // onSelect={(value, event,i) =>
                            //   handleSelect("crops", event,i)
                            // }
                            size="large"
                            defaultValue={data.crops?data.crops:undefined}
                          >
                            {Crops.map((data) => (
                              <Option id={i} key={data.value}>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p>{data.lable}</p>
                                  <p>{data.ulabel}</p>
                                </div>
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col
                        // style={{ marginLeft: "10px" }}
                        xs={19}
                        span={7}
                        lg={7}
                        sm={20}
                        md={6}
                        xl={7}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          {/* <label
                    htmlFor="contact"
                     className="col-12 col-form-label fw-500"
                      style={{fontWeight:"bold"}}
                  >  */}
                          <span>
                            Commodities{" "}
                           { i===0?<span
                              style={{
                                color: "red",
                                fontWeight: "bold",
                                fontSize: "large",
                              }}
                            >
                              {" "}
                              *
                            </span>:""}{" "}
                          </span>
                          <span
                            style={{ fontSize: "1rem", marginRight: "5px" }}
                          >
                            {" "}
{                            i===0?<span
                              style={{
                                color: "red",
                                fontWeight: "bold",
                                fontSize: "large",
                              }}
                            >
                              {" "}
                              *
                            </span>:""}{" "}
                            اشیاء
                          </span>

                          {/* </label>  */}
                        </div>
                        <Form.Item
                          style={{ content: "*", color: "red" }}
                          className="username "
                          name={`${i}commodities`}
                          rules={
                            !data.commodities&&i===0
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
                            defaultValue={data.commodities?data.commodities:undefined}
                          >
                            {valuues &&
                              valuues.map((data) => (
                                <Option id={i} key={data.value}>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <p>{data.value}</p>
                                    <p>{data.ulabel}</p>
                                  </div>
                                </Option>
                              ))}
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col xs={19} span={7} lg={4} sm={20} md={6} xl={5}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          {/* <label
                    htmlFor="contact"
                     className="col-12 col-form-label fw-500"
                      style={{fontWeight:"bold"}}
                  >  */}
                          <span>
                            Area{" "}
                        {i===0?    <span
                              style={{
                                color: "red",
                                fontWeight: "bold",
                                fontSize: "large",
                              }}
                            >
                              {" "}
                              *
                            </span>:""}{" "}
                          </span>
                          <span
                            style={{ fontSize: "1rem", marginRight: "5px" }}
                          >
                            {" "}
                           {i===0? <span
                              style={{
                                color: "red",
                                fontWeight: "bold",
                                fontSize: "large",
                              }}
                            >
                              {" "}
                              *
                            </span>:""}{" "}
                            رقبہ - ایکڑ
                          </span>

                          {/* </label>  */}
                        </div>
                        <Form.Item
                          name={`${i}area`}
                          id={i}
                          rules={
                            !data.area&&i===0
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
                            placeholder="Area - رقبہ"
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
                      {/* <Col
                        className="Addbutton"
                        xs={19}
                        span={7}
                        lg={5}
                        sm={6}
                        md={2}
                        xl={4}
                      ></Col> */}
                    </Row>

                    {/* </Card> */}
                    <Row justify="center">
                      <Col sm={11} xs={11}></Col>
                    </Row>

                    {/* {cropCycle.map((data, i) => (
                <> */}

                    {/* <Row>  <h5 className="cropsdis" >Crops Cycle</h5></Row> */}

                    <Row justify="center" gutter={[24, 0]}>
                      <Col span={7} md={1} lg={0}></Col>
                      <Col
                        // style={{ marginLeft: "10px" }}
                        xs={19}
                        span={7}
                        lg={7}
                        sm={20}
                        md={9}
                        xl={7}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          {/* <label
                    htmlFor="contact"
                     className="col-12 col-form-label fw-500"
                      style={{fontWeight:"bold"}}
                  >  */}
                          <span>
                            Yield - Mound / Acer Max{" "}
                           {i===0? <span
                              style={{
                                color: "red",
                                fontWeight: "bold",
                                fontSize: "large",
                              }}
                            >
                              {" "}
                              *
                            </span>:""}{" "}
                          </span>
                          <span
                            style={{ fontSize: "1rem", marginRight: "5px" }}
                          >
                            {" "}
                           {i===0? <span
                              style={{
                                color: "red",
                                fontWeight: "bold",
                                fontSize: "large",
                              }}
                            >
                              {" "}
                              *
                            </span>:""}{" "}
                            پیداوار  فی من ایکڑ{" "}
                          </span>

                          {/* </label>  */}
                        </div>
                        <Form.Item
                          name={`${i}max_yield`}
                          rules={
                            !data.max_yield&&i===0
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
                            placeholder="Max Yeild - زیادہ سے زیادہ پیداوار"
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

                      <Col
                        // style={{ marginLeft: "10px " }}
                        x
                        xs={19}
                        span={7}
                        lg={7}
                        sm={20}
                        md={9}
                        xl={7}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          {/* <label
                    htmlFor="contact"
                     className="col-12 col-form-label fw-500"
                      style={{fontWeight:"bold"}}
                  >  */}
                          <span>
                            Yield - Mound / Acer Min{" "}
                           {i==0? <span
                              style={{
                                color: "red",
                                fontWeight: "bold",
                                fontSize: "large",
                              }}
                            >
                              {" "}
                              *
                            </span>:""}{" "}
                          </span>
                          <span
                            style={{ fontSize: "1rem", marginRight: "5px" }}
                          >
                            {" "}
                         {i===0 ?  <span
                              style={{
                                color: "red",
                                fontWeight: "bold",
                                fontSize: "large",
                              }}
                            >
                              {" "}
                              *
                            </span>:""}{" "}
                            پیداوار فی من ایکڑ{" "}
                          </span>

                          {/* </label>  */}
                        </div>
                        <Form.Item
                          name={`${i}min_yield`}
                          rules={
                            !data.min_yield&&i===0
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
                            placeholder="Min Yeild - زیادہ سے زیادہ پیداوار"
                          className="inputnumber"
                            onChange={(event) =>
                              handleSelectChange(i, event, "min_yield")
                            }
                            name={`${i}min_yield`}
                            defaultValue={data.min_yield}
                            // maxLength={data.max_yield.length - 1}
                            // vale={data.Amount}
                            // value={data.min_yield}
                            // onChange={handleCropDisChange}
                            // type="number"
                            // min={12}
                            min={0}
                            max={data.max_yield - 1}
                            size="large"
                            // onChange={onChange}
                          />
                        </Form.Item>
                        {/* {max} */}
                      </Col>

                      <Col xs={19} span={7} lg={4} sm={20} md={4} xl={5}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <span>
                            Start Date- End Date{" "}
                            {i===0?<span
                              style={{
                                color: "red",
                                fontWeight: "bold",
                                fontSize: "large",
                              }}
                            >
                              {" "}
                              *
                            </span>:""}{" "}
                          </span>
                          <span
                            style={{ fontSize: "1rem", marginRight: "5px" }}
                          >
                            {" "}
                            {i===0?<span
                              style={{
                                color: "red",
                                fontWeight: "bold",
                                fontSize: "large",
                              }}
                            >
                              {" "}
                              *
                            </span>:""}{" "}
                            مہینہ
                          </span>

                          {/* </label>  */}
                        </div>

                        <Form.Item
                          name={`${i}month`}
                          rules={
                            !data.startDate&&i===0
                              ? [
                                  {
                                    required: true,
                                    message: "Please Fill Date!",
                                  },
                                ]
                              : ""
                          }
                        >
                          {/* <div className="dflex">
                          <DatePicker
                          //  disabledDate={disabledStartDate}
                           picker="month"
                           defaultValue={data.startDate}
                           onChange={(event) =>
                            handleSelectChange(i, event, "start")
                          }
                          //  value={data.startDate}
                           placeholder="Start Month"
                          //  onOpenChange={this.handleStartOpenChange}
                          />
                           <DatePicker
                           disabledDate={disabledEndDate}
                           picker="month"
                           defaultValue={data.startDate}
                          //  value={data.startDate}
                          onChange={(event) =>
                            handleSelectChange(i, event, "end")
                          }
                           placeholder="End Month"
                          />
                          </div> */}
                        
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

                     {/* <Col
                        xs={19}
                        span={7}
                        lg={4}
                        sm={6}
                        md={2}
                        xl={4}
                      >
                      </Col> 
                      */}
                  
                    </Row>
                      
                    {i===0  ? "":  <Row justify="center" >
                    <Col span={7} md={0} lg={0} xl={2}></Col>
                   <Col   xs={24}
                      span={7}
                      lg={20}
                      sm={20}
                      md={20}
                       xl={19}> <hr/></Col>
                       <Col  xs={24}
                      span={7}
                      lg={3}
                      sm={3}
                      md={3}
                       xl={2}></Col>
                    </Row>}
                    
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
                    >
                    
                    </Col>
                    {i===cropDistribution.length-1?  <Col
                        className="icondiv"
                        xs={19}
                        span={7}
                        lg={6}
                        sm={6}
                        md={6}
                        xl={4}
                      >
                     
                        <PlusCircleOutlined onClick={handleDistributionAdd}
                  size="large" className="icon"   /> <a onClick={handleDistributionAdd}>add more</a>
                        
                        {cropDistribution.length > 1 ? (
                          
                            <>
                            <MinusCircleOutlined onClick={()=>handleDistributionRemove(i)} fill="currentColor" className="ricon"/> <a onClick={()=>handleDistributionRemove(i)}>Remove </a></>
                          
                        ) : (
                          ""
                        )}
                      </Col>: <Col
                        className="Addbutton"
                        xs={19}
                        span={7}
                        lg={4}
                        sm={6}
                        md={2}
                        xl={4}
                      ></Col>}
                    
                    {/* <Col xs={19} span={7} lg={4} sm={20} md={2} xl={2}></Col> */}
                  
 
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
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                           {/* <label
                      htmlFor="contact"
                        className="col-12 col-form-label fw-500"
                               style={{fontWeight:"bold"}}
                        >  */}
                        <span>
                          Cattles {i===0?   "":i}
                         {i===0? <span
                            style={{
                              color: "red",
                              fontWeight: "bold",
                              fontSize: "large",
                            }}
                          >
                            {" "}
                            *
                          </span>:""}{" "}
                       </span>
                        <span style={{ fontSize: "1rem", marginRight: "5px" }}>
                          {" "}
                          {i===0?   <span
                            style={{
                              color: "red",
                              fontWeight: "bold",
                              fontSize: "large",
                            }}
                          >
                            {" "}
                            *
                          </span>:""}{" "}
                          مویشی
                        </span>

                        {/* </label>  */}
                      </div>
                      <Form.Item
                        className="username"
                        name={`${i}cattle`}
                        rules={
                          !data.Cattles&&i===0
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
                    <Col xs={19} span={7} lg={7} sm={20} md={6} xl={7}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>
                          Quantity{" "}
                         {i===0? <span
                            style={{
                              color: "red",
                              fontWeight: "bold",
                              fontSize: "large",
                            }}
                          >
                            {" "}
                            *
                          </span>:""}{" "}
                        </span>
                        <span style={{ fontSize: "1rem", marginRight: "5px" }}>
                          {" "}
                         {i===0? <span
                            style={{
                              color: "red",
                              fontWeight: "bold",
                              fontSize: "large",
                            }}
                          >
                            {" "}
                            *
                          </span>:""}{" "}
                          تعداد
                        </span>

                        {/* </label>  */}
                      </div>
                      <Form.Item
                        name={`${i}quantity`}
                        rules={
                          !data.qt&&i===0
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
                          placeholder="Quantity - مقدار"
                          name={`${i}quantity`}
                          onChange={(event) =>
                            handleSelectChange(i, event, "qt")
                          }
                          defaultValue={data.qt}
                          // vale={data.Amount}
                          min={1}
                          size="large"
                          // onChange={handleCropDisChange}
                          // type="number"
                          style={{
                            width: "100%",
                            color: "black",
                            fontWeight: "normal",

                            // height: "40px",
                          }}
                          // onChange={onChange}
                        />
                      </Form.Item>
                    </Col>
                    
                    {/* <Col xs={19} span={7} lg={4} sm={20} md={4} xl={5}></Col> */}
                  
                    <Col
                      className="Add1button"
                      xs={19}
                      span={7}
                      lg={5}
                      sm={6}
                      md={2}
                    >  
                  
                   </Col>
                  </Row>

                  {i===0  ? "":  <Row justify="center" >
                    <Col span={7} md={0} lg={0} xl={0}></Col>
                   <Col   xs={24}
                      span={7}
                      lg={20}
                      sm={20}
                      md={20}
                       xl={14}> <hr/></Col>
                       <Col  xs={24}
                      span={7}
                      lg={3}
                      sm={3}
                      md={3}
                       xl={5}></Col>
                    </Row>}
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
                    >
                      
                    </Col>
                    {i===cattless.length-1 ?
                    <Col
                      className="icondiv"
                      xs={19}
                      span={7}
                      lg={4}
                      sm={6}
                      md={2}
                    >  
                 
                  
                  <PlusCircleOutlined onClick={addCattles}
                  size="large" className="icon"   /> <a onClick={addCattles}>add more 
                  </a>
                 
                   {cattless.length > 1?
                  
                    <>
                    <MinusCircleOutlined onClick={()=>removeCattle(i)} fill="currentColor" className="ricon"/> <a onClick={()=>removeCattle(i)}>Remove </a></>
                    :""}</Col>:<Col   className="Add1button"
                      xs={19}
                      span={7}
                      lg={4}
                      sm={6}
                      md={2}></Col>}
                    
                    {/* <Col xs={19} span={7} lg={4} sm={20} md={4} xl={5}></Col> */}
                   
                  </Row>

                  
                </>
              ))}
                
              <Row
                gutter={[0, 24]}
                className=""
              >
                <Col xs={2} sm={18} md={18} lg={20} xl={18}>
                 
                </Col>

                <Col
                 
                  xs={20}
                  sm={5}
                  md={5}
                  lg={1}
                  xl={6}
                  className="d-flex"
                >
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
