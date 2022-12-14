import React from 'react'
 import pic from "../images/contactUsBg.png";
 import pic1 from "../images/callContactUs.png";
 import pic2 from "../images/mailContactUs.png";
import { Link } from "react-router-dom";

export default function ContactUs() {
    const myStyle1 = {
        color: "#2e8b57",
        fontFamily: "Cochin",
      };
      const myStyle = {
        height: "120vh",
        width: "100vw",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
         backgroundImage: `url(${pic})`,
        dataOverlay: "8",
        backgroundColor: "rgba(0,0,0,0)",
        opacity: "0.8",
        transparancy: "0.5",
      };
  return (
    <>
    <div style={myStyle}>
          <nav className={`navbar navbar-inverse navbar-expand-lg`}>
            <div className="container-fluid mr-5 px-5">
              <Link
                className="nav-link"
                to="/BITP-editNotes"
                style={{
                  fontSize: "30px",
                  color: "#006400",
                  fontWeight: "600", cursor:"pointer"
                }}
              >
                 BITP editNotes
              </Link>
              <div
                className="collapse navbar-collapse "
                id="navbarSupportedContent"
              ></div>
            </div>
          </nav>
          <div >
            
              <div className="col-sm-4 mx-5 my-5 px-5 py-5">
                <div className="card">
                  <div className="card-body">
                   <img src={pic2} alt="" style={{width: "43px"}}/> 
                    <h5 className="card-title">Call us directly</h5>
                    <p className="card-text">
                      +91 62012 93283
                    </p>
                    <p className="card-text">
                    +91 96084 08149
                    </p>
                  
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mx-5 my-2 py-0 px-5">
                <div className="card">
                  <div className="card-body">
                   <img src={pic1} alt="" style={{width: "43px"}}/> 
                    <h5 className="card-title">Mail us</h5>
                    <p className="card-text">
                     bitEditNotes2727@gmail.com
                    </p>
                    {/* <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a> */}
                  </div>
                </div>
              </div>
              </div>
              </div>
    </>
  )
}
