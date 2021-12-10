import {
  FETCH_PRODUCTS,
  INVALID_REQST,
  FETCH_PRODUCTS_BY_CATEGORY,
  ORDER_PRODUCTS_BY_PRICE,
  FETCH_PRODUCTS_BY_ID,
} from "./index.js";
import axios from "axios";

export const fetchproducts = () => async (dispatch) => {
  await axios
    .get("https://fakestoreapi.com/products/")
    .then((res) => {
      // console.log("data123", res.data);
      dispatch(get(res.data));
    })
    .catch((error) => {
      dispatch(fetchError(error));
    });
};
const get = (res) => {
  return {
    type: FETCH_PRODUCTS,
    payload: res,
  };
};
const fetchError = (error) => {
  return {
    type: INVALID_REQST,
    payload: true,
  };
};

export const fetchProductsById = (productId) => async (dispatch) => {
  await axios
    .get("https://fakestoreapi.com/products/" + productId)
    .then((res) => {
      console.log("data123babji", res.data);
      dispatch(getproductByid(res.data));
    })
    .catch((error) => {
      dispatch(fetchErrorproductByid(error));
    });
};
const getproductByid = (res) => {
  return {
    type: FETCH_PRODUCTS_BY_ID,
    payload: [res],
  };
};
const fetchErrorproductByid = (error) => {
  return {
    type: INVALID_REQST,
    payload: true,
  };
};

export const fetchproductsByCategory = (category) => async (dispatch) => {
  console.log("babji");
  await axios
    .get("https://fakestoreapi.com/products/category/" + category)

    .then((res) => {
      // console.log(category);
      console.log("data123", res.data);
      dispatch(getproduct(res.data));
    })
    .catch((error) => {
      dispatch(fetchErrorproduct(error));
    });
};
const getproduct = (res1) => {
  return {
    type: FETCH_PRODUCTS_BY_CATEGORY,
    payload: res1,
  };
};
const fetchErrorproduct = (error) => {
  return {
    type: INVALID_REQST,
    payload: true,
  };
};
export const sortProducts = (filteredProducts, sort) => (dispatch) => {
  const sortedProducts = filteredProducts.slice();
  console.log("sortedproducts", sortedProducts);
  if (sort === "latest") {
    sortedProducts.sort((a, b) => (a.id > b.id ? -1 : 1));
  } else if (sort === "lowest") {
    sortedProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
  } else {
    sortedProducts.sort((a, b) => (a.price < b.price ? 1 : -1));
  }

  console.log("babji", sortedProducts);
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  });
};
