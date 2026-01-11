import { LuZap, LuEye, LuBan } from "react-icons/lu";
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
  { name: "Jan", v: 65 },
  { name: "Feb", v: 145 },
  { name: "Mar", v: 75 },
  { name: "Apr", v: 45 },
  { name: "May", v: 55 },
  { name: "Jun", v: 48 },
  { name: "Jul", v: 110 },
  { name: "Aug", v: 155 },
  { name: "Sep", v: 55 },
  { name: "Oct", v: 75 },
  { name: "Nov", v: 165 },
  { name: "Dec", v: 65 },
];

const UpperPart = () => {
  return (
    <div className="space-y-8">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Menu View"
          value="125"
          icon={<LuZap size={24} />}
        />
        <StatCard
          title="Most viewed dishes"
          value="05"
          icon={<LuEye size={24} />}
        />
        <StatCard
          title="AI not found food"
          value="125"
          icon={<LuBan size={24} />}
        />
      </div>

      {/* Growth Chart */}
      <div className="bg-white p-6 rounded-[10px] shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-8 px-2">
          <h3 className="font-bold text-tagline text-xl">Customers growth</h3>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400">Sort by</span>
            <select className="bg-white border border-gray-200 rounded-[6px]  px-2  py-2 text-xs font-semibold outline-none text-gray-500">
              <option>Years</option>
            </select>
          </div>
        </div>
        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorOrange" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF6E02" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#FF6E02" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="0"
                vertical={false}
                stroke="#F1F5F9"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
                dy={15}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "16px",
                  border: "none",
                  boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                }}
              />
              <Area
                type="monotone"
                dataKey="v"
                stroke="#FF6E02"
                strokeWidth={4}
                fillOpacity={1}
                fill="url(#colorOrange)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-[10px] border border-gray-100 shadow-sm flex justify-between items-start">
    <div>
      <p className="text-tagline font-bold mb-5 text-xl capitalize">{title}</p>
      <p className="text-3xl font-bold text-title">{value}</p>
    </div>
    <div className="p-3 bg-black rounded-xl text-white">{icon}</div>
  </div>
);

export default UpperPart;
