import Enzyme, { shallow } from "enzyme";
import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import Sys from "../../src/components/sys";
Enzyme.configure({ adapter: new Adapter() });

describe("App component", () => {
  test("renders learn react link", () => {
    const wrapper = shallow(<Sys />);
    expect(wrapper.exists()).toBe(true);
  });
});