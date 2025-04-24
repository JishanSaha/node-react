import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Profile from "../pages/Profile";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";

const App = () => {
  console.log("✅ App loaded");

  return (
    <>
      <Header />
      <Menu />
      {/* Dynamic Content Based on Route */}
      {/* <MainContent /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;