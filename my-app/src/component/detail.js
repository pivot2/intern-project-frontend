import React, { Component, Fragment } from "react";
import "../styles/detail.css";
import { Input } from "./input";
import { Image, Images } from "./image";
import Footer from "./footer";
import { withRouter } from "react-router-dom";

class Size extends React.Component {
  render() {
    return (
      <Fragment>
        <div
          className={`size-filter ${
            this.props.nowSize === this.props.size ? "chosen" : ""
          }`}
          onClick={() => this.props.onClick(this.props.size)}
        >
          {this.props.size}
        </div>
      </Fragment>
    );
  }
}
class Sizes extends React.Component {
  render() {
    let rows = [];
    if (this.props.sizes) {
      for (let i = 0; i < this.props.sizes.length; i++) {
        rows.push(
          <Size
            size={this.props.sizes[i]}
            onClick={this.props.onSizeClick}
            nowSize={this.props.nowSize}
          />
        );
      }
    }
    return (
      <Fragment>
        <div className="group">
          <div
            style={{ fontSize: "14px", fontWeight: 800, marginBottom: "5px" }}
          >
            Size
          </div>
          <div class="d-flex">{rows}</div>
        </div>
      </Fragment>
    );
  }
}
class Color extends React.Component {
  render() {
    return (
      <Fragment>
        <div
          className={`color-filter ${this.props.color} ${
            this.props.nowColor === this.props.color ? "" : "faded"
          }`}
          onClick={() => this.props.onClick(this.props.color)}
        ></div>
      </Fragment>
    );
  }
}
class Colors extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let rows = [];
    if (this.props.colors) {
      for (let i = 0; i < this.props.colors.length; i++) {
        rows.push(
          <Color
            color={this.props.colors[i]}
            onClick={this.props.onColorClick}
            nowColor={this.props.nowColor}
          />
        );
      }
    }

    return (
      <Fragment>
        <div className="group">
          <div
            style={{ fontSize: "14px", fontWeight: 800, marginBottom: "5px" }}
          >
            Color
          </div>
          <div className="d-flex">{rows}</div>
        </div>
      </Fragment>
    );
  }
}

class Quantity extends React.Component {
  constructor(props) {
    super(props);
    this.handleMinus = this.handleMinus.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
  }
  handleMinus() {
    this.props.onPlusMinus(-1);
  }
  handlePlus() {
    this.props.onPlusMinus(1);
  }

  render() {
    return (
      <Fragment>
        <div className="d-flex">
          <div class="wrapper">
            <button class="plusminus" onClick={this.handleMinus}>
              -
            </button>
            <Input
              Type="number"
              Id="number"
              onValueChange={this.props.onNumberChange}
              Value={this.props.number}
            />
            <button class="plusminus" onClick={this.handlePlus}>
              +
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

class Des extends React.Component {
  render() {
    return <Fragment>{this.props.des}</Fragment>;
  }
}

class DetailComp extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      number: 1,
      color: this.props.detail.colors[0],
      size: this.props.detail.size[0],
    };

    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handlePlusMinus = this.handlePlusMinus.bind(this);
    this.handleSize = this.handleSize.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }
  handleColor(color) {
    this.setState({
      color: color,
    });
  }
  handleSize(size) {
    this.setState({
      size: size,
    });
  }
  handleNumberChange(x) {
    this.setState({
      number: x,
    });
  }
  handlePlusMinus(x) {
    this.setState({
      number: parseInt(this.state.number) + x,
    });
  }

  addToCart() {
    let cart = JSON.parse(localStorage.cart);
    console.log(this.props.detail);
    let Item = {
      seller_id: this.props.detail.seller_id,
      id: this.props.detail.id,
      name: this.props.detail.name,
      price: this.props.detail.price,
      color: this.state.color,
      size: this.state.size,
      quantity: this.state.number,
      image: this.props.detail.image,
    };
    cart.push(Item);
    localStorage.cart = JSON.stringify(cart);

    this.props.changeCart();
  }
  render() {
    let mainImage = this.props.detail.image[0];
    let sideImage = this.props.detail.image.slice(1, 5);

    return (
      <Fragment>
        <div style={{ margin: "0 100px" }}>
          <div className="d-flex">
            <div className="col-5 d-flex">
              <div className="d-flex flex-column">
                <Images
                  images={sideImage}
                  style={{
                    width: "80px",
                    height: "100px",
                    marginBottom: "25px",
                    marginRight: "20px",
                  }}
                />
              </div>

              <Image
                link={mainImage}
                style={{ width: "300px", height: "473px" }}
              />
            </div>
            <div className="content col-5">
              <div style={{ fontSize: "24px", fontWeight: 800 }}>
                {this.props.detail.name}
              </div>
              <div style={{ fontSize: "24px" }}>${this.props.detail.price}</div>

              <Colors
                colors={this.props.detail.colors}
                onColorClick={this.handleColor}
                nowColor={this.state.color}
              />
              <Sizes
                sizes={this.props.detail.size}
                onSizeClick={this.handleSize}
                nowSize={this.state.size}
              />
              <Quantity
                number={this.state.number}
                onNumberChange={this.handleNumberChange}
                onPlusMinus={this.handlePlusMinus}
              />
              <Input
                Type="submit"
                Id="cart-btn"
                Value="Add to Cart"
                onClick={this.addToCart}
              />
              <hr />
              <Des des={this.props.detail.des} />
            </div>
            <div className="col-2">
              <div className="d-flex flex-column">
                <div style={{ fontWeight: 800 }}>More from</div>
                <p style={{ marginBottom: "5px" }}>{this.props.detail.brand}</p>
                <Images
                  images={sideImage}
                  style={{
                    width: "80px",
                    height: "100px",
                    marginBottom: "10px",
                    marginRight: "20px",
                  }}
                />
              </div>
            </div>
          </div>
          Reviews
          <hr />
          You may also like
          <hr />
          <div className="d-flex">
            <Images
              images={sideImage}
              style={{
                width: "120px",
                height: "195px",
                marginBottom: "25px",
                marginRight: "20px",
              }}
            />
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
export const Detail = withRouter(DetailComp);
export { Color, Colors, Sizes, Quantity };
