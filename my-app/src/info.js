import React, { Component, Fragment } from "react";
import { Header, BreadCrumb } from "./component/header";
import LoginForm from "./component/loginForm";
import Bar from "./component/side-bar";
import { Item, ProductList } from "./component/item";
import Footer from "./component/footer";
import RegisterForm from "./component/RegisterForm";
import { withRouter } from "react-router-dom";
import Cookies from "js-cookie";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: Cookies.get("Id") !== undefined,
      gmail: "",
      name: "",
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
  componentDidMount() {
    console.log(Cookies.get("Id"));
    fetch(`/user/${Cookies.get("Id")}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        //console.log(data);
        this.setState({
          gmail: data.user[0].gmail,
          name: data.user[0].username,
        });
      });
  }
  render() {
    return (
      <Fragment>
        <div className="container-x">
          <Header isLogin={this.state.isLogin} onLogout={this.HandleLogout} />
        </div>
        <div className="row" style={{ minHeight: "500px", marginTop: "50px" }}>
          <div className="col-3" style={{ paddingLeft: "135px" }}>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>My Account</p>
            <p style={{ color: "#ff6900", fontWeight: "bold" }}>
              Account setting
            </p>
            <p></p>
          </div>
          <div className="col-3">
            <div class="info-table">
              <p style={{ fontWeight: "bold", fontSize: "14px" }}>Name</p>

              <p>{this.state.name}</p>
              <p style={{ fontWeight: "bold", fontSize: "14px" }}>Email</p>
              <p>{this.state.gmail}</p>
            </div>
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

export default Info;
