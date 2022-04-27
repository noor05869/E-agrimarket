import React, { useState, useEffect } from "react";
import { message } from "antd";
import FormScreen from "./FormScreen";
import OTP from "./OTP";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as api from "../../api/api";
import useApi from "../../Hooks/useApi";
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
} from "../../utility/utility";
import CropsDistribution from "./CropsDistribution";
const steps = [{ id: "1" }, { id: "2" }, { id: "3" }];
function TraderForm() {
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
            commodities: ""
        },
    ]);
    const navigate = useNavigate();
    const [initialValues1, setInitialValues] = useState({
        fname: "",
        contact: "",
        contact2: "",
        optionalContact: "",
        province: "",
        city: "",
        commision:false,
        shop:'',
        mandi:"",
        cropsDiss: "",
        LiveStock:false,
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
    const [Error, seterror] = useState()
    const { error, request } = useApi(api.postTraderdata);
  const [loading, setloading] = useState(false)

    const otpverify = useApi(api.postOtp);

    async function handleSubmit() {
        // for crops
        try {

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
      setloading(true)

            const { data } = await request({
                trader: {
                    name: initialValues1.fname,
                    phone: initialValues1.contact,
                    phone1: initialValues1.contact2 ? initialValues1.contact2 : "",

                    province: initialValues1.province.value,
                    city: initialValues1.city,
                    shop:initialValues1.shop,
                    mandi:initialValues1.mandi,
                    deals_livestock:initialValues1.commision,
                   commission_shop:initialValues1.LiveStock
                },
                commitdty: newArray,
                cattle: ctdata,
            });

            console.log({data})

            setRes(data);
            if (data.success === true) {
                message.success({
                    content: "Submitted Successfully",
                    className: "custom-class",
                    style: {
                        marginTop: "74vh",
                    },
                });
                handleStep("3");
            }
        } catch  {
      setloading(false)

            console.log("error ==========================", Error);
            seterror(error.data.message)
        }
      setloading(false)

    }
    console.log("state22", initialValues1);
    // console.log("rwspomse+++++", error.data.message);

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
                city: "",
                cropsDiss: [
                    {
                        crops: "",
                        commodities: ""
                    },
                ],
                Land: "",
                month: "",

                cattles: [
                    {
                        Cattles: "",
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
            // console.log("reesssss", data.message);
        } catch (error) {
            console.log("erorrr ==================", error);
        }
    }
    const [cattless, setcattless] = useState([
        { Cattles: ""},
    ]);
    console.log("CATTT", cattless);

    function  handleSelectChange(i, event, name) {
        console.log("llllllllll", i);

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
        }else if (name === "Cattles") {
            catt[i].Cattles = event;
        } 
        initialValues1.cropsDiss = values;
        initialValues1.cattles = catt;
        setcropDistribution(values);
        console.log("cropsdis-----------", cattless);
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
                Cattles: ""
            },
        ]);

    }
    const removeCattle = (index) => {
        const List = [...cattless];
        List.splice(index, 1);
        setcattless(List);


    };
    useEffect(() => { }, [cropDistribution]);
    useEffect(() => { }, [cattless]);

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
                    handleSelect={handleSelect}
                    addCattles={addCattles}
                    removeCattle={removeCattle}
                    cattless={cattless}
                    response={res}
                    handleSubmit={handleSubmit}
                    error={error}
                    loading={loading}
                />
            );
        case "3":
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

export default TraderForm;

