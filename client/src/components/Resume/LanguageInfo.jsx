import { useState } from "react";
import { useResumeContext } from "../../context/useResumeContext";
import { PlusCircle, Trash2 } from "lucide-react";

const LanguageInfo = () => {
  const { resume, setResume } = useResumeContext();
  const [language, setLanguage] = useState("");

  const handleAddLanguage = () => {
    if (!language.trim()) return;

    setResume((prev) => ({
      ...prev,
      languages: [...prev.languages, language.trim()],
    }));
    setLanguage("");
  };

  const handleDeleteLanguage = (index) => {
    setResume((prev) => ({
      ...prev,
      languages: prev.languages.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Add a language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg outline-purple-500"
        />
        <button
          onClick={handleAddLanguage}
          className="px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center justify-center"
        >
          <PlusCircle className="w-5 h-5" />
        </button>
      </div>

      {/* List */}
      <ul className="flex flex-wrap items-center gap-3">
        {resume.languages.map((lang, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between gap-1 bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg"
          >
            <span className="text-gray-700">{lang}</span>
            <button
              onClick={() => handleDeleteLanguage(idx)}
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

export default LanguageInfo;
