import React, { Component } from "react";
import "./cart.css";
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      showCheckout: false,
    };
  }
  removeCart(item) {
    this.props.removeFromCart(this.props.cartItems, item);
    window.location.reload(false);
  }
  incrementCount(item) {
    console.log("cart count", item);
    this.props.addToCart(this.props.cartItems, item);
    // let z2= item.price*item.count
    // console.log("price", z2);
  }
  decrementCount(item) {
    this.props.decreaseFromCart(this.props.cartItems, item);
  }

  render() {
    const { cartItems } = this.props.cartItems;
    console.log("bhbhbhbh", this.props.cartItems);
    if(this.props.cartItems.length==0){
      console.log("no items to display");
      return(
        <div style={{textAlign:"center", fontSize:44}}>No Items in Cart To Display</div>
      )
    }
    else{
    return (
      <div className="container">

        {this.props.cartItems.map((item) => (
          <div>
            <div className="card mb-3 " style={{ maxWidth: 540 }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={item.image}
                    style={{ height: 150, width: 150 }}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4 className="card-title">{item.category}</h4>
                    <p className="card-text">{item.title}</p>
                    <p className="card-text">
                      <h4 className="text">count : {item.count}</h4>
                      
                    </p>
                    <div className="row">
                      <div className="col-sm-8">
                        {/* <div> */}
                        <button
                          type="button"
                          id='firstb'
                          onClick={() => this.decrementCount(item)}
                          className="btn btn-success"
                        >
                          -
                        </button>
                        <button
                          type="button"
                          id='secondb'
                          onClick={() => this.incrementCount(item)}
                          className="btn btn-success"
                        >
                          +
                        </button>
                      </div>

                      <div className="col-sm-4">
                        <button
                          type="button"
                          id='thirdb'
                          className="btn btn-danger right-btn"
                          onClick={()=>this.removeCart(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        ))}
        {/* </div> */}
      </div>
    
    );}
  }
}
