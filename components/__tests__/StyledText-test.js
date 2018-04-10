import "react-native";
import React from "react";
import { PsycheText } from "../StyledText";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(<PsycheText>Snapshot test!</PsycheText>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
