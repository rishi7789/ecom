import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from './pages/Register';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Card from "./components/Card"
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

const App = () => {
  const [cart,setCart] =useState([])

  const handleClick=(item)=>{
   setCart([...cart,item])
   console.log(item);
  }
  
  return (

    
     <Router>
      <Routes>
        <Route exact path="/" element={<Home handleClick={handleClick}/>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/cart" element={<Cart cart={cart}/>} />
        </Routes>
    </Router>


   
  );
};

export default App;
