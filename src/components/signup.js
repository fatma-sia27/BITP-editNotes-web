import React , {useState} from 'react'
import { NavLink , useNavigate } from 'react-router-dom'
import {BrowserRouter as Router, Link} from 'react-router-dom';

const signup = ()=> {
  const navigate = useNavigate()
  const [user , setUser] = useState({
    fname:"" , lname:"" , uname:"" ,pwd:"" , stream:"" , year:""  
  })

  let name , value ;
  const handleInputs = (e) =>{
      console.log(e)
      name = e.target.name
      value = e.target.value
      setUser ({...user , [name]:value})
  }

  const PostData = async(e) =>{
    e.preventDefault()
    const {fname , lname , uname , pwd, stream , year} = user
    const res  = await fetch("/signup" , {
        method : "POST" ,
        headers: {
            "Content-Type" : "application/json"
        }, 
        body : JSON.stringify({
          
          fname , lname , uname,pwd , stream , year  
          
          
        })
    })
  
    const data = await res.json()
  
    if(res.status===422 || !data){
       window.alert("invalid registration")
       console.log("invalid registration")
    } else{
       window.alert("valid registration")
       console.log("valid registration")
       navigate("/login")
        
    }
  }
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



  return (
    <>
   
   <div className="body" style={mySt}>
   <h5 className="card-title shadow-lg p-3 mb-5 bg-body rounded">
          BIT'P editNotes
    </h5>
    <div >
    <div className="center px-2 py-2"  style={{top: "30px", justifyContent:"center", alignItems:"center", display:"flex", textAlign:"center"}}>
    <div className="col-sm-6 px-2 py-2">
            <div className="card border border-success" style={{maxWidth: "800px" , minWidth:"500px", maxHeight:"1000px",  width: "50%",
  height: "80%"}}>
              <div className="card-body">
                <h5 className="card-title shadow-lg p-3 mb-5 bg-body rounded">
                  Sign Up here
                </h5>
                <p className="card-text">
                  <form  
                  method="POST"
                    className="row g-3 py-4"
                  >
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputNamel4"
                        name="fname"
                       value={user.fname}
                       onChange = {handleInputs}
                        placeholder="Your First Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputNamel4"
                        name="lname"
                        value={user.lname}
                       onChange = {handleInputs}
                        placeholder="Your Last Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputUserName4"
                        name="uname"
                        value={user.uname}
                       onChange = {handleInputs}
                         
                        placeholder="Your User Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="Password"
                        className="form-control"
                        id="inputPassword4"
                        name="pwd"
                        value={user.pwd}
                       onChange = {handleInputs}
                        placeholder="Your Password"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputStream4"
                        name="stream"
                        value={user.stream}
                       onChange = {handleInputs}
                        placeholder="Your Stream"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputStream4"
                        name="year"
                        value={user.year}
                       onChange = {handleInputs}
                        placeholder="Your Graduation Year"
                      />
                    </div>
                    <div className="col-12">
                      <button
                        type="button"
                        style={mySt1}
                       onClick={PostData}
                        class="btn btn-outline-success btn-lg"
                        id="buttonCss"
                      >
                        Submit
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
  )}



export default signup
