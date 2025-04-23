import React from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";

import Home from "../home/home";
import Products from "../products/products";

const Root = () =>{
    return (
    <div>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
        </Routes>
      </div>
    </Router>
    <Outlet />
    </div>
   );
}

export default Root;