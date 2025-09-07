const Hero = () => {
  return (
    <div className="flex flex-col items-center md:items-start pt-24">
      <h1 className="text-gray-900 font-semibold text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight">
        Build your <span className="text-indigo-600">professional resume</span>{" "}
        in minutes
      </h1>

      <p className="mt-4 text-gray-600 max-w-md text-sm sm:text-base leading-relaxed">
        ResumeCraft helps you create polished, ATS-friendly resumes with ease.
        Customize templates, track versions, and download as PDF — all in one
        place.
      </p>
    </div>
  );
};

export default Hero;
