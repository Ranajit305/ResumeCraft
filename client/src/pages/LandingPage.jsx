import Hero from "../components/Hero";
import Features from "../components/Hero/Features";
import Images from "../components/Hero/Images";

const LandingPage = () => {
  return (
    <section>
      <main className="flex flex-col md:flex-row items-center max-md:text-center justify-between mt-16 pb-16 px-6 sm:px-10 md:px-24 max-w-7xl mx-auto w-full">
        <Hero />
        <Images />
      </main>
      <Features />
    </section>
  );
};

export default LandingPage;
