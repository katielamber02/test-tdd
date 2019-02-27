import React from "react";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import App from "./App";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
});

const app = shallow(<App />);

it("renders correctly", () => {
  expect(app).toMatchSnapshot();
});
it("it initializes the `state` with an empty list of gifts", () => {
  expect(app.state().gifts).toEqual([]);
});
it("adds a new gift to `state` when clicking the add new button", () => {
  app.find(".btn-add").simulate("click");

  expect(app.state().gifts).toEqual([{ id: 1 }]);
});
it("adds a new gift to the rendered list when clicking the `add gift` button", () => {
  app.find(".btn-add").simulate("click");
  expect(app.find(".gift-list").children().length).toEqual(1);
});
