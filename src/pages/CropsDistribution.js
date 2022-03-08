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
}) {
  const {
    crops,
    cropsAmount,
    cropstype,
    cropsCycle,
    cropscycleType,
    cropscycleAmount,
    cattles,Land,
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

  const [cropDistribution, setcropDistribution] = useState([
    {
      cropDistribution: "",
      Amount: "",
    },
  ]);
  // const history=useHistory()
  const { Option } = Select;
  const fruits = [
    { value: "Fruits", lable: "Fruits" },
    { value: "Citrus", lable: "Citrus" },
    { value: "Mango", lable: "Mango" },
    { value: "Bannana", lable: "Bannana" },
    { value: "Apple", lable: "Apple" },
    { value: "Grapes", lable: "Grapes" },
    { value: "Pomegranate", lable: "Pomegranate" },
    { value: "Guava", lable: "Guava" },
    { value: "Dates", lable: "Dates" },
    { value: "Apricots", lable: "Apricots" },
    { value: "Peach", lable: "Peach" },
    { value: "Pear", lable: "Pear" },
    { value: "Plum", lable: "Plum" },
    { value: "Fig", lable: "Fig" },
    { value: "Jaman", lable: "Jaman" },
    { value: "Litche", lable: "Litche" },
    { value: "Phalsa", lable: "Phalsa" },
    { value: "Walnut", lable: "Walnut" },
    { value: "Ber", lable: "Ber" },
    { value: "Loquat", lable: "Loquat" },
    { value: "Mulbery", lable: "Mulbery" },
    { value: "Strawberry", lable: "Strawberry" },
    { value: "Chiko", lable: "Chiko" },
    { value: "Coconut", lable: "Coconut" },
    { value: "Cherry", lable: "Cherry" },
    { value: "Pistachio", lable: "Pistachio" },

    { value: "Papaya", lable: "Papaya" },

    { value: "Persimmon", lable: "Persimmon" },

    { value: "Melon", lable: "Melon" },
    { value: "Olive", lable: "Olive" },
    { value: "Pine", lable: "Pine" },
    { value: "Imli", lable: "Imli" },
    { value: "Star fruit", lable: "Star fruit" },
    { value: "Tangerine", lable: "Tangerine" },
    { value: "Rasp berry", lable: "Rasp berry" },
    { value: "Quince", lable: "Quince" },
  ];
  const Vegitables = [
    { value: "Beans", lable: "Beans" },
    { value: "Beet", lable: "Beet" },
    { value: "Bitterground", lable: "Bitterground" },
    { value: "Brassica", lable: "Brassica" },
    { value: "Brinjal", lable: "Brinjal" },
    { value: "Cabbage", lable: "Cabbage" },
    { value: "Carrot", lable: "Carrot" },
    { value: "Cauliflower", lable: "Cauliflower" },
    { value: "Chilli", lable: "Chilli" },
    { value: "Coriander", lable: "Coriander" },
    { value: "Cucumber", lable: "Cucumber" },
    { value: "Garlic", lable: "Garlic" },
    { value: "Ginger", lable: "Ginger" },
    { value: "Gourd", lable: "Gourd" },
    { value: "Knoikhol", lable: "Knoikhol" },
    { value: "Lemon", lable: "Lemon" },
    { value: "Luffa", lable: "Luffa" },
    { value: "Mint", lable: "Mint" },
    { value: "Ber", lable: "Ber" },
    { value: "Loquat", lable: "Loquat" },
    { value: "Mulbery", lable: "Mulbery" },
    { value: "Strawberry", lable: "Strawberry" },
    { value: "Chiko", lable: "Chiko" },
    { value: "Coconut", lable: "Coconut" },
    { value: "Cherry", lable: "Cherry" },
    { value: "Pistachio", lable: "Pistachio" },

    { value: "Papaya", lable: "Papaya" },

    { value: "Persimmon", lable: "Persimmon" },

    { value: "Melon", lable: "Melon" },
    { value: "Olive", lable: "Olive" },
    { value: "Pine", lable: "Pine" },
    { value: "Imli", lable: "Imli" },
    { value: "Star fruit", lable: "Star fruit" },
    { value: "Tangerine", lable: "Tangerine" },
    { value: "Rasp berry", lable: "Rasp berry" },
    { value: "Quince", lable: "Quince" },
  ];

  const cerealCrops = [
    { value: "Wheat", lable: "Wheat" },
    { value: "Barley", lable: "Barley" },
    { value: "Maize", lable: "Maize" },
    { value: "Great Millet", lable: "Great Millet" },
    { value: "Pearl Millet", lable: "Pearl Millet" },
  ];
  const Months = [
    { value: "January", lable: "Januaury" },
    { value: "Faburary", lable: "Faburary" },
    { value: "March", lable: "March" },
    { value: "April", lable: "April" },
    { value: "May", lable: "May" },
    { value: "June", lable: "June" },

    { value: "July", lable: "July" },
    { value: "August", lable: "August" },
    { value: "September", lable: "September" },
    { value: "October", lable: "October" },
    { value: "November", lable: "November" },
    { value: "December", lable: "December" },
  ];

  const FoodLegumes = [
    { value: "Chickpea", lable: "Chickpea" },
    { value: " White gram", lable: " White gram" },
    { value: "Mung beans", lable: "Mung beans" },
    { value: "Mash/Black gram", lable: "Mash/Black gram" },
    { value: "Moong", lable: "Moong" },
    { value: "Gram", lable: "Gram" },

    { value: "Field pea", lable: "Field pea" },
    { value: "Lentil", lable: "Lentil" },
    { value: "Pigeon pean", lable: "Pigeon pean" },
    { value: "Lobia/Cowpea", lable: "Lobia/Cowpea" },
   
    { value: "Rawan/Cowpea", lable: "Rawan/Cowpea" },
  ];

  const CEREALCROPS = [
    { value: "Wheat", lable: "Wheat" },
    { value: "Barley", lable: "Barley" },
    { value: "Rice", lable: "Rice" },
    { value: "Maize", lable: "Maize" },
    { value: "GreatMillet", lable: "GreatMillet" },
    { value: "Pearl Millet", lable: "Pearl Millet" },

    
  ];
  const OilSeedCrops = [
    { value: "Yellow sarsson/Rapseed", lable: "Yellow sarsson/Rapseed" },
    { value: " Ghobi sarsoon/Rapseed", lable: " Ghobi sarsoon/Rapseed" },
    { value: "Raya/ Indian mustard", lable: "Raya/ Indian mustard" },
    { value: "Mash/Black gram", lable: "Mash/Black gram" },
    { value: "Taranera mustard", lable: "Taranera mustard" },
    { value: "Canola/ Rapseed", lable: "Canola/ Rapseed" },

    { value: "Peanut", lable: "Peanut" },
    { value: "Sunflower", lable: "Sunflower" },
    { value: "Maize", lable: "Maize" },
    { value: "Olive", lable: "Olive" },
   
    { value: "Sufaid till/ sesame", lable: "Sufaid till/ sesame" },
    { value: "Alsi/Linseed", lable: "Alsi/Linseed" },
    { value: "Guar/ Cluster bean", lable: "Guar/ Cluster bean" },
    { value: "Cotton", lable: "Cotton" },

  ];
  const ForageCrops=[
    { value: "Barseem", lable: "Barseem" },
    { value: " Persian Clover", lable: " Persian Clover" },
    { value: "Cluster bean", lable: "Cluster bean" },
    { value: "Chari/Shorgum", lable: "Chari/Shorgum" },
    { value: "Taranera mustard", lable: "Taranera mustard" },
    { value: "Oat", lable: "Oat" },

    { value: "Maize", lable: "Maize" },
    

  ]
  const sugarCrops=[
    { value: "Sugarcane", lable: "Sugarcane" },
    { value: "Sugarbeat", lable: "Sugarbeat" },
    { value: "Stevia", lable: "Stevia" },

  ]
  const FiberCrops=[
    { value: "Cotton", lable: "Cotton" },
    { value: "Jute", lable: "Jute" },
    
  ]
const [Cattles, setcattles] = useState([{
  cattles:"",qunatity:""
}])

function addCattles(){
  setcattles([
    ...Cattles,
    {
      cattles:"",qunatity:""
    },
  ]);
}
const [valuues, setvaluues] = useState([])
const removeCattle = (index) => {
  const list = [...Cattles];
  list.splice(index, 1);
  setcattles(list);
};
  const monthchange = (i) => {
    alert(i);
  };
  const handleRemoveClick = (index) => {
    const list = [...cropCycle];
    list.splice(index, 1);
    setcropCycle(list);
  };
  const handleDistributionRemove = (index) => {
    // alert(index)
    const list = [...cropDistribution];
    list.splice(index, 1);
    setcropDistribution(list);
  };
  function handleCropChange(value) {
    // alert(value)
    if (value === "fruits") {
      setFruits(true);
      setvaluues(fruits)
      setSabziyaat(false);
    } else if (value === "Sabziyaa") {
      setSabziyaat(true);
      setvaluues(Vegitables)
      setFruits(false);
    } 
    else if(value==="FoodLegumes"){
      setvaluues(FoodLegumes)
    } 
    else if(value==="CEREALCROPS"){
      setvaluues(CEREALCROPS)
    }  else if(value==="OilSeedCrops"){
      setvaluues(OilSeedCrops)
    }  else if(value==="FiberCrops"){
      setvaluues(FiberCrops)
    }  else if(value==="ForageCrops"){
      setvaluues(ForageCrops)
    } else if(value==="SugarCrops"){
      setvaluues(sugarCrops)
    } 
    
    
    else {
      setFruits(false);
      setSabziyaat(false);
    }
  }
  function handleMode(value) {
    if (value === "fruits") {
      setFruits(true);
    } else {
      setFruits(false);
    }
  }

  function handleDistributionAdd() {
    setcropDistribution([
      ...cropDistribution,
      { crops, cropsAmount, cropstype },
    ]);
  }
  function handleAdd() {
    setcropCycle([
      ...cropCycle,
      { Commodity: "", Maize: "", Maize2: "", Potato: "" },
    ]);
  }

  function handleSubmit(values) {
    console.log(values);
    handleStep("3");
  }
  function handleDate(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <div>
      <Header />
      <Row justify="center">
        <Col xs={24} lg={22} className="mb-24">
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
                    <Col xs={24} md={7}></Col>
                    <Col xs={16} md={7} className="d-flex">
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
              <Row>  <Col span={5} md={3}></Col>  <Col style={{marginLeft:"12px"}} xs={20} span={7} lg={4} sm={20} md={4}>
                      <label
                        htmlFor="land"
                        className="col-12 col-form-label fw-500"
                        style={{ fontWeight: "bold" }}
                      >
                        Total Land (Acers):
                        <span
                          style={{
                            color: "red",
                            fontWeight: "bold",
                            fontSize: "large",
                          }}
                        >
                          {" "}
                          *
                        </span>
                      </label>
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
                    </Col></Row>
              <Row gutter={[24, 0]}>
                {cropDistribution.map((data, i) => (
                  <>
                    <Col span={5} md={3}></Col>
                    <Col
                      key={i}
                      style={{ marginLeft: "10px" }}
                      xs={20}
                      span={7}
                      lg={5}
                      sm={20}
                      md={5}
                    >
                      <label
                        htmlFor="contact"
                        className="col-12 col-form-label fw-500"
                        style={{ fontWeight: "bold" }}
                      >
                        Crops :
                        <span
                          style={{
                            color: "red",
                            fontWeight: "bold",
                            fontSize: "large",
                          }}
                        >
                          {" "}
                          *
                        </span>
                      </label>
                      <Form.Item
                        className="username"
                        style={{ content: "*", color: "red" }}
                        name="Crops"
                        value={data.cropDistribution}
                        rules={
                          !crops.children
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
                          onChange={handleCropChange}
                    showSearch
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                          name="crops"
                          onSelect={(value, event) =>
                            handleSelect("crops", event)
                          }
                          size="large"
                          defaultValue={crops.children}
                        >
                          <Option key="fruits">Fruits</Option>

                          <Option key="Sabziyaa"> Sabziyaat </Option>
                          <Option key="FoodLegumes"> Food Legumes </Option>
                          <Option key="CEREALCROPS"> Cereal Crops </Option>
                          <Option key="FiberCrops"> Fiber Crops </Option>
                          <Option key="ForageCrops"> Forage Crops </Option>
                          <Option key="SugarCrops"> Sugar Crops </Option>
                          <Option key="OilSeedCrops"> Oil Seed Crops </Option>



                          {/* <Option value="Baghaat"> Baghaat </Option>
                            <Option value="Chara"> Chara jaat </Option> */}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col
                      style={{ marginLeft: "10px" }}
                      xs={20}
                      // span={7}
                      lg={5}
                      sm={20}
                      md={4}
                    >
                     <label
                        htmlFor="contact"
                        className="col-12 col-form-label fw-500"
                        style={{ fontWeight: "bold" }}
                      >
                       Commodities:
                        <span
                          style={{
                            color: "red",
                            fontWeight: "bold",
                            fontSize: "large",
                          }}
                        >
                          {" "}
                          *
                        </span>
                      </label>  
 <Form.Item
                            style={{ content: "*", color: "red" }}
                            className="username "
                            name="cropstype"
                            rules={
                              !cropstype.children
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
                    showSearch

                              size="large"
                              filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                              }
                              onSelect={(value, event) =>
                                handleSelect("cropstype", event)
                              }
                              defaultValue={cropstype.children}
                            >
                              {valuues.map((data) => (
                                <Option key={data.value}>{data.lable}</Option>
                              ))}
                            </Select>
                          </Form.Item>
                   
                    </Col>
                    <Col xs={20} span={7} lg={4} sm={17} md={4}>
                      <label
                        htmlFor="contact"
                        className="col-12 col-form-label fw-500"
                        style={{ fontWeight: "bold" }}
                      >
                        Amount (Acers):
                        <span
                          style={{
                            color: "red",
                            fontWeight: "bold",
                            fontSize: "large",
                          }}
                        >
                          {" "}
                          *
                        </span>
                      </label>
                      <Form.Item
                        name="cropsAmount"
                        rules={
                          !cropsAmount
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
                          name="cropsAmount"
                          defaultValue={cropsAmount}
                          min={1}
                          // vale={data.Amount}
                          value={cropsAmount}
                          type="number"
                          // onChange={handleCropDisChange}
                          // type="number"
                          size="large"
                          // onChange={onChange}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} span={7} lg={4} sm={6} md={4}>
                      <Button
                        style={{
                          marginTop: "40px",
                          background: "#dc3545",
                          border: "none",
                        }}
                        onClick={() => handleDistributionRemove(i)}
                        disabled={cropDistribution.length > 1 ? false : true}
                        type="primary"
                      >
                        -
                      </Button>
                      <Button
                        type="primary"
                        onClick={handleDistributionAdd}
                        style={{
                          marginBottom: "20px",
                          marginLeft: "5px",
                          border: "none",
                        }}
                      >
                        +
                      </Button>
                    </Col>
                  </>
                ))}
              </Row>
              <Row justify="center">
                <Col sm={11} xs={11}></Col>
              </Row>

              {cropCycle.map((data, i) => (
                <>
                  <Row gutter={[24, 0]}>
                    <Col span={5} md={3}></Col>
                    <Col
                      style={{ marginLeft: "10px" }}
                      xs={20}
                      span={7}
                      lg={3}
                      sm={20}
                      md={4}
                    >
                      <label
                        htmlFor="contact"
                        className="col-12 col-form-label fw-500"
                        style={{ fontWeight: "bold" }}
                      >
                        Crops Cycle :
                        <span
                          style={{
                            color: "red",
                            fontWeight: "bold",
                            fontSize: "large",
                          }}
                        >
                          {" "}
                          *
                        </span>
                      </label>
                      <Form.Item
                        className="username"
                        name="cropsCycle"
                        rules={
                          !cropsCycle.children
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
                            handleSelect("cropsCycle", event)
                          }
                          name="cropsCycle"
                          label="commodity"
                          size="large"
                          defaultValue={cropsCycle.children}
                        >
                          {cerealCrops.map((data) => (
                            <Option key={data.value}>{data.lable}</Option>
                          ))}
                          <Option value="potato">Potato</Option>
                        </Select>
                      </Form.Item>
                    </Col>

                    <Col
                      style={{ marginLeft: "20px " }}
                      xs={20}
                      span={7}
                      lg={3}
                      sm={20}
                      md={5}
                    >
                      <label
                        htmlFor="contact"
                        className="col-12 col-form-label fw-500"
                        style={{ fontWeight: "bold" }}
                      >
                        Yield / Acer: (Max)
                        <span
                          style={{
                            color: "red",
                            fontWeight: "bold",
                            fontSize: "large",
                          }}
                        >
                          {" "}
                          *
                        </span>
                      </label>
                      <Form.Item
                        name="cropscycleAmount"
                        rules={
                          !cropscycleAmount
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
                          name="cropscycleAmount1"
                          defaultValue={cropscycleAmount}
                          min={1}
                          // vale={data.Amount}
                          value={cropscycleAmount}
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
                      xs={20}
                      span={7}
                      lg={3}
                      sm={20}
                      md={4}
                    >
                      <label
                        htmlFor="contact"
                        className="col-12 col-form-label fw-500"
                        style={{ fontWeight: "bold" }}
                      >
                        Yield / Acer: (Min)
                        <span
                          style={{
                            color: "red",
                            fontWeight: "bold",
                            fontSize: "large",
                          }}
                        >*
                          {" "}
                        </span>
                      </label>
                      <Form.Item
                        name="cropscycleAmount12"
                        rules={
                          !cropscycleAmount
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
                          name="cropscycleAmount2"
                          defaultValue=""
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
                  
                <Col   style={{ marginLeft: "40px" }} xs={20} span={7} lg={4} sm={20} md={4}>
                  <label
                    htmlFor="contact"
                    className="col-12 col-form-label fw-500"
                    style={{ fontWeight: "bold" }}
                  >
                     Month :
                    <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "large",
                      }}
                    >
                      {" "}
                      *
                    </span>
                  </label>
                                
   <Form.Item
   name="date"

    rules={!date?[
      {
        required: true,
        message: "Please Fill Date!",
      },
    ]:""}
   >
     <RangePicker
    defaultValue={date}
    name="date"
    picker="month"
    onChange={ (value, event) => handleSelect("date", value)}
    
    size="large"
    />
    </Form.Item> 
                </Col>
               
                    <Col xs={24} span={7} lg={4} sm={6} md={2}>
                      <Button
                        style={{
                          marginTop: "40px",
                          background: "#dc3545",
                          border: "none",
                        }}
                        onClick={() => handleRemoveClick(i)}
                        type="primary"
                        //   type="secondary"
                        disabled={cropCycle.length > 1 ? false : true}
                      >
                        -
                      </Button>
                      <Button
                        type="primary"
                        style={{ marginLeft: "5px", border: "none" }}
                        onClick={handleAdd}
                      >
                        +
                      </Button>
                    </Col>
                  </Row>
                </>
              ))}
              
              <Row gutter={[24, 0]}>
               
              </Row>
            { Cattles.map((data,i)=>(<>  <Row gutter={[24, 0]}>
                <Col span={5} md={3}></Col>
                <Col
                  style={{ marginLeft: "10px" }}
                  xs={20}
                  span={7}
                  lg={5}
                  sm={20}
                  md={6}
                >
                  <label
                    htmlFor="contact"
                    className="col-12 col-form-label fw-500"
                    style={{ fontWeight: "bold" }}
                  >
                    Cattles :
                    <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "large",
                      }}
                    >
                      {" "}
                      *
                    </span>
                  </label>
                  <Form.Item
                    className="username"
                    name="cattles"
                    rules={
                      !cattles.children
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
                      name="cattles"
                      onSelect={(value, event) =>
                        handleSelect("cattles", event)
                      }
                      defaultValue={cattles.children}
                    >
                      <Option key="Buffalo">Buffalo</Option>
                      <Option key="Goat">Goat</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col
                  style={{ marginLeft: "10px" }}
                  xs={20}
                  span={7}
                  lg={5}
                  sm={20}
                  md={6}
                >
                  <label
                    htmlFor="contact"
                    className="col-12 col-form-label fw-500"
                    style={{ fontWeight: "bold" }}
                  >
                    Quantity :
                    <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "large",
                      }}
                    >
                      {" "}
                      *
                    </span>
                  </label>
                  <Form.Item
                    name="cattlesAmount"
                    rules={
                      !cattlesAmount
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
                      name="cattlesAmount"
                      onChange={handleChange}
                      defaultValue={cattlesAmount}
                      // vale={data.Amount}
                      min={1}
                      value={cattlesAmount}
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
                <Col xs={24} span={7} lg={4} sm={6} md={4}>
                      <Button
                        style={{
                          marginTop: "40px",
                          background: "#dc3545",
                          border: "none",
                        }}
                        onClick={() => removeCattle(i)}
                        disabled={Cattles.length > 1 ? false : true}
                        type="primary"
                      >
                        -
                      </Button>
                      <Button
                        type="primary"
                        onClick={addCattles}
                        style={{
                          marginBottom: "20px",
                          marginLeft: "5px",
                          border: "none",
                        }}
                      >
                        +
                      </Button>
                    </Col>
              </Row></>))}
              <Row
                gutter={[24, 0]}
                className="ant-row-flex ant-row-flex-middle"
              >
                <Col xs={24} md={11}>
                  <h6 className="font-semibold m-0"> </h6>
                </Col>

                <Col xs={24} md={9} className="d-flex">
                  <Button
                    style={{ marginRight: "10px" }}
                    //  onClick={()=>history.push("/form")}
                    onClick={() => handleStep("1")}
                    type="primary"
                  >
                    Back
                  </Button>
                  <Button
                    //  onClick={()=>history.push("/form3")}

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
