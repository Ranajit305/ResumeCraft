import { useState } from "react";
import {
  Briefcase,
  PlusCircle,
  Trash2,
  Building2,
  User,
  Calendar,
} from "lucide-react";
import { useResumeContext } from "../../context/useResumeContext";

const ExperienceInfo = () => {
  const { resume, setResume } = useResumeContext();
  const [openIndex, setOpenIndex] = useState(null);
  const [newExp, setNewExp] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleAddExperience = () => {
    if (!newExp.company || !newExp.position) return;

    setResume((prev) => ({
      ...prev,
      experience: [...prev.experience, newExp],
    }));

    setNewExp({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  const handleEditExperience = (index, field, value) => {
    const updated = [...resume.experience];
    updated[index] = { ...updated[index], [field]: value };
    setResume((prev) => ({ ...prev, experience: updated }));
  };

  const handleDeleteExperience = (index) => {
    setResume((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <Briefcase className="w-6 h-6 text-purple-600" />
          Experience
        </h2>
        <p className="text-gray-500">Add your professional experience</p>
      </div>

      {/* Input Fields for New Experience */}
      <div className="space-y-4 rounded-lg">
        <label className="flex items-center gap-2 text-gray-700 text-sm">
          <Building2 className="w-4 h-4 text-purple-500" /> Company
        </label>
        <input
          type="text"
          placeholder="e.g. Google"
          value={newExp.company}
          onChange={(e) => setNewExp({ ...newExp, company: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-purple-500"
        />

        <label className="flex items-center gap-2 text-gray-700 text-sm">
          <User className="w-4 h-4 text-purple-500" /> Position
        </label>
        <input
          type="text"
          placeholder="e.g. Software Engineer"
          value={newExp.position}
          onChange={(e) => setNewExp({ ...newExp, position: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-purple-500"
        />

        <div className="flex gap-2">
          <div className="w-1/2">
            <label className="flex items-center gap-2 text-gray-700 text-sm mb-2">
              <Calendar className="w-4 h-4 text-purple-500" /> Start Date
            </label>
            <input
              type="date"
              value={newExp.startDate}
              onChange={(e) =>
                setNewExp({ ...newExp, startDate: e.target.value })
              }
              className="w-full px-4 py-2 text-gray-500 border border-gray-300 rounded-lg outline-purple-500"
            />
          </div>
          <div className="w-1/2">
            <label className="flex items-center gap-2 text-gray-700 text-sm mb-2">
              <Calendar className="w-4 h-4 text-purple-500" /> End Date
            </label>
            <input
              type="date"
              value={newExp.endDate}
              onChange={(e) =>
                setNewExp({ ...newExp, endDate: e.target.value })
              }
              className="w-full px-4 py-2 text-gray-500 border border-gray-300 rounded-lg outline-purple-500"
            />
          </div>
        </div>

        <label className="flex items-center gap-2 text-gray-700 text-sm">
          <Briefcase className="w-4 h-4 text-purple-500" /> Description
        </label>
        <textarea
          placeholder="Describe your role and responsibilities"
          value={newExp.description}
          onChange={(e) =>
            setNewExp({ ...newExp, description: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none outline-purple-500"
        />

        <button
          onClick={handleAddExperience}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          <PlusCircle className="w-5 h-5" />
          Add
        </button>
      </div>

      {/* Experiences Accordion with Edit Option */}
      {resume.experience.length > 0 && (
        <div className="w-full mt-6 flex flex-col gap-4 items-start text-left">
          {resume.experience.map((exp, index) => (
            <div key={index} className="flex flex-col items-start w-full">
              {/* Accordion Header */}
              <div
                className="flex items-center justify-between w-full cursor-pointer bg-gradient-to-r from-purple-50 to-white border border-purple-100 p-4 rounded"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h2 className="text-sm font-medium text-gray-800">
                  {exp.position} @ {exp.company}
                </h2>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteExperience(index);
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              {/* Accordion Body */}
              <div
                className={`text-sm text-slate-600 px-4 transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "opacity-100 max-h-[500px] translate-y-0 pt-4"
                    : "opacity-0 max-h-0 -translate-y-2"
                }`}
              >
                {openIndex === index && (
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm">
                      <Building2 className="w-4 h-4 text-purple-500" /> Company
                    </label>
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) =>
                        handleEditExperience(index, "company", e.target.value)
                      }
                      className="w-full px-2 py-1 border rounded"
                    />

                    <label className="flex items-center gap-2 text-sm">
                      <User className="w-4 h-4 text-purple-500" /> Position
                    </label>
                    <input
                      type="text"
                      value={exp.position}
                      onChange={(e) =>
                        handleEditExperience(index, "position", e.target.value)
                      }
                      className="w-full px-2 py-1 border rounded"
                    />

                    <div className="flex gap-2">
                      <div className="w-1/2">
                        <label className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-purple-500" /> Start
                          Date
                        </label>
                        <input
                          type="date"
                          value={exp.startDate}
                          onChange={(e) =>
                            handleEditExperience(
                              index,
                              "startDate",
                              e.target.value
                            )
                          }
                          className="w-full px-2 py-1 border rounded"
                        />
                      </div>
                      <div className="w-1/2">
                        <label className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-purple-500" /> End
                          Date
                        </label>
                        <input
                          type="date"
                          value={exp.endDate}
                          onChange={(e) =>
                            handleEditExperience(
                              index,
                              "endDate",
                              e.target.value
                            )
                          }
                          className="w-full px-2 py-1 border rounded"
                        />
                      </div>
                    </div>

                    <label className="flex items-center gap-2 text-sm">
                      <Briefcase className="w-4 h-4 text-purple-500" />{" "}
                      Description
                    </label>
                    <textarea
                      value={exp.description}
                      onChange={(e) =>
                        handleEditExperience(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                      className="w-full px-2 py-1 border rounded resize-none"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceInfo;
