import React from 'react'
import pic from '../images/firstYrImg.jpg'
export default function firstYrECE() {
  return (
    <div className="first">
    <div className="mainPic"><img src={pic} alt="" style={{width:"100%", height: "400px", opacity:'0.8'}}/></div>
    <div className="mainContent px-5 py-2 mx-5" style={{fontFamily: "Cursive, sans-serif", fontSize: "50px",textTransform: "uppercase",
letterSpacing: "1.0px", color: "#191970"}}>Coming soon</div>
  </div>
  )
}
