import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

// Data for the chart
const data = [
  { name: "Completed", value: 100, color: "#34A853", background: "#d1fae5" },
  { name: "Pending", value: 350, color: "#F98410", background: "#ffedd5" },
  { name: "Canceled", value: 250, color: "#F23F3F", background: "#F23F3F" },
];

// Custom Tooltip component
const CustomTooltip = ({ payload }) => {
  if (!payload || payload.length === 0) return null;

  // Destructuring the data from the payload
  const { name, value, color, background } = payload[0].payload;

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "12px 18px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
        fontSize: "14px",
        color: "#333",
        maxWidth: "150px",
      }}
    >
      <p style={{ fontWeight: "bold", fontSize: "14px", textTransform: "capitalize", marginBottom: "8px" }}>
        {name}
      </p>
      <p style={{ color: color, fontSize: "12px", margin: 0 }}>
        <span style={{ fontWeight: "bold" }}>Value: </span>{value}
      </p>
    </div>
  );
};

const Chart4 = () => {
  return (
    <ResponsiveContainer width="100%" height={210}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          tick={{ fill: "#838383", fontSize: 10, fontFamily: "inter, sans-serif", dy: 15 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          domain={[0, 400]}
          tick={{ fill: "#838383", fontSize: 10, fontFamily: "inter, sans-serif" }}
          axisLine={false}
          tickLine={false}
        />
        
        <Tooltip content={<CustomTooltip />} />

        <Bar
          dataKey="value"
          barSize={50}
          radius={[16, 16, 16, 16]}
          background={{ fill: "#f0f0f0", radius: [16, 16, 16, 16] }}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart4;
