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
    const query = new URLSearchParams(this.props.location.search);
    const filter = query.get("filter");
    this.state = {
      filterType: "All Dresses",
      filterText: filter || "",
      isLoaded: false,
      items: [],
      isLogin: Cookies.get("Id") !== undefined,
    };
    this.HandleLogin = this.HandleLogin.bind(this);
    this.HandleLogout = this.HandleLogout.bind(this);
    this.HandleSearch = this.HandleSearch.bind(this);
    this.HandleChangeType = this.HandleChangeType.bind(this);
  }

  HandleLogin() {
    this.setState({
      isLogin: true,
    });
  }

  HandleChangeType(type) {
    console.log(type);
    this.setState({
      filterType: type,
    });
  }

  HandleLogout() {
    this.setState({
      isLogin: false,
    });
  }

  HandleSearch(filter) {
    this.setState({
      filterText: filter,
    });
  }
  render() {
    return (
      <Fragment>
        <div className="container-x">
          <Header
            onSearch={this.HandleSearch}
            isLogin={this.state.isLogin}
            onLogout={this.HandleLogout}
          />
        </div>
        <BreadCrumb category={this.props.category} />
        <div className="content d-flex">
          <Bar
            onChangeType={this.HandleChangeType}
            filterType={this.state.filterType}
          />
          <ProductList
            filter={this.state.filterText}
            products={this.state.items}
            history={this.props.history}
            filterType={this.state.filterType}
          />
        </div>

        <div className="fullscreen-container"></div>

        <LoginForm onLogin={this.HandleLogin} />
        <RegisterForm />
        <Footer />
      </Fragment>
    );
  }

  componentDidMount() {
    fetch("/product/", {
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
