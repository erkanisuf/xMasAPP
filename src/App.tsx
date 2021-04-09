import React from "react";

import "./App.css";
import Main from "./components/Main";
import MyCart from "./components/MyCart/MyCart";

function App() {
  const fetchtoapi = () => {
    fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify({
        userId: 5,
        date: new Date(),
        products: [
          { productId: 5, quantity: 1 },
          { productId: 1, quantity: 5 },
        ],
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  return (
    <div className="App">
      <button onClick={fetchtoapi}>klii</button>
      <h1> Droppe</h1>
      <div style={{ display: "flex" }}>
        <MyCart />
      </div>
      <Main />
    </div>
  );
}

export default App;
