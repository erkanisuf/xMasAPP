import React from "react";

import Main from "./components/Main";
import MyCart from "./components/MyCart/MyCart";
import AppCSS from "./App.module.css";
import { FaTree } from "react-icons/fa";
function App() {
  // Main Elements are All Childrens with the products and approved and discarded items components.
  //MyCart is the Modal with the Cart And there is also the Submit of the cart to the API.
  return (
    <div className="App">
      <h1 className={AppCSS.logo}>
        <FaTree /> Droppe Xmas
      </h1>
      <div>
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <MyCart />
        </div>
        <Main />
      </div>
      <footer className={AppCSS.thefooter}>
        {" "}
        <h1>Thanks for the task ! :)</h1>
      </footer>
    </div>
  );
}

export default App;
