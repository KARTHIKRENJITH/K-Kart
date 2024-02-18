import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Dishes from "./components/Dishes";

import { Route, Routes } from "react-router-dom";
import ProductsAdd from "./components/ProductsAdd";

const App = () => {
  return (
    <div> <Navbar/>
      <Routes>
       
        <Route path="" element={<Home />} />
        <Route path="/offers" element={<Dishes />} />
        <Route path="/abouts" element={<About />} />
        <Route path="/addpro" element={<ProductsAdd />} />
       
      </Routes>
    </div>
  );
};

export default App;
