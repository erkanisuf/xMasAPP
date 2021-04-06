import React, { useState } from "react";
import ChildComp from "./ChildComp/ChildComp";
import { v4 as uuidv4 } from "uuid";
const Main = () => {
  const [myChildren, setMyChildren] = useState<string[]>([
    "Child 1",
    "Child 2",
    "Child 3",
    "Child 4",
    "Child 5",
  ]);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",

        height: "100%",
        justifyContent: "flex-start",
      }}
    >
      {myChildren.map((el, index) => {
        return (
          <ChildComp
            key={uuidv4()}
            childname={el}
            fetchURL={`https://fakestoreapi.com/carts/${index + 1}`}
          />
        );
      })}
    </div>
  );
};

export default Main;
