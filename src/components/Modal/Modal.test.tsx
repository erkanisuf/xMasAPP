import React from "react";
import { Provider } from "react-redux";

import renderer from "react-test-renderer";
import { store } from "../../Redux/store";

import Modal from "./Modal";

it("snapshot <Modal/> Component", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Modal>
          <h1>Test Children</h1>
        </Modal>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
