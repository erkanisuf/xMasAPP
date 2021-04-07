import React from "react";

import "./App.css";
import Main from "./components/Main";
import MyCart from "./components/MyCart/MyCart";
import MyCartApproved from "./components/MyCart/MyCartApproved";
import MyCartDisApproved from "./components/MyCart/MyCartDisApproved";

function App() {
  const items = [
    {
      userId: 5,
      date: "2020-02-03",
      products: [
        { productId: 52, quantity: 12 },
        { productId: 12, quantity: 52 },
      ],
    },
    {
      userId: 3,
      date: "2020-02-03",
      products: [
        { productId: 52, quantity: 12 },
        { productId: 12, quantity: 52 },
      ],
    },
  ];
  const postreq = () => {
    test();
    items.map((el) => test2(el));
  };
  const test = () => {
    fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify([
        {
          userId: 5,
          date: "2020-02-03",
          products: [
            { productId: 52, quantity: 12 },
            { productId: 12, quantity: 52 },
          ],
        },
        {
          userId: 3,
          date: "2020-02-03",
          products: [
            { productId: 52, quantity: 12 },
            { productId: 12, quantity: 52 },
          ],
        },
      ]),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  const test2 = (items: any) => {
    fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify(items),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <MyCartApproved />
        <MyCartDisApproved />
        <MyCart />
      </div>

      <button onClick={postreq}>aqqq</button>
      <h1> Droppe</h1>
      <Main />
    </div>
  );
}

export default App;
