import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Guide from "./components/Guide";
import Information from "./components/Information";
import Navbar from "./components/Navbar";


function App() {
const [activeComponent, setActiveComponent] = useState("home");

  
  return (
<BrowserRouter>
 <div className="App">
 <Navbar/>
    <Routes>

  <Route path="/" element={<Home/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/guide" element={<Guide/>}/>
  <Route path="/information" element={<Information/>}/>
</Routes>  
    </div>


</BrowserRouter>
    
  );
}


export default App;
