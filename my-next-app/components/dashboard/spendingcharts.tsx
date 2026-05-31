"use client";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

const data = [
  { value: 40 },
  { value: 60 },
  { value: 35 },
  { value: 80 },
  { value: 55 },
  { value: 95 },
];

export default function SpendingChart() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 h-[400px]">
      <h3 className="font-semibold mb-6">
        Spending Activity
      </h3>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <Bar dataKey="value" radius={4} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}