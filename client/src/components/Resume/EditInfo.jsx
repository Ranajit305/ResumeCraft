import { useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Save } from "lucide-react";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import ExperienceInfo from "./ExperienceInfo";
import EducationInfo from "./EducationInfo";
import AdditionalInfo from "./AdditionalInfo";
import ProjectsInfo from "./ProjectsInfo";
import CertificationsInfo from "./Certifications";
import { useResumeContext } from "../../context/useResumeContext";
import useResumeStore from "../../stores//useResumeStore";

const EditInfo = () => {
  const { resumeId } = useParams();
  const { resume, loading } = useResumeContext();
  const { updateResume } = useResumeStore();
  const [page, setPage] = useState(1);

  const totalPages = 7;
  const progress = (page / totalPages) * 100;

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handleBack = () => {
    setPage((prev) => prev - 1);
  };

  const handleSave = () => {
    updateResume(resumeId, resume);
  };

  const handleResumePrint = () => {
    window.print();
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full">
        {/* Progress Bar */}
        <div
          className="absolute top-0 left-0 h-1 bg-indigo-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />

        {/* Content Area */}
        <div className="mb-8 text-sm lg:text-md">
          {page === 1 && <PersonalInfo />}
          {page === 2 && <ContactInfo />}
          {page === 3 && <ExperienceInfo />}
          {page === 4 && <EducationInfo />}
          {page === 5 && <AdditionalInfo />}
          {page === 6 && <ProjectsInfo />}
          {page === 7 && <CertificationsInfo />}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          {/* Left side - Download */}
          <div>
            <button
              onClick={handleResumePrint}
              className="text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer text-sm md:text-base"
            >
              Download PDF
            </button>
          </div>

          {/* Right side - Navigation */}
          <div className="flex space-x-2 md:space-x-3">
            {page > 1 && (
              <button
                onClick={handleBack}
                className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5 md:w-4 md:h-4 mr-0 md:mr-2" />
                <span className="hidden md:inline">Back</span>
              </button>
            )}

            <button
              onClick={handleSave}
              className="flex items-center px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 rounded-lg transition-colors cursor-pointer"
            >
              <Save className="w-5 h-5 md:w-4 md:h-4 mr-0 md:mr-2" />
              <span className="hidden md:inline">
                {loading ? "Saving..." : "Save"}
              </span>
            </button>

            {page < totalPages && (
              <button
                onClick={handleNext}
                className="flex items-center px-2 py-1 md:px-4 md:py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
              >
                <span className="hidden md:inline">Next</span>
                <ArrowRight className="w-5 h-5 md:w-4 md:h-4 ml-0 md:ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditInfo;
