import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Jan", value: 100, color: "#F98410", background: "#d1fae5" },
  { name: "Feb", value: 150, color: "#F98410", background: "#d1fae5" },
  { name: "Mar", value: 200, color: "#F98410", background: "#d1fae5" },
  { name: "Apr", value: 250, color: "#F98410", background: "#d1fae5" },
  { name: "May", value: 300, color: "#F98410", background: "#d1fae5" },
  { name: "Jun", value: 350, color: "#F98410", background: "#d1fae5" },
  { name: "Jul", value: 400, color: "#F98410", background: "#d1fae5" },
  { name: "Aug", value: 250, color: "#F98410", background: "#d1fae5" },
  { name: "Sep", value: 300, color: "#F98410", background: "#d1fae5" },
  { name: "Oct", value: 150, color: "#F98410", background: "#d1fae5" },
  { name: "Nov", value: 200, color: "#F98410", background: "#d1fae5" },
  { name: "Dec", value: 100, color: "#F98410", background: "#d1fae5" },
];

const UserChart = () => {
  return (
    <ResponsiveContainer width="100%" height={230}>
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
        <Tooltip />
        
        {/* Background Bar with rounded corners */}
        
          <Bar
          dataKey="value"
          barSize={50}
          radius={[16, 16, 16, 16]}  
          background={{ fill: "rgba(249, 132, 16, 0.1)", radius: [16, 16, 16, 16] }}          
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default UserChart;
