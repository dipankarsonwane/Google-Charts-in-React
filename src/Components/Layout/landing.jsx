import React, { Component } from "react";
import MapChart from "../Common/MapChart";
import LineChart from "../Common/LineChart";
import ColumnChart from "../Common/ColumnChart";

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
const columnData = [
  ["Year", "Target", "Forecast", "Actual"],
  ["India", 1000, 1100, 800],
  ["America", 1170, 1100, 850],
  ["Europe", 700, 850, 720],
  ["Japan", 1030, 940, 600]
];
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <MapChart mapData={mapData} />
        <LineChart lineData={lineData} />
        <ColumnChart columnData={columnData} />
      </div>
    );
  }
}

export default Landing;
