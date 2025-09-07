import React, { useRef, useState } from "react";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useResumeContext } from "../../context/useResumeContext";
import DeleteResumeModal from "../Templates/DeleteResumeModal";

const Card = ({ resume }) => {
  const navigate = useNavigate();
  const { setResume } = useResumeContext();

  const [deleteModal, setDeleteModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  const handleOpenResume = () => {
    setResume(resume);
    navigate(`/resume/${resume._id}`);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={handleOpenResume}
      className="relative w-80 h-56 rounded-xl p-0.5 bg-white backdrop-blur-md text-gray-800 overflow-hidden shadow-lg cursor-pointer"
    >
      {visible && (
        <div
          className="pointer-events-none blur-xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 size-60 absolute z-0 transition-opacity duration-300"
          style={{ top: position.y - 120, left: position.x - 120 }}
        />
      )}

      <div className="relative z-10 bg-white p-6 h-full w-full rounded-[10px] flex flex-col justify-center text-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setDeleteModal(true);
          }}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100 transition"
        >
          <Trash2 className="w-5 h-5 text-gray-500 hover:text-red-500" />
        </button>

        {deleteModal && (
          <DeleteResumeModal
            resumeId={resume._id}
            setDeleteModal={setDeleteModal}
          />
        )}

        <h2 className="text-lg font-bold text-gray-800">{resume.title}</h2>

        <p className="text-xs text-gray-400 mt-0.5">
          Version: V{resume.version}
        </p>

        <p className="text-sm text-gray-500 mt-1">
          {new Date(resume.updatedAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>

        <div className="w-full mt-4">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-500"
              style={{ width: `${resume.completion}%` }}
            />
          </div>
          <p className="text-xs text-gray-600 mt-1">
            {resume.completion}% Complete
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
