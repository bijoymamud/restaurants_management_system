import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import {
  LuLayoutDashboard,
  LuUtensilsCrossed,
  LuStar,
  LuSettings2,
  LuLogOut,
  LuChevronDown,
} from "react-icons/lu";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname.includes("/dashboard/menu")) {
      setIsMenuOpen(true);
    }
  }, [pathname]);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LuLayoutDashboard size={20} />,
    },
    {
      name: "Menu",
      path: "/dashboard/menu",
      icon: <LuUtensilsCrossed size={20} />,
      hasChildren: true,
      children: [
        { name: "Category", path: "/dashboard/menu/category" },
        { name: "All Food", path: "/dashboard/menu/all_food" },
      ],
    },
    { name: "Review", path: "/dashboard/review", icon: <LuStar size={20} /> },
    {
      name: "Branding",
      path: "/dashboard/branding",
      icon: <LuSettings2 size={20} />,
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-100 flex flex-col p-6 sticky top-0">
      {/* Logo Section */}
      <div className="flex items-center gap-2 mb-10 px-2">
        <div className="bg-[#FF6E02] p-2 rounded-lg shadow-lg shadow-orange-200">
          <span className="text-white font-bold">SM</span>
        </div>
        <span className="text-xl font-bold text-gray-800 tracking-tight">
          SAUCY MENU
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <div key={item.name}>
            {!item.hasChildren ? (
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200 ${
                    isActive
                      ? "bg-[#FF6E02] text-white shadow-md shadow-orange-100"
                      : "text-gray-400 hover:bg-orange-50 hover:text-[#FF6E02]"
                  }`
                }
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </NavLink>
            ) : (
              <div>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-md transition-all duration-200 ${
                    pathname.includes(item.path)
                      ? "text-[#FF6E02] bg-orange-50/50 font-semibold"
                      : "text-gray-400 hover:bg-orange-50 hover:text-[#FF6E02]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <LuChevronDown
                    className={`transition-transform duration-300 ${
                      isMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`mt-1 ml-9 space-y-1 overflow-hidden transition-all duration-300 ${
                    isMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {item.children.map((child) => (
                    <NavLink
                      key={child.path}
                      to={child.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm rounded-md transition-all ${
                          isActive
                            ? "text-[#FF6E02] font-bold bg-orange-50"
                            : "text-gray-400 hover:text-[#FF6E02]"
                        }`
                      }
                    >
                      {child.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="bg-[#FF6E02] rounded-2xl p-5 mb-6 text-white text-center relative overflow-hidden shadow-lg shadow-orange-100">
        <h4 className="font-bold text-lg mb-1 relative z-10">
          Update Your plan
        </h4>
        <button className="mt-2 bg-white/20 border border-white/40 text-white text-xs font-semibold py-2 px-4 rounded-lg w-full backdrop-blur-sm hover:bg-white hover:text-[#FF6E02] transition-all">
          Update now
        </button>
      </div>

      <button className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-500 transition-colors mt-auto border-t border-gray-50 pt-4">
        <LuLogOut size={20} />
        <span className="font-medium">Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
