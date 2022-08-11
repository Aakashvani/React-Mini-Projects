import "../App.css";
import React from "react";
import { useState } from "react";

const NameChange = () => {
  const [text, setText] = useState("Hello useState");
  console.log("🚀 ~ file: App.jsx ~ line 7 ~ App ~ text", text);
  const handleUseState = () => {
    setText(
      "By clicking button the current state which was ' Hello world' is changed to some other text which u are reading by the help of useState, In useState:- const [text, setText] = useState('Hello world') i.e:- text is current state and setText is updated state"
    );
  };
  return (
    <div>
      <h2 style={{ textDecoration: "underline" }}>
        Change State by using useState Hook
      </h2>
      <h3>{text}</h3>
      <button onClick={handleUseState}>Click to update state</button>
    </div>
  );
};

export default NameChange;
