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
    let products = this.props.products;
    return (
      <div className="col-xs-12 col-lg-10">
        <div className="main-table">
          <div className="row" id="unborder">
            {products.map((product) => {
              if (product.name.indexOf(this.props.filter) === -1) return;
              if (
                product.categories.indexOf(this.props.filterType) === -1 &&
                this.props.filterType != "All Dresses"
              )
                return;
              return <Item product={product} history={this.props.history} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
export { Item, ProductList };
