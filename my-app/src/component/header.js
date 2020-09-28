import { withRouter } from "react-router-dom";
import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import CartMenu from "./cart";
import logo from "../images/logo.png";
import icon from "../icon/cart.svg";
import "../styles/header.css";
import Cookies from "js-cookie";
function Login() {
  let login_form = document.getElementsByClassName("login-form")[0];
  let container = document.getElementsByClassName("container-x")[0];
  let container_2 = document.getElementsByClassName("fullscreen-container")[0];
  login_form.classList.toggle("active");
  container.classList.toggle("blur");
  container_2.style.display = "block";
}

function Register() {
  let register_form = document.getElementsByClassName("register-form")[0];
  let container = document.getElementsByClassName("container-x")[0];
  let container_2 = document.getElementsByClassName("fullscreen-container")[0];
  register_form.classList.toggle("active");
  container.classList.toggle("blur");
  container_2.style.display = "block";
}

function ShowMenu() {
  let menu = document.getElementsByClassName("menu")[0];
  menu.classList.toggle("invisible");
}

class Button extends Component {
  render() {
    return (
      <button id={this.props.Id} onClick={this.props.onClick}>
        {this.props.Value}
      </button>
    );
  }
}
class Avatar extends Component {
  constructor(props) {
    super(props);
    this.LogOut = this.LogOut.bind(this);
  }
  LogOut() {
    Cookies.remove("token");
    Cookies.remove("type");
    Cookies.remove("Id");
    this.props.history.push("/home");
    this.props.onLogout();
  }
  render() {
    return (
      <Fragment>
        <img
          src={require("../images/avatar.jpg")}
          className="avatar"
          onClick={ShowMenu}
        />
        <div class="menu invisible">
          <ul>
            <li onClick={this.LogOut}>Log out</li>
            <li>Account info</li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

class HeaderComp extends Component {
  constructor(props) {
    super(props);
    this.Search = this.Search.bind(this);
  }
  Search() {}
  render() {
    return (
      <div className="nav">
        <div className="search-bar d-none d-lg-flex">
          <input type="text" id="input-search" placeholder="Search" />
          <i className="fas fa-search" onClick={this.Search}></i>
        </div>
        <img id="logo" src={logo} />
        <div id="service">
          {this.props.isLogin ? (
            <Avatar
              onLogout={this.props.onLogout}
              history={this.props.history}
            />
          ) : (
            <Fragment>
              <Button Id="register" onClick={Register} Value="Register" />
              <Button Id="login" onClick={Login} Value="Login" />
            </Fragment>
          )}
          <CartMenu />
        </div>
      </div>
    );
  }
}

class BreadCrumb extends React.Component {
  render() {
    return (
      <div id="categories">
        <div id="test">Dresses</div>
      </div>
    );
  }
}
export const Header = withRouter(HeaderComp);
export { Button, BreadCrumb };
