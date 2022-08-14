import { useState } from "react";
import "./App.css";
/* 
useState with object

Que. what is three dots / spread operator{...} ?
Ans:- The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.
https://www.w3schools.com/react/react_es6_spread.asp
*/
function App() {
  const [myObject, setMyObject] = useState({
    shoppingList: "Apple",
    quantity: "2Kg",
  });

  const changeObj = () => {
    setMyObject({ ...myObject, quantity: "4kg" });
  };
  return (
    <div className="App">
      <h1>
        Buy:-{myObject.shoppingList} - Qty:-{myObject.quantity}
      </h1>

      <button onClick={changeObj}>Update Qty</button>
    </div>
  );
}

export default App;
