import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_BY_CATEGORY,
  FETCH_PRODUCTS_BY_ID,
  INVALID_REQST,
  ORDER_PRODUCTS_BY_PRICE,
} from "../../src/actions/index";
import productReducer from "../../src/reducers/productReducer";
const INITIAL_STATE = {
  res: [],
  error: null,
};
describe(" reducers productReducer", () => {
  it("should return ddefault state", () => {
    const newstate = productReducer(INITIAL_STATE, {});
    expect(newstate).toEqual(INITIAL_STATE);
  });

  it("Success", () => {
    const newstate = productReducer(INITIAL_STATE, {
      type: FETCH_PRODUCTS,
      payload: ["wartortle"],
    });
    expect(newstate).toEqual({
      ...INITIAL_STATE,
      res: ["wartortle"],
    });
  });

  it("failure", () => {
    const newstate = productReducer(INITIAL_STATE, {
      type: INVALID_REQST,
      payload: "",
    });
    expect(newstate).toEqual({
      ...INITIAL_STATE,
      error: "",
    });
  });
  it("Success", () => {
    const newstate = productReducer(INITIAL_STATE, {
      type: FETCH_PRODUCTS_BY_CATEGORY,
      payload: ["wartortle"],
    });
    expect(newstate).toEqual({
      ...INITIAL_STATE,
      res: ["wartortle"],
    });
  });

  it("failure", () => {
    const newstate = productReducer(INITIAL_STATE, {
      type: INVALID_REQST,
      payload: "",
    });
    expect(newstate).toEqual({
      ...INITIAL_STATE,
      error: "",
    });
  });
  it("Success", () => {
    const newstate = productReducer(INITIAL_STATE, {
      type: FETCH_PRODUCTS_BY_ID,
      payload: ["wartortle"],
    });
    expect(newstate).toEqual({
      ...INITIAL_STATE,
      res: ["wartortle"],
    });
  });

  it("failure", () => {
    const newstate = productReducer(INITIAL_STATE, {
      type: INVALID_REQST,
      payload: "",
    });
    expect(newstate).toEqual({
      ...INITIAL_STATE,
      error: "",
    });
  });
  it("Success", () => {
    const newstate = productReducer(INITIAL_STATE, {
      type: ORDER_PRODUCTS_BY_PRICE,
      payload: ["item1","item2","item3"],
    });
    expect(newstate).toEqual({
      ...INITIAL_STATE,
      res: ["item1","item2","item3"],
    });
  });

  it("failure", () => {
    const newstate = productReducer(INITIAL_STATE, {
      type: INVALID_REQST,
      payload: "",
    });
    expect(newstate).toEqual({
      ...INITIAL_STATE,
      error: "",
    });
  });
});
