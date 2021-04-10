import React from "react";
import { Provider } from "react-redux";

import renderer from "react-test-renderer";
import { store } from "../../Redux/store";
import Approved from "./Approved";

it("snapshot <Approved/> Component", () => {
  const testArray = [{ productId: 1, quantity: 2 }];
  const tree = renderer
    .create(
      <Provider store={store}>
        <Approved approvedItems={testArray} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
