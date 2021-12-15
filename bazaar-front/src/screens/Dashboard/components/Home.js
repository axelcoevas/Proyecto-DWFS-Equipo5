import {
  BarChart,
  Bar,
  LineChart,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  PieChart,
  Pie,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  Legend,
} from "recharts";

import { Divider, Paper, Stack } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import LinkIcon from "@mui/icons-material/Link";

import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

let sampleReviewData = [
  {
    keyword: "helpful",
    frequency: 50,
  },
  {
    keyword: "life-changing",
    frequency: 70,
  },
  {
    keyword: "useful",
    frequency: 90,
  },
  {
    keyword: "quality",
    frequency: 75,
  },
  {
    keyword: "important",
    frequency: 50,
  },
];

let sampleData = [];

for (let i = 0; i < 10; i++) {
  sampleData.push({
    date: `2021-${i}-12`,
    value: Math.floor(Math.random() * 100),
  });
}

let reversedData = [...sampleData].reverse();

const Chart = (props) => {
  switch (props.type) {
    case "line":
      return (
        <div className="center" style={{ flexDirection: "column" }}>
          <LineChart width={400} height={200} data={props.data}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
          </LineChart>
          <p style={styles.chartTitle}>{props.title}</p>
        </div>
      );
    case "pie":
      return (
        <div className="center" style={{ flexDirection: "column" }}>
          {/* <PieChart width={400} height={300}>
            <Pie
              data={props.data}
              dataKey="value"
              nameKey="date"
              cx="50%"
              cy="50%"
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart> */}
          <BarChart width={400} height={200} data={props.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
          <p style={styles.chartTitle}>{props.title}</p>
        </div>
      );
    case "radar":
      return (
        <div className="center" style={{ flexDirection: "column" }}>
          <RadarChart
            outerRadius={90}
            width={400}
            height={300}
            data={sampleReviewData}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="keyword" />
            {/* <PolarRadiusAxis orientation="middle" /> */}
            <Radar
              //   name="Mike"
              dataKey="frequency"
              stroke="#632878"
              fill="#632878"
              fillOpacity={0.6}
            />
            {/* <Legend /> */}
          </RadarChart>
          <p style={styles.chartTitle}>{props.title}</p>
        </div>
      );
  }
};

const Home = () => {
  return (
    <div>
      <h1>Welcome, user</h1>

      <div style={styles.chartsContainer}>
        <Chart data={sampleData} type="line" title="Daily revenue" />
        <Chart data={reversedData} type="pie" title="Daily purchases" />
        <Chart data={sampleData} type="radar" title="Daily reviews" />
      </div>

      <Divider />

      <div>
        <h2>Activity</h2>
        <Masonry columns={3} spacing={1}>
          {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((height, index) => (
            <p
              key={index}
              style={{ height: height * 10, border: "1px solid black" }}
            >
              {index + 1}
            </p>
          ))} */}
          <Paper sx={{ padding: 1 }} elevation={3}>
            <h3 style={{ textAlign: "center" }}>Latest orders</h3>
            <Divider />
            <div style={styles.ordersContainer}>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div className="center">
                  <p
                    style={
                      styles.orderRow
                      // { backgroundColor: index % 2 == 0 ? "white" : "#444" },
                    }
                  >
                    {`Order number ${item + 500} just came through!`}
                  </p>
                  <a href="#">
                    <LinkIcon />
                  </a>
                </div>
              ))}
            </div>
          </Paper>

          <Paper sx={{ padding: 1 }} elevation={3}>
            <h3 style={{ textAlign: "center" }}>Product performance</h3>
            <Divider />
            <div style={styles.ordersContainer}>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div
                  className="center"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <p
                    style={
                      styles.orderRow
                      // { backgroundColor: index % 2 == 0 ? "white" : "#444" },
                    }
                  >
                    {`Product no. ${item + 100} `}{" "}
                  </p>
                  {item % 2 == 0 ? (
                    <ArrowUpward color="success" />
                  ) : (
                    <ArrowDownward color="error" />
                  )}
                </div>
              ))}
            </div>
          </Paper>
        </Masonry>
      </div>
    </div>
  );
};

const styles = {
  chartTitle: {
    fontSize: "1.25rem",
    fontWeight: "bold",
  },
  chartsContainer: {
    display: "flex",
    flexDirection: "row",
  },
  ordersContainer: {
    // display: "flex",
    // flexDirection: "column",
  },
  orderRow: {
    // backgroundColor: index % 2 == 0 ? "white" : "#444",
    width: "100%",
  },
};

export default Home;
