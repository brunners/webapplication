import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Headbar from "./modules/headbar/headbar";
import Footer from "./modules/footer/footer";
import Impressum from "./pages/impressum/impressum";
import Login from "./pages/login/login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Headbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/impressum' element={<Impressum/>}/>
        <Route path='/admin' element={<Login/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
