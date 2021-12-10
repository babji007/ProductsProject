import React from "react";

import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
Enzyme.configure({ adapter: new Adapter() });
import configureMockStore from "redux-mock-store";
import Sidebar from "../../src/components/Sidebar";

const mockStore = configureMockStore();

describe("testing for products page", () => {
  let props = {
    // res:[],
    cartItems: [],
    changeCategory: (fn) => fn,
    fetchproductsByCategory: (fn) => fn,
    sortBy: (fn) => fn,
    sortProducts: (fn) => fn,
    res: (fn) => fn,
    // removeFilters:(fn)=>(fn),
    fetchproducts: (fn) => fn,
    loadRefreshContent: (fn) => fn,
    content: (fn) => fn,
  };

  it("should call sortby method", () => {
    const value = {
      target: {
        e: {},
      },
    };

    const wrapper = shallow(<Sidebar {...props} />);
    const para = wrapper.find("select");
    para.simulate("change");
    expect(wrapper.find("sortBy")).toHaveBeenCalled;
  });

  it("should call remove filters method", () => {
    const wrapper = shallow(<Sidebar {...props} />);

    const para = wrapper.find("button");
    para.simulate("click");
    expect(wrapper.find("loadRefreshContent")).toBeCalled;
  });

  it("should call changecategory method", () => {
    const value = {
      target: {
        category: "",
      },
    };
    const wrapper = shallow(<Sidebar {...props} />);
    expect(wrapper.instance().changeCategory(value)).toHaveBeenCalled;
  });
  it("should call sortby method", () => {
    const value = {
      target: {
        e: "",
      },
    };
    const wrapper = shallow(<Sidebar {...props} />);
    expect(wrapper.instance().sortBy(value)).toHaveBeenCalled;
  });
});
