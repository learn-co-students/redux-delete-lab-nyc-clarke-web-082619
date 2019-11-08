import React, { Component } from "react";
import BandInput from "./BandInput";
import Band from "./Band.js";

import { connect } from "react-redux";

class BandsContainer extends Component {
  makeBands = bands => {
    return bands.map(band => {
      return <Band {...band} deleteBand={this.props.deleteBand} />;
    });
  };
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.makeBands(this.props.bands)}
      </div>
    );
  }
}

const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({ type: "DELETE_BAND", id })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandsContainer);
