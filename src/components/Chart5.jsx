import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Customer", value: 25 }, 
  { name: "Driver", value: 75 },
];

const COLORS = ["#FFD15C", "#F98410"];

const CustomTooltip = ({ payload }) => {
  if (!payload || payload.length === 0) return null;

  const { name, value, fill } = payload[0].payload;

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "12px",
        padding: "12px 18px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
        fontSize: "14px",
        color: "#333",
        minWidth: "100px", 
      }}
    >
      <p style={{ fontWeight: "bold", fontSize: "14px", textTransform: "capitalize", marginBottom: "8px" }}>
        {name}
      </p>
      <p style={{ color: fill, fontSize: "14px", margin: 0 }}>
        <span style={{ fontWeight: "bold" }}>Value: </span>{value}%
      </p>
    </div>
  );
};

const SimplePieChart = () => {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <PieChart>
        <Pie
          data={data}
          cx="50%" 
          cy="50%"
          outerRadius={80} 
          startAngle={360} 
          endAngle={-270} 
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SimplePieChart;
