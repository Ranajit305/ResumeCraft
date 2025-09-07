import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import { ResumeContextProvider } from "./context/useResumeContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ResumeContextProvider>
      <Toaster
        toastOptions={{
          duration: 2000,
        }}
      />
      <App />
    </ResumeContextProvider>
  </BrowserRouter>
);
