import React from "react";
import { Provider } from "react-redux";

import renderer from "react-test-renderer";
import { store } from "../../Redux/store";
import ConfirmWindow from "./ConfirmWindow";

it("snapshot <ConfirmWindow/> Component", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ConfirmWindow />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
