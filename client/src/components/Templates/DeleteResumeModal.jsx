import { Trash2 } from "lucide-react";
import { createPortal } from "react-dom";
import useResumeStore from "../../stores/useResumeStore";

const DeleteResumeModal = ({ resumeId, setDeleteModal }) => {
  const { deleteResume } = useResumeStore();

  const handleDeleteResume = async () => {
    await deleteResume(resumeId);
    setDeleteModal(false);
  };

  return createPortal(
    <div
      onClick={(e) => e.stopPropagation()}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
    >
      <div className="flex flex-col items-center bg-white shadow-md rounded-xl py-6 px-5 md:w-[460px] w-[370px] border border-gray-200">
        <div className="flex items-center justify-center p-4 bg-red-100 rounded-full">
          <Trash2 className="text-red-500" />
        </div>

        <h2 className="text-gray-900 font-semibold mt-4 text-xl">
          Are you sure?
        </h2>

        <p className="text-sm text-gray-600 mt-2 text-center">
          Do you really want to continue? <br />
          This action cannot be undone.
        </p>

        <div className="flex items-center justify-center gap-4 mt-5 w-full">
          <button
            type="button"
            onClick={() => setDeleteModal(false)}
            className="w-full md:w-36 h-10 rounded-md border border-gray-300 bg-white text-gray-600 font-medium text-sm hover:bg-gray-100 active:scale-95 transition"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={() => handleDeleteResume()}
            className="w-full md:w-36 h-10 rounded-md text-white bg-red-600 font-medium text-sm hover:bg-red-700 active:scale-95 transition"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DeleteResumeModal;
