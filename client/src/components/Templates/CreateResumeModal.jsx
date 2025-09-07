import React, { useState } from "react";
import { X } from "lucide-react";
import useResumeStore from "../../stores/useResumeStore";
import { useNavigate } from "react-router-dom";

const CreateResumeModal = ({ setIsOpen }) => {
  const { createResume, loading } = useResumeStore();
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  const handleCreateResume = async (e) => {
    e.preventDefault();
    const resumeId = await createResume(title);
    navigate(`/resume/${resumeId}`);
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <form
        onSubmit={handleCreateResume}
        className="relative bg-white text-gray-600 w-full max-w-md mx-4 p-6 rounded-xl shadow-2xl"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X size={22} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Create New Resume
        </h2>

        {/* Resume Title input */}
        <label htmlFor="title" className="block font-medium">
          Resume Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border mt-1 border-gray-300 outline-none rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
          placeholder="My First Resume"
          required
        />

        {/* Submit button */}
        <button
          type="submit"
          className="w-full mt-5 bg-indigo-500 hover:bg-indigo-600 transition py-2.5 rounded-lg text-white font-medium active:scale-95 cursor-pointer"
        >
          {loading ? "Creating Resume..." : "Create Resume"}
        </button>
      </form>
    </div>
  );
};

export default CreateResumeModal;
