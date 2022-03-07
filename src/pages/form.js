import React, { useState } from "react";
import CropsDistribution from "./CropsDistribution";
import Form3 from "./Form3";
import { message } from "antd";
import FormScreen from "./formScreen";
import OTP from "./OTP";
const steps = [{ id: "1" }, { id: "2" }, { id: "3" }];
function Form() {
  const [Steps, setSteps] = useState("1");
  function handleStep(id) {
    setSteps(id);
  }
  const [initialValues1, setInitialValues] = useState({
    fname: "",
    contact: "",
    province: "",
    district: "",
    tehsil: "",
    village: "",
    crops: "",
    Land:"",
    cropstype: "",
    cropsAmount: "",
    cropsCycle: "",
    cropscycleAmount: "",
    cattles: "",
    cattlesAmount: "",
    date: "",
    modeOfInvestment: "",
    percentage: "",
    cropsSale: "",
    seed: "",
    machinery: "",
    cropAdvisory: "",
  });
  console.log("state22", initialValues1);

  const handleChange = (e) => {
    const { value, name } = e.target;

   


      setInitialValues({ ...initialValues1, [name]: value });
   
    console.log(value, name);

    console.log("state", initialValues1);
  };

  const handleSelect = (name, value) => {
    console.log(name, value);
    // setInitialValues({...initialValues1,[name]:value})
    setInitialValues({ ...initialValues1, [name]: value });
    // console.log("state",initialValues1)
  };
  function handleprev(id) {
    setSteps(id);
  }

  function handleSubmit(){
    
    setInitialValues({ fname: "",
    contact: "",
    province: "",
    district: "",
    tehsil: "",
    village: "",
    Land:"",

    crops: "",
    cropstype: "",
    cropsAmount: "",
    cropsCycle: "",
    cropscycleAmount: "",
    cattles: "",
    cattlesAmount: "",
    date: "",
    modeOfInvestment: "",
    percentage: "",
    cropsSale: "",
    seed: "",
    machinery: "",
    cropAdvisory: "",})
    message.success({
      content: 'Submitted Successfully',
      className: 'custom-class',
      style: {
        marginTop: '74vh',
      },
    });
    ;
    handleStep("4")
  }
  switch (Steps) {
    case "1":
      return (
        <FormScreen
          steps={Steps}
          handleStep={handleStep}
          initialValues={initialValues1}
          handleChange={handleChange}
          handleSelect={handleSelect}
        />
      );

    case "2":
      return (
        <CropsDistribution
          steps={Steps}
          initialValues={initialValues1}
          handleChange={handleChange}
          handleSelect={handleSelect}
          handleStep={handleStep}
        />
      );
    case "3":
      return (
        <Form3
          steps={Steps}
          initialValues={initialValues1}
          handleChange={handleChange}
          handleSelect={handleSelect}
          handleStep={handleStep}
          handleSubmit={handleSubmit}
        />
      );
      case "4":
      return(
           <OTP/>
      )
  }

  return <div>{/* <FormScreen/> */}</div>;
}

export default Form;
