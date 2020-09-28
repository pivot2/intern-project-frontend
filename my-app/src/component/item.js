import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quickshop: false,
    };
    this.OnQuickShop = this.OnQuickShop.bind(this);
    this.OffQuickShop = this.OffQuickShop.bind(this);
  }

  OnQuickShop() {
    this.setState({
      quickshop: true,
    });
  }

  OffQuickShop() {
    this.setState({
      quickshop: false,
    });
  }

  render() {
    console.log();
    return (
      <div
        className="card ml-sm-0 mr-3"
        onMouseEnter={this.OnQuickShop}
        onMouseLeave={this.OffQuickShop}
        onClick={() =>
          this.props.history.push(`/detail/${this.props.product.id}`)
        }
      >
        {/* onClick={this.props.history.push('/test')} */}
        <div className="image-fluid">
          <img
            src={require("../images/" + this.props.product.image[0])}
            alt=""
          />
          {this.state.quickshop == true ? (
            <div className="quick-shop">
              <p>+ Quick shop</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <p style={{ fontWeight: 600 }}>{this.props.product.name}</p>
        <p>${this.props.product.price}</p>
      </div>
    );
  }
}

class ProductList extends Component {
  render() {
    // let rows = [];

    // for (let i = 0; i < this.props.products.length; i++)
    //   rows.push(
    //     <Item product={this.props.products[i]} history={this.props.history} />
    //   );
    let products = this.props.products;
    return (
      <div className="col-xs-12 col-lg-10">
        <div className="main-table">
          <div className="row" id="unborder">
            {products.map((product) => (
              <Item product={product} history={this.props.history} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export { Item, ProductList };
