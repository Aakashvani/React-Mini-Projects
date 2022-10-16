import React from "react";
import Destination from "./components/Destination";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Destination />
      <Search />
    </>
  );
};

export default App;
