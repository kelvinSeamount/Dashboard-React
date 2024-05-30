import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import "./piechartbox.scss";

type PieChartBoxProps = {
  title: string;
  chartData: {
    name: string;
    value: number;
    color: string;
  }[];
};

const pieChartData: PieChartBoxProps = {
  title: "Leads by Source",
  chartData: [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
  ],
};

const PieChartBox = () => {
  const { title, chartData } = pieChartData;
  return (
    <div className="piechartBox">
      <h1>{title}</h1>
      <div className="charts">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {chartData.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {chartData.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
