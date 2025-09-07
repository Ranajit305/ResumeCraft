import { FileText, Edit3, Download } from "lucide-react";

const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-self-center gap-10 pb-10">
      <div className="size-[520px] top-0 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]/70"></div>

      {/* Feature 1 */}
      <div className="flex flex-col items-center justify-center max-w-80">
        <div className="p-6 aspect-square bg-violet-100 rounded-full">
          <FileText className="w-8 h-8 text-violet-600" />
        </div>

        <div className="mt-5 space-y-2 text-center">
          <h3 className="text-base font-semibold text-slate-700">
            Professional Resumes
          </h3>

          <p className="text-sm text-slate-600">
            Create polished resumes with pre-designed templates tailored for any
            industry.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col items-center justify-center max-w-80">
        <div className="p-6 aspect-square bg-green-100 rounded-full">
          <Edit3 className="w-8 h-8 text-green-600" />
        </div>

        <div className="mt-5 space-y-2 text-center">
          <h3 className="text-base font-semibold text-slate-700">
            Easy Customization
          </h3>

          <p className="text-sm text-slate-600">
            Edit sections, add experiences, and update skills in just a few
            clicks.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col items-center justify-center max-w-80">
        <div className="p-6 aspect-square bg-orange-100 rounded-full">
          <Download className="w-8 h-8 text-orange-600" />
        </div>

        <div className="mt-5 space-y-2 text-center">
          <h3 className="text-base font-semibold text-slate-700">
            Export to PDF
          </h3>

          <p className="text-sm text-slate-600">
            Download your resume instantly as a PDF and share it with employers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
