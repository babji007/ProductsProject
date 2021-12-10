import React, { Component } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
              React @ Redux
            </a>
          </div>
          <ul class="nav navbar-nav">
            

            <li class="active">
              <Link to={"/products"}>Fakeshop</Link>
            </li>
            
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li class="active">
              <Link to={"/addtocart"}>
              Cart <BsCartCheckFill size="40px" color="green" />

              </Link>
            </li>
            <li>
              
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
