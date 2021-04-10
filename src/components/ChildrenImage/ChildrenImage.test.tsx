import React from "react";
import { Provider } from "react-redux";

import renderer from "react-test-renderer";
import { store } from "../../Redux/store";
import ChildrenImage from "./ChildrenImage";

it("snapshot <ChildrenImage/> Component", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ChildrenImage name={1} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
