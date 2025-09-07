import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  BookOpen,
  Briefcase,
  Code,
  Award,
  Languages,
  Heart,
} from "lucide-react";
import { useResumeContext } from "../../context/useResumeContext";
import { formatDateRange } from "../../utils/dateUtils";

const Template = () => {
  const { resume } = useResumeContext();

  return (
    <div
      id="resume-content"
      className="bg-white p-6 mb-6 font-sans text-gray-800 w-full h-full"
    >
      {/* Header */}
      <div className="text-center mb-2">
        <div className="flex items-center justify-center gap-0 sm:gap-3 flex-wrap">
          <h1 className="text-lg md:text-2xl print:text-2xl font-bold text-gray-900 mb-2">
            {resume.personalInfo.name}
          </h1>
          <h2 className="text-base md:text-xl print:text-xl text-purple-600 font-semibold mb-3">
            ({resume.personalInfo.designation})
          </h2>
        </div>
      </div>

      {/* Contact Info */}
      <div className="flex md:flex-row items-center justify-center gap-3 md:gap-5 text-xs md:text-sm print:text-sm border-b pb-4">
        <div>
          <div className="flex items-center gap-1 pb-1">
            <Mail className="w-3 h-3 md:w-4 md:h-4 text-purple-600" />
            <span>{resume.contactInfo.email}</span>
          </div>
          <div className="flex items-center gap-1 pb-1">
            <Phone className="w-3 h-3 md:w-4 md:h-4 text-purple-600" />
            <span>{resume.contactInfo.phone}</span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1 pb-1">
            <Linkedin className="w-3 h-3 md:w-4 md:h-4 text-purple-600" />
            <span className="truncate">{resume.contactInfo.linkedin}</span>
          </div>
          <div className="flex items-center gap-1 pb-1">
            <Github className="w-3 h-3 md:w-4 md:h-4 text-purple-600" />
            <span className="truncate">{resume.contactInfo.github}</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <p className="text-xs sm:text-sm print:text-sm text-center text-gray-600 max-w-2xl mx-auto mt-4 mb-4 leading-relaxed">
        {resume.personalInfo.summary}
      </p>

      <div className="grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Experience */}
          <div>
            <h3 className="text-base md:text-lg print:text-lg font-semibold mb-2 md:mb-3 print:mb-3 flex items-center gap-2 text-gray-900">
              <Briefcase className="w-4 h-4 md:w-5 md:h-5 print:w-5 print:h-5 text-purple-600" />
              Experience
            </h3>
            <div className="space-y-3 md:space-y-4 print:space-y-4">
              {resume.experience.map((exp, i) => (
                <div
                  key={i}
                  className="border-l-2 border-purple-200 pl-2 md:pl-3 print:pl-3"
                >
                  <p className="font-semibold text-xs md:text-sm print:text-sm">
                    {exp.position}
                  </p>
                  <p className="text-xs md:text-sm print:text-sm text-gray-600 mb-0.5 md:mb-1 print:mb-1">
                    {exp.company}
                  </p>
                  <p className="text-[11px] md:text-xs print:text-xs text-gray-500 mb-1 md:mb-2 print:mb-2">
                    {formatDateRange(exp.startDate)} -{" "}
                    {formatDateRange(exp.endDate)}
                  </p>
                  <p className="text-[11px] md:text-xs print:text-xs text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-base md:text-lg print:text-lg font-semibold mb-2 md:mb-3 print:mb-3 flex items-center gap-2 text-gray-900">
              <BookOpen className="w-4 h-4 md:w-5 md:h-5 print:w-5 print:h-5 text-purple-600" />
              Education
            </h3>
            <div className="space-y-3 md:space-y-4 print:space-y-4">
              {resume.education.map((edu, i) => (
                <div
                  key={i}
                  className="border-l-2 border-purple-200 pl-2 md:pl-3 print:pl-3"
                >
                  <p className="font-semibold text-xs md:text-sm print:text-sm">
                    {edu.degree} in {edu.fieldOfStudy}
                  </p>
                  <p className="text-xs md:text-sm print:text-sm text-gray-600 mb-0.5 md:mb-1 print:mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-[11px] md:text-xs print:text-xs text-gray-500">
                    {formatDateRange(edu.startDate)} -{" "}
                    {formatDateRange(edu.endDate)} | {edu.grade}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Hobbies */}
          <div className="flex flex-col gap-4 md:gap-5 print:gap-5">
            {/* Languages */}
            <div>
              <h3 className="text-base md:text-lg print:text-lg font-semibold mb-3 flex items-center gap-2 text-gray-900">
                <Languages className="w-4 h-4 md:w-5 md:h-5 print:w-5 print:h-5 text-purple-600" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {resume.languages?.map((lang, i) => (
                  <span
                    key={i}
                    className="bg-purple-50 text-purple-700 px-2 py-0.5 md:px-3 md:py-1 print:px-3 print:py-1 rounded-full text-xs"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div>
              <h3 className="text-base md:text-lg print:text-lg font-semibold mb-3 flex items-center gap-2 text-gray-900">
                <Heart className="w-4 h-4 md:w-5 md:h-5 print:w-5 print:h-5 text-purple-600" />
                Hobbies
              </h3>
              <div className="flex flex-wrap gap-2">
                {resume.hobbies?.map((hobby, i) => (
                  <span
                    key={i}
                    className="bg-purple-50 text-purple-700 px-2 py-0.5 md:px-3 md:py-1 print:px-3 print:py-1 rounded-full text-xs"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Skills */}
          <div>
            <h3 className="text-base md:text-lg print:text-lg font-semibold mb-3 flex items-center gap-2 text-gray-900">
              <Code className="w-4 h-4 md:w-5 md:h-5 print:w-5 print:h-5 text-purple-600" />
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {resume.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-purple-100 text-purple-700 px-2 py-0.5 md:px-3 md:py-1 print:px-3 print:py-1 rounded-full text-xs md:text-xs print:text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 flex items-center gap-2 text-gray-900 print:text-lg">
              <Code className="w-4 h-4 md:w-5 md:h-5 text-purple-600 print:w-5 print:h-5" />
              Projects
            </h3>
            <div className="space-y-3 md:space-y-4 print:space-y-4">
              {resume.projects?.map((proj, i) => (
                <div
                  key={i}
                  className="border-l-2 border-purple-200 pl-2 md:pl-3 print:pl-3"
                >
                  <p className="font-semibold text-xs md:text-sm print:text-sm">
                    {proj.name}
                  </p>
                  <p className="text-xs md:text-xs text-gray-700 mb-1 md:mb-2 leading-relaxed print:text-xs print:mb-2">
                    {proj.description}
                  </p>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 text-xs md:text-xs hover:underline inline-block mb-1 md:mb-2 print:text-xs print:mb-2"
                    >
                      View Project
                    </a>
                  )}
                  <div className="flex flex-wrap gap-1 mt-1 print:gap-1 print:mt-1">
                    {proj.technologies?.map((tech, j) => (
                      <span
                        key={j}
                        className="bg-gray-100 text-gray-700 px-1.5 py-0.5 md:px-2 md:py-1 rounded-full text-xs print:px-2 print:py-1 print:text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 flex items-center gap-2 text-gray-900 print:text-lg">
              <Award className="w-4 h-4 md:w-5 md:h-5 text-purple-600 print:w-5 print:h-5" />
              Certifications
            </h3>
            <div className="space-y-2 md:space-y-3 print:space-y-3">
              {resume.certifications?.map((cert, i) => (
                <div
                  key={i}
                  className="border-l-2 border-purple-200 pl-2 md:pl-3 print:pl-3"
                >
                  <p className="font-semibold text-xs md:text-sm print:text-sm">
                    {cert.name}
                  </p>
                  <p className="text-xs md:text-xs text-gray-600 mb-1 print:text-xs print:mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs md:text-xs text-gray-500 mb-1 print:text-xs print:mb-1">
                    {formatDateRange(cert.date)}
                  </p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 text-xs md:text-xs hover:underline print:text-xs"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
