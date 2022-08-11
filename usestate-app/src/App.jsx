import "./App.css";
import React from "react";
import { useState } from "react";

const App = () => {
  const [text, setText] = useState("Hello useState");
  const handleUseState = () => {
    setText(
      "By clicking button the current state which was ' Hello world' is changed to some other text which u are reading by the help of useState, In useState:- const [text, setText] = useState('Hello world') i.e:- text is current state and setText is updated state"
    );
  };
  return (
    <div>
      <h3>{text}</h3>
      <button onClick={handleUseState}>Click to update state</button>
    </div>
  );
};

export default App;
