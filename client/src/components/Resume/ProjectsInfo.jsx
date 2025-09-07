import { useState } from "react";
import { useResumeContext } from "../../context/useResumeContext";
import { Briefcase, PlusCircle, Trash2 } from "lucide-react";

const ProjectsInfo = () => {
  const { resume, setResume } = useResumeContext();
  const [openIndex, setOpenIndex] = useState(null);

  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    link: "",
    technologies: "",
  });

  const handleAddProject = () => {
    if (!newProject.name.trim()) return;

    setResume((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          ...newProject,
          technologies: newProject.technologies
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean),
        },
      ],
    }));

    setNewProject({
      name: "",
      description: "",
      link: "",
      technologies: "",
    });
  };

  const handleEditProject = (index, field, value) => {
    const updated = [...resume.projects];
    if (field === "technologies") {
      updated[index][field] = value
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
    } else {
      updated[index][field] = value;
    }
    setResume((prev) => ({ ...prev, projects: updated }));
  };

  const handleDeleteProject = (index) => {
    setResume((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <Briefcase className="w-6 h-6 text-purple-600" />
          Projects
        </h2>
        <p className="text-gray-500">Showcase your work & contributions</p>
      </div>

      {/* Add new project */}
      <div className="space-y-4 rounded-lg">
        <input
          type="text"
          placeholder="Project Name"
          value={newProject.name}
          onChange={(e) =>
            setNewProject({ ...newProject, name: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-purple-500"
        />
        <textarea
          placeholder="Description"
          value={newProject.description}
          onChange={(e) =>
            setNewProject({ ...newProject, description: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none outline-purple-500"
        />
        <input
          type="text"
          placeholder="Link (GitHub/Live)"
          value={newProject.link}
          onChange={(e) =>
            setNewProject({ ...newProject, link: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-purple-500"
        />
        <input
          type="text"
          placeholder="Technologies (comma separated)"
          value={newProject.technologies}
          onChange={(e) =>
            setNewProject({ ...newProject, technologies: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-purple-500"
        />

        <button
          onClick={handleAddProject}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          <PlusCircle className="w-5 h-5" />
          Add Project
        </button>
      </div>

      {/* Project list with accordion */}
      {resume.projects.length > 0 && (
        <div className="w-full mt-6 flex flex-col gap-4 items-start text-left">
          {resume.projects.map((project, index) => (
            <div key={index} className="flex flex-col items-start w-full">
              {/* Accordion Header */}
              <div
                className="flex items-center justify-between w-full cursor-pointer bg-gradient-to-r from-purple-50 to-white border border-purple-100 p-4 rounded"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h2 className="text-sm font-medium text-gray-800">
                  {project.name}
                </h2>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteProject(index);
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
                    <input
                      type="text"
                      value={project.name}
                      onChange={(e) =>
                        handleEditProject(index, "name", e.target.value)
                      }
                      className="w-full px-2 py-1 border rounded"
                    />
                    <textarea
                      value={project.description}
                      onChange={(e) =>
                        handleEditProject(index, "description", e.target.value)
                      }
                      className="w-full px-2 py-1 border rounded resize-none"
                    />
                    <input
                      type="text"
                      value={project.link}
                      onChange={(e) =>
                        handleEditProject(index, "link", e.target.value)
                      }
                      className="w-full px-2 py-1 border rounded"
                    />
                    <input
                      type="text"
                      value={project.technologies.join(", ")}
                      onChange={(e) =>
                        handleEditProject(index, "technologies", e.target.value)
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

export default ProjectsInfo;
