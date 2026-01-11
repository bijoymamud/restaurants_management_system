import { Outlet } from "react-router";
import { LuBell, LuSettings } from "react-icons/lu";
import Sidebar from "./SideBar";

const DashboardLayout = () => {
  return (
    <div className="fixed inset-0 flex bg-[#F9FAFB]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <header
          className="h-20 bg-white border-b border-gray-100
          flex items-center justify-between px-8 shrink-0"
        >
          <h2 className="text-xl font-bold text-tagline">Dashboard</h2>

          <div className="flex items-center gap-6">
            <div className="flex gap-3">
              <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-full border border-gray-100">
                <LuBell size={20} />
              </button>
              <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-full border border-gray-100">
                <LuSettings size={20} />
              </button>
            </div>

            <img
              src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
              className="w-10 h-10 rounded-full border-2 border-gray-200 shadow-md"
              alt="profile"
            />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
