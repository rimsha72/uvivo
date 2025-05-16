import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { useState, useEffect } from "react";

const data = [
  { name: "Jan", total: 20000 },
  { name: "Feb", total: 30000 },
  { name: "Mar", total: 25000 },
  { name: "Apr", total: 40000 },
  { name: "May", total: 50000 },
  { name: "Jun", total: 42000 },
  { name: "Jul", total: 80000 },
  { name: "Aug", total: 37000 },
  { name: "Sep", total: 30000 },
  { name: "Oct", total: 60000 },
  { name: "Nov", total: 29000 },
  { name: "Dec", total: 45000 },
];

export default function CustomChart() {
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

    return (
      <div className="bg-white p-2 rounded-lg shadow-lg">
        <p className="text-sm text-gray-700 font-semibold my-2">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-xs text-gray-500 py-1">
            <span style={{ color: entry.stroke, fontWeight: "bold" }}>{entry.name}:</span> {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full h-[270px] lg:h-[370px] -ml-8">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid stroke="#F1F1F5" vertical={false} />
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
            domain={[20000, 100000]}  // ✅ Starts from 20k
            ticks={[20000, 40000, 60000, 80000, 100000]}
            tickFormatter={(value) => `${value / 1000}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="total"
            stroke="#FF8F6D"
            fill="#FF8F6D"
            strokeWidth={2}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
