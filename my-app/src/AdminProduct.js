import { AdminSideBar } from "./component/side-bar";
import React, { Component, Fragment } from "react";
import { Image } from "./component/image";
class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let item = this.props.item;
    return (
      <tr>
        <td>
          <Image
            link={item.image[0]}
            style={{ width: "30px", height: "40px", marginRight: "20px" }}
          />
          {item.name}
        </td>
        <td>0/{item.quantity}</td>
        <td>Today, 25th Sep, 2020</td>
        <td>$0</td>
        <td></td>
      </tr>
    );
  }
}
class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.items);
    let items = this.props.items;
    return (
      <Fragment>
        {items.map((item) => (
          <Item item={item} />
        ))}
      </Fragment>
    );
  }
}
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    fetch("/product/1/admin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          items: data.info,
        });
        console.log(this.state.items);
      });
  }
  render() {
    return (
      <div className="row admin">
        <div className="col-2">
          <AdminSideBar />
        </div>

        <div className="col-10" style={{ paddingRight: "30px" }}>
          <table className="table table-hover ">
            <p className="big-headline">Products</p>
            <tbody id="products-table">
              <tr>
                <th style={{ width: "30%" }}>PRODUCTS</th>
                <th style={{ width: "15%" }}>SOLD</th>
                <th style={{ width: "20%" }}>DATE ADDED</th>
                <th style={{ width: "15%" }}>PROFIT</th>
                <th style={{ width: "15%" }}></th>
              </tr>
              {this.state.items.length !== 0 ? (
                <ListItem items={this.state.items} />
              ) : (
                ""
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Products;
