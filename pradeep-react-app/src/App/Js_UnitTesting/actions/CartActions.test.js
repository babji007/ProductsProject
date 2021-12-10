import React from "react";

import Adapter from "enzyme-adapter-react-16";
import Enzyme, { mount, shallow } from "enzyme";
Enzyme.configure({ adapter: new Adapter() });
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  addToCart,
  decreaseFromCart,
  removeFromCart,
} from "../../src/actions/CartActions";
const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore();

describe("cart actions", () => {
  it("for add to cart action", () => {
    const items = [
      {
        value1: {
          id: 1,
          price: 120,
        },
        value2: {
          id: 2,
          price: 123,
        },
      },
    ];
    const value3 = {
      id: 3,
      price: 111,
    };
    const newstate = store.dispatch(addToCart(items, value3));
    console.log("nnewstate", newstate);
    items.forEach((items) => {
      expect(items).toBeDefined;
    });
  });
  it("for decrease from cart action", () => {
    const items = [
      {
        value1: {
          id: 1,
          price: 120,
        },
        value2: {
          id: 2,
          price: 123,
        },
      },
    ];
    const value3 = {
      id: 3,
      price: 111,
    };
    const newstate = store.dispatch(decreaseFromCart(items, value3));
    console.log("nnewstate", newstate);
    items.filter((items) => {
      expect(items).toBeDefined;
    });
  });
  it("for remove from cart action", () => {
    const items = [
      {
        value1: {
          id: 1,
          price: 120,
        },
        value2: {
          id: 2,
          price: 123,
        },
      },
    ];
    const value3 = {
      id: 3,
      price: 111,
    };
    const newstate = store.dispatch(removeFromCart(items, value3));
    console.log("newstate", newstate);
    items.filter((items) => {
      expect(items).toBeDefined;
    });
  });
});
// })
