import React ,  {useState} from 'react'
import { NavLink , useNavigate } from 'react-router-dom'
import pic2 from '../images/google.png'
import pic3 from '../images/linkedin.png'
import pic4 from '../images/github.png'
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default function login() {
  let mySt={
    background: 'rgb(34,193,195)',
    background: "linear-gradient(135deg, rgba(34,193,195,1) 0%,     rgba(253,187,45,1) 100%)",
    fontFamily: "work sans"
  }
  let mySt1={
    borderRadius: "24px",
    width: "80%",
    height: "40px",
    fontSize: "1.3rem",
    color: "white",
    fontWeight: "700px",
    background: "rgb(34,193,195)",
    background: "linear-gradient(90deg, rgba(34,193,195,1) 0%,     rgba(253,187,45,1) 100%)",
    border: "0px",
    cursor: "pointer",
    transition: "opacity 0.25s ease-out"
  }
    const myStyle = {
        width: "50px",  
      }
      const navigate = useNavigate()
      const [uname , setuname] = useState('')
      const [pwd , setpwd] = useState('')
    const loginUser = async(e) =>{
        e.preventDefault()
    const res = await	fetch('/login' , {
      method : "POST" ,
        headers: {
            "Content-Type" : "application/json"
        }, 
        body : JSON.stringify({
            
          uname , pwd    
            
            
        })
    
    })
    const data = await res.json()
    if(res.status===400 || !data){
        window.alert("invalid login")
        console.log("invalid login")
     } else{
        window.alert("valid login")
        console.log("valid login")
        navigate("/logindashboard")
     }
    }
  return (
    <>
   


{/* <div className="body">
<h5 className="card-title shadow-lg p-3 mb-5 bg-body rounded">
          BIT'P editNotes
    </h5>
<div id="Form">
<div className="center px-2 py-2" style={{ top: "30px", justifyContent:"center", alignItems:"center", display:"flex", textAlign:"center"}}>
            <div className="card border border-success bg secondary" style={{backgroundColor: "#c0c0c0"}}>
              <div className="card-body">
                <h5 className="card-title shadow-lg p-3 mb-5 bg-body rounded">
                  Login Here...
                </h5> */}
                <div className="mainBody" style={mySt}>
   <div className="center body" style={{height:"100%"}}>
<h5 className="card-title shadow-lg p-3 mb-5 bg-body rounded" style={{cursor:"pointer"}}>
          BIT'P editNotes
    </h5>
<div id="Form" className="center px-5 mx-5  py-2" style={{height: '100%', width: '900px', justifyContent:"center", alignItems:"center", display:"flex", textAlign:"center"}}>
            <div className="center px-5 py-2 mb-5 " style={{ top: "30px", justifyContent:"center", alignItems:"center", display:"flex", textAlign:"center"}}>
            <div className="card border border-success bg secondary" style={{backgroundColor: "#c0c0c0"}}>
              <div className="card-body">
                <h5 className="card-title shadow-lg p-3 mb-5 bg-body rounded">
                  Login Here...
                </h5>
                <p className="card-text">
                <form
                 method='POST'
                    className="row g-3 py-4"
                  >
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        id="inputUserName4"

                        name = "uname"
                        value={uname}
                        onChange = {(e) => setuname(e.target.value)}
                        placeholder="Your User Name"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="Password"
                        className="form-control"
                        id="inputPassword4"


                        name = "pwd"
                      value={pwd}
                      onChange = {(e) => setpwd(e.target.value)}
                        placeholder="Your Password"
                      />
                    </div>
                    <div className="col-12">
                      <span>Or</span>
                      <Link to="/googleLogin">
                      <button className='btn btn-outline-link' ><img className="px-2" src={pic2} alt="" style={myStyle}/></button>
                      </Link>
                  
                    </div>
                    <div className="col-12">
                   
                      <button
                        type="button"
                        class="buttonCss"
                        id="buttonCss"
                        onClick={loginUser}
                        style={mySt1}

                      >
                       Login
                      </button>
                     
      
                    </div>
                  </form>
                </p>
              </div>
            </div>
            </div>
</div>
 </div>
</div>
    </>
  )
}
