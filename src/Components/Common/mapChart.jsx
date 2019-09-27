import React, { Component } from "react";
import { Chart } from "react-google-charts";

const data = [
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

class MapChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        colorAxis: { colors: ["#00b857", "#ffba00", "#d80000"] },
        datalessRegionColor: "#FFFFFF",
        defaultColor: "#FFFFFF",
        legend: "none",
        enableRegionInteractivity: true
      }
    };
  }
  render() {
    return (
      <div>
        <Chart
          chartEvents={[
            {
              eventName: "select",
              callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 0) return;
                const region = data[selection[0].row + 1];
                console.log(selection);
                let newOptions = this.state.options;
                if (region[0] === "India") {
                  newOptions.region = "IN";
                }
                if (region[0] === "United States") {
                  newOptions.region = "019";
                }
                if (region[0] === "United Kingdom") {
                  newOptions.region = "150";
                }
                if (region[0] === "Vietnam") {
                  newOptions.region = "VN";
                }
                this.setState({
                  options: newOptions
                });
              }
            }
          ]}
          chartType="GeoChart"
          width="100%"
          position="relative"
          data={data}
          options={this.state.options}
        />
      </div>
    );
  }
}

export default MapChart;
