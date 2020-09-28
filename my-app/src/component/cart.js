import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import icon from "../icon/cart.svg";
function Show() {
  let cart = document.getElementsByClassName("cart")[0];
  cart.classList.toggle("invisible");
}
class CartMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let size = JSON.parse(localStorage.cart).length;
    return (
      <Fragment>
        <img className="pointer" src={icon} alt="" onClick={Show} />
        <span className="badge" id="lblCartCount" onClick={Show}>
          <span style={{ color: "white" }}>{size}</span>
          <CartComp history={this.props.history} />
        </span>
      </Fragment>
    );
  }
}
class CartComp extends Component {
  constructor(props) {
    super(props);

    this.ViewCart = this.ViewCart.bind(this);
  }

  ViewCart() {
    this.props.history.push("/cart");
  }

  render() {
    let cart = JSON.parse(localStorage.cart).slice(0, 3);
    return (
      <div className="cart invisible">
        <ul>
          {cart.map((item) => {
            return (
              <li>
                <div className="d-flex">
                  <img src={require("../images/" + item.image[0])} alt="test" />
                  <div className="detail" style={{ width: "100%" }}>
                    <p style={{ fontWeight: 700, marginBottom: "20px" }}>
                      {item.name}
                    </p>
                    <div className="d-flex justify-content-between">
                      <p style={{ fontWeight: 500 }}>${item.price}</p>
                      <p style={{ fontWeight: 500, opacity: 0.5 }}>
                        {item.color} . {item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
          <div className="view-cart" onClick={this.ViewCart}>
            View Cart
          </div>
        </ul>
      </div>
    );
  }
}
export const Cart = CartComp;
export default withRouter(CartMenu);
