import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { LuPlus, LuTrash2, LuSave, LuInfo } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const Terms_Conditions = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      terms: [{ title: "General Rules", content: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "terms",
  });

  const onSubmit = (data) => {
    console.log("Saved Data:", data);
    alert("Terms updated successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-tagline">
            Terms & Conditions
          </h1>
          <p className="text-label flex items-center gap-2 mt-1">
            <LuInfo size={16} /> Manage your restaurant policies here.
          </p>
        </div>
        <button
          onClick={() => append({ title: "", content: "" })}
          className="flex items-center gap-2 bg-[#FF6E02] hover:bg-[#e66302] text-white px-5 py-2.5 rounded-xl font-bold transition-all hover:cursor-pointer shadow-lg shadow-orange-200"
        >
          <LuPlus size={20} /> Add New Term
        </button>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <AnimatePresence>
          {fields.map((field, index) => (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white p-6 rounded-[10px] border border-gray-100 shadow-sm relative group"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="bg-orange-50 text-[#FF6E02] text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Clause #{index + 1}
                </span>

                {fields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-2"
                  >
                    <LuTrash2 size={20} />
                  </button>
                )}
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xl font-bold text-tagline ml-1">
                    Title
                  </label>
                  <input
                    {...register(`terms.${index}.title`, {
                      required: "Title is required",
                    })}
                    placeholder="e.g., Refund Policy"
                    className={`w-full px-5 py-3 mt-2 rounded-[10px] border bg-[#F9FAFB] outline-none transition-all focus:border-[#FF6E02] focus:ring-1 focus:ring-[#FF6E02] ${
                      errors.terms?.[index]?.title
                        ? "border-red-500"
                        : "border-gray-200"
                    }`}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xl  font-bold text-gray-700 ml-1">
                    Description
                  </label>
                  <textarea
                    {...register(`terms.${index}.content`, {
                      required: "Content is required",
                    })}
                    placeholder="Write the details of the policy here..."
                    rows={4}
                    className={`w-full px-5 mt-2 py-4 rounded-[10px] border bg-[#F9FAFB] outline-none transition-all focus:border-[#FF6E02] focus:ring-1 focus:ring-[#FF6E02] ${
                      errors.terms?.[index]?.content
                        ? "border-red-500"
                        : "border-gray-200"
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <footer className="fixed bottom-10 right-10 z-50">
          <button
            type="submit"
            className="flex items-center gap-3 bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-gray-800 transition-all shadow-2xl hover:scale-105 active:scale-95"
          >
            <LuSave size={22} />
            Save Changes
          </button>
        </footer>
      </form>
    </div>
  );
};

export default Terms_Conditions;
