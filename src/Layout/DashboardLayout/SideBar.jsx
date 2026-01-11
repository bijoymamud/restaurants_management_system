import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import { LuLayoutDashboard, LuLogOut, LuChevronDown } from "react-icons/lu";

import order_icon from "../../assets/icons/order_icon.png";
import menu_icon from "../../assets/icons/menu_icon.png";
import category_icon from "../../assets/icons/category_icon.png";
import food_icon from "../../assets/icons/food_icon.png";
import review_icon from "../../assets/icons/review_icon.png";
import branding_icon from "../../assets/icons/branding_icon.png";
import upgradeBg from "../../assets/icons/planImage.png";

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
      icon: <LuLayoutDashboard className="h-5 w-5" />,
    },
    {
      name: "Order",
      path: "/dashboard/orders",
      icon: (
        <img src={order_icon} alt="order" className="h-6 w-6 transition-all" />
      ),
    },
    {
      name: "Menu",
      path: "/dashboard/menu",
      icon: (
        <img src={menu_icon} alt="menu" className="h-6 w-6 transition-all" />
      ),
      hasChildren: true,
      children: [
        {
          name: "Category",
          path: "/dashboard/menu/category",
          icon: (
            <img
              src={category_icon}
              alt="category"
              className="h-5 w-5 transition-all"
            />
          ),
        },
        {
          name: "All Food",
          path: "/dashboard/menu/all_food",
          icon: (
            <img
              src={food_icon}
              alt="food"
              className="h-5 w-5 transition-all"
            />
          ),
        },
      ],
    },
    {
      name: "Review",
      path: "/dashboard/reviews",
      icon: (
        <img
          src={review_icon}
          alt="review"
          className="h-6 w-6 transition-all"
        />
      ),
    },
    {
      name: "Branding",
      path: "/dashboard/branding",
      icon: (
        <img
          src={branding_icon}
          alt="branding"
          className="h-6 w-6 transition-all"
        />
      ),
    },
  ];

  return (
    <div className="w-68 min-h-screen bg-white border-r border-gray-100 flex flex-col p-6 sticky top-0">
      {/* Brand Logo */}
      <div className="flex items-center justify-center gap-2 mb-10 px-2">
        <img
          src="https://images.seeklogo.com/logo-png/44/2/kitchen-logo-png_seeklogo-449542.png"
          alt=""
          className="w-2/3"
        />
      </div>

      {/* Navigation */}
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
                {({ isActive }) => (
                  <>
                    <div
                      className={`transition-all duration-200 ${
                        isActive ? "brightness-0 invert" : ""
                      }`}
                    >
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </>
                )}
              </NavLink>
            ) : (
              <div>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-md transition-all duration-200 ${
                    pathname.includes(item.path)
                      ? "bg-[#FF6E02] text-white font-semibold shadow-md shadow-orange-100"
                      : "text-gray-400 hover:bg-orange-50 hover:text-[#FF6E02]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`${
                        pathname.includes(item.path)
                          ? "brightness-0 invert"
                          : ""
                      }`}
                    >
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <LuChevronDown
                    className={`transition-transform duration-300 ${
                      isMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Sub-menu with icons */}
                <div
                  className={`mt-1 ml-4 space-y-1 overflow-hidden transition-all duration-300 ${
                    isMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {item.children.map((child) => (
                    <NavLink
                      key={child.path}
                      to={child.path}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 text-sm rounded-md transition-all ${
                          isActive
                            ? "text-white font-bold bg-[#FF8F3C]"
                            : "text-gray-400 hover:text-[#FF6E02]"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <div
                            className={`transition-all duration-200 ${
                              isActive ? "brightness-0 invert" : ""
                            }`}
                          >
                            {child.icon}
                          </div>
                          <span>{child.name}</span>
                        </>
                      )}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      <div
        className="bg-[#FF6E02] rounded-2xl p-5 mb-6 text-white text-center relative overflow-hidden shadow-lg shadow-orange-100"
        style={{
          backgroundImage: `url(${upgradeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content */}
        <div className="relative z-10 py-5">
          <h4 className="font-bold text-xl mb-1">
            Update <br /> Your Plan
          </h4>

          <button className="mt-2  border-2 border-white text-white text-base font-semibold py-2 px-4 rounded-lg w-full backdrop-blur-sm hover:bg-white/20 hover:text-white hover:cursor-pointer transition-all">
            Update now
          </button>
        </div>
      </div>

      {/* Logout */}
      <button className="flex cursor-pointer items-center gap-3 px-4 py-3 text-red-500 hover:text-red-500 transition-colors mt-auto border-t border-gray-200 pt-4">
        <LuLogOut size={20} />
        <span className="font-medium">Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
