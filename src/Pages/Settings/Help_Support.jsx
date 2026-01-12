import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { TbHelpCircleFilled } from "react-icons/tb";

import {
  LuPlus,
  LuTrash2,
  LuSend,
  LuMail,
  LuMessageCircle,
} from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuestion } from "react-icons/fa6";

const Help_Support = () => {
  const {
    register: regFAQ,
    control,
    handleSubmit: handleFAQSubmit,
  } = useForm({
    defaultValues: {
      faqs: [{ question: "", answer: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "faqs",
  });

  const {
    register: regMail,
    handleSubmit: handleMailSubmit,
    reset,
  } = useForm();

  const onSaveFAQ = (data) => {
    console.log("FAQs Saved:", data);
    alert("FAQs updated successfully!");
  };

  const onSendMail = (data) => {
    console.log("Mail Sent:", data);
    alert("Support request sent! We will get back to you soon.");
    reset();
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 pb-20">
      <header>
        <h1 className="text-3xl font-bold text-tagline">Help & Support</h1>
        <p className="text-label mt-1">
          Manage frequently asked questions or contact our tech team.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-tagline flex items-center gap-2">
              <span className="bg-orange-100 p-2 rounded-full">
                <FaQuestion className="text-[#FF6E02]" />
              </span>{" "}
              FAQ Manager
            </h2>
            <button
              onClick={() => append({ question: "", answer: "" })}
              className="p-2 bg-orange-50 text-[#FF6E02] rounded-xl hover:bg-[#FF6E02] hover:text-white transition-all"
            >
              <LuPlus size={20} />
            </button>
          </div>

          <form onSubmit={handleFAQSubmit(onSaveFAQ)} className="space-y-4">
            <AnimatePresence>
              {fields.map((field, index) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="bg-white p-6 rounded-[10px] border border-gray-100 shadow-sm"
                >
                  <div className="flex justify-between mb-4">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Question {index + 1}
                    </span>
                    {fields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="text-red-400 hover:text-red-600"
                      >
                        <LuTrash2 size={18} />
                      </button>
                    )}
                  </div>
                  <input
                    {...regFAQ(`faqs.${index}.question`)}
                    placeholder="Enter question..."
                    className="w-full mb-3 px-4 py-3 rounded-[10px] bg-gray-50 border-none focus:ring-2 focus:ring-[#FF6E02] outline-none font-medium"
                  />
                  <textarea
                    {...regFAQ(`faqs.${index}.answer`)}
                    placeholder="Enter answer..."
                    rows={2}
                    className="w-full px-4 py-3 rounded-[10px] bg-gray-50 border-none focus:ring-2 focus:ring-[#FF6E02] outline-none text-sm text-gray-600"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
            <button className="w-full py-4 bg-black text-white rounded-[10px] font-bold hover:bg-gray-800 transition-all shadow-lg">
              Save All FAQs
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold text-tagline flex items-center gap-2">
            <LuMessageCircle className="text-[#FF6E02]" /> Send a Message
          </h2>

          <div className="bg-white p-8 rounded-[10px] border border-gray-100 shadow-sm">
            <form onSubmit={handleMailSubmit(onSendMail)} className="space-y-5">
              <div className="space-y-2">
                <label className="text-lg font-bold text-gray-700 ml-1">
                  Subject
                </label>
                <input
                  {...regMail("subject", { required: true })}
                  placeholder="What do you need help with?"
                  className="w-full px-5 py-4 mt-2 rounded-[10px] bg-gray-50 border-none focus:ring-2 focus:ring-[#FF6E02] outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-lg  font-bold text-gray-700 ml-1">
                  Message
                </label>
                <textarea
                  {...regMail("message", { required: true })}
                  placeholder="Describe your issue in detail..."
                  rows={6}
                  className="w-full px-5 py-4 mt-2 rounded-[10px] bg-gray-50 border-none focus:ring-2 focus:ring-[#FF6E02] outline-none transition-all"
                />
              </div>

              <button className="w-full flex items-center justify-center gap-3 py-4 bg-[#FF6E02] text-white rounded-[10px] font-bold hover:bg-[#e66302] transition-all shadow-xl shadow-orange-100 group">
                <LuSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Send Support Mail
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-50 flex items-center gap-4 text-gray-400">
              <div className="p-3 bg-gray-50 rounded-full">
                <LuMail size={20} className="text-[#FF6E02]" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-300">
                  Direct Email
                </p>
                <p className="text-gray-600 font-bold">support@saucymenu.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help_Support;
