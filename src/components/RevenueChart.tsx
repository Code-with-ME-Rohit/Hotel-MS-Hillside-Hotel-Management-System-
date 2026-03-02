import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Sep", revenue: 185000, occupancy: 52 },
  { month: "Oct", revenue: 240000, occupancy: 65 },
  { month: "Nov", revenue: 210000, occupancy: 58 },
  { month: "Dec", revenue: 320000, occupancy: 82 },
  { month: "Jan", revenue: 290000, occupancy: 76 },
  { month: "Feb", revenue: 260000, occupancy: 70 },
  { month: "Mar", revenue: 310000, occupancy: 78 },
];

const RevenueChart = () => {
  return (
    <div className="bg-card border rounded-xl p-5">
      <h3 className="font-display text-lg font-bold mb-1">Revenue Trend</h3>
      <p className="text-sm text-muted-foreground mb-4">Last 7 months performance</p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(40, 75%, 50%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(40, 75%, 50%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 16%, 88%)" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 46%)" />
            <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 46%)" tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} />
            <Tooltip
              contentStyle={{
                background: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(220, 16%, 88%)",
                borderRadius: "8px",
                fontSize: "13px",
              }}
              formatter={(value: number) => [`₹${value.toLocaleString()}`, "Revenue"]}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="hsl(40, 75%, 50%)"
              strokeWidth={2}
              fill="url(#goldGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
