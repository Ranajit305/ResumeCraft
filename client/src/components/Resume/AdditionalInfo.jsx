import { Globe } from "lucide-react";
import LanguageInfo from "./LanguageInfo";
import HobbiesInfo from "./HobbiesInfo";
import SkillsInfo from "./SkillsInfo";

const AdditionalInfo = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <Globe className="w-6 h-6 text-purple-600" />
          Additional Information
        </h2>
        <p className="text-gray-500">Add your languages, hobbies, and skills</p>
      </div>

      <div className="space-y-6">
        <LanguageInfo />
        <HobbiesInfo />
        <SkillsInfo />
      </div>
    </div>
  );
};

export default AdditionalInfo;
