import { Row,Col, Input, Form,Button } from 'antd'
import axios from 'axios'
import { message } from "antd";

import React,{useState} from 'react'
import "./otp.css"
function OTP({number,handleStep}) {
    console.log(number)
    const [first, setfirst] = useState()
const otp={
    phone:"03234475980",
    code:"536191"
}
async function resend(){
    try{
        const {data} =await axios.get(`http://13.228.234.94:8080/v1/otp?phone=03324468116`,)
        console.log(data)
        message.success({
            content: "Code Resend succsessfully",
            className: "custom-class",
            style: {
              marginTop: "74vh",
            },
          });   
    }
        catch(error){
            console.log(error.message)}
       
        }
function  skipOtp(){
    handleStep("3")
}
async function handleSubmit(){
    // handleStep("1")
    try{
const data=await fetch("http://13.228.234.94:8080/v1/verify",{
    phone:"03234475980",
    code:"536191"
})
console.log(data.json())
}
catch(error){
    console.log(error.message)}
}
function handleChange(e){
    console.log(e.target.value)
    otp.code=e.target.value
console.log("otp",otp)


}
console.log("otp",otp)
  return (
      <Row justify='center' style={{marginTop:"200px"}}>
          <Col lg={12}>
    <div class="container new-login-area">
    
    <Form  onFinish={handleSubmit}>
    <div id='verify-otp' class="login-setup-section">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        <h3 class="request-otp-header">Verify OTP</h3>
        <div class="form-group login-label">
            {/* <label for="inputnumber">One Time Password</label> */}
            <Form.Item
            name="code"
            rules={
                !otp.code
                  ? [
                      {
                        required: true,
                        message: "Please Fill",
                      },
                    ]
                  : ""
              }
            >
            <Input name='code'
            onChange={handleChange}
            type="number" class="form-control input-edit" placeholder='Enter OTP' id="number"/>
            </Form.Item>
           
            <label class="pull-right resend-otp">OTP Send to this Number {number} <span 
        ></span>
           
            </label>
        </div>
        <Button htmlType='submit' style={{background:"#273A9E",border:"none,",color:"white"}} type="button">Verify</Button>
        <button
        onClick={skipOtp}
        style={{background:"white",color:"black",marginLeft:"5px"}} type="button" class="btn btn-primary ">Skip OTP</button>
         <button onClick={resend} className='btn btn-primary' style={{marginLeft:"12px",background:"#273A9E",border:"none"}}>Resend OTP</button>
    </div></Form>
</div></Col></Row>
  )
}

export default OTP