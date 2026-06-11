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

// Import auth actions
import {
  register,
  reset,
} from "../../redux/authSlice";

// Import Redux types
import type {
  AppDispatch,
  RootState,
} from "../../redux/store";

// Import icons
import {
  FaEye,
  FaEyeSlash,
  FaSpinner,
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

// Register Page

const Register = () => {

  const dispatch =
    useDispatch<AppDispatch>();

  const navigate =
    useNavigate();

  const {
    user,
    isLoading,
    isError,
    isSuccess,
    message,
  } = useSelector(
    (state: RootState) =>
      state.auth
  );

  // Form State

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const [showPassword,
    setShowPassword] =
      useState(false);

  // Redirect User

  useEffect(() => {

    if (
      isSuccess ||
      user
    ) {

      navigate(
        "/dashboard"
      );
    }

    return () => {

      dispatch(
        reset()
      );
    };

  }, [
    user,
    isSuccess,
    navigate,
    dispatch,
  ]);

  // Handle Input Change

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // Password Strength

  const getPasswordStrength =
    () => {

      if (
        formData.password.length < 6
      ) {

        return {
          label: "Weak",
          color:
            "bg-red-500",
          width: "33%",
        };
      }

      if (
        formData.password.length < 10
      ) {

        return {
          label: "Medium",
          color:
            "bg-yellow-500",
          width: "66%",
        };
      }

      return {
        label: "Strong",
        color:
          "bg-green-500",
        width: "100%",
      };
    };

  const strength =
    getPasswordStrength();

  // Submit Form

  const handleSubmit = (
    e: FormEvent
  ) => {

    e.preventDefault();

    dispatch(
      register(
        formData
      )
    );
  };

  return (

    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-slate-950
        px-6
      "
    >

      {/* Card */}

      <div
        className="
          w-full
          max-w-md
          bg-slate-900
          border
          border-slate-800
          rounded-3xl
          p-8
          shadow-2xl
        "
      >

        {/* Header */}

        <div
          className="
            text-center
            mb-8
          "
        >

          <h1
            className="
              text-4xl
              font-bold
              text-white
              mb-3
            "
          >
            Create Account
          </h1>

          <p
            className="
              text-slate-400
            "
          >
            Start building
            your career
            with AI.
          </p>

        </div>

        {/* Error */}

        {isError && (

          <div
            className="
              mb-6
              bg-red-500/10
              border
              border-red-500/20
              text-red-400
              p-4
              rounded-2xl
            "
          >
            {message}
          </div>

        )}

        {/* Form */}

        <form
          onSubmit={
            handleSubmit
          }
          className="
            flex
            flex-col
            gap-5
          "
        >

          {/* Name */}

          <div>

            <label
              className="
                block
                mb-2
                text-sm
                text-slate-300
              "
            >
              Full Name
            </label>

            <div
              className="
                relative
              "
            >

              <FaUser
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-500
                "
              />

              <input
                type="text"
                name="name"
                value={
                  formData.name
                }
                onChange={
                  handleChange
                }
                placeholder="John Doe"
                required
                className="
                  w-full
                  pl-12
                  p-4
                  rounded-2xl
                  bg-slate-800
                  border
                  border-slate-700
                  text-white
                  outline-none
                  focus:border-blue-500
                "
              />

            </div>

          </div>

          {/* Email */}

          <div>

            <label
              className="
                block
                mb-2
                text-sm
                text-slate-300
              "
            >
              Email
            </label>

            <div
              className="
                relative
              "
            >

              <FaEnvelope
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-500
                "
              />

              <input
                type="email"
                name="email"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
                placeholder="you@example.com"
                required
                className="
                  w-full
                  pl-12
                  p-4
                  rounded-2xl
                  bg-slate-800
                  border
                  border-slate-700
                  text-white
                  outline-none
                  focus:border-blue-500
                "
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label
              className="
                block
                mb-2
                text-sm
                text-slate-300
              "
            >
              Password
            </label>

            <div
              className="
                relative
              "
            >

              <FaLock
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-slate-500
                "
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                value={
                  formData.password
                }
                onChange={
                  handleChange
                }
                placeholder="Create password"
                required
                className="
                  w-full
                  pl-12
                  pr-12
                  p-4
                  rounded-2xl
                  bg-slate-800
                  border
                  border-slate-700
                  text-white
                  outline-none
                  focus:border-blue-500
                "
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
                "
              >
                {showPassword
                  ? <FaEyeSlash />
                  : <FaEye />}
              </button>

            </div>

            {formData.password && (

              <div
                className="
                  mt-3
                "
              >

                <div
                  className="
                    h-2
                    bg-slate-700
                    rounded-full
                    overflow-hidden
                  "
                >

                  <div
                    className={`
                      h-full
                      ${strength.color}
                    `}
                    style={{
                      width:
                        strength.width,
                    }}
                  />

                </div>

                <p
                  className="
                    text-xs
                    mt-2
                    text-slate-400
                  "
                >
                  Password Strength:
                  {" "}
                  {strength.label}
                </p>

              </div>

            )}

          </div>

          {/* Submit */}

          <button
            type="submit"
            disabled={
              isLoading
            }
            className="
              bg-blue-500
              hover:bg-blue-600
              disabled:opacity-70
              text-white
              py-4
              rounded-2xl
              font-semibold
              transition
              flex
              items-center
              justify-center
              gap-3
            "
          >

            {isLoading && (

              <FaSpinner
                className="
                  animate-spin
                "
              />

            )}

            {isLoading
              ? "Creating Account..."
              : "Create Account"}

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
            Already have
            an account?{" "}

            <Link
              to="/login"
              className="
                text-blue-500
                hover:text-blue-400
                font-semibold
              "
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;