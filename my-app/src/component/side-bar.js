import React, { Component, Fragment } from "react";
import "../styles/sidebar.css";
import logo from "../images/logo.png";
import { withRouter } from "react-router-dom";
import Footer from "../component/footer";
import icon6 from "../icon/setting-dark.svg";
import icon1 from "../icon/orders-dark.svg";
import icon2 from "../icon/overview-dark.svg";
import icon3 from "../icon/payment-dark.svg";
import icon4 from "../icon/products-orange.svg";
import icon5 from "../icon/promotion-dark.svg";
const sideBar = () => {
  return (
    <div className="col-lg-2 d-none d-lg-block">
      <div className="side-table">
        <ul className="table">
          <p className="headline">Categories</p>
          <li>All Dresses</li>
          <li>Rompers / Jumpsuits</li>
          <li>Casual dresses</li>
          <li>Going out dresses</li>
          <li>Party / Ocassion dresses</li>
          <li>Mini dresses</li>
          <li>Maxi / Midi dresses</li>
          <li>Sets</li>
        </ul>

        <ul className="table">
          <p className="headline">Filter</p>
          <li>Size</li>
          <li>Color</li>
          <li>Brand</li>
          <li>Style</li>
          <li>Available</li>
        </ul>
      </div>
    </div>
  );
};

class AdminSideBarComp extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ width: "100%" }}>
          <img
            src={logo}
            style={{
              width: "120px",
              height: "22px",
              marginTop: "32px",
              marginLeft: "50px",
              marginBottom: "44px",
            }}
            alt=""
          />
        </div>

        <ul>
          <li
            onClick={() => this.props.history.push("/products")}
            className="menu-option"
          >
            <img src={icon2} style={{ marginRight: "20px" }} />
            <label htmlFor="">Overview</label>
          </li>
          <li
            onClick={() => this.props.history.push("/orders")}
            className="menu-option"
          >
            <img src={icon1} style={{ marginRight: "20px" }} />
            <label htmlFor="">Orders</label>
          </li>
          <li
            onClick={() => this.props.history.push("/products")}
            className="menu-option"
          >
            <img src={icon4} style={{ marginRight: "20px" }} />
            <label htmlFor="">Products</label>
          </li>
          <li
            onClick={() => this.props.history.push("/products")}
            className="menu-option"
          >
            <img src={icon3} style={{ marginRight: "20px" }} />
            <label htmlFor="">Payments</label>
          </li>
          <li
            onClick={() => this.props.history.push("/products")}
            className="menu-option"
          >
            <img src={icon5} style={{ marginRight: "20px" }} />
            <label htmlFor="">Promotions</label>
          </li>
          <li
            onClick={() => this.props.history.push("/products")}
            className="menu-option"
          >
            <img src={icon6} style={{ marginRight: "20px" }} />
            <label htmlFor="">Setting</label>
          </li>
        </ul>
      </Fragment>
    );
  }
}
export default sideBar;

export const AdminSideBar = withRouter(AdminSideBarComp);
