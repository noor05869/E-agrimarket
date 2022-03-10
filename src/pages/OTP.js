import { Row,Col } from 'antd'
import React from 'react'
import "./otp.css"
function OTP({number}) {
  return (
      <Row justify='center' style={{marginTop:"200px"}}>
          <Col lg={12}>
    <div class="container new-login-area">
    {/* <div id='sign-in' class='login-setup-section'>
        <h3 class="request-otp-header">Please verify your mobile number</h3>
        <div class="form-group login-label">
            <label for="inputnumber">mobile number</label>
            <input type="number" class="form-control input-edit" placeholder='Enter mobile number' id="number"/>
        </div>
        <button type="button" class="btn btn-default btn-lg btn-block request-otp" id='request-otp'>Get OTP</button>
    </div> */}
    <div id='verify-otp' class="login-setup-section">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        <h3 class="request-otp-header">Verify OTP</h3>
        <div class="form-group login-label">
            {/* <label for="inputnumber">One Time Password</label> */}
            <input type="number" class="form-control input-edit" placeholder='Enter OTP' id="number"/>
            <label class="pull-right resend-otp">OTP Send to this Number {number}
            <button className='btn btn-primary' style={{marginLeft:"12px",background:"#273A9E",border:"none"}}>Resend otp</button>
            </label>
        </div>
        <button style={{background:"#273A9E",border:"none"}} type="button" class="btn btn-primary ">Verify</button>
        <button
        
        style={{background:"white",color:"black",marginLeft:"5px"}} type="button" class="btn btn-primary ">Skip</button>
    </div>
</div></Col></Row>
  )
}

export default OTP