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
  const [Cities, setCities] = useState([])
  function handleCities(value){

if(value==="03"){
  setCities(Punjab)
}
else if(value==="02"){
  setCities(sindh)
}
else if(value==="05"){
  setCities(Blochistan)
}
else if(value==="04"){
  setCities(KPK)
}else if(value==="07"){
  setCities(Kashmir)
}
  }
  const [initialValues1, setInitialValues] = useState({
    fname: "",
    contact: "",
    optionalContact:"",
    province: "",
    district: "",
    tehsil: "",
    village: "",
    CropsDistribution:[{ crops: "",
    cropstype: "",
    cropsAmount: "",}],
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
  function handleDisAdd(){
    setInitialValues([...initialValues1.CropsDistribution,{crops: "",
    cropstype: "",
    cropsAmount: "",}])}
  const handleSelect = (name, value) => {
    // handleDisAdd()
if(name==="crops"|| name==="cropstype" ||name==="cropsAmount"){
    console.log(initialValues1.CropsDistribution[0][name]=value)}
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
          handleCities={handleCities}
          Cities={Cities}
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
          handleDisAdd={handleDisAdd}
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


const Punjab = [
  { value: "Abdul Hakim", label: "Abdul Hakim ",ulabel:"لاہور" ,    },
  { value: "Ahmadpur East", label: "Ahmadpur East",ulabel:"لاہور" },
  { value: "Attock Khurd", label: "Attock Khurd",ulabel:"لاہور" },
  { value: "Bahawalpur", label: "Bahawalpur" },
  { value: "Bhakkar", label: "Bhakkar" },
  { value: "Bhalwal", label: "Bhalwal" },
  { value: "Chenab Nagar", label: "Chenab Nagar" },
  { value: "Chiniot", label: "Chiniot" },
  { value: "Chishtian", label: "Chishtian" },
  { value: "Chunian", label: "Chunian" },
  { value: "Dera Ghazi Khan", label: "Dera Ghazi Khan" },
  { value: "Dipalpur", label: "Dipalpur" },
  { value: "Faisalabad", label: "Faisalabad" },
  { value: "Gilwala", label: "Gilwala" },
  { value: "Gojra", label: "Gojra" },
  { value: "Gujranwala", label: "Gujranwala" },
  { value: "Gujrat", label: "Gujrat" },
  { value: "Harunabad", label: "Harunabad" },
  { value: "Hasilpur", label: "Hasilpur" },
  { value: "Hassan Abdal", label: "Hassan Abdal" },
  { value: "Hujra Shah Muqim", label: "Hujra Shah Muqim" },
  { value: "Jalalpur Jattan", label: "Jalalpur Jattan" },
  { value: "Jaranwala", label: "Jaranwala" },
  { value: "Jhang City", label: "Jhang City" },
  { value: "Kabirwala", label: "Kabirwala" },
  { value: "Kahror Pakka", label: "Kahror Pakka" },
  { value: "Kamalia", label: "Kamalia" },
  { value: "Kasur", label: "Kasur" },
  { value: "Khanpur", label: "Khanpur" },
  { value: "Kharian", label: "Kharian" },
  { value: "Khushab", label: "Khushab" },
  { value: "Kot Addu", label: "Kot Addu" },
  { value: "Kundian", label: "Kundian" },
  { value: "Lahore", label: "Lahore" },
  { value: "Lala Musa", label: "Lala Musa" },
  { value: "Mandi Bahauddin", label: "Mandi Bahauddin" },
  { value: "Mandi Burewala", label: "Mandi Burewala" },
  { value: "Mian Channun", label: "Mian Channun" },
  { value: "Mianwali", label: "Mianwali" },
  { value: "Multan", label: "Multan" },
  { value: "Muridke", label: "Muridke" },
  { value: "Murree", label: "Murree" },
  { value: "Muzaffargarh", label: "Muzaffargarh" },
  { value: "Nankana Sahib", label: "Nankana Sahib" },
  { value: "Okara", label: "Okara" },
  { value: "Pakpattan", label: "Pakpattan" },
  { value: "Pasrur", label: "Pasrur" },
  { value: "Pattoki", label: "Pattoki" },
  { value: "Rahimyar Khan", label: "Rahimyar Khan" },
  { value: "Rawalpindi", label: "Rawalpindi" },
  { value: "Saddiqabad", label: "Saddiqabad" },
  { value: "Sahiwal", label: "Sahiwal" },
  { value: "Sambrial", label: "Sambrial" },
  { value: "Samundri", label: "Samundri" },
  { value: "Sargodha", label: "Sargodha" },
  { value: "Shakargarh", label: "Shakargarh" },
  { value: "Shekhupura", label: "Shekhupura" },
  { value: "Shakargarh", label: "Shakargarh" },
  { value: "Shekhupura", label: "Shekhupura" },
  { value: "Shujaabad", label: "Shujaabad" },
  { value: "Sialkot City", label: "Sialkot City" },





];
const sindh = [
  { value: "Dadu", label: "Dadu" },
  { value: "Hyderabad City", label: "Hyderabad City" },
  { value: "Jacobabad", label: "Jacobabad" },
  { value: "Jamshoro", label: "Jamshoro" },
  { value: "Kandhkot", label: "Kandhkot" },
  { value: "Karachi", label: "Karachi" },
  { value: "Larkana", label: "Larkana" },
  { value: "Mian Sahib", label: "Mian Sahib" },
  { value: "Mirpur Khas", label: "Mirpur Khas" },
  { value: "Mithi", label: "Mithi" },
  { value: "Nawabshah", label: "Nawabshah" },
  { value: "Sukkur", label: "Sukkur" },
  { value: "Tando Allahyar", label: "Tando Allahyar" },
  { value: "Umarkot", label: "Umarkot" },
 

];
const KPK = [
  { value: "Abbottabad", label: "Abbottabad" },
  { value: "Bannu", label: "Bannu" },
  { value: "Charsadda", label: "Charsadda" },
  { value: "Chitral", label: "Chitral" },
  { value: "Dera Ismail Khan", label: "Dera Ismail Khan" },
  { value: "Hangu", label: "Hangu" },
  { value: "Karak", label: "Karak" },
  { value: "Kohat", label: "Kohat" },
  { value: "Kulachi", label: "Kulachi" },
  { value: "Mansehra", label: "Mansehra" },
  { value: "Mardan", label: "Mardan" },
  { value: "Mingaora", label: "Mingaora" },
  { value: "Nowshera", label: "Nowshera" },
  { value: "Parachinar", label: "Parachinar" },
  { value: "Peshawar", label: "Peshawar" },
  { value: "Risalpur Cantonmen", label: "Risalpur Cantonmen" },
  { value: "Saidu Sharif", label: "Saidu Sharif" },
  { value: "Swabi", label: "Swabi" },
  { value: "Timargara", label: "Timargara" },

  
 

];
const Blochistan = [
  { value: "Chaman", label: "Chaman" },
  { value: "Gwadar", label: "Gwadar" },
  { value: "Kalat", label: "Kalat" },
  { value: "Khuzdar", label: "Khuzdar" },
  { value: "Turbat", label: "Turbat" },
  { value: "Zhob", label: "Zhob" },

]
const Kashmir = [
  { value: "Kotli", label: "Kotli" },
  { value: "Muzaffarabad", label: "Muzaffarabad" },
  { value: "New Mirpur", label: "New Mirpur" },

]
