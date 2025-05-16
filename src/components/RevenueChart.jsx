import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { useState, useEffect } from "react";

const data = [
  { name: "Jan", total: 310 },
  { name: "Feb", total: 200 },
  { name: "Mar", total: 500 },
  { name: "Apr", total: 380 },
  { name: "May", total: 900 },
  { name: "Jun", total: 750 },
  { name: "Jul", total: 610 },
  { name: "Aug", total: 700 },
  { name: "Sep", total: 430 },
  { name: "Oct", total: 520 },
  { name: "Nov", total: 430 },
  { name: "Dec", total: 500 },
];

export default function RevenueChart() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); 
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const CustomTooltip = ({ payload, label }) => {
    if (!payload || payload.length === 0) return null;

    const capitalizeFirstLetter = (text) => {
      return text.replace(/\b\w/g, char => char.toUpperCase());
    };

    return (
      <div className="bg-white p-2 rounded-lg shadow-lg">
        <p className="text-sm text-gray-700 font-semibold my-2">{capitalizeFirstLetter(label)}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-xs text-gray-500 py-1">
            <span style={{ color: entry.stroke, fontWeight: "bold"}}>{capitalizeFirstLetter(entry.name)}:</span> {entry.value}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full h-[270px] lg:h-[370px] -ml-8">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="name"
            tick={{ fill: "#92929D", fontSize: "14", dy: 12 }}
            axisLine={false}
            tickLine={false}
            padding={{ left: isSmallScreen ? 10 : 50, right: 0 }}
          />
          <YAxis
            tick={{ fill: "#92929D", fontSize: "14" }}
            axisLine={false}
            tickLine={false}
            ticks={[0, 200, 400, 600, 800, 1000]} 
            tickFormatter={(value) => {
              if (value === 1000) return "1k"; 
              return value;
            }}
          />

          {data.map((entry, index) => (
            <ReferenceLine
              key={index}
              x={entry.name}
              stroke="#F1F1F5"
            />
          ))}

          <Tooltip content={<CustomTooltip />} />
          {/* Only showing the total line */}
          <Line type="monotone" dataKey="total" stroke="#3DD598" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
