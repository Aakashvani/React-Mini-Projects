import "./App.css";
import React from "react";
import Calculator from "./components/Calculator";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Calculator />
      <Footer/>
    </div>
  );
};

export default App;
