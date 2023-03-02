import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
