import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Registration from "./components/Auth/RegistrationFarmers";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
