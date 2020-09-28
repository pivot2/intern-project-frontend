import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import HomePage from "./homepage";
import Info from "./info";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./Detail";
import Cart from "./Cart";
import Upload from "./AdminUpload";
import AdminProduct from "./AdminProduct";
import AdminOrder from "./AdminOrders";
localStorage.cart = JSON.stringify([]);
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/detail/:id">
        <Detail />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/products">
        <AdminProduct />
      </Route>
      <Route path="/orders">
        <AdminOrder />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/upload">
        <Upload />
      </Route>
      <Route path="/info">
        <Info />
      </Route>
      <Route path="/">
        <App />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
