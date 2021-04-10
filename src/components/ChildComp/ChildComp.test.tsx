import React from "react";
import { Provider } from "react-redux";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";

import { store } from "../../Redux/store";
import ChildComp from "./ChildComp";
Enzyme.configure({ adapter: new Adapter() });
it("snapshot <ChildComp/> Component", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ChildComp childname={1} fetchURL={"testlink.com"} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
