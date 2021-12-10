const initial_state = {
  res: [],
  items:[],
  sort:[],
  error: null,
};
const productReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        res: action.payload,
      };
    case "INVALID_REQST":
      return {
        ...state,
        error: action.payload,
      };
    case "FETCH_PRODUCTS_BY_CATEGORY":
      // console.log("hello");
      return {
        ...state,
        res: action.payload,
      };
      case "FETCH_PRODUCTS_BY_ID":
        console.log("hellobabji");
        return {
          ...state,
          res: action.payload,
        };
      case "ORDER_PRODUCTS_BY_PRICE":
      return {
        ...state,
        res: action.payload.items,
      };
     
    default:
      return state;
  }
};

export default productReducer;
