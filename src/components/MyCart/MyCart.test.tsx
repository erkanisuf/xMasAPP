import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { store } from "../../Redux/store";
import MyCart from "./MyCart";
import MyCartApproved from "./MyCartApproved";
import MyCartDisApproved from "./MyCartDisApproved";

it("snapshot <MyCart /> Component", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MyCart />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("snapshot <MyCartApproved /> Component", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MyCartApproved />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("snapshot <MyCartDisApproved/> Component", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MyCartDisApproved />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
