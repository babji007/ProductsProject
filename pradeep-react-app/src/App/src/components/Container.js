import React from "react";

import { connect } from "react-redux";
// import Dropdown from '../components/Dropdown'
import Products from "./Products";
import {
  fetchproducts,
  fetchproductsByCategory,
  fetchProductsById,
} from "../actions/FetchProducts";
import {
  addToCart,
  removeFromCart,
  decreaseFromCart,
} from "../actions/CartActions";
import ProductDetail from "./ProductDetail";
import { sortProducts } from "../actions/FetchProducts";
import Cart from "./Cart";
import Sidebar from "./Sidebar";

export const mapStateToProps = (state) => {
  return {
    res: state.event.res,
    // res1:state.event.res1,
    error: state.event.error,
    filteredProducts: state.event.filteredItems,
    cartItems: state.event1.cartItems,
  };
};

  export const mapDispatchProps = (dispatch) =>( {
    // return{
  fetchproducts: () => dispatch(fetchproducts()),
  fetchproductsByCategory: (res) => dispatch(fetchproductsByCategory(res)),
  sortProducts: (res, sort) => dispatch(sortProducts(res, sort)),
  addToCart: (cartItems, res) => dispatch(addToCart(cartItems, res)),
  removeFromCart: (cartItems, res) => dispatch(removeFromCart(cartItems, res)),
  fetchProductsById: (productId) => dispatch(fetchProductsById(productId)),
  decreaseFromCart: (cartItems, res) =>
    dispatch(decreaseFromCart(cartItems, res)),
    
});
  

// export default connect(mapStateToProps, {fetchproducts, fetchproductsByCategory, fetchProductsById, sortProducts,addToCart, removeFromCart, decreaseFromCart})(Products)
export default{
  ProductDetail: connect(mapStateToProps, mapDispatchProps)(ProductDetail),
  Products: connect(mapStateToProps, mapDispatchProps)(Products),
  Cart: connect(mapStateToProps, mapDispatchProps)(Cart),
  Sidebar: connect(mapStateToProps, mapDispatchProps)(Sidebar),
};
