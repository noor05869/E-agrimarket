import React from "react";
import { useState } from "react";
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
function CropsDistribution({
  handleStep,
  initialValues,
  handleChange,
  handleSelect,
  handleDisAdd,
  cropDistribution,
  handleDistributionAdd,
  handleDistributionRemove,
  valuues,
  handleSelectChange,
  handleSchange,
  addCattles,
  removeCattle,
  cattless
}) {
  const {
    crops,
    cropsAmount,
    cropstype,
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
  const onBlur = () => {
    const { value, onBlur, onChange } = this.props;
    let valueTemp = value;
    if (value.charAt(value.length - 1) === "." || value === "-") {
      valueTemp = value.slice(0, -1);
    }
  };

  // const history=useHistory()
  const { Option } = Select;

  const [Cattles, setcattles] = useState([
    {
      cattles: "",
      qunatity: "",
    },
  ]);
  

 
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
  const Crops = [
    { value: "Fruits", lable: "Fruits", ulabel: "پھل" },
    { value: "Vegetables", lable: "Vegetables", ulabel: "سبزیاں" },
    { value: "FoodLegumes", lable: "Food Legumes", ulabel: "کھانے کی پھلیاں" },
    { value: "CEREALCROPS", lable: "CEREAL CROPS", ulabel: "اناج کی فصلیں" },
    {
      value: "OilSeedCrops",
      lable: "Oil Seed Crops",
      ulabel: "تیل کے بیجوں کی فصلیں",
    },
    { value: "ForageCrops", lable: "Forage Crops", ulabel: "چارے کی فصل" },
    { value: "SugarCrops", lable: "Fiber Crops", ulabel: "چینی کی فصلیں" },
  ];
  function handleSubmit(values) {
    console.log(values);
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
      <Row style={{marginBottom:"100px"}} justify="center">
        <Col xs={24} lg={20} className="mb-24">
          <Form onFinish={handleSubmit}>
            <Card
              style={{ background: "#e7e7e7", borderRadius: "20px" }}
              // c  lassName="payment-method-card"
              className="header-solid h-full ant-card-p-0"
              title={
                <>
                  <Row
                    gutter={[24, 0]}
                    className="ant-row-flex ant-row-flex-middle"
                  >
                    <Col xs={24} md={6}></Col>
                    <Col xs={18} md={8} className="d-flex">
                      <h2 className="font-semibold m-0"> E-Agri Form</h2>
                    </Col>
                  </Row>
                  {/* <Row
                    justify='center'
                  >
                    <Col xs={24} md={7}></Col>
                    <Col xs={16} md={7} className="">
                     
                      <h4  >Farmers Data</h4>
                    </Col>
                  </Row> */}
                </>
              }
            >
              <Row>
                {" "}
                <Col span={7} md={1}></Col>{" "}
                <Col className="land" xs={18} span={7} lg={6} sm={20} md={5}>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                   {/* <label
                    htmlFor="contact"
                     className="col-12 col-form-label fw-500"
                      style={{fontWeight:"bold"}}
                  >  */}
                     <span>Total Land (Acers)  <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "large",
                        width:"100%"
                      }}
                    >
                      {" "}
                      *
                    </span> </span><span style={{fontSize:"1rem",marginRight:"5px"}}> <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "large",
                      }}
                    >
                      {" "}
                      *
                    </span> (ایکڑ) کل زمین</span>
                     
                    
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
                      style={{ color: "black", fontWeight: "normal" }}
                      onChange={handleChange}
                      name="Land"
                      defaultValue={Land}
                      min={1}
                      // vale={data.Amount}
                      value={Land}
                      type="number"
                      // onChange={handleCropDisChange}
                      // type="number"
                      size="large"
                      // onChange={onChange}
                    />
                  </Form.Item>
                </Col>
              </Row>
              {/* <Card
              // style={{borderBottom:"outset",background:"initial"}}
               bordered={false}  >
             */}
                      <h5 className="cropsdis">Crops Distribution / Cycle</h5>
              {cropDistribution &&
                cropDistribution.map((data, i) => (
                  <>
                    <Row>
                      {" "}
                    </Row>
                    <Row
                      key={i}
                      gutter={[24, 0]}
                      span={24}
                      style={{ border: "black" }}
                      justify="center"
                    >
                      <Col span={7} md={1}></Col>
                      <Col
                        key={i}
                        style={{ marginLeft: "15px" }}
                        xs={20}
                        span={7}
                        lg={6}
                        sm={20}
                        md={5}
                      >
                          <div style={{display:"flex",justifyContent:"space-between"}}>
                   {/* <label
                    htmlFor="contact"
                     className="col-12 col-form-label fw-500"
                      style={{fontWeight:"bold"}}
                  >  */}
                     <span>Crops  <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "large",
                      }}
                    >
                      {" "}
                      *
                    </span> </span><span style={{fontSize:"1rem",marginRight:"5px"}}> <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "large",
                      }}
                    >
                      {" "}
                      *
                    </span> فصلیں</span>
                     
                    
                    {/* </label>  */}
                  </div> 
                        <Form.Item
                          id={i}
                          className="username"
                          style={{ content: "*", color: "red" }}
                         name={`${i}crops`}
                          value={data.crops}
                          rules={
                            !data.crops
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
                            // id={i}
                            // onSelect={(value, event,i) =>
                            //   handleSelect("crops", event,i)
                            // }
                            size="large"
                            defaultValue={data.crops}
                          >
                            {Crops.map((data) => (
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
                      <Col
                        style={{ marginLeft: "10px" }}
                        xs={20}
                        span={7}
                        lg={6}
                        sm={20}
                        md={4}
                      >
                           <div style={{display:"flex",justifyContent:"space-between"}}>
                   {/* <label
                    htmlFor="contact"
                     className="col-12 col-form-label fw-500"
                      style={{fontWeight:"bold"}}
                  >  */}
                     <span>Commodities  <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "large",
                      }}
                    >
                      {" "}
                      *
                    </span> </span><span style={{fontSize:"1rem",marginRight:"5px"}}> <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "large",
                      }}
                    >
                      {" "}
                      *
                    </span> اشیاء</span>
                     
                    
                    {/* </label>  */}
                  </div> 
                        <Form.Item
                          style={{ content: "*", color: "red" }}
                          className="username "
                          name={`${i}cropstype`}
                          rules={
                            !data.cropstype
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
                            name={`${i}cropstype`}
                            onChange={(event) =>
                              handleSelectChange(i, event, "cropstype")
                            }
                            showSearch
                            
                            size="large"
                            filterOption={(input, option) =>
                              option.value
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                            // onSelect={(value, event) =>
                            //   handleSelect("cropstype", event)
                            // }
                            defaultValue={data.cropstype}
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
                      <Col xs={19} span={7} lg={6} sm={17} md={4}>
                      <div style={{display:"flex",justifyContent:"space-between"}}>
                   {/* <label
                    htmlFor="contact"
                     className="col-12 col-form-label fw-500"
                      style={{fontWeight:"bold"}}
                  >  */}
                     <span>Area  <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "large",
                      }}
                    >
                      {" "}
                      *
                    </span> </span><span style={{fontSize:"1rem",marginRight:"5px"}}> <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "large",
                      }}
                    >
                      {" "}
                      *
                    </span>  (ایکڑ) رقبہ</span>
                     
                    
                    {/* </label>  */}
                  </div> 
                        <Form.Item
                              name={`${i}Area`}

                          id={i}
                          rules={
                            !data.Area
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
                            style={{ color: "black", fontWeight: "normal" }}
                            onChange={(event) =>
                              handleSelectChange(i, event, "Area")
                            }
                            name={`${i}Area`}
                            id={i}
                            defaultValue={data.Area}
                            min={1}
                            vale={data.Area}
                            // value={data.Area}
                            type="number"
                            // onChange={handleCropDisChange}
                            // type="number"
                            size="large"
                            // onChange={onChange}
                          />
                        </Form.Item>
                      </Col>
                      <Col
                        className="Addbutton"
                        xs={19}
                        span={7}
                        lg={4}
                        sm={6}
                        md={4}
                      >
                        {/* {cropDistribution.length>1?  <Button
                      style={{background:"#dc3545",border:"none"}}
                        onClick={() => handleDistributionRemove(i)}
                        disabled={cropDistribution.length > 1 ? false : true}
                        type="primary"
                      >
                        Remove
                      </Button>:""}
                      <Button
                        type="primary"
                        onClick={handleDistributionAdd}
                        style={{
                          marginBottom: "20px",
                          marginLeft: "5px",
                          border: "none",
                        }}
                      >
                        ADD
                      </Button>] */}
                      </Col>
                    </Row>

                    {/* </Card> */}
                    <Row justify="center">
                      <Col sm={11} xs={11}></Col>
                    </Row>

                    {/* {cropCycle.map((data, i) => (
                <> */}

                    {/* <Row>  <h5 className="cropsdis" >Crops Cycle</h5></Row> */}
                    <Row justify="center" gutter={[24, 0]}>
                      <Col span={7} md={1}></Col>
                      <Col
                        style={{ marginLeft: "10px" }}
                        xs={19}
                        span={7}
                        lg={6}
                        sm={20}
                        md={4}
                      >
                         <div style={{display:"flex",justifyContent:"space-between"}}>
                   {/* <label
                    htmlFor="contact"
                     className="col-12 col-form-label fw-500"
                      style={{fontWeight:"bold"}}
                  >  */}
                     <span>Yield - Mound / Acer Max  <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "large",
                      }}
                    >
                      {" "}
                      *
                    </span> </span><span style={{fontSize:"1rem",marginRight:"5px"}}> <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "large",
                      }}
                    >
                      {" "}
                      *
                    </span>  پیداوار منڈ فی ایکڑ </span>
                     
                    
                    {/* </label>  */}
                  </div> 
                        <Form.Item
                           name={`${i}yeildMax`}
                          rules={
                            !data.yeildMax
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
                            style={{ color: "black", fontWeight: "normal" }}
                            onChange={(event) =>
                              handleSelectChange(i, event, "yeildMax")
                            }
                            name={`${i}yeildMax`}
                            defaultValue={data.yeildMax}
                            min={1}
                            // vale={data.Amount}
                            // value={cropscycleAmount}
                            type="number"
                            // onChange={handleCropDisChange}
                            // type="number"
                            size="large"
                            // onChange={onChange}
                          />
                        </Form.Item>
                      </Col>

                      <Col
                        style={{ marginLeft: "10px " }}
                        x
                        xs={19}
                        span={7}
                        lg={6}
                        sm={20}
                        md={4}
                      >
                          <div style={{display:"flex",justifyContent:"space-between"}}>
                   {/* <label
                    htmlFor="contact"
                     className="col-12 col-form-label fw-500"
                      style={{fontWeight:"bold"}}
                  >  */}
                     <span>Yield - Mound / Acer Min  <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "large",
                      }}
                    >
                      {" "}
                      *
                    </span> </span><span style={{fontSize:"1rem",marginRight:"5px"}}> <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "large",
                      }}
                    >
                      {" "}
                      *
                    </span>  پیداوار منڈ فی ایکڑ </span>
                     
                    
                    {/* </label>  */}
                  </div> 
                        <Form.Item
                          name={`${i}yeildMin`}
                          rules={
                            !data.yeildMin
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
                            style={{ color: "black", fontWeight: "normal" }}
                            onChange={(event) =>
                              handleSelectChange(i, event, "yeildMin")
                            }
                            name={`${i}yeildMin`}
                            defaultValue={data.yeildMin}
                            min={1}
                            // vale={data.Amount}
                            value=""
                            type="number"
                            // onChange={handleCropDisChange}
                            // type="number"
                            size="large"
                            // onChange={onChange}
                           
                          />
                        </Form.Item>
                      </Col>

                      <Col xs={19} span={7} lg={6} sm={20} md={4}>
                      <div style={{display:"flex",justifyContent:"space-between"}}>
                   {/* <label
                    htmlFor="contact"
                     className="col-12 col-form-label fw-500"
                      style={{fontWeight:"bold"}}
                  >  */}
                     <span>Month  <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "large",
                      }}
                    >
                      {" "}
                      *
                    </span> </span><span style={{fontSize:"1rem",marginRight:"5px"}}> <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "large",
                      }}
                    >
                      {" "}
                      *
                    </span> مہینہ</span>
                     
                    
                    {/* </label>  */}
                  </div> 

                        <Form.Item
                             name={`${i}month`}
                          rules={
                            !data.month
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
                            defaultValue={data.month}
                            name={`${i}month`}
                            picker="month"
                            onChange={(event) =>
                              handleSelectChange( i, event,"month")
                            }
                            // onChange={(value, event) =>
                            //   handleSelect("date", value)
                            // }
                            size="large"
                          />
                        </Form.Item>
                      </Col>

                      <Col
                        className="Addbutton"
                        xs={19}
                        span={7}
                        lg={4}
                        sm={6}
                        md={2}
                      >
                        <Button
                          type="primary"
                          onClick={handleDistributionAdd}
                          style={{
                            marginBottom: "20px",
                            marginLeft: "5px",
                            border: "none",
                            background:"#273A9E",border:"none"
                          }}
                        >
                          ADD
                        </Button>
                        {cropDistribution.length > 1 ? (
                          <Button
                            style={{
                              background: "#dc3545",
                              border: "none",
                              marginLeft: "5px",
                              
                            }}
                            onClick={() => handleDistributionRemove(i)}
                            disabled={
                              cropDistribution.length > 1 ? false : true
                            }
                            type="primary"
                          >
                            Remove
                          </Button>
                        ) : (
                          ""
                        )}
                      </Col>
                    </Row>
                    {/* </>
              ))} */}
                  </>
                ))}
              <Row gutter={[24, 0]}></Row>
              <Row>
                    {" "}
                    <h5 className="cropsdis">Cattles</h5>
                  </Row>
              {cattless.map((data, i) => (
                <>
                

                  <Row justify="center" gutter={[24, 0]}>
                    <Col span={7} md={1}></Col>
                    <Col
                      // style={{ marginLeft: "30px" }}
                      xs={19}
                      span={7}
                      lg={6}
                      sm={20}
                      md={6}
                    >
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                   {/* <label
                    htmlFor="contact"
                     className="col-12 col-form-label fw-500"
                      style={{fontWeight:"bold"}}
                  >  */}
                     <span>Cattles  <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "large",
                      }}
                    >
                      {" "}
                      *
                    </span> </span><span style={{fontSize:"1rem",marginRight:"5px"}}> <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "large",
                      }}
                    >
                      {" "}
                      *
                    </span> مویشی</span>
                     
                    
                    {/* </label>  */}
                  </div> 
                      <Form.Item
                        className="username"
                        name={`${i}cattle`}
                        rules={
                          !data.cattle
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
                          name={`${i}cattle`}

                          onChange={(event) =>
                            handleSelectChange(i, event, "cattle")
                          }
                          defaultValue={data.cattle}
                        >
                          <Option key="Buffalo">Buffalo</Option>
                          <Option key="Goat">Goat</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col
                      className="quantity"
                      style={{marginLeft:"5px"}}
                      xs={19}
                      span={7}
                      lg={6}
                      sm={20}
                      md={6}
                    >
                       <div style={{display:"flex",justifyContent:"space-between"}}>
                   {/* <label
                    htmlFor="contact"
                     className="col-12 col-form-label fw-500"
                      style={{fontWeight:"bold"}}
                  >  */}
                     <span>Quantity  <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "large",
                      }}
                    >
                      {" "}
                      *
                    </span> </span><span style={{fontSize:"1rem",marginRight:"5px"}}> <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "large",
                      }}
                    >
                      {" "}
                      *
                    </span> تعداد</span>
                     
                    
                    {/* </label>  */}
                  </div> 
                      <Form.Item
                        name={`${i}quantity`}
                        rules={
                          !data.quantity
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
                             name={`${i}quantity`}
                           
                             onChange={(event) =>
                              handleSelectChange(i, event, "quantity")
                            }
                          defaultValue={data.quantity}
                          // vale={data.Amount}
                          min={1}
                          
                          // onChange={handleCropDisChange}
                          type="number"
                          style={{
                            width: "100%",
                            color: "black",
                            fontWeight: "normal",

                            height: "40px",
                          }}
                          // onChange={onChange}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={19} span={7} lg={6} sm={20} md={4}></Col>
                    <Col
                        className="Add1button"
                        xs={19}
                        span={7}
                        lg={4}
                        sm={6}
                        md={2}
                      >
                        <Button
                          type="primary"
                          onClick={addCattles}
                          style={{
                            marginBottom: "30px",
                            marginLeft: "5px",
                            border: "none",
                            background:"#273A9E",border:"none"
                          }}
                        >
                          ADD
                        </Button>
                        {cattless.length > 1 ? (
                          <Button
                            style={{
                              background: "#dc3545",
                              border: "none",
                              marginLeft: "5px",
                            }}
                            onClick={() => removeCattle(i)}
                            disabled={
                              cattless.length > 1 ? false : true
                            }
                            type="primary"
                          >
                            Remove
                          </Button>
                        ) : (
                          ""
                        )}
                      </Col>
                  </Row>
                </>
              ))}
              <Row
                gutter={[24, 0]}
                className="ant-row-flex ant-row-flex-middle"
              >
                <Col xs={24} sm={5} md={5} lg={3}>
                  <h6 className="font-semibold m-0"> </h6>
                </Col>

                <Col  style={{marginLeft:"5px"}}xs={24} sm={5} md={5} lg={1} className="d-flex">
                  <Button
                  
                    className="cropsRButton"
                    
                    onClick={() => handleStep("1")}
                    type="primary"
                  >
                    Back
                  </Button>
                  <Button
                    //  onClick={()=>history.push("/form3")}
                    style={{background:"#273A9E",border:"none"}}
                    htmlType="submit"
                    type="primary"
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
