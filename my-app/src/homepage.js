import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Header, BreadCrumb } from "./component/header";
import LoginForm from "./component/loginForm";
import Footer from "./component/footer";
import RegisterForm from "./component/RegisterForm";
import { Image } from "./component/image";
import "./styles/homepage.css";
import Cookies from "js-cookie";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: Cookies.get("Id") !== undefined,
    };
    this.HandleLogout = this.HandleLogout.bind(this);
    this.HandleLogin = this.HandleLogin.bind(this);
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
  render() {
    //console.log("day ", this.state.detail.keys.length);
    return (
      <Fragment>
        <div className="container-x">
          <Header isLogin={this.state.isLogin} onLogout={this.HandleLogout} />
        </div>
        <div style={{ margin: "20px 100px" }}>
          <div className="relative">
            <Image style={{ width: "100%" }} link={"model.jpg"} />
            <p id="noname">Outfit of the week</p>
            <div
              className="shop-now"
              onClick={() => this.props.history.push("/")}
            >
              Shop Now
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

export default withRouter(HomePage);
