// Import React hooks
import {
  useEffect,
  useState,
} from "react";

// Import Axios
import axios from "axios";

// Import icons
import {
  FaRobot,
  FaSpinner,
  FaBriefcase,
  FaCopy,
  FaTrash,
} from "react-icons/fa";

// Import PageHeader
import PageHeader from "../../components/common/PageHeader";

// Types

type Difficulty =
  | "Junior"
  | "Mid-Level"
  | "Senior";

type Category =
  | "Technical"
  | "Behavioral"
  | "System Design"
  | "HR";

// Component

const InterviewQuestions = () => {

  // State

  const [role, setRole] =
    useState("");

  const [difficulty, setDifficulty] =
    useState<Difficulty>(
      "Junior"
    );

  const [category, setCategory] =
    useState<Category>(
      "Technical"
    );

  const [questions, setQuestions] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [sessions, setSessions] =
    useState(0);

  const [questionCount, setQuestionCount] =
    useState(0);

  // Load Saved Stats

  useEffect(() => {

    const savedSessions =
      localStorage.getItem(
        "interviewSessions"
      );

    const savedQuestionCount =
      localStorage.getItem(
        "questionCount"
      );

    if (savedSessions) {
      setSessions(
        Number(savedSessions)
      );
    }

    if (savedQuestionCount) {
      setQuestionCount(
        Number(savedQuestionCount)
      );
    }

  }, []);

  // Save Stats

  useEffect(() => {

    localStorage.setItem(
      "interviewSessions",
      sessions.toString()
    );

    localStorage.setItem(
      "questionCount",
      questionCount.toString()
    );

  }, [
    sessions,
    questionCount,
  ]);

  // Quick Roles

  const quickRoles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "React Developer",
    "Software Engineer",
  ];

  // Generate Questions

  const handleGenerate =
    async () => {

      try {

        if (!role.trim()) {
          return;
        }

        setLoading(true);

        const token =
          JSON.parse(
            localStorage.getItem("user") || "{}"
          ).token;

        const response =
          await axios.post(
            `${import.meta.env.VITE_API_URL}/api/ai/generate-interview-questions`,
            {
              role,
              difficulty,
              category,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

        const generatedQuestions =
          response.data.questions;

        setQuestions(
          generatedQuestions
        );

        setSessions(
          (prev) => prev + 1
        );

        const totalQuestions =
          generatedQuestions
            .split("\n")
            .filter(
              (line: string) =>
                line.trim() !== ""
            ).length;

        setQuestionCount(
          (prev) =>
            prev + totalQuestions
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  // Copy Questions

  const handleCopy = () => {

    navigator.clipboard.writeText(
      questions
    );
  };

  // Clear Results

  const handleClear = () => {

    setQuestions("");
  };

  return (

    <div
      className="
        min-h-screen
        bg-slate-950
        text-white
      "
    >

      {/* Header */}

      <PageHeader
        title="AI Interview Questions"
        subtitle="Practice AI-generated interview questions tailored to your role."
      />

      {/* Stats */}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-4
          mb-8
        "
      >

        <div
          className="
            bg-slate-900
            border border-slate-800
            p-6
            rounded-3xl
          "
        >

          <p className="text-slate-400">
            Sessions
          </p>

          <h3 className="text-3xl font-bold">
            {sessions}
          </h3>

        </div>

        <div
          className="
            bg-slate-900
            border border-slate-800
            p-6
            rounded-3xl
          "
        >

          <p className="text-slate-400">
            Questions Generated
          </p>

          <h3 className="text-3xl font-bold">
            {questionCount}
          </h3>

        </div>

      </div>

      {/* Form */}

      <div
        className="
          bg-slate-900
          border border-slate-800
          p-8
          rounded-3xl
          mb-8
        "
      >

        {/* Role */}

        <div className="mb-6">

          <label
            className="
              block
              mb-2
              text-slate-300
            "
          >
            Job Role
          </label>

          <div className="relative">

            <FaBriefcase
              className="
                absolute
                top-1/2
                left-4
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="text"
              value={role}
              onChange={(e) =>
                setRole(
                  e.target.value
                )
              }
              placeholder="Frontend Developer"
              className="
                w-full
                bg-slate-800
                border border-slate-700
                rounded-2xl
                p-4
                pl-12
                outline-none
              "
            />

          </div>

        </div>

        {/* Quick Roles */}

        <div
          className="
            flex
            flex-wrap
            gap-2
            mb-6
          "
        >

          {quickRoles.map(
            (item) => (

              <button
                key={item}
                type="button"
                onClick={() =>
                  setRole(item)
                }
                className="
                  bg-slate-800
                  hover:bg-slate-700
                  px-4
                  py-2
                  rounded-xl
                  text-sm
                "
              >
                {item}
              </button>

            )
          )}

        </div>

        {/* Selects */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
            mb-6
          "
        >

          <select
            aria-label="Difficulty Level"
            value={difficulty}
            onChange={(e) =>
              setDifficulty(
                e.target
                  .value as Difficulty
              )
            }
            className="
              bg-slate-800
              border border-slate-700
              p-4
              rounded-2xl
            "
          >

            <option value="Junior">
              Junior
            </option>

            <option value="Mid-Level">
              Mid-Level
            </option>

            <option value="Senior">
              Senior
            </option>

          </select>

          <select
            aria-label="Question Category"
            value={category}
            onChange={(e) =>
              setCategory(
                e.target
                  .value as Category
              )
            }
            className="
              bg-slate-800
              border border-slate-700
              p-4
              rounded-2xl
            "
          >

            <option value="Technical">
              Technical
            </option>

            <option value="Behavioral">
              Behavioral
            </option>

            <option value="System Design">
              System Design
            </option>

            <option value="HR">
              HR
            </option>

          </select>

        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="
            bg-blue-500
            hover:bg-blue-600
            px-8
            py-4
            rounded-2xl
            flex
            items-center
            gap-3
            transition
          "
        >

          {loading && (
            <FaSpinner
              className="animate-spin"
            />
          )}

          {loading
            ? "Generating..."
            : "Generate Questions"}

        </button>

      </div>

      {/* Results */}

      {questions ? (

        <div
          className="
            bg-slate-900
            border border-slate-800
            p-8
            rounded-3xl
          "
        >

          <div
            className="
              flex
              justify-between
              items-center
              mb-6
              flex-wrap
              gap-3
            "
          >

            <h2
              className="
                text-3xl
                font-bold
              "
            >
              Interview Questions
            </h2>

            <div className="flex gap-2">

              <button
                onClick={handleCopy}
                className="
                  bg-green-500
                  hover:bg-green-600
                  px-4
                  py-2
                  rounded-xl
                  flex
                  items-center
                  gap-2
                "
              >
                <FaCopy />
                Copy
              </button>

              <button
                onClick={handleClear}
                className="
                  bg-red-500
                  hover:bg-red-600
                  px-4
                  py-2
                  rounded-xl
                  flex
                  items-center
                  gap-2
                "
              >
                <FaTrash />
                Clear
              </button>

            </div>

          </div>

          <div
            className="
              text-slate-300
              leading-8
              whitespace-pre-wrap
            "
          >
            {questions}
          </div>

        </div>

      ) : (

        <div
          className="
            bg-slate-900
            border border-slate-800
            p-10
            rounded-3xl
            text-center
          "
        >

          <FaRobot
            className="
              text-5xl
              mx-auto
              mb-4
              text-slate-500
            "
          />

          <h3
            className="
              text-2xl
              font-bold
              mb-2
            "
          >
            No Questions Generated Yet
          </h3>

          <p className="text-slate-400">
            Enter a role and generate
            interview questions to
            begin practicing.
          </p>

        </div>

      )}

    </div>
  );
};

export default InterviewQuestions;