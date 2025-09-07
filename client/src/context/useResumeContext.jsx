import { createContext, useContext, useState } from "react";

export const ResumeContext = createContext();

export const ResumeContextProvider = ({ children }) => {
  const [resume, setResume] = useState({
    personalInfo: {
      name: "",
      designation: "",
      summary: "",
    },
    contactInfo: {
      email: "",
      phone: "",
      linkedin: "",
      github: "",
    },
    education: [],
    experience: [],
    skills: [],
    projects: [],
    certifications: [],
    languages: [],
    hobbies: [],
  });

  return (
    <ResumeContext.Provider value={{ resume, setResume }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResumeContext = () => useContext(ResumeContext);
