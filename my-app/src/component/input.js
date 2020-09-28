import React, { Component } from "react";

class Error extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h5 style={{ fontSize: "12px", color: "red", textAlign: "center" }}>
        {this.props.err}
      </h5>
    );
  }
}
class Input extends Component {
  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(e) {
    this.props.onValueChange(e.target.value);
  }
  render() {
    return (
      <input
        id={this.props.Id}
        className={this.props.Name}
        type={this.props.Type}
        value={this.props.Value}
        placeholder={this.props.Placeholder}
        onChange={this.handleValueChange}
        style={this.props.style}
        onClick={this.props.onClick}
      />
    );
  }
}

export { Input, Error };
