import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Header, BreadCrumb } from "./component/header";
import LoginForm from "./component/loginForm";
import Footer from "./component/footer";
import RegisterForm from "./component/RegisterForm";
import { Detail } from "./component/detail";
import Cookies from "js-cookie";
class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {},
      isLogin: Cookies.get("Id") !== undefined,
      reload: true,
    };
    this.HandleLogin = this.HandleLogin.bind(this);
    this.ReloadCart = this.ReloadCart.bind(this);
    this.HandleLogout = this.HandleLogout.bind(this);
  }
  ReloadCart() {
    this.setState({});
  }
  HandleLogin() {
    this.setState({
      isLogin: true,
    });
  }
  HandleLogout() {
    this.setState({
      isLogin: false,
    });
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    fetch(`/product/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        let info = data.info[0];
        //console.log(info)
        this.setState({
          detail: info,
        });
      });
  }

  render() {
    //console.log("day ", this.state.detail.keys.length);
    return (
      <Fragment>
        <div className="container-x">
          <Header isLogin={this.state.isLogin} onLogout={this.HandleLogout} />
        </div>
        <BreadCrumb />
        {Object.keys(this.state.detail).length !== 0 ? (
          <Detail detail={this.state.detail} changeCart={this.ReloadCart} />
        ) : (
          ""
        )}
        <div className="fullscreen-container"></div>
        <LoginForm onLogin={this.HandleLogin} />
        <RegisterForm />
      </Fragment>
    );
  }
}

export default withRouter(DetailPage);
