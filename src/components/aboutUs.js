import React from 'react'
import pic from '../images/about.png'

export default function () {
  return (
    <>
    <div className="row chose px-4 py-4 ms-5">
 <div className='col-sm-8 mt-5 px-4 py-4'><h1 className='p-3' style={{fontFamily: "Cursive, sans-serif", fontSize: "50px",textTransform: "uppercase",
  letterSpacing: "1.5px", fontWeight: "500"}}>About Us</h1>
  <br />
  <br />
  <div className='text' style={{fontSize: "20px"}}>As we know that we face a lot of issue when we are in 2nd year (specially in 3rd sem) as this is the first time where we get to study our core papers. We don't have proper guidance and also notes. Everyone try to connect to senior and ask for notes so that they will get help in end-semester exams.
  We too faced this issue and thus came up with the solution to collect all the notes at the same place so that students don't have to ask for notes here and there.</div>
  <br />
  <br />
<div className="text" style={{fontSize: "20px"}}> We at, BITP editNotes, hace collection of almost notes of all the subject related to CSE(Computer science and engg) , we will soon expand this to different branches.</div></div>
 <div className="col-sm-4 mt-5 px-2 py-4"> <img src={pic} alt="" style={{width:"350px"}}/></div>
</div>
    </>
  )
}
