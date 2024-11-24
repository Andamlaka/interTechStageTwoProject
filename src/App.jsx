import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Cart from "./Pages/Cart.jsx";
import Checkout from "./Pages/Checkout.jsx";
import Navbar from "./components/Navbar.jsx";
import MobileMenu from './components/MobileMenu.jsx';

const App = () => {
  const HomeFirst={
    name:"Gebeya",
    
  }


  
  return (
  
    <div>
    {/* Navbar is outside of Routes */}
    <Navbar />
    <MobileMenu />
    {/* Define application routes */}
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </div>
  );
}

export default App;