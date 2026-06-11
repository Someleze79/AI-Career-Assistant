// Import React hooks
import {
  useState,
  useEffect,
} from "react";

import type {
  FormEvent,
} from "react";

// Import Redux hooks
import {
  useDispatch,
  useSelector,
} from "react-redux";

// Import React Router hooks
import {
  useNavigate,
  Link,
} from "react-router-dom";

// Import login action
import { login } from "../../redux/authSlice";

// Import Redux types
import type {
  AppDispatch,
  RootState,
} from "../../redux/store";

// Import Icons
import {
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

// Login Page Component

const Login = () => {

  // Redux dispatch
  const dispatch =
    useDispatch<AppDispatch>();

  // React Router navigation
  const navigate =
    useNavigate();

  // Get authenticated user
  const { user } = useSelector(
    (state: RootState) =>
      state.auth
  );

  // State

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  // Redirect User

  useEffect(() => {

    if (user) {

      navigate("/dashboard");
    }

  }, [user, navigate]);

  // Handle Input Changes

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // Handle Submit

  const handleSubmit = async (
    e: FormEvent
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      await dispatch(
        login(formData)
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  return (

    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        bg-slate-950
        bg-linear-to-br
        from-slate-950
        via-slate-900
        to-slate-950
      "
    >

      {/* Login Card */}

      <div
        className="
          w-full
          max-w-md
          bg-slate-900/80
          backdrop-blur-xl
          border
          border-slate-800
          p-8
          rounded-3xl
          shadow-2xl
          shadow-blue-500/10
        "
      >

        {/* Header */}

        <div className="text-center mb-8">

          <div
            className="
              text-5xl
              mb-4
            "
          >
            🚀
          </div>

          <h1
            className="
              text-4xl
              font-bold
              mb-3
              text-white
            "
          >
            Welcome Back to CareerAI
          </h1>

          <p
            className="
              text-slate-400
            "
          >
            Login to continue your
            career growth journey.
          </p>

        </div>

        {/* Demo Credentials */}

        <div
          className="
            bg-slate-800
            border
            border-slate-700
            p-4
            rounded-2xl
            mb-6
          "
        >

          <p
            className="
              text-sm
              text-slate-400
              mb-2
            "
          >
            Demo Account
          </p>

          <p className="text-sm text-white">
            demo@gmail.com
          </p>

          <p className="text-sm text-white">
            password123
          </p>

        </div>

        {/* Login Form */}

        <form
          onSubmit={handleSubmit}
          className="
            flex
            flex-col
            gap-5
          "
        >

          {/* Email */}

          <div>

            <label
              className="
                block
                mb-2
                text-sm
                font-medium
                text-slate-300
              "
            >
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="
                w-full
                p-4
                rounded-2xl
                bg-slate-800
                border
                border-slate-700
                outline-none
                focus:border-blue-500
                text-white
                transition
                duration-300
              "
              required
            />

          </div>

          {/* Password */}

          <div>

            <label
              className="
                block
                mb-2
                text-sm
                font-medium
                text-slate-300
              "
            >
              Password
            </label>

            <div className="relative">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="
                  w-full
                  p-4
                  rounded-2xl
                  bg-slate-800
                  border
                  border-slate-700
                  outline-none
                  focus:border-blue-500
                  text-white
                  transition
                  duration-300
                "
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-400
                  hover:text-white
                "
              >

                {showPassword
                  ? <FaEyeSlash />
                  : <FaEye />}

              </button>

            </div>

            {/* Forgot Password */}

            <div className="text-right mt-2">

              <button
                type="button"
                className="
                  text-blue-500
                  text-sm
                  hover:text-blue-400
                "
              >
                Forgot Password?
              </button>

            </div>

          </div>

          {/* Login Button */}

          <button
            type="submit"
            disabled={loading}
            className="
              bg-blue-500
              hover:bg-blue-600
              disabled:opacity-60
              text-white
              py-4
              rounded-2xl
              font-semibold
              transition
              duration-300
              shadow-lg
              hover:scale-[1.01]
            "
          >

            {loading
              ? "Logging In..."
              : "Login"}

          </button>

        </form>

        {/* Footer */}

        <div
          className="
            mt-8
            text-center
          "
        >

          <p
            className="
              text-slate-400
            "
          >
            Don't have an account?{" "}

            <Link
              to="/register"
              className="
                text-blue-500
                hover:text-blue-400
                font-semibold
              "
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;