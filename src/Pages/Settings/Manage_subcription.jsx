import React from "react";
import { PiCheckSquareOffsetBold } from "react-icons/pi";
import { motion } from "framer-motion";

const Manage_subscription = () => {
  const plans = [
    {
      name: "Standard",
      price: "$20",
      description: "per user/month, billed annually",
      target: "For Scaling Businesses",
      features: [
        "Some features will be given here.",
        "Some features will be given here.",
        "Some features will be given here.",
      ],
      isPopular: false,
    },
    {
      name: "Pro",
      price: "$59",
      discount: "-15%",
      description: "per user/month, billed annually",
      target: "For Scaling Businesses",
      features: [
        "Some features will be given here.",
        "Some features will be given here.",
        "Some features will be given here.",
      ],
      isPopular: true,
    },
  ];

  return (
    <div className="min-h-full flex flex-col items-center py-10 px-4">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-title mb-16">
        Subscriptions Plan
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative p-10 rounded-[10px] flex flex-col h-full border-2 transition-transform hover:scale-[1.02] ${
              plan.isPopular
                ? "bg-[#FF6E02] border-[#FF6E02] text-white shadow-2xl shadow-orange-200"
                : "bg-white border-[#FF6E02] text-tagline"
            }`}
          >
            {/* Plan Header */}
            <div className="mb-8">
              <h3
                className={`text-3xl font-bold mb-2 ${
                  !plan.isPopular ? "text-[#FF6E02]" : "text-white"
                }`}
              >
                {plan.name}
              </h3>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-5xl font-extrabold leading-none">
                  {plan.price}
                </span>
                {plan.discount && (
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold rounded-md">
                    {plan.discount}
                  </span>
                )}
              </div>
              <p
                className={`text-sm ${
                  plan.isPopular ? "text-white/80" : "text-gray-400"
                }`}
              >
                {plan.description}
              </p>
            </div>

            {/* Target Audience */}
            <p
              className={`text-lg font-bold mb-6 ${
                plan.isPopular ? "text-white/90" : "text-gray-400"
              }`}
            >
              {plan.target}
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <PiCheckSquareOffsetBold
                    size={24}
                    className={plan.isPopular ? "text-white" : "text-[#FF6E02]"}
                  />
                  <span
                    className={`text-sm font-medium ${
                      plan.isPopular ? "text-white" : "text-[#FF6E02]"
                    }`}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Action Button */}
            <button
              className={`w-full py-4 rounded-[10px] font-bold text-lg transition-all shadow-lg ${
                plan.isPopular
                  ? "bg-white text-[#FF6E02] hover:bg-orange-50"
                  : "bg-[#FF6E02] text-white hover:bg-[#e66302]"
              }`}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Manage_subscription;
