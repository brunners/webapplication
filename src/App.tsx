import { useState,useContext,useEffect } from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import Home from "./pages/home/home";
import Headbar from "./modules/headbar/headbar";
import Footer from "./modules/footer/footer";
import Impressum from "./pages/impressum/impressum";
import Login from "./pages/login/login";
import AGB from "./pages/agb/AGB";

import { AuthContext } from './context/authContext'
import Admini from "./pages/admin/admin";


function App() {
  const {status, userId, handleLogOut } = useContext(AuthContext)
  const [count, setCount] = useState(0);
  const [isAuth, setIsAuth] = useState(false)
  useEffect(()=>{
    if (status === 'authenticated'){
        setIsAuth(true)
    }
    else(status=='no-authenticated')
    {
        setIsAuth(false)
    }
})

  return (
    <>
      <Headbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/impressum' element={<Impressum/>}/>
        <Route path='/AGB' element={<AGB/>}/>
        <Route path='/admin' element={<Login/>}/>

          <Route path="/backend" element={<Admini/>}/>
    
      </Routes>
      <Footer />
    </>
  );
}

export default App;
