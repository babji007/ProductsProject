import { ADD_TO_CART, REMOVE_FROM_CART, DECREASE_FROM_CART } from "./index";

export const addToCart = (items, product) => (dispatch) => {
  const cartItems = items.slice(0);
  console.log("rahul", cartItems);
  let alreadyExists = false;
  cartItems.forEach((x) => {
    if (x.id === product.id) {
      alreadyExists = true;
      x.count++;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, count: 1 });
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const decreaseFromCart = (items, product) => (dispatch) => {
  const cartItems = items.slice(0);
  console.log("rahul", cartItems, items);
  cartItems.filter((x) => {
    if (x.id === product.id) {
      if (x.count >= 2) {
        x.count--;
      }
    }
  });
  dispatch({
    type: DECREASE_FROM_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (items, product) => (dispatch) => {
  const cartItems = items.slice().filter((x) => x.id !== product.id);
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
