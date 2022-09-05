import { useEffect } from 'react';
import Main from './components/main';
import Login from './components/login'
import SignUp from './components/signup'
import AboutUs from './components/aboutUs';
import Team from './components/Team';
import LoginDashboard from './components/logindashboard';
import Opportunities from './components/Opportunities';
import SecYearCSE from './components/secYrCSE'
import SecYearECE from './components/secYrECE'
import FirstYrCSE from './components/firstYrCSE'
import FirstYrECE from './components/firstYrECE'
import ThirdYrCSE from './components/thirdYrCSE'
import ThirdYrECE from './components/thirdYrECE'
import ContactUs from './components/contact'
import {BrowserRouter, Switch, Route, Link, Routes} from "react-router-dom"

import {gapi} from 'gapi-script'
import GoogLogin from './components/googleLogin';
const client_id = "876099562964-vib0m81cbni758tqfeilui0pl10tqbmt.apps.googleusercontent.com"


function App() {
  
  useEffect(() => {
    function start(){
      gapi.client.init({
        client_id: {client_id} ,
        scope: ""
      })
    }
  
    gapi.load("client:auth2 " , start)
  })

  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route exact path="/BITP-editNotes" element={<Main/>} />
      <Route path="/aboutUs" element={<AboutUs/>} />
      <Route path="/team" element={<Team />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/googleLogin" element={<GoogLogin/>} />

      <Route path="/signup" element={<SignUp />} />
      <Route path="/loginDashBoard" element={<LoginDashboard/>} />
      <Route path="/opportunities" element={<Opportunities/>} />
      <Route path="/firstYearCSE" element={<FirstYrCSE/>} />
      <Route path="/secYearCSE" element={<SecYearCSE/>} />
      <Route path="/thirdYearCSE" element={<ThirdYrCSE/>} />
      <Route path="/firstYearECE" element={<FirstYrECE/>} />
      <Route path="/secYearECE" element={<SecYearECE/>} />
      <Route path="/thirdYearECE" element={<ThirdYrECE/>} />
      <Route path="/contact" element={<ContactUs/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
