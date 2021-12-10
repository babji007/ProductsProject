import axios from "axios";
import React, { Component, useReducer } from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import Cart from "./Cart";
import { BsCartCheckFill } from "react-icons/bs";

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: true,
      res: [],
    };
  }

 
  componentDidMount() {
    console.log("hiii123");
    let { productId } = this.props.match.params;
    this.props.fetchProductsById(productId);

    console.log(this.props.fetchProductsById(productId));
    console.log(this.props.res);
  }
  addCart(res) {
    console.log("total cart", this.props.cartItems);
    console.log("state product", this.props.res1);
    this.setState({ showButton: !this.state.showButton });
    this.props.addToCart(this.props.cartItems, res);
  }
  render() {
    console.log(this.props.res);

    return (
      <div>
        <div className="ui grid container">
          {this.props.res.map((res) => {
            return (
              <div
                class="card mb-6"
                style={{ maxWidth: 1000, maxHeight: 1000 }}
              >
                <div class="row g-0">
                  <div class="col-md-6">
                    <img
                      src={res.image}
                      class="img-fluid rounded-start"
                      alt="..."
                      style={{ maxWidth: 500, maxHeight: 600 }}
                    />
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <h1 class="card-title">{res.category}</h1>
                      <h3 class="card-title">{res.title}</h3>
                      <br />
                      <p class="card-text">{res.description}</p>
                      <p class="card-text">availability : {res.count}</p>
                      <h3 class="card-title">$ {res.price}</h3>
                      <br />
                      <Link to={"/addtocart"}>
                        <button
                          className="btn btn-success"
                          style={{
                            visibility: this.state.showButton
                              ? "hidden"
                              : "visible",
                          }}
                        >
                          <BsCartCheckFill size="20px" color="green" />
                          GO TO CART
                        </button>
                      </Link>
                      <button
                        className="btn btn-success"
                        style={{
                          visibility: this.state.showButton
                            ? "visible"
                            : "hidden",
                        }}
                        onClick={() => this.addCart(res)}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
