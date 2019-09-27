import React, { Component } from "react";
import MapChart from "../Common/mapChart";

import "./landing.scss";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="mapchart-container">
          <MapChart />
        </div>
      </div>
    );
  }
}

export default Landing;
