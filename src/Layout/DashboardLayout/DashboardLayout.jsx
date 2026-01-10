import { Outlet } from "react-router";
import { LuBell, LuSettings, LuSearch } from "react-icons/lu";
import Sidebar from "./SideBar";

const DashboardLayout = () => {
  return (
    <div className="flex bg-[#F9FAFB] min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8">
          <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>

          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                className="bg-gray-50 rounded-full pl-10 pr-4 py-2 border-none focus:ring-1 focus:ring-[#FF6E02] text-sm w-64"
                placeholder="Search..."
              />
            </div>
            <div className="flex gap-3">
              <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-full border border-gray-100">
                <LuBell size={20} />
              </button>
              <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-full border border-gray-100">
                <LuSettings size={20} />
              </button>
            </div>
            <img
              src="https://ui-avatars.com/api/?name=User"
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
              alt="profile"
            />
          </div>
        </header>
        <main className="p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
