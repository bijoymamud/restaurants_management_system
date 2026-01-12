import { LuStar, LuShoppingBag, LuUsers } from "react-icons/lu";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const categoryData = [
  { name: "Burger", value: 40, color: "#3B82F6" },
  { name: "Pizza", value: 25, color: "#FF6E02" },
  { name: "Pasta", value: 20, color: "#22C55E" },
  { name: "Rice", value: 15, color: "#EF4444" },
];

const LowerPart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <ListCard title="Most viewed dishes" />
      <ListCard title="Top selling Product" />

      {/* Category Donut Chart */}
      <div className="lg:col-span-4 bg-white p-6 rounded-[10px] shadow-sm border border-gray-100 flex flex-col">
        <h3 className="font-bold text-tagline capitalize mb-6 text-xl">
          Most viewed dishes by category
        </h3>
        <div className="h-[220px] w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                innerRadius={65}
                outerRadius={85}
                paddingAngle={8}
                dataKey="value"
                stroke="none"
              >
                {categoryData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    cornerRadius={10}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-[10px] text-gray-400 font-medium">View</p>
            <p className="text-2xl font-bold text-[#3B82F6]">125</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-4 mt-6 px-4">
          {categoryData.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-sm"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm font-medium text-gray-500">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ListCard = ({ title }) => (
  <div className="lg:col-span-4 bg-white p-6 rounded-[10px] shadow-sm border border-gray-100">
    <h3 className="font-bold text-tagline mb-6 text-xl capitalize">{title}</h3>
    <div className="space-y-4">
      <FoodItem />
      <FoodItem />
    </div>
  </div>
);

const FoodItem = () => (
  <div className="flex gap-4 p-3 border-2 border-[#F7941D66]/40 rounded-2xl bg-[#fdfdfd]">
    <div className="w-20 h-18 rounded-xl overflow-hidden shadow-sm">
      <img
        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=150"
        alt="burger"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex flex-col justify-center">
      <h4 className="font-bold text-tagline text-lg">Burger</h4>
      <p className="text-sm font-medium text-gray-400 mb-1">Category:</p>
      <div className="flex items-center gap-3 pt-3">
        <span className="flex items-center gap-1 text-sm text-gray-500 font-bold">
          <LuStar size={14} className="text-title" /> 4.8(163)
        </span>
        <span className="flex items-center gap-1 text-sm text-gray-500 font-bold">
          <LuShoppingBag size={14} className="text-title" /> 163
        </span>
        <span className="flex items-center gap-1 text-sm text-gray-500 font-bold">
          <LuUsers size={14} className="text-title" /> 4.8(163)
        </span>
      </div>
    </div>
  </div>
);

export default LowerPart;
