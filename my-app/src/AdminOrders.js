import { AdminSideBar } from "./component/side-bar";
import React, { Component, Fragment } from "react";
import withLoader from "./component/withLoader";
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
  }

  render() {
    let item = this.props.item;
    console.log(item);
    return (
      <tr>
        <td>{item.id}</td>
        <td>Today, 25th Sep, 2020</td>
        <td>
          {item.name} ({item.size}) x {item.quantity}
        </td>
        <td>{item.quantity * item.price}</td>
        <td>{item.status}</td>
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
    let items = this.props.items;
    console.log(items);
    return (
      <Fragment>
        {items.map((item) => (
          <Item item={item} />
        ))}
      </Fragment>
    );
  }
}

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    fetch("/order/1", {
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
            <p className="big-headline">Orders</p>
            <tbody id="products-table">
              <tr>
                <th style={{ width: "15%" }}>ORDER ID</th>
                <th style={{ width: "20%" }}>ORDER DATE</th>
                <th style={{ width: "30%" }}>DETAIL</th>
                <th style={{ width: "10%" }}>TOTAL($)</th>
                <th style={{ width: "10%" }}>STATUS</th>
                <th style={{ width: "15%" }}></th>
              </tr>
              <ListItemLoader items={this.state.items} />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export const ListItemLoader = withLoader("items")(ListItem);
export default Orders;
