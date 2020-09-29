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

class SideBar extends Component {
  render() {
    return (
      <div className="col-lg-2 d-none d-lg-block">
        <div className="side-table">
          <ul className="table">
            <p className="headline">Categories</p>
            <li
              className={
                this.props.filterType === "All Dresses" ? "picked" : {}
              }
              onClick={() => this.props.onChangeType("All Dresses")}
            >
              All Dresses
            </li>
            <li
              className={
                this.props.filterType === "Rompers / Jumpsuits" ? "picked" : {}
              }
              onClick={() => this.props.onChangeType("Rompers / Jumpsuits")}
            >
              Rompers / Jumpsuits
            </li>
            <li
              className={
                this.props.filterType === "Casual dresses" ? "picked" : {}
              }
              onClick={() => this.props.onChangeType("Casual dresses")}
            >
              Casual dresses
            </li>
            <li
              className={
                this.props.filterType === "Going out dresses" ? "picked" : {}
              }
              onClick={() => this.props.onChangeType("Going out dresses")}
            >
              Going out dresses
            </li>
            <li
              className={
                this.props.filterType === "Party / Ocassion dresses"
                  ? "picked"
                  : {}
              }
              onClick={() =>
                this.props.onChangeType("Party / Ocassion dresses")
              }
            >
              Party / Ocassion dresses
            </li>
            <li
              className={
                this.props.filterType === "Mini dresses" ? "picked" : {}
              }
              onClick={() => this.props.onChangeType("Mini dresses")}
            >
              Mini dresses
            </li>
            <li
              className={
                this.props.filterType === "Maxi / Midi dresses" ? "picked" : {}
              }
              onClick={() => this.props.onChangeType("Maxi / Midi dresses")}
            >
              Maxi / Midi dresses
            </li>
            <li
              className={this.props.filterType === "Sets" ? "picked" : {}}
              onClick={() => this.props.onChangeType("Sets")}
            >
              Sets
            </li>
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
  }
}

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
export default SideBar;

export const AdminSideBar = withRouter(AdminSideBarComp);
