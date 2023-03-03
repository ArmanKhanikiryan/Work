import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Products from "./pages/products";
import Service from "./pages/service";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/service" element={<Service/>} />
      </Routes>
    </div>
  );
}

export default App;
