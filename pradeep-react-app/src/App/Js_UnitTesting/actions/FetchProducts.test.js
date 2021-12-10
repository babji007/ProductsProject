import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  fetchproducts,
  fetchproductsByCategory,
  fetchProductsById,
  sortProducts,
} from "../../src/actions/FetchProducts";
// import { testStore } from '../Utils';
const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore();

describe("fetchproducts actions", () => {
  
  it(" fetch all products ", () => {
    mock
      .onGet("https://fakestoreapi.com/products/")
      .reply(200, { res: [{ name: "men's clothing" }, { name: "women's" }] });
    const newstate = store.dispatch(fetchproducts()).then(() => {
      let expectedActions = [
        {
          type: "FETCH_PRODUCTS",
          payload: { res: [{ name: "men's clothing" }, { name: "women's" }] },
        },
      ];

      expect(newstate).toEqual(expectedActions);
    });
  });
  it("fetch all products error", () => {
    const newstate = store.dispatch(fetchproducts()).catch(() => {
      let expectedActions = [
        {
          type: "INVALID_REQST",
          payload: { error: { message: "error message" } },
        },
      ];
      expect(newstate).toEqual(expectedActions);
    });
  });

  it("for products by category", () => {
    mock
      .onGet("https://fakestoreapi.com/products/category/jewelery")
      .reply(200, { res1: [{ name: "men's clothing" }, { name: "women's" }] });
    const newstate = store
      .dispatch(fetchproductsByCategory("jewelery"))
      .then(() => {
        let expectedActions = [
          {
            type: "FETCH_PRODUCTS_BY_CATEGORY",
            payload: {
              res1: [{ name: "men's clothing" }, { name: "women's" }],
            },
          },
        ];

        expect(newstate).toEqual(expectedActions);
      });
  });
  it("for products by category error", () => {
    const newstate = store
      .dispatch(fetchproductsByCategory("jewelery"))
      .catch(() => {
        let expectedActions = [
          {
            type: "INVALID_REQST",
            payload: { error: { message: "error message" } },
          },
        ];
        expect(newstate).toEqual(expectedActions);
      });
  });

  it("for products by id", () => {
    mock
      .onGet("https://fakestoreapi.com/products/2")
      .reply(200, { res2: [{ name: "men's clothing" }, { name: "women's" }] });
    const newstate = store.dispatch(fetchProductsById("1")).then(() => {
      let expectedActions = [
        {
          type: "FETCH_PRODUCTS_BY_ID",
          payload: { res2: [{ name: "men's clothing" }, { name: "women's" }] },
        },
      ];

      expect(newstate).toEqual(expectedActions);
    });
  });
  it("productsby id error", () => {
    const newstate = store.dispatch(fetchProductsById("1")).catch(() => {
      let expectedActions = [
        {
          type: "INVALID_REQST",
          payload: { error: { message: "error message" } },
        },
      ];
      expect(newstate).toEqual(expectedActions);
    });
  });
  it("for sorting products", () => {
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
    const sort = "latest";

    const newstate = store.dispatch(sortProducts(items, sort));
    console.log("nnewstate", newstate);
    items.sort((items) => {
      let expectedActions = [
        {
          type: "ORDER_PRODUCTS_BY_PRICE",
          payload: { items },
        },
      ];
      expect(newstate).toEqual(expectedActions);
    });
  });
});
