
const initial_state = {
  // res: [],
  cartItems:[],
};
export const cartReducer = (
  state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || initial_state) },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { 
        // ...state,
        cartItems: action.payload.cartItems };
    case "REMOVE_FROM_CART":
      return { cartItems: action.payload.cartItems };
      case "DECREASE_FROM_CART":
        return { cartItems: action.payload.cartItems };
    default:
      return state;
  }
};