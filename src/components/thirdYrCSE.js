import React from 'react'
import pic from '../images/thirdYearImg.jpg'
import pic2 from '../images/sem4.png'
import pic1 from '../images/sem3.png'
import pic3 from '../images/contactUs.png'
export default function thirdYrCSE() {
  let mySt={
    width: "200px",
    height: "65px",
    fontFamily: "Roboto sans-serif",
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "2.5px",
    fontWeight: "500",
    color: "#000",
    backgroundColor: "#d8bfd8",
    border: "none",
    borderRadius: "45px",
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease 0s",
    cursor: "pointer",
    outline: "none",
  }
  return (
    <>
    <div className="third">
     <div className="mainPic"><img src={pic} alt="" style={{width:"100%", height: "500px", opacity:'0.9'}}/></div>
        <div className="sem5 py-4">
      <h5 className="center card-title shadow-lg p-3 mb-5 bg-body rounded" style={{display: "flex", justifyContent: "center", fontFamily: "Cursive, sans-serif", fontSize: "30px",textTransform: "uppercase",
  letterSpacing: "1.0px", color: "#191970" , backgroundColor: "#d8bfd8"}}>
          Sem-5
    </h5>
      <div className="row">
      <div className="col-3 my-2 px-5"><img src={pic1} alt="loading..." style={{width:"500px", height:"300px"}}/></div>
        <div className="col-6">  
     
        <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt}><a href="https://drive.google.com/drive/folders/1zTZOT8tUPmUC5FVFuZFhaEh4TeBLQo6k?usp=sharing" style={{color: "black"}}>FLT/TOC (Automata thory)</a></button> 
               
               <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt}><a href="https://drive.google.com/drive/folders/1tZKkGeuISDgIrVeFph8ekp0I-6Zi3DDG?usp=sharing" style={{color: "black"}}>DBMS (Database management System)</a></button>     
      
               <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt}><a href="https://drive.google.com/drive/folders/1UUcqog3eOs8XXkv3-QL4vjkHPVOH309K?usp=sharing" style={{color: "black"}}>DCCN (Computer Networks)</a></button>  
         
               <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt}><a href="https://drive.google.com/drive/folders/1jx97eqS-ChhHA7ka7oJR7l5k0vxWWWoe?usp=sharing" style={{color: "black"}}>Software Engineering</a></button> 
              
               <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt}><a href="https://drive.google.com/drive/folders/1umpp94qTbUZM0wsXa8-Ysck_Hp-Ch3WJ?usp=sharing" style={{color: "black"}}>CLOUD COMPUTING (PE-1)</a></button> 
               
               <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt}><a href="https://drive.google.com/drive/folders/1KrP9NPvTJT1x7rafiZEx8gXQ4CaQOemP?usp=sharing" style={{color: "black"}}>FRENCH (OE-2)</a></button> 
 
        </div>
      </div>
        </div>
        <div className="sem4">
      <h5 className="center card-title shadow-lg p-3 mb-5 bg-body rounded" style={{display: "flex", justifyContent: "center", fontFamily: "Cursive, sans-serif", fontSize: "30px",textTransform: "uppercase",
  letterSpacing: "1.0px", color: "#191970" , backgroundColor: "#d8bfd8"}}>
          Sem-6
    </h5>
    <div className="mainContent px-5 py-2 mx-5" style={{fontFamily: "Cursive, sans-serif", fontSize: "50px",textTransform: "uppercase",
  letterSpacing: "1.0px", color: "#191970"}}>Coming soon</div>
    </div>
        </div>
    
    </>
  )
}
