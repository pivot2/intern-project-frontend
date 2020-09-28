import React, { Fragment } from "react";
import { Header, BreadCrumb } from "./component/header";
import LoginForm from "./component/loginForm";
import Bar from "./component/side-bar";
import { Item, ProductList } from "./component/item";
import Footer from "./component/footer";
import RegisterForm from "./component/RegisterForm";
import { withRouter } from "react-router-dom";
import Cookies from "js-cookie";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      isLoaded: false,
      items: [],
      isLogin: Cookies.get("Id") !== undefined,
    };
    this.HandleLogin = this.HandleLogin.bind(this);
    this.HandleLogout = this.HandleLogout.bind(this);
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
    return (
      <Fragment>
        <div className="container-x">
          <Header isLogin={this.state.isLogin} onLogout={this.HandleLogout} />
        </div>
        <BreadCrumb category={this.props.category} />
        <div className="content d-flex">
          <Bar />
          <ProductList
            products={this.state.items}
            history={this.props.history}
          />
          {/* x */}
        </div>

        <div className="fullscreen-container"></div>

        <LoginForm onLogin={this.HandleLogin} />
        <RegisterForm />
        <Footer />
      </Fragment>
    );
  }

  componentDidMount() {
    fetch("product/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          items: data.info,
        });
      });
  }
}

export default withRouter(App);
