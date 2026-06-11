// Import React Router components
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Import layouts
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// Import public pages
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Import dashboard pages
import Dashboard from "./pages/dashboard/Dashboard";
import ResumeAnalyzer from "./pages/dashboard/ResumeAnalyzer";
import CoverLetter from "./pages/dashboard/CoverLetter";
import JobTracker from "./pages/dashboard/JobTracker";
import InterviewQuestions from "./pages/dashboard/InterviewQuestions";
import Billing from "./pages/dashboard/Billing";
import Profile from "./pages/dashboard/Profile";
import CareerCoach from "./pages/dashboard/CareerCoach";

// Import protected route component
import ProtectedRoute from "./components/common/ProtectedRoute";

// Main app component
function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* Public Routes */}
        <Route element={<MainLayout />}>

          {/* Home Page */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Login Page */}
          <Route
            path="/login"
            element={<Login />}
          />

          {/* Register Page */}
          <Route
            path="/register"
            element={<Register />}
          />

        </Route>

        {/* Protected Dashboard Routes */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >

          {/* Dashboard Overview */}
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          {/* AI Resume Analyzer */}
          <Route
            path="/dashboard/resume-analyzer"
            element={<ResumeAnalyzer />}
          />

          {/* Cover Letter */}
          <Route
            path="/dashboard/cover-letter"
            element={<CoverLetter />}
          />

          {/* Job Tracker */}
          <Route
            path="/dashboard/job-tracker"
            element={<JobTracker />}
          />

          {/* Interview Questions */}
          <Route
            path="/dashboard/interview-questions"
            element={<InterviewQuestions />}
          />

          {/* Billing */}
          <Route
            path="/dashboard/billing"
            element={<Billing />}
          />

          {/* Profile */}
          <Route
            path="/dashboard/profile"
            element={<Profile />}
          />

          {/* Career Coach */}
          <Route
            path="/dashboard/career-coach"
            element={<CareerCoach />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;