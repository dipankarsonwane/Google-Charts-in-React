import React, { Component } from "react";
import MapChart from "../Common/MapChart";
import LineChart from "../Common/LineChart";

import "./landing.scss";

const mapData = [
  ["Region", "Health"],
  ["Canada", 400],
  ["United States", 700],
  ["United Kingdom", 400],
  ["Vietnam", 400],
  ["Portugal", 300],
  ["Japan", 200],
  ["India", 100],
  ["Australia", 300]
];
const lineData = [
  ["Month", "Risk", "Threshold"],
  ["Jan", 100, 360],
  ["Feb", 150, 360],
  ["Mar", 250, 360],
  ["Apr", 350, 360],
  ["May", 300, 360],
  ["Jun", 320, 360],
  ["Jul", 280, 360],
  ["Aug", 250, 360],
  ["Sep", 200, 360],
  ["Oct", 190, 360]
];
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div>
          <div className="mapchart-container">
            <MapChart mapData={mapData} />
          </div>
        </div>
        <div className="linechart-container">
          <LineChart lineData={lineData} />
        </div>
      </div>
    );
  }
}

export default Landing;
