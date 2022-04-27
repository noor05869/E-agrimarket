import React from 'react'

function Label({eLabel,ulabel,index ,sterric}) {
  return (
    <div
    className='inputLabel'
  >
    <span>
     {eLabel}{index>0?index:""}
      {index===0? <span
      className='labelStrric'
       
      >
        {" "}
        *
      </span>:<span
      className='labelStrric'
       
      >
        {" "}
        
      </span>}
    </span>
    {/* <span className='inputuLabel'>
      {" "}
     {index===0? <span
       className='labelStrric'
      >
        {" "}
        *
      </span>:""}{" "}
   { ulabel}
    </span> */}

    {/* </label>  */}
  </div>
  )
}

export default Label