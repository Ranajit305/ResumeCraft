import { Menu, X, ClipboardList } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "../Setup/Login";
import Signup from "../Setup/Signup";
import useAuthStore from "../../stores/useAuthStore";
import { useResumeContext } from "../../context/useResumeContext";

const Navbar = () => {
  const { setResume } = useResumeContext();
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [type, setType] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const handleNavigate = () => {
    setResume({
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
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-6 transition-all duration-300 ${
        scrolled ? "backdrop-blur bg-white/70 shadow-sm" : "bg-transparent"
      }`}
    >
      {/* Brand */}
      <div
        onClick={() => handleNavigate()}
        className="flex items-center gap-1 cursor-pointer"
      >
        <ClipboardList className="text-indigo-600" size={30} />
        <button className="text-2xl font-bold text-indigo-600 cursor-pointer">
          ResumeCraft
        </button>
      </div>

      {/* Nav */}
      {!user && (
        <nav
          id="menu"
          className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden items-center justify-center transition-[width] max-md:bg-white/90 backdrop-blur flex-col md:flex-row flex gap-8 text-gray-900 text-sm font-normal ${
            menuOpen ? "max-md:w-full max-md:h-full flex" : "max-md:w-0"
          }`}
        >
          {/* Auth Buttons (now show on both mobile + desktop) */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <button
              onClick={() => setType("login")}
              className="text-indigo-600 bg-indigo-100 px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={() => setType("signup")}
              className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition cursor-pointer"
            >
              Sign up
            </button>
          </div>

          {/* Close Button (mobile only) */}
          <button
            onClick={() => setMenuOpen(false)}
            className="md:hidden text-gray-600 absolute top-6 right-6"
          >
            <X />
          </button>
        </nav>
      )}

      {user && (
        <nav>
          <button
            onClick={() => logout()}
            className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition cursor-pointer"
          >
            Logout
          </button>
        </nav>
      )}

      {!user && (
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-gray-600"
        >
          <Menu />
        </button>
      )}

      {type === "login" && <Login setType={setType} />}
      {type === "signup" && <Signup setType={setType} />}
    </header>
  );
};

export default Navbar;
