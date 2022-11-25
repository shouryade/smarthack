import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
// import About from "./components/about/About";
import Image from "./Image";
import Register from "./components/auth/Register";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/auth/Login";
import Dashboard from "./components/Dashboard";

import Footer from "./components/home/Footer";
// import Dashboard from "./components/Dashboard";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Image />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* <Route path="/play" element={<Playc />} /> */}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
