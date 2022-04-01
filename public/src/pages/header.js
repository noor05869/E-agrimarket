import { Row ,Col} from 'antd'
import React from 'react'
import logo from "../assets/logo3.png"
function Header() {
  return (
    <div>
      <Row justify='center'>
        <Col >
        <img src={logo} style={{width:"180px",marginLeft:"20px",marginBottom:"20px",marginTop:"20px"}} />
        </Col>
        
        </Row> </div>
  )
}

export default Header