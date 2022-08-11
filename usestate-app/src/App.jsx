import "./App.css";
import React from "react";
import NameChange from "./components/NameChange";
import ToggleNameByuseState from "./components/ToggleNameByuseState";

const App = () => {
  return (
    <>
      <NameChange />
      <hr />
      <ToggleNameByuseState />
    </>
  );
};

export default App;
