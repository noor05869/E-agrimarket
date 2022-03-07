import { Row } from 'antd'
import React from 'react'
import logo from "../assets/logo.jpg"
function Header() {
  return (
    <div>
      <Row justify='center'>
        <img src={logo} style={{width:"250px",marginTop:"50px",marginLeft:"20px"}} />

        
        </Row> </div>
  )
}

export default Header