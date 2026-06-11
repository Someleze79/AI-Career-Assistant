// Import React Router
import { Link } from "react-router-dom";

// Import Icons
import {
  FaFileAlt,
  FaPenFancy,
  FaBriefcase,
  FaRobot,
} from "react-icons/fa";

// Home page component
const Home = () => {

  return (

    <div
      className="
        min-h-screen
        bg-slate-950
        text-white
      "
    >

      {/* Hero Section */}

      <section
        className="
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-6
          pt-24
          pb-20
        "
      >

        {/* Heading */}

        <h1
          className="
            text-5xl
            md:text-7xl
            font-bold
            mb-6
            leading-tight
          "
        >
          Your
          <span className="text-blue-500">
            {" "}AI Career{" "}
          </span>
          Assistant
        </h1>

        {/* Subtitle */}

        <p
          className="
            text-slate-400
            text-lg
            md:text-2xl
            max-w-3xl
            leading-9
            mb-10
          "
        >
          Build resumes, generate cover letters,
          prepare for interviews, and track your
          job applications using powerful AI tools.
        </p>

        {/* CTA Buttons */}

        <div className="flex flex-wrap gap-4">

          <Link
            to="/register"
            className="
              bg-blue-500
              px-8
              py-4
              rounded-2xl
              hover:bg-blue-600
              transition
              duration-300
              text-white
              font-semibold
            "
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="
              bg-slate-800
              px-8
              py-4
              rounded-2xl
              hover:bg-slate-700
              transition
              duration-300
              font-semibold
            "
          >
            Login
          </Link>

        </div>

        {/* Hero Stats */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-10
            mt-16
          "
        >

          <div>

            <h3
              className="
                text-4xl
                font-bold
                text-blue-500
              "
            >
              500+
            </h3>

            <p className="text-slate-400">
              Resumes Analyzed
            </p>

          </div>

          <div>

            <h3
              className="
                text-4xl
                font-bold
                text-green-500
              "
            >
              1000+
            </h3>

            <p className="text-slate-400">
              Cover Letters Generated
            </p>

          </div>

          <div>

            <h3
              className="
                text-4xl
                font-bold
                text-purple-500
              "
            >
              95%
            </h3>

            <p className="text-slate-400">
              User Satisfaction
            </p>

          </div>

        </div>

      </section>

      {/* Features Section */}

      <section className="px-6 pb-20">

        <div
          className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >

          {/* Resume Analyzer */}

          <div
            className="
              bg-slate-900
              border
              border-slate-800
              p-6
              rounded-3xl
              shadow-xl
              hover:scale-[1.03]
              hover:border-blue-500
              transition
              duration-300
              cursor-pointer
            "
          >

            <FaFileAlt
              className="
                text-4xl
                text-blue-500
                mb-4
              "
            />

            <h2 className="text-2xl font-bold mb-4">
              Resume Analyzer
            </h2>

            <p
              className="
                text-slate-400
                leading-7
              "
            >
              Upload or paste your resume and
              receive ATS optimization feedback
              powered by AI.
            </p>

          </div>

          {/* Cover Letters */}

          <div
            className="
              bg-slate-900
              border
              border-slate-800
              p-6
              rounded-3xl
              shadow-xl
              hover:scale-[1.03]
              hover:border-blue-500
              transition
              duration-300
              cursor-pointer
            "
          >

            <FaPenFancy
              className="
                text-4xl
                text-green-500
                mb-4
              "
            />

            <h2 className="text-2xl font-bold mb-4">
              Cover Letters
            </h2>

            <p
              className="
                text-slate-400
                leading-7
              "
            >
              Generate professional AI-powered
              cover letters tailored to specific
              job applications.
            </p>

          </div>

          {/* Job Tracker */}

          <div
            className="
              bg-slate-900
              border
              border-slate-800
              p-6
              rounded-3xl
              shadow-xl
              hover:scale-[1.03]
              hover:border-blue-500
              transition
              duration-300
              cursor-pointer
            "
          >

            <FaBriefcase
              className="
                text-4xl
                text-yellow-500
                mb-4
              "
            />

            <h2 className="text-2xl font-bold mb-4">
              Job Tracker
            </h2>

            <p
              className="
                text-slate-400
                leading-7
              "
            >
              Organize and manage your job
              applications with status tracking
              and notes.
            </p>

          </div>

          {/* Interview Prep */}

          <div
            className="
              bg-slate-900
              border
              border-slate-800
              p-6
              rounded-3xl
              shadow-xl
              hover:scale-[1.03]
              hover:border-blue-500
              transition
              duration-300
              cursor-pointer
            "
          >

            <FaRobot
              className="
                text-4xl
                text-purple-500
                mb-4
              "
            />

            <h2 className="text-2xl font-bold mb-4">
              Interview Prep
            </h2>

            <p
              className="
                text-slate-400
                leading-7
              "
            >
              Practice AI-generated interview
              questions tailored to your desired
              role and experience level.
            </p>

          </div>

        </div>

      </section>

      {/* Why Choose CareerAI */}

      <section
        className="
          py-20
          px-6
        "
      >

        <div
          className="
            max-w-5xl
            mx-auto
            text-center
          "
        >

          <h2
            className="
              text-4xl
              font-bold
              mb-6
            "
          >
            Why Choose CareerAI?
          </h2>

          <p
            className="
              text-slate-400
              text-lg
              leading-8
            "
          >
            CareerAI combines resume optimization,
            AI-powered cover letters, interview
            preparation, and application tracking
            into one platform designed to help
            job seekers land opportunities faster.
          </p>

        </div>

      </section>

      {/* Final CTA */}

      <section
        className="
          py-20
          px-6
          text-center
        "
      >

        <h2
          className="
            text-5xl
            font-bold
            mb-6
          "
        >
          Ready To Land Your Dream Job?
        </h2>

        <p
          className="
            text-slate-400
            mb-8
            text-lg
          "
        >
          Start using CareerAI today and accelerate
          your career journey.
        </p>

        <Link
          to="/register"
          className="
            bg-blue-500
            px-8
            py-4
            rounded-2xl
            hover:bg-blue-600
            transition
            duration-300
            font-semibold
          "
        >
          Create Free Account
        </Link>

      </section>

    </div>
  );
};

export default Home;