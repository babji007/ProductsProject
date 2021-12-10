import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import index from "./index";
import thunk from "redux-thunk";
import Store from './App/src/store/Store';
import { Provider } from "react-redux";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {
  // test("renders learn react link", () => {
  //   // render(<index />);
  
  it("should render without crashing", () => {
   const cartItems={
     JSONData : {
       products:{
      category: "women's clothing",
        description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        id: 20,
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        price: 12.99,
        rating: {rate: 3.6, count: 145},
        title: "DANVOUY Womens T Shirt Casual Cotton Short"
    }}}
    const div = document.createElement("div");

    div.id = "root";

    document.body.appendChild(div);

    require("./index.js");
console.log("danish", typeof(cartItems));
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <Provider store={Store} >
        <App cartItems={(cartItems)}/>
      </Provider>,
      div
    );
  });


});
// })