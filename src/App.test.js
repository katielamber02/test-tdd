import React from "react";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import App from "./App";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
});
describe("App", () => {
  const app = shallow(<App />);
  const id = 1;

  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });
  it("it initializes the `state` with an empty list of gifts", () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe("when clicking the `add-gift` button", () => {
    beforeEach(() => {
      app.find(".btn-add").simulate("click");
    });
    afterEach(() => {
      app.setState({ gifts: [] });
    });
    it("adds a new gift to `state` ", () => {
      //expect(app.state().gifts).toEqual([{ id: 1 }]);
      expect(app.state().gifts).toEqual([{ id: id }]);
    });
    it("adds a new gift to the rendered list ", () => {
      expect(app.find(".gift-list").children().length).toEqual(1);
    });
    it("creates a gift component", () => {
      expect(app.find("Gift").exists()).toBe(true);
    });
  });
  describe("and the user wnats to remove the added gift", () => {
    beforeEach(() => {
      app.instance().removeGift(id);
    });
    it("removes the gift from a `state`", () => {
      expect(app.state().gifts).toEqual([]);
    });
  });
});
