import React from 'react'
import pic from '../images/ece.png';
import pic1 from '../images/eee.png';
import vdo from '../images/vdo.mp4';
import {BrowserRouter as Router, Link} from 'react-router-dom';
export default function logindashboard() {
  let mySt1={
    width: "140px",
    height: "45px",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "2.5px",
    fontWeight: "500",
    color: "#000",
    backgroundColor: "#B6B6B4",
    border: "none",
    borderRadius: "45px",
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease 0s",
    cursor: "pointer",
    outline: "none",
  }
  let mySt2={
    width: "140px",
    height: "45px",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "2.5px",
    fontWeight: "500",
    color: "#000",
    backgroundColor: "#5f9ea0",
    border: "none",
    borderRadius: "45px",
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease 0s",
    cursor: "pointer",
    outline: "none",
  }
  return (
    <>
    <div className="welcome">
   <h5 className="card-title shadow-lg p-3 mb-5 bg-body rounded">
          BIT'P editNotes
          <Link to="/signup">
          <button type="button" className="btn btn-light" style={{float: "right"}}>
  Logout
</button>
</Link>
<Link to="/opportunities">
<button type="button" className="btn btn-light" style={{float: "right"}}>
  Opportunities
</button>
</Link>
    </h5>
    <div className="px-5 py-5" style={{background: 'rgb(34,193,195)',
    background: "linear-gradient(135deg, rgba(34,193,195,1) 0%,     rgba(253,187,45,1) 100%)",
    fontFamily: "work sans", fontFamily: "Cursive, sans-serif", fontSize: "30px",textTransform: "uppercase",
  letterSpacing: "1.0px", color: "#191970"}}>Hey 	&#128075;, welcome to edit notes</div>
   </div>
   <div className="branches"  style={{backgroundColor: "#d8bfd8"}}>
   <div className="CS mx-5 my-2" style={{backgroundColor: "#B6B6B4", borderRadius: "7px"}}>
    <div className="row">
      <div className="col-3"><video className="px-5 py-5" src={vdo} style={{width:"300px"}}></video></div>
      <div className="col-6 mt-5" style={{fontFamily: "Cursive, sans-serif", fontSize: "20px",textTransform: "uppercase",
  letterSpacing: "1.0px", color: "#191970"}}>Computer Science and Engineering<div className="wrap " style={{display: "flex"}}>
   <Link to="/firstYearCSE">
  <button className="button mx-4 mt-5" style={mySt2}>1st Year</button> 
  </Link>
  <Link to="/secYearCSE">
<button className="button mx-4 mt-5"  style={mySt2}>2nd Year</button>
</Link>
 <Link to="/thirdYearCSE">
 <button className="button mx-4 mt-5"  style={mySt2}>3rd Year</button>
 </Link>
</div></div>
  
    </div>
   </div>


   <div className="CS mx-5 my-2" style={{backgroundColor: "#5f9ea0", borderRadius: "7px"}}>
    <div className="row">
      <div className="col-3"><img className= "px-5 py-5" src={pic} alt="loading..." style={{width:"300px"}}/></div>
      <div className="col-6 mt-5" style={{fontFamily: "Cursive, sans-serif", fontSize: "20px",textTransform: "uppercase",
  letterSpacing: "1.0px", color: "#191970"}}>Electronice and Communications Engineering<div>
   <Link to="/firstYearCSE">
  <button className="button mx-4" style={mySt1}>1st Year</button> 
  </Link>
  <button className="button mx-4 mt-5"  style={mySt1}>2nd Year</button> <button className="button mx-4"  style={mySt1}>3rd Year</button></div></div></div>
    </div>
   </div>

   
   <div className="CS mx-5 my-2" style={{backgroundColor: "#B6B6B4", borderRadius: "7px"}}>
    <div className="row">
      <div className="col-3"><img className= "px-5 py-5" src={pic1} alt="loading..." style={{width:"300px"}}></img></div>
      <div className="col-6 mt-5" style={{fontFamily: "Cursive, sans-serif", fontSize: "20px",textTransform: "uppercase",
  letterSpacing: "1.0px", color: "#191970"}}>Electrical and Electronice Engineering <button className="button mx-4" style={mySt2}>1st Year</button> 
  <button className="button mx-4 mt-5"  style={mySt2}>2nd Year</button> <button className="button mx-4"  style={mySt2}>3rd Year</button></div>
    </div>
   </div>
   
    </>
  )
}
