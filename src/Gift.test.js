import React from "react";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import Gift from "./Gift";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
});

describe("Gift", () => {
  const gift = shallow(<Gift />);

  it("renders properly", () => {
    expect(gift).toMatchSnapshot();
  });
  it("initializes a person and present in `state`", () => {
    expect(gift.state()).toEqual({ person: "", present: "" });
  });
  describe("when typing into the person input", () => {
    const uncle = "Uncle";
    beforeEach(() => {
      gift
        .find(".input-person")
        .simulate("change", { target: { value: uncle } });
    });
    it("updates the person in `state`", () => {
      expect(gift.state().person).toEqual(uncle);
    });
  });
  describe("when typing into the `present`input", () => {
    const present = "Present";
    beforeEach(() => {
      gift
        .find(".input-present")
        .simulate("change", { target: { value: present } });
    });
    it("it updates the `present` in state", () => {
      expect(gift.state().present).toEqual(present);
    });
  });
});
