import React, { useState, useEffect } from "react";
import CropsDistribution from "./CropsDistribution";
import Form3 from "./Form3";
import { message } from "antd";
import FormScreen from "./formScreen";
import OTP from "./OTP";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as api from "../api/api";
import useApi from "../Hooks/useApi";
import {
  Punjab,
  sindh,
  Blochistan,
  Kashmir,
  feralCapital,
  fruits,
  Vegitables,
  OilSeedCrops,
  FoodLegumes,
  sugarCrops,
  CEREALCROPS,
  ForageCrops,
  FiberCrops,
  KPK,
} from "../utility/utility";
const steps = [{ id: "1" }, { id: "2" }, { id: "3" }];
function Form() {
  const [Steps, setSteps] = useState("1");
  function handleStep(id) {
    setSteps(id);
  }
  const [Cities, setCities] = useState([]);
  function handleCities(value) {
    if (value === "Punjab") {
      setCities(Punjab);
    } else if (value === "Sindh") {
      setCities(sindh);
    } else if (value === "05") {
      setCities(Blochistan);
    } else if (value === "04") {
      setCities(KPK);
    } else if (value === "07") {
      setCities(Kashmir);
    } else if (value === "Fedral Capital") {
      setCities(feralCapital);
    }
  }
  const [cropDistribution, setcropDistribution] = useState([
    {
      crops: "",
      commodities: "",
      area: "",
      max_yield: "",
      min_yield: "",
      startDate: "",
      endDate: "",
    },
    {
      crops: "",
      commodities: "",
      area: "",
      max_yield: "",
      min_yield: "",
      startDate: "",
      endDate: "",
    },
  ]);
  const navigate = useNavigate();
  const [initialValues1, setInitialValues] = useState({
    fname: "",
    contact: "",
    contact2: "",
    optionalContact: "",
    province: "",
    district: "",
    tehsil: "",
    village: "",
    cropsDiss: "",
    Land: "",
    month: "",

    cattles: "",
    targetedmandi: "",
    modeOfInvestment: "",
    percentage: "",
    cropsSale: "",
    seed: "",
    machinery: "",
    cropAdvisory: "",
  });

  const [res, setRes] = useState();
  const { error, request } = useApi(api.postFarmerdata);
  const otpverify = useApi(api.postOtp);

  async function handleSubmit() {
    // for crops
    try {
      console.log(
        initialValues1.cropsDiss,
        "res =======================================",
        initialValues1.cropsDiss
      );

      let newArray = initialValues1.cropsDiss.filter((element, index) => {
        if (!Object.values(element).includes("")) {
          return element;
        }
      });

      // for cattles

      let ctdata = cattless.filter((element, index) => {
        console.log("------------->>", element);

        if (!Object.values(element).includes("")) {
          return element;
        }
      });
      const { data } = await request({
        personalInfo: {
          name: initialValues1.fname,
          phone: initialValues1.contact,
          phone1: initialValues1.contact2?initialValues1.contact2:"",

          Province: initialValues1.province.value,
          District: initialValues1.district.value,
          Tehsil: initialValues1.tehsil.value,
          Village: initialValues1.village,
          acre: initialValues1.Land,
          ModeOfInvestment: initialValues1.modeOfInvestment.value,
          investmentPercentage: initialValues1.percentage
            ? initialValues1.percentage
            : "0",
          targetedmandi: initialValues1.targetedmandi.value,
          cropSale: initialValues1.cropsSale.value,
          Seed: initialValues1.seed.value,
          CropsAdvisory: initialValues1.cropAdvisory.value,
        },
        crops: newArray,
        cattle: ctdata,
      });

      setRes(data);
      if (data.success === true) {
        message.success({
          content: "Submitted Successfully",
          className: "custom-class",
          style: {
            marginTop: "74vh",
          },
        });
        handleStep("4");
      }
    } catch (error) {
      console.log("error ==========================", error);
    }
  }
  console.log("state22", initialValues1);
  console.log("rwspomse+++++", res);

  async function handleOTPsubmit(otp) {
    console.log("oooooottttpp", otp);
    try {
      const { data } = await axios.post(
        "https://backend.eagrimarket.com/v1/verify",
        otp
      );
      message.success({
        content: "Verify succsessfully",
        className: "custom-class",
        style: {
          marginTop: "74vh",
        },
      });
      setInitialValues({
        fname: "",
        contact: "",
        contact2: "",
        optionalContact: "",
        province: "",
        district: "",
        tehsil: "",
        village: "",
        cropsDiss: [
          {
            crops: "",
            commodities: "",
            area: "",
            max_yield: "",
            min_yield: "",
            startDate: "",
            endDate: "",
          },
        ],
        Land: "",
        month: "",

        cattles: [
          {
            Cattles: "",
            qt: "",
          },
        ],
        targetedmandi: "",
        modeOfInvestment: "",
        percentage: "",
        cropsSale: "",
        seed: "",
        machinery: "",
        cropAdvisory: "",
      });
      handleStep("1");
      navigate("/thankyou");
      console.log("reesssss", data.message);
    } catch (error) {
      console.log("erorrr ==================", error);
    }
  }
  const [cattless, setcattless] = useState([
    { Cattles: "", qt: "" },
    { Cattles: "", qt: "" },
  ]);
  console.log("CATTT", cattless);

  function handleSelectChange(i, event, name) {
    console.log("llllllllll", event);
    
    if (i < cropDistribution.length) {
      const val = cropDistribution[i].crops;
      handleCropChange(val);
    }
    handleCropChange(event);
    const catt = [...cattless];
    const values = [...cropDistribution];

    if (name === "crops") {
      values[i].crops = event;
    } else if (name === "commodities") {
      values[i].commodities = event;
    } else if (name === "area") {
      values[i].area = event;
    } else if (name === "month") {
      // initialValues1.month = event;
      values[i].startDate = event;
    } else if (name === "min_yield") {
      values[i].min_yield = event;
    } else if (name === "max_yield") {
      values[i].max_yield = event;
    } else if (name === "Cattles") {
      catt[i].Cattles = event;
    } else if (name === "qt") {
      catt[i].qt = event;
    }
    initialValues1.cropsDiss = values;
    initialValues1.cattles = catt;
    setcropDistribution(values);
    console.log("cropsdis-----------", catt);
  }

  const handleChange = (e) => {
    const { value, name, id } = e.target;

    setInitialValues({ ...initialValues1, [name]: value });

    // console.log(value, name);

    // console.log("state", initialValues1);
  };

  const handleDistributionRemove = (index) => {
    // alert(index)
    const list = [...cropDistribution];
    list.splice(index, 1);
    setcropDistribution(list);
  };
  function handleDistributionAdd() {
    setcropDistribution([
      ...cropDistribution,
      {
        crops: "",
        commodities: "",
        area: "",
        max_yield: "",
        min_yield: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }
  const handleSelect = (name, value, i) => {
    setInitialValues({ ...initialValues1, [name]: value });
  };

  
  const [valuues, setvaluues] = useState();

  function handleCropChange(value, index) {
    // console.log("first", value);
    if (value === "Fruits") {
      setvaluues(fruits);
    } else if (value === "Vegetables") {
      setvaluues(Vegitables);
    } else if (value === "FoodLegumes") {
      setvaluues(FoodLegumes);
    } else if (value === "CEREALCROPS") {
      setvaluues(CEREALCROPS);
    } else if (value === "OilSeedCrops") {
      setvaluues(OilSeedCrops);
    } else if (value === "FiberCrops") {
      setvaluues(FiberCrops);
    } else if (value === "ForageCrops") {
      setvaluues(ForageCrops);
    } else if (value === "SugarCrops") {
      setvaluues(sugarCrops);
    }
  }
  function addCattles() {
    setcattless([
      ...cattless,
      {
        Cattles: "",
        qt: "",
      },
    ]);
  }
  const removeCattle = (index) => {
    const List = [...cattless];
    List.splice(index, 1);
    setcattless(List);
  };
  useEffect(() => {}, [cropDistribution]);
  useEffect(() => {}, [cattless]);

  switch (Steps) {
    case "1":
      return (
        <FormScreen
          steps={Steps}
          handleStep={handleStep}
          initialValues={initialValues1}
          handleChange={handleChange}
          handleSelect={handleSelect}
          handleCities={handleCities}
          Cities={Cities}
        />
      );

    case "2":
      return (
        <CropsDistribution
          steps={Steps}
          cropDistribution={cropDistribution}
          initialValues={initialValues1}
          handleChange={handleChange}
          handleStep={handleStep}
          handleDistributionAdd={handleDistributionAdd}
          handleDistributionRemove={handleDistributionRemove}
          valuues={valuues}
          handleSelectChange={handleSelectChange}
          addCattles={addCattles}
          removeCattle={removeCattle}
          cattless={cattless}
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
          Cities={Cities}
          response={res}
        />
      );
    case "4":
      return (
        <OTP
          handleStep={handleStep}
          number={initialValues1.contact}
          handleOTPsubmit={handleOTPsubmit}
        />
      );
  }

  return <div>{/* <FormScreen/> */}</div>;
}

export default Form;

