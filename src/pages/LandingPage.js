import { Row,Col, Layout,Card } from 'antd'
import React from 'react'
import Header from './header'
import logo from "../assets/logo3.png"
import "./landing.css"
import { Link } from 'react-router-dom'


function LandingPage() {
  return (
      
            <div className=' imagediv '>
          
          <div >
        <div >
          
          <Row   justify='center'>
            <Col >
            <img className='imageStyle' src={logo}  />
           
           
            </Col>
            
            </Row> 
            <Row justify="center">
            <Col xs={22} lg={10} className="mb-24">
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
                      <h2 className="font-semibold m-0 ">Coming Soon</h2>
                      {/* </Col> */}
                    </Row>
                   
                  </>
                }
                headStyle={{backgroundColor: '#96CC5C', borderRadius:" 20px 20px 0px 0px" }}
                
               >
                 <Row justify="center">
            <h5 className='message' >We'll launch soon, please keep visiting the site  </h5></Row>
         <Row justify="center">   <Link to="/farmerdata" ><h2 className='link Bold homeScreenLink' >Go to Farmer Screen</h2></Link></Row>
         <Row justify="center">
     </Row></Card></Col></Row>
        </div>
      
     
     </div></div>
       
  )
}

export default LandingPage