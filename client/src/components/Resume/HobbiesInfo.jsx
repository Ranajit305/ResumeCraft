import { useState } from "react";
import { useResumeContext } from "../../context/useResumeContext";
import { PlusCircle, Trash2 } from "lucide-react";

const HobbiesInfo = () => {
  const { resume, setResume } = useResumeContext();
  const [hobby, setHobby] = useState("");

  const handleAddHobby = () => {
    if (!hobby.trim()) return;

    setResume((prev) => ({
      ...prev,
      hobbies: [...prev.hobbies, hobby.trim()],
    }));
    setHobby("");
  };

  const handleDeleteHobby = (index) => {
    setResume((prev) => ({
      ...prev,
      hobbies: prev.hobbies.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Add a hobby"
          value={hobby}
          onChange={(e) => setHobby(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg outline-purple-500"
        />
        <button
          onClick={handleAddHobby}
          className="px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center justify-center"
        >
          <PlusCircle className="w-5 h-5" />
        </button>
      </div>

      {/* List */}
      <ul className="flex flex-wrap items-center gap-3">
        {resume.hobbies.map((hb, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between gap-1 bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg"
          >
            <span className="text-gray-700">{hb}</span>
            <button
              onClick={() => handleDeleteHobby(idx)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HobbiesInfo;
