import React from "react";

import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
Enzyme.configure({ adapter: new Adapter() });
import ProductDetail from "../../src/components/ProductDetail";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();

describe("testing for cart", () => {
  let showButton = true;
  let props = {
    item: [],
    res: [],
    cartItems: [],
    addCart: (fn) => fn,
    addToCart: (fn) => fn,
    match:{
        params: (fn) => fn},
    fetchProductsById: (fn) => fn,
    // removeFromCart:(fn)=>(fn),
  };
  const value = {
    target:{
    item: {},
   } };

  it("should call count decrement method", () => {
    const wrapper = shallow(<ProductDetail {...props} />);
    expect(wrapper.instance().addCart(value)).toHaveBeenCalled;
  });

});
