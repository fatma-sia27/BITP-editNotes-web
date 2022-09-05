import React from 'react'
import pic from '../images/secYearImg.jpg'
import pic1 from '../images/sem3.png'
import pic2 from '../images/sem4.png'
import pic3 from '../images/contactUs.png'
import {BrowserRouter as Router, Link} from 'react-router-dom';
export default function secYrCSE() {
  let mySt={
    width: "200px",
    height: "65px",
    fontFamily: "Roboto sans-serif",
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "2.5px",
    fontWeight: "500",
    color: "#000",
    backgroundColor: "#a9a9a9",
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
      <div className="row">
        <div className="col-3 my-2 px-5"><img src={pic1} alt="loading..." style={{width:"500px", height:"300px"}}/></div>
        <div className="col-6">  
     
              <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt}><a href="https://drive.google.com/drive/folders/1r2C6pfsTtegUnTB9XbF7uEFT0cdzk_2H?usp=sharing" style={{color: "black"}}>NM (numerical methods)</a></button>
              
              <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt}><a href="https://drive.google.com/drive/folders/1ahRWNN2Mx7-6DKSKyjeCJZ0RXurtJOFx?usp=sharing" style={{color: "black"}}>OOPs (Java)</a></button>
            
              <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt}><a href="https://drive.google.com/drive/folders/1CmSZ_DgJvfCI35k5_BFtgFMiCh6MpNQh?usp=sharing" style={{color: "black"}}>OOPs (C++)</a></button>
            
              <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt}><a href="https://drive.google.com/drive/folders/1ShCL0Hin5NNqM8nk6VcwffTyKpws2yPe?usp=sharing" style={{color: "black"}}>DSD (Digital System Design)</a></button>
         
              <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt}><a href="https://drive.google.com/drive/folders/1fftNzkLVzf0CHRmhvsJMuvl7sXkxmds7?usp=sharing" style={{color: "black"}}>BIOLOGY</a></button>

              <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt}><a href="https://drive.google.com/drive/folders/1VD8DYcbEcp9c46FR7Rrd_aESIqEbVLC4?usp=sharing" style={{color: "black"}}>BIC</a></button>  
        </div>
      </div>
        </div>
        <div className="sem4">
      <h5 className="center card-title shadow-lg p-3 mb-5 bg-body rounded" style={{display: "flex", justifyContent: "center", fontFamily: "Cursive, sans-serif", fontSize: "30px",textTransform: "uppercase",
  letterSpacing: "1.0px", color: "#191970" , backgroundColor: "#d8bfd8"}}>
          Sem-4
    </h5>
      <div className="row">
        <div className="col-6">  
              {/* <button className="button-lg mx-4 my-2 ml-5 px-5">NM (Numerical Methods)</button> */}
              <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt}><a href="https://drive.google.com/drive/folders/1r2C6pfsTtegUnTB9XbF7uEFT0cdzk_2H?usp=sharing" style={{color: "black"}}>NM (numerical methods)</a></button> 
              
              <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt}><a href="https://drive.google.com/drive/folders/1ppisZgvf43-J6nReiVTLqsB6X3YPeB8w?usp=sharing" style={{color: "black"}}>OS (Operating System)</a></button> 
             
              <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt}><a href="https://drive.google.com/drive/folders/1F_-tnXAFM42K8CeYzSvwX7Ju45oGcRgK?usp=sharing" style={{color: "black"}}>COA</a></button>
              
              <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt}><a href="https://drive.google.com/drive/folders/1iTbQ-lEalzocHWjAbvdNr9mfX5mBHwQu?usp=sharing" style={{color: "black"}}>DAA</a></button>
             
              <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt}><a href="https://drive.google.com/drive/folders/1ZQb5r2ChGu6DT_kIeB1uj7D4XtLEPTIH?usp=sharing" style={{color: "black"}}>UH</a></button>
             
              <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt}><a href="https://drive.google.com/drive/folders/1poEeRk7pwZxH89qDxsuOkQQTJocgUn4y?usp=sharing" style={{color: "black"}}>EEGC(OE-1)</a></button>
             
              <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt}><a href="https://drive.google.com/drive/folders/1CsA05hS9V7JddRRjtF5IJo3AOkALdw2R?usp=sharing" style={{color: "black"}}>EVS</a></button> 
              
              <button className="button-lg mx-4 my-2 ml-5 px-5" style={mySt}><a href="https://drive.google.com/drive/folders/1WC4aoO4vH29Ra654nfMGOxOjMANfn-sB?usp=sharing" style={{color: "black"}}>ItWs (IT Workshop)</a></button> 
        </div>
        <div className="col-3 my-2 ml-auto"><img src={pic2} alt="loading..." style={{width:"500px", height:"300px"}}/></div>
      </div>
        </div>
    </div>
   </>
  )
}
