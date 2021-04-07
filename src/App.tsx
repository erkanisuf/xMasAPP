import React from "react";

import "./App.css";
import Main from "./components/Main";
import MyCart from "./components/MyCart/MyCart";

function App() {
  const test = () => {
    fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify({
        userId: 5,
        date: "2020-02-03",
        products: [
          { productId: 52, quantity: 12 },
          { productId: 12, quantity: 52 },
        ],
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  return (
    <div className="App">
      <MyCart />
      <button onClick={test}>aqqq</button>
      <h1> Droppe</h1>
      <Main />
    </div>
  );
}

export default App;
