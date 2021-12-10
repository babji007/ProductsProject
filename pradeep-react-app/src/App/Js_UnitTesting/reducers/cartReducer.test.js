import {
  ADD_TO_CART,
  DECREASE_FROM_CART,
  INVALID_REQST,
  REMOVE_FROM_CART,
} from "../../src/actions/index";
// import cartReducer from '../../src/reducers/cartReducer'
import { cartReducer } from "../../src/reducers/cartReducer";
const INITIAL_STATE = {
  cartItems: [],
  // error: null
};
describe(" reducers cartReducer", () => {
  it("should return ddefault state", () => {
    const newstate = cartReducer(INITIAL_STATE, {});
    expect(newstate).toEqual(INITIAL_STATE);
  });

  it("Success", () => {
    const newstate = cartReducer(INITIAL_STATE, {
      type: ADD_TO_CART,
      payload: {
        cartItems: ["item1"],
      },
    });
    expect(newstate).toEqual({
      ...INITIAL_STATE,
      cartItems: ["item1"],
    });
  });

  it("Success", () => {
    const newstate = cartReducer(INITIAL_STATE, {
      type: DECREASE_FROM_CART,
      payload: {
        cartItems: ["item1"],
      },
    });
    expect(newstate).toEqual({
      ...INITIAL_STATE,
      cartItems: ["item1"],
    });
  });

  it("Success", () => {
    const newstate = cartReducer(INITIAL_STATE, {
      type: REMOVE_FROM_CART,
      payload: {
        cartItems: ["item1", "item2", "item3"],
      },
    });
    expect(newstate).toEqual({
      ...INITIAL_STATE,
      cartItems: ["item1", "item2", "item3"],
    });
  });
});
