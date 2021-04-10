import React from "react";
import renderer from "react-test-renderer";
import SmallSpinner from "./SmallSpinner";
import Spinner from "./Spinner";

it("snapshot <Spinner /> Component", () => {
  const tree = renderer.create(<Spinner />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("snapshot <SmallSpinner /> Component", () => {
  const tree = renderer.create(<SmallSpinner />).toJSON();
  expect(tree).toMatchSnapshot();
});
