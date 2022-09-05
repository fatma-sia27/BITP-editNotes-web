import React from 'react'
import pic from '../images/logo.png'
import {BrowserRouter as Router, Link} from 'react-router-dom';
export default function Navbar() {
  return (
    <>
    
    <div class="row shadow py-2 mx-2 bg-white rounded" style={{cursor: "pointer" , fontFamily: "Alumni Sans Collegiate One", fontSize: "20px", letterSpacing: "1.0px", fontWeight: "900"}}>
      <div className="col-1"><img src={pic} alt="" style={{width: "50px"}}/></div> 
      <div className="col-2 px-0 p-0">BITP editNotes</div>
        <div className="wrap py-0" style={{display: "flex", alignItems: "end", justifyContent: "end"}}>
        <Link to="/googleLogin">
        <button className="button"  >Log In </button>
        </Link>
        <Link to = "/signup">
   <button className="button" >SignUp</button> 
</Link>
  
</div>
</div>

    </>
  )
}

