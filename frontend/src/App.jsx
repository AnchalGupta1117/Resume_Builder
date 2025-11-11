import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserProvider from "./context/UserContext.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectedRoute from "./routes/ProtectedRoutes.jsx";
import CreateResumesForm from "./components/createResumesForm.jsx";
import EditResume from "./components/EditResumes.jsx";
import TemplatesPage from "./pages/TemplatesPage.jsx";
import {Toaster} from "react-hot-toast";

const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/create-resume" element={<CreateResumesForm />} />
        <Route path="/resume/view/:id" element={<Dashboard />} />
  <Route path="/resume/edit/:resumeId" element={<EditResume />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster toastOptions={{
        className:"",
        style:{
          fontSize: "13px"
        }
      }}>

      </Toaster>
    </UserProvider>
  );
};

export default App;
