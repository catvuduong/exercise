import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../redux/action";

class Search extends Component {
  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
        onChange={event => {
          this.props.onFilter(event.target.value);
        }}
      />
    );
  }
}

const mapDispathToProp = dispatch => {
  return {
    onFilter: keyword => {
      dispatch(action.onFilter(keyword));
    }
  };
};

export default connect(null, mapDispathToProp)(Search);
