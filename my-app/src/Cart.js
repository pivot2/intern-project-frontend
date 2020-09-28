import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Header, BreadCrumb } from "./component/header";
import LoginForm from "./component/loginForm";
import Footer from "./component/footer";
import RegisterForm from "./component/RegisterForm";
import { Color, Quantity } from "./component/detail";
import "./styles/cart.css";
import Cookies from "js-cookie";
class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.item.quantity,
    };
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handlePlusMinus = this.handlePlusMinus.bind(this);
  }
  handleNumberChange(x) {
    this.setState({
      number: x,
    });
  }
  handlePlusMinus(x) {
    this.setState({
      number: parseInt(this.state.number) + x,
    });
  }
  render() {
    let item = this.props.item;
    return (
      <tr>
        <td>
          <div className="d-flex">
            <img
              style={{ width: "80px", height: "113px", marginRight: "20px" }}
              src={require("./images/" + item.image[0])}
              alt="test"
            />
            <div className="detail" style={{ width: "100%" }}>
              <p style={{ fontWeight: 700, marginBottom: "60px" }}>
                {item.name}
              </p>
              <p>Change</p>
            </div>
          </div>
        </td>
        <td>
          <div className={`color-filter ${item.color}`}></div>
        </td>
        <td>{item.size}</td>
        <td>
          <Quantity
            number={this.state.number}
            onNumberChange={this.handleNumberChange}
            onPlusMinus={this.handlePlusMinus}
          />
        </td>
        <td>${this.state.number * item.price}</td>
      </tr>
    );
  }
}
class CartTable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let cart = JSON.parse(localStorage.cart);
    return (
      <table className="table table-hover ">
        <tbody id="rows">
          <tr>
            <th style={{ width: "35%" }}>Product</th>
            <th style={{ width: "15%" }}>Color</th>
            <th style={{ width: "15%" }}>Size</th>
            <th style={{ width: "20%" }}>Quantity</th>
            <th style={{ width: "15%" }}>Amount</th>
          </tr>
          {cart.map((item) => (
            <CartItem item={item} />
          ))}
        </tbody>
      </table>
    );
  }
}

class Bill extends Component {
  constructor(props) {
    super();
    this.SubmitCart = this.SubmitCart.bind(this);
  }
  SubmitCart() {
    let cart = JSON.parse(localStorage.cart);
    console.log(cart);
    for (let i = 0; i < cart.length; i++) {
      fetch("/order/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          seller_id: cart[i].seller_id,
          product_id: cart[i].id,
          size: `${cart[i].size}`,
          quantity: cart[i].quantity,
          status: "pending",
        }),
      });
    }
    localStorage.clear();
    this.props.history.push("/");
  }
  render() {
    return (
      <Fragment>
        <p style={{ fontWeight: "bold" }}>Total</p>
        <div class="bill-table">
          <p>Shipping and Handling:Free</p>
          <p>Total product $6900</p>
          <p>Subtotal $6900</p>
          <input
            value="Check out"
            type="submit"
            id="check-out"
            onClick={this.SubmitCart}
          />
        </div>
      </Fragment>
    );
  }
}
class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {},
      isLogin: Cookies.get("Id") !== undefined,
      total: 0,
    };
    this.HandleLogin = this.HandleLogin.bind(this);
    this.HandleLogout = this.HandleLogout.bind(this);
  }

  HandleLogout() {
    this.setState({
      isLogin: false,
    });
  }

  HandleLogin() {
    this.setState({
      isLogin: true,
    });
  }
  render() {
    return (
      <Fragment>
        <div className="container-x">
          <Header isLogin={this.state.isLogin} onLogout={this.HandleLogout} />
        </div>
        <BreadCrumb />
        <div className="row cart-row">
          <div className="col-8" style={{ minHeight: "500px" }}>
            <CartTable />
          </div>
          <div className="col-4">
            <Bill history={this.props.history} />
          </div>
        </div>

        <div className="fullscreen-container"></div>
        <LoginForm onLogin={this.HandleLogin} />
        <RegisterForm />
        <Footer />
      </Fragment>
    );
  }
}

export default withRouter(CartPage);
