import React, { useState } from "react";
import Chart from "react-apexcharts";

const ScatterChart = () => {
  const generateDayWiseTimeSeries = (baseTime, count, range) => {
    const series = [];
    let currentTime = baseTime;

    for (let i = 0; i < count; i++) {
      const y =
        Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      series.push([currentTime, y]);
      currentTime += 86400000; // Increment by one day (in milliseconds)
    }

    return series;
  };
  // const inactiveData = generateDayWiseTimeSeries(
  //   new Date("01 Dec 2024 GMT").getTime(),
  //   10,
  //   { min: 5, max: 60 }
  // );

  // const activeData = generateDayWiseTimeSeries(
  //   new Date("31 Dec 2024 GMT").getTime(),
  //   10,
  //   { min: 54, max: 90 }
  // );

  // // Chart state
  // const chartState = {
  //   series: [
  //     {
  //       name: "Inactive",
  //       data: inactiveData,
  //     },
  //     {
  //       name: "Active",
  //       data: activeData,
  //     },
  //   ],
  //   options: {
  //     chart: {
  //       width: "100%",
  //       height: 350,
  //       type: "scatter",
  //       zoom: {
  //         type: "xy",
  //       },
  //     },
  //     colors: ["#FF5733", "#33FF57"],
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     grid: {
  //       xaxis: {
  //         lines: {
  //           show: true,
  //         },
  //       },
  //       yaxis: {
  //         lines: {
  //           show: true,
  //         },
  //       },
  //     },
  //     xaxis: {
  //       type: "datetime",
  //     },
  //     yaxis: {},
  //     legend: {
  //       markers: {
  //         strokeWidth: 1,
  //       },
  //     },
  //     markers: {
  //       size: 8,
  //       fillOpacity: 0.8,
  //       strokeColors: "#333",
  //       strokeWidth: 2,
  //       shape: "circle",
  //     },
  //   },
  // };
  const [chartState] = useState(() => ({
    series: [
      {
        name: "Inactive",
        data: generateDayWiseTimeSeries(
          new Date("01 Dec 2024 GMT").getTime(),
          30,
          { min: 5, max: 60 }
        ),
      },
      {
        name: "Active",
        data: generateDayWiseTimeSeries(
          new Date("1 Dec 2024 GMT").getTime(),
          30,
          { min: 54, max: 90 }
        ),
      },
    ],
    options: {
      chart: {
        width: "100%",
        height: 350,
        type: "scatter",
        zoom: {
          type: "xy",
        },
      },
      colors: ["#FF5733", "#33FF57"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {},
      legend: {
        markers: {
          strokeWidth: 1,
        },
      },
      markers: {
        size: 8,
        fillOpacity: 0.8,
        strokeColors: "#333",
        strokeWidth: 2,
        shape: "circle",
      },
    },
  }));

  return (
    <div id="chart">
      <Chart
        options={chartState.options}
        series={chartState.series}
        type="scatter"
        height={350}
        width={"100%"}
      />
    </div>
  );
};

export default ScatterChart;
