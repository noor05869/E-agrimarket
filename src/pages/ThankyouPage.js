import { Row,Col, Layout,Card } from 'antd'
import React from 'react'
import Header from './header'
import logo from "../assets/logo3.png"
import "./landing.css"
import { Link } from 'react-router-dom'
function ThankyouPage() {
  return (
    <div>

<>
      <div className=' imagediv '>
          
      <div >
    <div >
      
      <Row   justify='center'>
        <Col >
        <img className='imageStyle' src={logo}  />
       
       
        </Col>
        
        </Row> 
        <Row justify="center">
        <Col xs={24} lg={10} className="mb-24">
          <Card
            style={{ background: "#e7e7e7", borderRadius: "20px" }}
            // className="payment-method-card"
            className="header-solid h-full ant-card-p-0 formBody"
           
              
            title={
              <>
                <Row
                  justify="center"
                  gutter={[0, 24]}
                  className=" header"
                >
                  <h2 className="font-semibold m-0 ">Thank You</h2>
                  {/* </Col> */}
                </Row>
               
              </>
            }
            headStyle={{backgroundColor: '#96CC5C', borderRadius:" 20px 20px 0px 0px" }}
            
           >
             <Row justify="center">
        <h5 style={{fontWeight:"bold",color:"black",marginTop:"48px",fontSize:"1.2rem"}} >Your data has been submitted successfully.  </h5></Row>
     <Row justify="center">   <Link to="/farmerdata" ><h2 className='link Bold'  style={{color:"black", marginTop:"40px",fontSize:"0.6rem"}}>Go to Home Screen</h2></Link></Row>
     <Row justify="center">
 </Row></Card></Col></Row>
    </div>
    {/* <Row justify="center">
        <h1 style={{fontWeight:"bold",color:"black",marginTop:"200px",fontSize:"4rem"}} >Thank You </h1></Row>
     <Row justify="center">   <Link to="/farmerdata" ><h2 className='link'  style={{fontWeight:"bold",color:"black",marginTop:"40px",fontSize:"3rem"}}>Go to Home Screen</h2></Link></Row>
     <Row justify="center">
 </Row> */}
 
 </div></div></>
    </div>
  )
}

export default ThankyouPage