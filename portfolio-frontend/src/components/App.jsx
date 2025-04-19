import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import MainContent from "./MainContent";
import Footer from "./Footer";

const App = () => {
  console.log("✅ App loaded");

  return (
    <>
      <Header />
      <Menu />
      <MainContent />
      <Footer />
    </>
  );
};

export default App;