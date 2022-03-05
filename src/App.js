import React from "react";
import "./App.css";
import Header from "./pages/header";
import Login from "./pages/login";
import Register from "./pages/register";
import Verify from "./pages/verify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" />
          <Route path="login" element={<Login />} />
          <Route path="create-account" element={<Register />} />
          {/* <Route path='verify' element={<Verify />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
