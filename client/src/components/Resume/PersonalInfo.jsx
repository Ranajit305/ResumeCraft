import { User, Briefcase, FileText } from "lucide-react";
import { useResumeContext } from "../../context/useResumeContext";

const PersonalInfo = () => {
  const { resume, setResume } = useResumeContext();

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <User className="w-6 h-6 text-purple-600" />
          Personal Information
        </h2>
        <p className="text-gray-500">Tell us about yourself</p>
      </div>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={resume.personalInfo.name}
            onChange={(e) =>
              setResume((prev) => ({
                ...prev,
                personalInfo: {
                  ...prev.personalInfo,
                  name: e.target.value,
                },
              }))
            }
            placeholder="Enter your full name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-purple-500 transition-colors"
          />
        </div>

        {/* Designation */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-purple-600" />
            Designation
          </label>
          <input
            type="text"
            name="designation"
            value={resume.personalInfo.designation}
            onChange={(e) =>
              setResume((prev) => ({
                ...prev,
                personalInfo: {
                  ...prev.personalInfo,
                  designation: e.target.value,
                },
              }))
            }
            placeholder="e.g., Senior Developer"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-purple-500 transition-colors"
          />
        </div>

        {/* Summary */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <FileText className="w-4 h-4 text-purple-600" />
            Professional Summary
          </label>
          <textarea
            name="summary"
            value={resume.personalInfo.summary}
            onChange={(e) =>
              setResume((prev) => ({
                ...prev,
                personalInfo: {
                  ...prev.personalInfo,
                  summary: e.target.value,
                },
              }))
            }
            rows={4}
            placeholder="Write a brief summary about yourself..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-purple-500 transition-colors resize-none"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
