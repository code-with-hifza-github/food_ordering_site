import React, { useState } from "react";
import NavBar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Cart from "./components/pages/cart/Cart";
import PlaceOrder from "./components/pages/placeOrder/PlaceOrder";
import Footer from "./components/footer/Footer";
import LoginPopup from "./components/loginPopup/LoginPopup";
import ExploreMenu from "./components/exploreMenu/ExploreMenu";
import Search from "./components/pages/search/Search"; 
import About from "./components/footerPages/about/About";
import Delivery from "./components/footerPages/delivery/Delivery"; 
import PrivacyPolicy from "./components/footerPages/privacyPolicy/PrivacyPolicy"; 

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
          <Route path="/exploremenu" element={<ExploreMenu />} />
          <Route path="/search" element={<Search />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/delivery" element={<Delivery />} /> 
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
