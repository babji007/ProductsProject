import React from "react";

import Adapter from "enzyme-adapter-react-16";
import Enzyme, { mount, shallow } from "enzyme";
Enzyme.configure({ adapter: new Adapter() });
import Container from "../../src/components/Container";
// import Products from "../../src/components/Products";
import configureMockStore from "redux-mock-store";
import {
  fetchproducts,
  fetchproductsByCategory,
  fetchProductsById,
  sortProducts,
} from "../../src/actions/FetchProducts";
import {
  mapDispatchProps,
  mapStateToProps,
} from "../../src/components/Container";
import {
  addToCart,
  decreaseFromCart,
  removeFromCart,
} from "../../src/actions/CartActions";
const mockStore = configureMockStore();

describe("testing for container", () => {
  it("mapstatetoprops", () => {
    const initialState = {
      event: {
        res: {},
        error: {},
        // cartItems:{},
        filteredProducts: {},
      },
      event1: {
        cartItems: {},
      },
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<Container.Products store={store} />);
    expect(wrapper.props().res).toBe;
  });
  it("mapdispatch working", () => {
    const initialState = {
      event: {
        res: {},
        error: {},
        // cartItems:{},
        filteredProducts: {},
      },
      event1: {
        cartItems: {},
      },
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<Container.Products store={store} />);
    console.log(wrapper.debug());
    // shallow(<Container store={store} />);
    const dispatch = function () {};
    mapDispatchProps(dispatch).fetchproducts();
    expect(fetchproducts).toHaveBeenCalled;
  });
  it("mapdispatch working", () => {
    const initialState = {
      event: {
        res: {},
        error: {},
        // cartItems:{},
        filteredProducts: {},
      },
      event1: {
        cartItems: {},
      },
    };

    const store = mockStore(initialState);
    const wrapper = shallow(<Container.ProductDetail store={store} />);
    const dispatch = function () {};
    mapDispatchProps(dispatch).fetchProductsById();
    expect(fetchProductsById).toBeCalled;
  });
  it("mapdispatch working", () => {
    const initialState = {
      event: {
        res: {},
        error: {},
        // cartItems:{},
        filteredProducts: {},
      },
      event1: {
        cartItems: {},
      },
    };

    const store = mockStore(initialState);
    const wrapper = shallow(<Container.Sidebar store={store} />);
    const dispatch = function () {};
    mapDispatchProps(dispatch).fetchproductsByCategory();
    expect(fetchProductsById).toBeCalled;
  });
  it("mapdispatch working", () => {
    const initialState = {
      event: {
        res: {},
        error: {},
        // cartItems:{},
        filteredProducts: {},
      },
      event1: {
        cartItems: {},
      },
    };

    const store = mockStore(initialState);
    const wrapper = shallow(<Container.Cart store={store} />);
    const dispatch = function () {};
    mapDispatchProps(dispatch).addToCart();
    expect(addToCart).toBeCalled;
  });
  it("mapdispatch working", () => {
    const initialState = {
      event: {
        res: {},
        error: {},
        // cartItems:{},
        filteredProducts: {},
      },
      event1: {
        cartItems: {},
      },
    };

    const store = mockStore(initialState);
    const wrapper = shallow(<Container.Cart store={store} />);
    const dispatch = function () {};
    mapDispatchProps(dispatch).removeFromCart();
    expect(removeFromCart).toBeCalled;
  });
  it("mapdispatch working", () => {
    const initialState = {
      event: {
        res: {},
        error: {},
        // cartItems:{},
        filteredProducts: {},
      },
      event1: {
        cartItems: {},
      },
    };

    const store = mockStore(initialState);
    const wrapper = shallow(<Container.Cart store={store} />);
    const dispatch = function () {};
    mapDispatchProps(dispatch).decreaseFromCart();
    expect(decreaseFromCart).toBeCalled;
  });
  it("mapdispatch working", () => {
    const initialState = {
      event: {
        res: {},
        error: {},
        // cartItems:{},
        filteredProducts: {},
      },
      event1: {
        cartItems: {},
      },
    };

    const store = mockStore(initialState);
    const wrapper = shallow(<Container.Sidebar store={store} />);
    const dispatch = function () {};
    mapDispatchProps(dispatch).sortProducts();
    expect(sortProducts).toBeCalled;
  });
});
