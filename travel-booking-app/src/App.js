import React from "react";
import Carousel from "./components/Carousel";
import Destination from "./components/Destination";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Selects from "./components/Selects";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Destination />
      <Search />
      <Selects />
      <Carousel />
    </>
  );
};

export default App;
