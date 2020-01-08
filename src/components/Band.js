import React, { Component } from "react";

class Band extends Component {
  render() {
    return (
      <div>
        <li>{this.props.name}</li>
        <button
          id={this.props.id}
          onClick={event => this.props.deleteBand(event.target.id)}
        >
          X
        </button>
      </div>
    );
  }
}

export default Band;
