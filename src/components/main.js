import React , {useState} from 'react'
import pic from '../images/mainBg.png'
import pic1 from '../images/about.png'
import pic2 from '../images/aasPic.png'
import pic3  from '../images/tannuPic.png'
import pic4 from '../images/contactUs.png'
import pic5 from '../images/logo.png'
import {BrowserRouter as Router, Link} from 'react-router-dom';
export default function Main() {
  const [user , setUser] = useState({
    firname:"" , lasname:"" , email:"" ,wsp:"" , str:"" , grad:""  
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
    const {firname , lasname , email , wsp, str, grad} = user
    const res  = await fetch("/BITP-editNotes" , {
        method : "POST" ,
        headers: {
            "Content-Type" : "application/json"
        }, 
        body : JSON.stringify({
          
          firname , lasname , email , wsp, str, grad
          
          
        })
    })
  
    const data = await res.json()
  
    if(res.status===422 || !data){
       window.alert("invalid submission")
       console.log("invalid submission")
    } else{
       window.alert("valid submission")
       console.log("valid submission")
       
        
    }
  }
  let mySt={
    width: "140px",
    height: "45px",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "2.5px",
    fontWeight: "500",
    color: "#000",
    backgroundColor: "#FFB6C1",
    border: "none",
    borderRadius: "45px",
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease 0s",
    cursor: "pointer",
    outline: "none",
    hover: "green"
  }





  return (
   <>
   <div>
        <div className='somesection'
          style={{
            height: "100vh",
            width: "100vw",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${pic})`,
            dataOverlay: "8",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            marginTop: "0px",
          }}
          
        >
           <div class="row shadow py-2 mx-2 bg-white rounded" style={{cursor: "pointer" , fontFamily: "Alumni Sans Collegiate One", fontSize: "20px", letterSpacing: "1.0px", fontWeight: "900"}}>
      <div className="col-1"><img src={pic5} alt="" style={{width: "50px"}}/></div> 
      <div className="col-2 px-0 p-0">BITP editNotes</div>
        <div className="wrap py-0" style={{display: "flex", alignItems: "end", justifyContent: "end"}}>



        {/* <button className="button" >Log In</button>
  <button className="button" >SignUp</button> */}
  <Link to="/login">
        <button className="button" style={mySt} >Log In</button>
        </Link>
        <Link to = "/signup">
   <button className="button" style={mySt} >SignUp</button> 
</Link>
  <Link to = "/contact">
   <button className="button" style={mySt} >Contact</button> 
</Link>
</div>
</div>
      </div>
</div>
<div className="row chose px-4 py-4 ms-5 my-4" style={{backgroundColor: "#deb887"}}>
 <div className='col-sm-8 mt-5 px-4 py-4'><h1 className='p-3' style={{ fontFamily: "Cursive, sans-serif", fontSize: "50px",textTransform: "uppercase",
  letterSpacing: "1.5px", fontWeight: "500"}}>About Us</h1>
  <br />
  <br />
  <div className='text' style={{fontSize: "20px"}}>As we know that we faced a lot of issues when we were in 2nd year (specially in 3rd sem) as that was the first time where we got to study our core papers. We didn't have proper guidance and  notes. Everyone tried to connect to senior and asked for notes so that they could get some help in end-semester exams.
  We too faced this issue and thus came up with the solution to collect all the notes at the same place so that students don't have to ask for notes here and there.</div>
  <br />
  <br />
<div className="text" style={{fontSize: "20px"}}> We at, BITP editNotes, have collection of almost notes of all the subject related to CSE(Computer science and engg) , we will soon expand this to different branches.</div></div>
 <div className="col-sm-4 mt-5 px-2 py-4"> <img src={pic1} alt="" style={{width:"350px"}}/></div>
</div>
<div className="card card-1 px-4 py-4 ms-5 my-5 center" style={{backgroundColor: "#deb887"}}>
<div> <h1 className='p-3' style={{ fontFamily: "Cursive, sans-serif", fontSize: "50px",textTransform: "uppercase",
  letterSpacing: "1.5px", fontWeight: "500"}}>TEAM <span>&#129309;</span></h1>
  <br />
  <br /> <div className="row row-cols-1 row-cols-md-3 g-4 px-4 py-4 ms-5" style={{justifyContent:"center", alignItems:"center", display:"flex", textAlign:"center"}}>
          {/* Aasia fatma details */}

          <div className="col center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={pic2}
                className="card-img-top"
                alt="..."
                style={{ width: "285px" }}
              />
              <div className="card-body" style={{ backgroundColor: "#2f4f4f" }}>
                <h4
                  className="card-title"
                  style={{ backgroundColor: "#2f4f4f", color: "#deb887" }}
                >
                  Aasia Fatma
                </h4>
                <p
                  className="card-text"
                  style={{
                    backgroundColor: "#2f4f4f",
                    color: "white",
                    fontFamily: "Cochin",
                  }}
                >
                  A 3rd year Undergraduate student at BIT Mesra. A coding
                  enthusists. A React Js developer. 
                </p>
                <button type="button" class="btn btn-light">
                <a href="https://www.linkedin.com/in/aasia-fatma-7630b71bb/" target="_blank" style={{color: "black"}}>Connect with Fatma</a>
                </button>
              </div>
            </div>
          </div>

          {/* Tannu pria details */}

          <div className="col center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={pic3}
                className="card-img-top"
                alt="..."
                style={{ width: "350px", height: "250px" }}
              />
              <div className="card-body" style={{ backgroundColor: "#2f4f4f" }}>
                <h4
                  className="card-title"
                  style={{ backgroundColor: "#2f4f4f", color: "#deb887" }}
                >
                  Tannu Priya
                </h4>
                <p
                  className="card-text"
                  style={{
                    backgroundColor: "#2f4f4f",
                    color: "white",
                    fontFamily: "Cochin",
                  }}
                >
                  A 3rd year Undergraduate student at BIT Mesra. A coding
                  enthusists. A MERN developer. 
                </p>
                <button type="button" class="btn btn-light">
                <a href="https://www.linkedin.com/in/tannu-priya-14907b21b" style={{color: "black"}}>Connect with Tannu</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  
   </>
  )
}

