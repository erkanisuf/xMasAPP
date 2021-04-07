import React from "react";
import renderer from "react-test-renderer";

import ReactDOM from "react-dom";
import { render } from "@testing-library/react";

import Product from "./Product";
import { Provider } from "react-redux";
import { store } from "../../Redux/store";
test("Fake", () => {
  expect(true).toBeTruthy();
});

it("red", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Product productId={1} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
