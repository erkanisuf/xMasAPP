import React from "react";
import { Provider } from "react-redux";

import renderer from "react-test-renderer";
import { store } from "../../Redux/store";
import Discarded from "./Discarded";

it("snapshot <Discarded/> Component", () => {
  const testArray = [{ productId: 1, quantity: 2 }];
  const tree = renderer
    .create(
      <Provider store={store}>
        <Discarded discardedItems={testArray} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
