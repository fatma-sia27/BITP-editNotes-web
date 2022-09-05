import React from 'react'
import pic from '../images/secYearImg.jpg'
import pic1 from '../images/sem3.png'
import pic2 from '../images/sem4.png'
export default function secYrECE() {
    let mySt1={
        width: "240px",
        height: "75px",
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
  return (
    <>
    <div className="second">
     <div className="mainPic"><img src={pic} alt="" style={{width:"100%", height: "400px", opacity:'0.9'}}/></div>
        <div className="sem3 py-4">
      <h5 className="center card-title shadow-lg p-3 mb-5 bg-body rounded" style={{display: "flex", justifyContent: "center", fontFamily: "Cursive, sans-serif", fontSize: "30px",textTransform: "uppercase",
  letterSpacing: "1.0px", color: "#191970" , backgroundColor: "#d8bfd8"}}>
          Sem-3
    </h5>
    <div className="mainContent px-5 py-2 mx-5" style={{fontFamily: "Cursive, sans-serif", fontSize: "50px",textTransform: "uppercase",
  letterSpacing: "1.0px", color: "#191970"}}>Coming soon</div>
    </div>
        <div className="sem4">
      <h5 className="center card-title shadow-lg p-3 mb-5 bg-body rounded" style={{display: "flex", justifyContent: "center", fontFamily: "Cursive, sans-serif", fontSize: "30px",textTransform: "uppercase",
  letterSpacing: "1.0px", color: "#191970" , backgroundColor: "#d8bfd8"}}>
          Sem-4
    </h5>
      <div className="row">
        <div className="col-6">  
              {/* <button className="button-lg mx-4 my-2 ml-5 px-5">NM (Numerical Methods)</button> */}
              <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt1}><a href="https://drive.google.com/drive/folders/14geL1UJ4P68X1qwRbkINkjKeNHRW_1qe?usp=sharing" target="_blank" style={{color: "black"}}>Analog circuit</a></button>
            <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt1}><a href="https://drive.google.com/drive/folders/1waoKTgBxY46Bw9xEuo3PeB1aqsJsFqoA?usp=sharing" target="_blank" style={{color: "black"}}>Analog Communications</a></button>
            <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt1}><a href="https://drive.google.com/drive/folders/1kBcM2pQX81pAucmHBNJjJHFo3cXALPfP?usp=sharing" target="_blank" style={{color: "black"}}>BIOT Lab</a></button>
            <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt1}><a href="https://drive.google.com/drive/folders/1GxHvNgUmr6s_fw7rQi_pa4nMXOi6TrUh?usp=sharing" target="_blank" style={{color: "black"}}>Electromagnetic field and waves</a></button>
            <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt1}><a href="https://drive.google.com/drive/folders/1vMtZ0blFLxl3Gxrm22viujqOX0rtG6H-?usp=sharing" target="_blank" style={{color: "black"}}>Environmental science</a></button>
            <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt1}><a href="https://drive.google.com/drive/folders/1kgkC866MlrazGhILnawKMZ_oftU--4qW?usp=sharing" target="_blank" style={{color: "black"}}>Numerical methods</a></button>
            <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt1}><a href="https://drive.google.com/drive/folders/1RjboAIi6CHAHaPowXB67ORr-uKEaeQgq?usp=sharing" target="_blank" style={{color: "black"}}>Probability and random process</a></button>
        </div>
        <div className="col-3 my-2 ml-auto"><img src={pic2} alt="loading..." style={{width:"500px", height:"300px"}}/></div>
      </div>
        </div>
    </div>
    </>
  )
}
