// Import React Router components
import {
  Outlet,
  useNavigate,
  Link,
} from "react-router-dom";

// Import Redux hook
import { useDispatch } from "react-redux";

// Import logout action
import { logout } from "../redux/authSlice";

// Import logout service
import { logoutUser } from "../services/authService";

// Import icons
import {
  FaHome,
  FaFileAlt,
  FaPenFancy,
  FaBriefcase,
  FaRobot,
  FaComments,
  FaCreditCard,
  FaSignOutAlt,
} from "react-icons/fa";

// Dashboard layout component
const DashboardLayout = () => {

  // Redux dispatch
  const dispatch = useDispatch();

  // React Router navigation
  const navigate = useNavigate();

  // Logout Handler

  const handleLogout = () => {

    logoutUser();

    dispatch(logout());

    navigate("/login");
  };

  return (

    <div
      className="
        min-h-screen
        bg-slate-950
        text-white
        flex
      "
    >

      {/* Sidebar */}

      <aside
        className="
          w-72
          min-h-screen
          bg-slate-900
          border-r
          border-slate-800
          p-6
          flex
          flex-col
          justify-between
        "
      >

        <div>

          {/* Logo */}

          <div className="mb-8">

            <h2
              className="
                text-3xl
                font-bold
                text-blue-500
                mb-2
              "
            >
              CareerAI
            </h2>

            <Link
              to="/"
              className="
                text-sm
                text-slate-400
                hover:text-blue-400
                transition
                duration-300
              "
            >
              ← Back to Home
            </Link>

          </div>

          {/* Welcome Card */}

          <div
            className="
              bg-slate-800
              p-4
              rounded-2xl
              mb-8
            "
          >

            <p
              className="
                text-sm
                text-slate-400
              "
            >
              Welcome Back
            </p>

            <h3
              className="
                font-bold
                text-lg
                text-white
              "
            >
              Career Dashboard
            </h3>

          </div>

          {/* Navigation */}

          <nav className="flex flex-col gap-4">

            {/* Dashboard */}

            <Link
              to="/dashboard"
              className="
                flex
                items-center
                gap-3
                bg-slate-800
                px-4
                py-3
                rounded-xl
                hover:bg-blue-500
                hover:text-white
                transition
                duration-300
              "
            >
              <FaHome />
              Overview
            </Link>

            {/* Resume Analyzer */}

            <Link
              to="/dashboard/resume-analyzer"
              className="
                flex
                items-center
                gap-3
                bg-slate-800
                px-4
                py-3
                rounded-xl
                hover:bg-blue-500
                hover:text-white
                transition
                duration-300
              "
            >
              <FaFileAlt />
              Resume Analyzer
            </Link>

            {/* Cover Letters */}

            <Link
              to="/dashboard/cover-letter"
              className="
                flex
                items-center
                gap-3
                bg-slate-800
                px-4
                py-3
                rounded-xl
                hover:bg-blue-500
                hover:text-white
                transition
                duration-300
              "
            >
              <FaPenFancy />
              Cover Letters
            </Link>

            {/* Job Tracker */}

            <Link
              to="/dashboard/job-tracker"
              className="
                flex
                items-center
                gap-3
                bg-slate-800
                px-4
                py-3
                rounded-xl
                hover:bg-blue-500
                hover:text-white
                transition
                duration-300
              "
            >
              <FaBriefcase />
              Job Tracker
            </Link>

            {/* Interview Questions */}

            <Link
              to="/dashboard/interview-questions"
              className="
                flex
                items-center
                gap-3
                bg-slate-800
                px-4
                py-3
                rounded-xl
                hover:bg-blue-500
                hover:text-white
                transition
                duration-300
              "
            >
              <FaRobot />
              Interview Questions
            </Link>

            {/* Career Coach */}

            <Link
              to="/dashboard/career-coach"
              className="
                flex items-center gap-3
                bg-slate-800
                px-4 py-3
                rounded-xl
                hover:bg-blue-500
                hover:text-white
                transition duration-300
              "
            >
              <FaComments />
                Career Coach
              </Link>

            {/* Billing */}

            <Link
              to="/dashboard/billing"
              className="
                flex
                items-center
                gap-3
                bg-slate-800
                px-4
                py-3
                rounded-xl
                hover:bg-blue-500
                hover:text-white
                transition
                duration-300
              "
            >
              <FaCreditCard />
              Billing
            </Link>

          </nav>

        </div>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="
            flex
            items-center
            justify-center
            gap-2
            bg-red-500
            py-3
            rounded-xl
            hover:bg-red-600
            transition
            duration-300
            text-white
          "
        >
          <FaSignOutAlt />
          Logout
        </button>

      </aside>

      {/* Main Content */}

      <main
        className="
          flex-1
          p-8
          overflow-y-auto
          bg-slate-950
          text-white
        "
      >

        <Outlet />

      </main>

    </div>
  );
};

export default DashboardLayout;