// import { useState, useRef, useEffect } from "react";
// import { Link, Outlet } from "react-router";
// import { LuBell, LuSettings } from "react-icons/lu";
// import { AnimatePresence, motion } from "framer-motion";
// import Sidebar from "./SideBar";

// import help_support from "../../assets/icons/help_support.png";
// import manage_sub from "../../assets/icons/manage_sub.png";
// import terms_conditions from "../../assets/icons/terms_conditions.png";
// import policy from "../../assets/icons/policy.png";

// const DashboardLayout = () => {
//   const [isSettingsOpen, setIsSettingsOpen] = useState(false);
//   const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsSettingsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="fixed inset-0 flex bg-[#F9FAFB]">
//       <Sidebar />

//       <div className="flex-1 flex flex-col">
//         <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 shrink-0">
//           <h2 className="text-xl font-bold text-tagline">Dashboard</h2>

//           <div className="flex items-center gap-4">
//             <div className="flex gap-3">
//               <img
//                 src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
//                 className="w-10 h-10 rounded-full border-2 border-gray-200 shadow-md cursor-pointer hover:border-[#FF6E02] transition-all"
//                 alt="profile"
//               />
//               <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-full border border-gray-100 transition-colors">
//                 <LuBell size={20} />
//               </button>

//               {/* Settings Dropdown Container */}
//               <div className="relative" ref={dropdownRef}>
//                 <button
//                   onClick={() => setIsSettingsOpen(!isSettingsOpen)}
//                   className={`p-2 rounded-full border border-gray-100 transition-all ${
//                     isSettingsOpen
//                       ? "bg-orange-50 text-[#FF6E02] border-orange-200"
//                       : "text-gray-400 hover:bg-gray-50"
//                   }`}
//                 >
//                   <LuSettings size={20} />
//                 </button>

//                 <AnimatePresence>
//                   {isSettingsOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 10, scale: 0.95 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       exit={{ opacity: 0, y: 10, scale: 0.95 }}
//                       transition={{ duration: 0.2, ease: "easeOut" }}
//                       className="absolute right-0 mt-3 w-72 bg-white rounded-3xl shadow-xl border border-gray-200 py-6 px-6 z-50"
//                     >
//                       {/* Notification Toggle */}
//                       <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
//                         <span className="text-lg font-semibold text-gray-900">
//                           Notification
//                         </span>
//                         <button
//                           onClick={() =>
//                             setIsNotificationEnabled(!isNotificationEnabled)
//                           }
//                           className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
//                             isNotificationEnabled
//                               ? "bg-[#FF6E02]"
//                               : "bg-gray-300"
//                           }`}
//                         >
//                           <span
//                             className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
//                               isNotificationEnabled
//                                 ? "translate-x-6"
//                                 : "translate-x-1"
//                             }`}
//                           />
//                         </button>
//                       </div>

//                       {/* Other Menu Items */}
//                       <DropdownItem
//                         img={help_support}
//                         label="Help and support"
//                       />
//                       <DropdownItem
//                         img={manage_sub}
//                         label="Manage subscriptions"
//                       />
//                       <DropdownItem
//                         img={terms_conditions}
//                         label="Terms & Conditions"
//                       />
//                       <DropdownItem img={policy} label="Privacy policy" />
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div>
//         </header>

//         <main className="flex-1 overflow-y-auto p-8">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// const DropdownItem = ({ img, label, onClick }) => (
//   <button
//     onClick={onClick}
//     className="w-full flex items-center justify-between px-0 py-2 text-base font-medium text-tagline "
//   >
//     <Link
//       to="/help-support"
//       className="hover:cursor-pointer hover:text-orange-700"
//     >
//       {label}
//     </Link>
//     <span className="text-gray-400">
//       <img src={img} alt="icons" className="w-[20px]" />
//     </span>
//   </button>
// );

// export default DashboardLayout;

"use client";

import { useState, useRef, useEffect } from "react";
import { Link, Outlet } from "react-router";
import { LuBell, LuSettings } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./SideBar";

import help_support from "../../assets/icons/help_support.png";
import manage_sub from "../../assets/icons/manage_sub.png";
import terms_conditions from "../../assets/icons/terms_conditions.png";
import policy from "../../assets/icons/policy.png";

const DashboardLayout = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSettingsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed inset-0 flex bg-[#F9FAFB]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <header className="h-20 bg-white border-b  shadow-[0_1px_8px_rgba(0,0,0,0.05)] border-gray-100 flex items-center justify-between px-8 shrink-0">
          <h2 className="text-xl font-bold text-tagline">Dashboard</h2>

          <div className="flex items-center gap-4 shadow-[2px_0_6px_-5px_rgba(0,0.3,0,0)]">
            <div className="flex gap-3">
              <img
                src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
                className="w-10 h-10 rounded-full border-2 border-gray-200 shadow-md cursor-pointer hover:border-[#FF6E02] transition-all"
                alt="profile"
              />
              <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-full border border-gray-100 transition-colors">
                <LuBell size={20} />
              </button>

              {/* Settings Dropdown Container */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                  className={`p-2 rounded-full border border-gray-100 transition-all ${
                    isSettingsOpen
                      ? "bg-orange-50 text-[#FF6E02] border-orange-200"
                      : "text-gray-400 hover:bg-gray-50"
                  }`}
                >
                  <LuSettings size={20} />
                </button>

                <AnimatePresence>
                  {isSettingsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute right-0 mt-3 w-80 bg-white rounded-[10px] shadow-2xl border border-gray-100 py-8 px-8 z-50"
                    >
                      {/* Notification Toggle */}
                      <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
                        <span className="text-xl font-bold text-tagline">
                          Notification
                        </span>
                        <button
                          onClick={() =>
                            setIsNotificationEnabled(!isNotificationEnabled)
                          }
                          className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
                            isNotificationEnabled
                              ? "bg-[#FF6E02]"
                              : "bg-gray-300"
                          }`}
                        >
                          <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                              isNotificationEnabled
                                ? "translate-x-6"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>

                      {/* Dynamic Menu Items */}
                      <div className="flex flex-col">
                        <DropdownItem
                          img={help_support}
                          label="Help and support"
                          to="/dashboard/help_support"
                          closeDropdown={() => setIsSettingsOpen(false)}
                        />
                        <DropdownItem
                          img={manage_sub}
                          label="Manage subscriptions"
                          to="/dashboard/manage_subscriptions"
                          closeDropdown={() => setIsSettingsOpen(false)}
                        />
                        <DropdownItem
                          img={terms_conditions}
                          label="Terms & Conditions"
                          to="/dashboard/terms_conditions"
                          closeDropdown={() => setIsSettingsOpen(false)}
                        />
                        <DropdownItem
                          img={policy}
                          label="Privacy policy"
                          to="/dashboard/privacy_policy"
                          closeDropdown={() => setIsSettingsOpen(false)}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

// Updated DropdownItem with Dynamic Link
const DropdownItem = ({ img, label, to, closeDropdown }) => (
  <Link
    to={to}
    onClick={closeDropdown}
    className="w-full flex items-center justify-between py-2 group"
  >
    <span className="text-lg font-bold text-tagline group-hover:text-[#FF6E02] transition-colors">
      {label}
    </span>
    <span className="flex items-center justify-center">
      <img
        src={img}
        alt={label}
        className="w-[22px] h-[22px] object-contain group-hover:scale-110 transition-transform"
      />
    </span>
  </Link>
);

export default DashboardLayout;
