import React from "react";

import "./App.css";
import Main from "./components/Main";
import MyCart from "./components/MyCart/MyCart";

function App() {
  return (
    <div className="App">
      <h1> Droppe</h1>
      <div style={{ display: "flex" }}>
        <MyCart />
      </div>
      <Main />
    </div>
  );
}

export default App;
