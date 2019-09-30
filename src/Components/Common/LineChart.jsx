import React, { Component } from "react";
import { Chart } from "react-google-charts";

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.lineData
    };
  }
  render() {
    return (
      <div>
        <Chart
          chartType="LineChart"
          width="100%"
          position="relative"
          data={this.state.data}
          options={{
            seriestype: "line",
            title: "Risks",
            curveType: "function",
            legend: { position: "bottom" },
            series: {
              1: {
                type: "steppedArea",
                color: "#FF0000",
                visibleInLegend: false,
                enableInteractivity: false,
                areaOpacity: 0
              }
            },
            animation: {
              startup: true,
              dusration: 1500,
              easing: "linear"
            },
            vAxis: {
              baseline: 0
            }
          }}
        ></Chart>
      </div>
    );
  }
}

export default LineChart;
