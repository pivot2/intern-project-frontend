import React, { Component } from "react";
import "../styles/footer.css";
const Footer = () => {
  return (
    <div className="footer row">
      <img id="logo" src={require("../images/logo.png")} alt="" />
      <div id="all">
        <a href="">Home</a>
        <a href="">Products</a>
        <a href="">Services</a>
        <a href="">About Us</a>
        <a href="">Contact</a>
        <a href="">Help</a>
      </div>
      <div id="social-network">
        <img src={require("../icon/twitter-icon.svg")} alt="" />
        <img src={require("../icon/facebook-icon.svg")} alt="" />
        <img src={require("../icon/instagram-6-icon.svg")} alt="" />
      </div>
    </div>
  );
};

export default Footer;
