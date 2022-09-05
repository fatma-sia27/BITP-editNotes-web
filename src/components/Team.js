import React from 'react'
import pic2 from '../images/aasPic.png'
import pic3  from '../images/tannuPic.png'
import pic4 from '../images/contactUs.png'
import {BrowserRouter as Router, Link} from 'react-router-dom';
export default function () {
  return (
   <>
  
   <div>
   <div className="card card-1 px-4 py-4 ms-5 center">
<div> <h1 className='p-3' style={{fontFamily: "Cursive, sans-serif", fontSize: "50px",textTransform: "uppercase",
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
                <div>
                <Link to="/login">
                <button className='button'>
                  Connect with Aasia </button>
            
                </Link>
                </div>
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
                
                {/* <a href="https://google.com" target="_blank" rel="noreferrer">
                <button  className="button" >
                  Connect with Tan
                </button>
                </a> */}

<button type = "button" class="btn btn-light">
<a href="https://www.linkedin.com/in/tannu-priya-14907b21b" style={{color: "black"}}>Connect with Tannu</a>
</button>




               
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  <div className="row">
        <h5 className="center card-title shadow-lg p-3 mb-5 bg-body rounded" style={{display: "flex", justifyContent: "center", fontFamily: "Cursive, sans-serif", fontSize: "30px",textTransform: "uppercase",
  letterSpacing: "1.0px", color: "#191970" , backgroundColor: "#d8bfd8"}}>
          Contact Us
    </h5>
        <div className="col-6 mx-5" style={{border: "black"}}>  
              <div><div className="card-body">
                <h5 className="card-title shadow-lg p-3 mb-5 bg-body rounded">
                  Contact Us
                </h5>
                <p className="card-text">
                  <form
                    className="row g-3"
                  >
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputNamel4"
                        placeholder="Your First Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputNamel4"
                        placeholder="Your Last Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputUserName4"
                        placeholder="Your email Id"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="Number"
                        className="form-control"
                        id="inputNumber4"
                        placeholder="Your Whatsapp number"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputStream4"
                        placeholder="Your Stream"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputStream4"
                        placeholder="Your Graduation Year"
                      />
                    </div>
                    <div className="col-12">
                      <button
                        type="button"
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
        <div className="col-3 my-2 ml-auto"><img src={pic4} alt="loading..." style={{width:"400px", height:"450px"}}/></div>
      </div>
      </div>
     
   </>
  )
}
