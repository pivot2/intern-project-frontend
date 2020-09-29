import React, { Component } from "react";

const isEmpty = (prop) =>
  prop === null ||
  prop === undefined ||
  (prop.hasOwnProperty("length") && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0);

const withLoader = (loadingProp) => (WrappedComponent) => {
  return class LoadingHOC extends Component {
    render() {
      return isEmpty(this.props[loadingProp]) ? (
        <div className="grid-center">
          <div className="loader" />
        </div>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default withLoader;
