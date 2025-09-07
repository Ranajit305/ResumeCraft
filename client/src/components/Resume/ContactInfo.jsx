import { Mail, Phone, Linkedin, Github, Contact } from "lucide-react";
import { useResumeContext } from "../../context/useResumeContext";

const ContactInfo = () => {
  const { resume, setResume } = useResumeContext();

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <Contact className="w-6 h-6 text-purple-600" />
          Contact Information
        </h2>
        <p className="text-gray-500">Provide your contact details</p>
      </div>

      <div className="space-y-4">
        {/* Email */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <Mail className="w-4 h-4 text-purple-600" />
            Email
          </label>
          <input
            type="email"
            name="email"
            value={resume.contactInfo.email}
            onChange={(e) =>
              setResume((prev) => ({
                ...prev,
                contactInfo: {
                  ...prev.contactInfo,
                  email: e.target.value,
                },
              }))
            }
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-purple-500 transition-colors"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <Phone className="w-4 h-4 text-purple-600" />
            Phone
          </label>
          <input
            type="number"
            name="phone"
            value={resume.contactInfo.phone}
            onChange={(e) =>
              setResume((prev) => ({
                ...prev,
                contactInfo: {
                  ...prev.contactInfo,
                  phone: e.target.value,
                },
              }))
            }
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-purple-500 transition-colors"
          />
        </div>

        {/* LinkedIn */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <Linkedin className="w-4 h-4 text-purple-600" />
            LinkedIn
          </label>
          <input
            type="text"
            name="linkedin"
            value={resume.contactInfo.linkedin}
            onChange={(e) =>
              setResume((prev) => ({
                ...prev,
                contactInfo: {
                  ...prev.contactInfo,
                  linkedin: e.target.value,
                },
              }))
            }
            placeholder="Enter your LinkedIn Link"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-purple-500 transition-colors"
          />
        </div>

        {/* Github */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <Github className="w-4 h-4 text-purple-600" />
            Github
          </label>
          <input
            type="text"
            name="github"
            value={resume.contactInfo.github}
            onChange={(e) =>
              setResume((prev) => ({
                ...prev,
                contactInfo: {
                  ...prev.contactInfo,
                  github: e.target.value,
                },
              }))
            }
            placeholder="Enter your Github Link"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-purple-500 transition-colors"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
