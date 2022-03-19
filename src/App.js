import React from "react";
import "./App.css";
import Header from "./pages/header";
import Login from "./pages/login";
import Register from "./pages/register";
import Verify from "./pages/verify";
import SendVerify from "./pages/sendVerify";
import Home from "./pages/home";
import CreatePost from './pages/createPost'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from './pages/pageNotFound';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="create-account" element={<Register />} />
          <Route path="verify" element={<Verify />} />
          <Route path="sendVerify" element={<SendVerify />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
