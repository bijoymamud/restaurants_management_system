import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import {
  LuPlus,
  LuTrash2,
  LuSave,
  LuShieldCheck,
  LuLock,
} from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const Privacy_Policy = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      policies: [
        { title: "Data Collection", content: "" },
        { title: "Cookies Usage", content: "" },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "policies",
  });

  const onSubmit = (data) => {
    console.log("Privacy Policy Updated:", data);
    alert("Privacy Policy saved successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-24">
      <header className="flex justify-between items-end mb-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-orange-100 rounded-full text-[#FF6E02]">
              <LuLock size={24} />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Privacy Policy</h1>
          </div>
          <p className="text-gray-500">
            Define how you handle customer data and security protocols.
          </p>
        </div>

        <button
          type="button"
          onClick={() => append({ title: "", content: "" })}
          className="flex items-center gap-2 bg-[#FF6E02] hover:bg-[#e66302] text-white px-6 py-3 rounded-[10px] font-bold transition-all shadow-lg shadow-orange-100"
        >
          <LuPlus size={20} />
          Add Section
        </button>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <AnimatePresence>
          {fields.map((field, index) => (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, x: -20 }}
              className="bg-white p-8 rounded-[10px] border border-gray-100 shadow-sm relative group"
            >
              {/* Card Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <LuShieldCheck className="text-[#FF6E02]" />
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                    Section {index + 1}
                  </span>
                </div>

                {fields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                  >
                    <LuTrash2 size={20} />
                  </button>
                )}
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xl font-bold text-tagline ml-1">
                    Policy Title
                  </label>
                  <input
                    {...register(`policies.${index}.title`, { required: true })}
                    placeholder="e.g., Information We Collect"
                    className={`w-full px-6 py-4 mt-2 rounded-[10px] bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#FF6E02] transition-all font-bold text-gray-800 ${
                      errors.policies?.[index]?.title
                        ? "ring-2 ring-red-400"
                        : ""
                    }`}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xl font-bold text-tagline ml-1">
                    Details & Content
                  </label>
                  <textarea
                    {...register(`policies.${index}.content`, {
                      required: true,
                    })}
                    placeholder="Describe the policy details here..."
                    rows={5}
                    className={`w-full px-6 mt-2 py-4 rounded-[10px] bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#FF6E02] transition-all text-gray-600 leading-relaxed ${
                      errors.policies?.[index]?.content
                        ? "ring-2 ring-red-400"
                        : ""
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div className="fixed bottom-10 right-10 flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold shadow-2xl hover:bg-gray-900 transition-all"
          >
            <LuSave size={20} />
            Update Privacy Policy
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default Privacy_Policy;
