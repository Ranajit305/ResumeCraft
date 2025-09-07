import { useState } from "react";
import { useResumeContext } from "../../context/useResumeContext";
import { Award, PlusCircle, Trash2 } from "lucide-react";

const CertificationsInfo = () => {
  const { resume, setResume } = useResumeContext();
  const [openIndex, setOpenIndex] = useState(null);

  const [newCertification, setNewCertification] = useState({
    name: "",
    issuer: "",
    date: "",
    link: "",
  });

  // Add a certification
  const handleAddCertification = () => {
    if (!newCertification.name.trim()) return;

    setResume((prev) => ({
      ...prev,
      certifications: [...prev.certifications, newCertification],
    }));

    setNewCertification({
      name: "",
      issuer: "",
      date: "",
      link: "",
    });
  };

  // Edit certification
  const handleEditCertification = (index, field, value) => {
    const updated = [...resume.certifications];
    updated[index][field] = value;
    setResume((prev) => ({ ...prev, certifications: updated }));
  };

  // Delete certification
  const handleDeleteCertification = (index) => {
    setResume((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <Award className="w-6 h-6 text-purple-600" />
          Certifications
        </h2>
        <p className="text-gray-500">Showcase your certifications & licenses</p>
      </div>

      {/* Add new certification */}
      <div className="space-y-4 rounded-lg">
        <input
          type="text"
          placeholder="Certification Name"
          value={newCertification.name}
          onChange={(e) =>
            setNewCertification({ ...newCertification, name: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-purple-500"
        />
        <input
          type="text"
          placeholder="Issuer"
          value={newCertification.issuer}
          onChange={(e) =>
            setNewCertification({ ...newCertification, issuer: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-purple-500"
        />
        <input
          type="date"
          placeholder="Date"
          value={newCertification.date}
          onChange={(e) =>
            setNewCertification({ ...newCertification, date: e.target.value })
          }
          className="w-full px-4 py-2 text-gray-500 border border-gray-300 rounded-lg outline-purple-500"
        />
        <input
          type="text"
          placeholder="Link"
          value={newCertification.link}
          onChange={(e) =>
            setNewCertification({ ...newCertification, link: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-purple-500"
        />

        <button
          onClick={handleAddCertification}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          <PlusCircle className="w-5 h-5" />
          Add Certification
        </button>
      </div>

      {/* Certification list with accordion */}
      {resume.certifications.length > 0 && (
        <div className="w-full mt-6 flex flex-col gap-4 items-start text-left">
          {resume.certifications.map((cert, index) => (
            <div key={index} className="flex flex-col items-start w-full">
              {/* Accordion Header */}
              <div
                className="flex items-center justify-between w-full cursor-pointer bg-gradient-to-r from-purple-50 to-white border border-purple-100 p-4 rounded"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h2 className="text-sm font-medium text-gray-800">
                  {cert.name} - {cert.issuer}
                </h2>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteCertification(index);
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
                    <input
                      type="text"
                      value={cert.name}
                      onChange={(e) =>
                        handleEditCertification(index, "name", e.target.value)
                      }
                      className="w-full px-2 py-1 border rounded"
                    />
                    <input
                      type="text"
                      value={cert.issuer}
                      onChange={(e) =>
                        handleEditCertification(index, "issuer", e.target.value)
                      }
                      className="w-full px-2 py-1 border rounded"
                    />
                    <input
                      type="text"
                      value={cert.date}
                      onChange={(e) =>
                        handleEditCertification(index, "date", e.target.value)
                      }
                      className="w-full px-2 py-1 border rounded"
                    />
                    <input
                      type="text"
                      value={cert.link}
                      onChange={(e) =>
                        handleEditCertification(index, "link", e.target.value)
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

export default CertificationsInfo;
