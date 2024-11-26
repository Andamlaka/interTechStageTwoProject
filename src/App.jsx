import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Cart from "./Pages/Cart.jsx";
import Checkout from "./Pages/Checkout.jsx";
import Navbar from "./components/Navbar.jsx";
import MobileMenu from './components/MobileMenu.jsx';
import Footer from './components/footer.jsx';
// 
const App = () => {
  
  return (
    <div className='overflow-x-hidden'>
      {/* Navbar and Mobile Menu are outside Routes, so they will always appear */}
      <Navbar 

      />
      <MobileMenu/>

      {/* Define application routes */}
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer/>
      
    </div>
  );
};

export default App;
