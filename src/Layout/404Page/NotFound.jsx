import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowBigLeft, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F] flex flex-col items-center justify-center p-6 overflow-hidden relative">
      {/* Background Animated Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-20 opacity-10 text-[#FF6E02]"
      >
        {/* <LuUtensils size={120} /> */}
      </motion.div>

      {/* Main Content */}
      <div className="text-center z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative inline-block"
        >
          {/* 404 Text */}
          <h1 className="text-[150px] md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FF6E02] to-[#b45309] leading-none">
            404
          </h1>

          {/* Animated "Steam" or "Burnt" element */}
          <motion.div
            animate={{ opacity: [0.4, 0.8, 0.4], y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-4 right-0 bg-[#FF6E02] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest"
          >
            Overcooked!
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oops! This page is off the menu.
          </h2>
          <p className="text-gray-400 max-w-md mx-auto mb-10">
            The recipe for this page was lost, or it was never in our kitchen to
            begin with. Let's get you back to the main course.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/dashboard"
            className="flex items-center gap-2 bg-[#FF6E02] hover:bg-[#e66302] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-900/20 group"
          >
            <Home
              size={20}
              className="group-hover:-translate-y-1 transition-transform"
            />
            Back to Dashboard
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-sm"
          >
            <ArrowBigLeft size={20} />
            Go Back
          </button>
        </motion.div>
      </div>

      {/* Floating Food Crumbs (Decorative) */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#FF6E02] rounded-full opacity-20"
          animate={{
            x: [Math.random() * 100, Math.random() * -100],
            y: [Math.random() * 100, Math.random() * -100],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default NotFound;
