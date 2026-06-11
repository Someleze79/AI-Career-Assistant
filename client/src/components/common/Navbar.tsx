// Import React Router
import { Link } from "react-router-dom";

// Import Redux
import { useSelector } from "react-redux";

// Import Redux types
import type { RootState } from "../../redux/store";

// Navbar Component

const Navbar = () => {

  // Auth State

  const { user } = useSelector(
    (state: RootState) => state.auth
  );

  return (

    <nav
      className="
        bg-slate-950/90
        backdrop-blur-xl
        border-b
        border-slate-800
        sticky
        top-0
        z-50
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          items-center
          justify-between
        "
      >

        {/* Logo */}

        <Link
          to="/"
          className="
            text-2xl
            font-bold
            text-white
            transition
            duration-300
            hover:scale-105
          "
        >
          <span className="text-blue-500">
            AI
          </span>
          {" "}
          Career Assistant
        </Link>

        {/* Navigation Links */}

        <div
          className="
            hidden
            md:flex
            items-center
            gap-8
          "
        >

          <a
            href="#features"
            className="
              text-slate-400
              hover:text-white
              transition
              duration-300
            "
          >
            Features
          </a>

          <a
            href="#why-us"
            className="
              text-slate-400
              hover:text-white
              transition
              duration-300
            "
          >
            Why Us
          </a>

          <a
            href="#pricing"
            className="
              text-slate-400
              hover:text-white
              transition
              duration-300
            "
          >
            Pricing
          </a>

        </div>

        {/* Right Side */}

        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          {user ? (

            <Link
              to="/dashboard"
              className="
                bg-blue-500
                hover:bg-blue-600
                px-5
                py-2.5
                rounded-xl
                text-white
                font-medium
                transition
                duration-300
                shadow-lg
                shadow-blue-500/20
                hover:scale-105
              "
            >
              Dashboard
            </Link>

          ) : (

            <>

              {/* Login */}

              <Link
                to="/login"
                className="
                  text-slate-300
                  hover:text-white
                  transition
                  duration-300
                "
              >
                Login
              </Link>

              {/* Register */}

              <Link
                to="/register"
                className="
                  bg-blue-500
                  hover:bg-blue-600
                  px-5
                  py-2.5
                  rounded-xl
                  text-white
                  font-medium
                  transition
                  duration-300
                  shadow-lg
                  shadow-blue-500/20
                  hover:scale-105
                "
              >
                Get Started
              </Link>

            </>

          )}

        </div>

      </div>

    </nav>

  );
};

export default Navbar;