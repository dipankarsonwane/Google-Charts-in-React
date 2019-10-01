import React, { Component } from "react";
import { Chart } from "react-google-charts";

class ColumnChart extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.columnData };
  }
  render() {
    return (
      <div>
        <Chart
          chartType="ColumnChart"
          width="100%"
          position="relative"
          data={this.state.data}
          options={{
            title: "Profits",
            legend: { position: "bottom" },
            colors: ["#191970", "#0000CD", "#4682B4"]
          }}
        ></Chart>
      </div>
    );
  }
}

export default ColumnChart;
