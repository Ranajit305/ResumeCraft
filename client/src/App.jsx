import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PageNotFound from "./pages/PageNotFound";
import useAuthStore from "./stores/useAuthStore";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import UpdateResume from "./pages/UpdateResume";

const App = () => {
  const { user, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={!user ? <LandingPage /> : <Navigate to={"/dashboard"} />}
        />

        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to={"/"} />}
        />
        <Route
          path="/resume/:resumeId"
          element={user ? <UpdateResume /> : <Navigate to={"/"} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
