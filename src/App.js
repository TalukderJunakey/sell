import Navbar from "./Pages/Shared/Navbar";

import { Routes, Route, } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/Home/About";
import Login from "./Pages/Login/Login";



function App() {
  return (
    <div className='mzx-w-7xl mx-auto px-20' >
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>



      </Routes>
    </div>
  );
}

export default App;
