import { useState } from "react";
import { useResumeContext } from "../../context/useResumeContext";
import {
  GraduationCap,
  PlusCircle,
  Building2,
  BookOpen,
  Calendar,
  Award,
  Trash2,
} from "lucide-react";

const EducationInfo = () => {
  const { resume, setResume } = useResumeContext();
  const [openIndex, setOpenIndex] = useState(null);

  const [newEdu, setNewEdu] = useState({
    institution: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    grade: "",
  });

  // Add new education
  const handleAddEducation = () => {
    if (!newEdu.institution || !newEdu.degree) return;

    setResume((prev) => ({
      ...prev,
      education: [...prev.education, newEdu],
    }));

    setNewEdu({
      institution: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      grade: "",
    });
  };

  // Edit existing education
  const handleEditEducation = (index, field, value) => {
    const updated = [...resume.education];
    updated[index] = { ...updated[index], [field]: value };
    setResume((prev) => ({ ...prev, education: updated }));
  };

  // Delete education
  const handleDeleteEducation = (index) => {
    setResume((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <GraduationCap className="w-6 h-6 text-purple-600" />
          Education
        </h2>
        <p className="text-gray-500">Add your educational background</p>
      </div>

      {/* Input Fields for New Education */}
      <div className="space-y-4 rounded-lg">
        <label className="flex items-center gap-2 text-gray-700 text-sm">
          <Building2 className="w-4 h-4 text-purple-500" /> Institution
        </label>
        <input
          type="text"
          placeholder="e.g. Harvard University"
          value={newEdu.institution}
          onChange={(e) =>
            setNewEdu({ ...newEdu, institution: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-purple-500"
        />

        <label className="flex items-center gap-2 text-gray-700 text-sm">
          <GraduationCap className="w-4 h-4 text-purple-500" /> Degree
        </label>
        <input
          type="text"
          placeholder="e.g. Bachelor's"
          value={newEdu.degree}
          onChange={(e) => setNewEdu({ ...newEdu, degree: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-purple-500"
        />

        <label className="flex items-center gap-2 text-gray-700 text-sm">
          <BookOpen className="w-4 h-4 text-purple-500" /> Field of Study
        </label>
        <input
          type="text"
          placeholder="e.g. Computer Science"
          value={newEdu.fieldOfStudy}
          onChange={(e) =>
            setNewEdu({ ...newEdu, fieldOfStudy: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-purple-500"
        />

        <div className="flex gap-2">
          <div className="w-1/2">
            <label className="flex items-center gap-2 text-gray-700 text-sm mb-2">
              <Calendar className="w-4 h-4 text-purple-500" /> Start Date
            </label>
            <input
              type="date"
              value={newEdu.startDate}
              onChange={(e) =>
                setNewEdu({ ...newEdu, startDate: e.target.value })
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
              value={newEdu.endDate}
              onChange={(e) =>
                setNewEdu({ ...newEdu, endDate: e.target.value })
              }
              className="w-full px-4 py-2 text-gray-500 border border-gray-300 rounded-lg outline-purple-500"
            />
          </div>
        </div>

        <label className="flex items-center gap-2 text-gray-700 text-sm">
          <Award className="w-4 h-4 text-purple-500" /> Grade
        </label>
        <input
          type="text"
          placeholder="e.g. 8.5 CGPA / A+"
          value={newEdu.grade}
          onChange={(e) => setNewEdu({ ...newEdu, grade: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-purple-500"
        />

        <button
          onClick={handleAddEducation}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          <PlusCircle className="w-5 h-5" />
          Add
        </button>
      </div>

      {/* Education Accordion with Edit Option */}
      {resume.education.length > 0 && (
        <div className="w-full mt-6 flex flex-col gap-4 items-start text-left">
          {resume.education.map((edu, index) => (
            <div key={index} className="flex flex-col items-start w-full">
              {/* Accordion Header */}
              <div
                className="flex items-center justify-between w-full cursor-pointer bg-gradient-to-r from-purple-50 to-white border border-purple-100 p-4 rounded"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h2 className="text-sm font-medium text-gray-800">
                  {edu.degree} in {edu.fieldOfStudy} @ {edu.institution}
                </h2>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteEducation(index);
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
                    ? "opacity-100 max-h-[400px] translate-y-0 pt-4"
                    : "opacity-0 max-h-0 -translate-y-2"
                }`}
              >
                {openIndex === index && (
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm">
                      <Building2 className="w-4 h-4 text-purple-500" />{" "}
                      Institution
                    </label>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) =>
                        handleEditEducation(
                          index,
                          "institution",
                          e.target.value
                        )
                      }
                      className="w-full px-2 py-1 border rounded"
                    />

                    <label className="flex items-center gap-2 text-sm">
                      <GraduationCap className="w-4 h-4 text-purple-500" />{" "}
                      Degree
                    </label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) =>
                        handleEditEducation(index, "degree", e.target.value)
                      }
                      className="w-full px-2 py-1 border rounded"
                    />

                    <label className="flex items-center gap-2 text-sm">
                      <BookOpen className="w-4 h-4 text-purple-500" /> Field of
                      Study
                    </label>
                    <input
                      type="text"
                      value={edu.fieldOfStudy}
                      onChange={(e) =>
                        handleEditEducation(
                          index,
                          "fieldOfStudy",
                          e.target.value
                        )
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
                          value={edu.startDate}
                          onChange={(e) =>
                            handleEditEducation(
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
                          value={edu.endDate}
                          onChange={(e) =>
                            handleEditEducation(
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
                      <Award className="w-4 h-4 text-purple-500" /> Grade
                    </label>
                    <input
                      type="text"
                      value={edu.grade}
                      onChange={(e) =>
                        handleEditEducation(index, "grade", e.target.value)
                      }
                      className="w-full px-2 py-1 border rounded"
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

export default EducationInfo;
