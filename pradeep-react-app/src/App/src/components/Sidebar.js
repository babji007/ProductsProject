import React, { Component } from "react";
import "./Products.css";
import { BsCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Buttons from "../components/Common/SelButtons";

export default class Sidebar extends Component {
  changeCategory = (event) => {
    {
      var category = event.target.value;
      console.log(category);
      this.props.fetchproductsByCategory(category);
    }
  };

  sortBy=(e) =>{
    let value = e.target.value;
    this.props.sortProducts(this.props.res, value);
  }

  loadRefreshContent() {
    window.location.reload(false);
  }
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="row">
            {/* <div class="col-sm-3 col-md-2 sidebar" id="Navbar"> */}
            <div class="col-sm-5 col-md-2 sidebar" id="Navbar">
              <div>
                <Link to={"/addtocart"}>
                  <BsCartCheckFill size="20px" color="green" />
                </Link>
              </div>
              <br />
              <div>
                <select id="selbutton"
                  onChange={(e) => {
                    this.sortBy(e);
                  }}
                >
                  <option value="" disabled selected>
                    Sort by
                  </option>
                  <option value="latest">Latest</option>
                  <option value="lowest">Price - Lowest to Highest</option>
                  <option value="highest">Price - Highest to Lowest</option>
                </select>
              </div>
              <br />
              <div>
                <Buttons
                  id="button"
                  className="first"
                  data={this.props.content.categories}
                  name="SelectByCategory"
                  hanonChange={this.changeCategory}
                />
              </div>
              <br />
              .....................................................
              <div>
                <button
                  className="btn btn-primary"
                  onClick={this.loadRefreshContent}
                >
                  Remove Filters
                </button>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
