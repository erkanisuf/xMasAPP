import React from "react";
import { Provider } from "react-redux";

import renderer from "react-test-renderer";
import { store } from "../../Redux/store";
import CartToAPI from "./CartToAPI";
import CartToAPICombine from "./CartToAPICombine";

it("snapshot <CartToAPI/> Component", () => {
  const testItem = {
    userId: 1,
    date: new Date(),
    products: [],
  };

  const tree = renderer
    .create(
      <Provider store={store}>
        <CartToAPI usercart={testItem} type={"approved"} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("snapshot <CartToAPICombine/> Component", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <CartToAPICombine setOpen={() => console.log("Test")} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
