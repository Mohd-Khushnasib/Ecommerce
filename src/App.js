import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./component/Menu";
import Home from "./component/Home";
import About from "./component/About";
import ProductDetails from "./component/Product/ProductDetails";
import ProductDetails1 from "./component/Product/ProductDetails1";

export default function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/productdetails/:id" element={<ProductDetails/>}></Route>
        <Route path="/productdetails1" element={<ProductDetails1 />} />
      </Routes>
    </Router>
  );
}
