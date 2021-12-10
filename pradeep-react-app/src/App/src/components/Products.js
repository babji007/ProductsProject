import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import Container from "./Container";

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // res:[]
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.props.fetchproducts();
  }
  
  

  render() {
    return (
      <div style={{ backgroundColor: "deepskyblue" }}>
        <div className="row">
          <div className="col-sm-1">
            <Container.Sidebar content={this.props.content} />
          </div>
          <div className="col-sm-10">
            <div className="container">
              <div class="cards" style={{ paddingBottom: 100, marginLeft: 50 }}>
                {this.props.res.map((u) => {
                  return (
                    <div
                      class="card"
                      style={{
                        width: 300,
                        height: 400,
                        backgroundColor: "lightslategrey",
                      }}
                    >
                      <Link to={`/products/${u.id}`}>
                        <img
                          src={u.image}
                          class="card-img-top"
                          style={{
                            width: 290,
                            height: 300,
                            paddingBottom: 20,
                            // backgroundColor: "magenta",
                          }}
                          alt={u.title}
                        />
                      </Link>
                      <div class="card-body" style={{ height: 10 }}>
                        <div
                          className="content"
                          style={{
                            alignContent: "flex-start",
                            // backgroundColor: "mediumaquamarine",
                          }}
                        >
                          <div className="header">{u.title}</div>
                          <div className="meta price">$ {u.price}</div>
                          <div className="meta">{u.category}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* done with products */}
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    );
  }
}
