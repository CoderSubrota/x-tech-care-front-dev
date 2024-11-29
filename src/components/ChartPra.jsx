// ChartPrac.js
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import image from "../images/line-chart-example.svg";

const ChartPrac = (data) => {
  const dh = data.data.data.data.diagnosis_history;

  let myDataArray = [];

  dh?.map((item) => {
    myDataArray.push({ heart_rate: item?.heart_rate?.value });
    myDataArray.push({ respiratory_rate: item?.respiratory_rate?.value });
    myDataArray.push({ temperature: item?.temperature?.value });
    myDataArray.push({ month: item?.month });
  });

  return (
    <>
      {dh === undefined ? (
        <img
          src={image}
          alt="lineChart"
          style={{ width: "100%", height: 400 }}
        />
      ) : (
        <div style={{ width: "100%", height: 400 }}>
          {" "}
          {/* Set height for container */}
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={myDataArray}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="temperature"
                stroke="#78FF25"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="heart_rate"
                stroke="#8884d8"
                activeDot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="respiratory_rate"
                stroke="#82ca9d"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};

export default ChartPrac;
