import { Row,Col, Layout,Card } from 'antd'
import React from 'react'
import Header from './header'
import logo from "../assets/logo3.png"
import "./landing.css"
import { Link } from 'react-router-dom'


function LandingPage() {
  return (
      <>
      <div className=' imagediv '>
          
      <div >
    <div >
      
      <Row   justify='center'>
        <Col >
        <img className='imageStyle' src={logo}  />
       
       
        </Col>
        
        </Row> 
    {/* <Row justify="center" >
        <h1>Coming Soon</h1>
        </Row> */}
  
    </div>
    <Row justify="center">
        <h1 style={{fontWeight:"bold",color:"white",marginTop:"200px",fontSize:"4rem"}} >Coming Soon </h1></Row>
     <Row justify="center">
     {/* <Link to="/Form"><h2 style={{fontWeight:"inherit",color:"white"}}> Click Here For Farmers Data Link</h2></Link> */}
 </Row></div></div></>
  )
}

export default LandingPage