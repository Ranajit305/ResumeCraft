import { Link } from "react-router-dom";
import Card from "../components/Resume/Card";
import useResumeStore from "../stores/useResumeStore";
import { useEffect, useState } from "react";
import CreateResumeModal from "../components/Templates/CreateResumeModal";
import { useResumeContext } from "../context/useResumeContext";
import { Loader2 } from "lucide-react";

const Dashboard = () => {
  const { resume } = useResumeContext();
  const { resumes, getAllResume, loading } = useResumeStore();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getAllResume();
  }, []);

  return (
    <div className="pt-24 px-5 md:px-15 lg:px-25 xl:px-30">
      <div className="flex items-center justify-between">
        <div className="w-full flex items-center sm:items-center justify-between gap-4 bg-white shadow-sm rounded-xl p-4 sm:p-6 border border-gray-200">
          {/* Left Side */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              My Resumes
            </h1>
            <p className="text-sm sm:text-base text-gray-500 mt-1">
              Total Resumes:{" "}
              <span className="font-medium text-gray-700">
                {resumes.length}
              </span>
            </p>
          </div>

          {/* Right Side */}
          <div>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg text-sm sm:text-base font-medium shadow-md hover:shadow-lg transition-all duration-200"
            >
              + Create New
            </button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-6 mb-6">
        {loading ? (
          <Loader2 size={30} className="animate-spin text-indigo-500 mt-24" />
        ) : resumes.length === 0 ? (
          <p className="text-gray-600 text-sm md:text-base">
            Create a resume to get started with.
          </p>
        ) : (
          resumes.map((resume, index) => (
            <div key={index}>
              <Card resume={resume} />
            </div>
          ))
        )}
      </div>

      {isOpen && <CreateResumeModal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Dashboard;
