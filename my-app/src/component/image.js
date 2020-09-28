import React, { Component } from "react";

class Image extends React.Component {
  render() {
    return (
      <img
        src={require("../images/" + this.props.link)}
        style={this.props.style}
      />
    );
  }
}

class Images extends React.Component {
  render() {
    let images = this.props.images;
    //console.log(images);
    //let rows = [];
    return this.props.images
      ? images.map((image) => <Image style={this.props.style} link={image} />)
      : "";
  }
}

export { Image, Images };
