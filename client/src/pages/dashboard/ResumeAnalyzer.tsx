// Import React hooks
import { useState } from "react";

// Import Axios
import axios from "axios";

// Import ResumeDropzone
import ResumeDropzone from "../../components/dashboard/ResumeDropzone";

// Import PageHeader
import PageHeader from "../../components/common/PageHeader";

// Resume Analyzer page component
const ResumeAnalyzer = () => {
  // State

  const [resumeText, setResumeText] =
    useState("");

  const [analysis, setAnalysis] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [file, setFile] =
    useState<File | null>(null);

  const [error, setError] =
    useState("");

  const [copied, setCopied] =
    useState(false);

  const [activeTab, setActiveTab] =
    useState("analysis");

  // Demo ATS score until backend supports it
  const [score] = useState(78);

  const [strengths] = useState([
    "Good resume structure",
    "Relevant technical skills",
    "Strong project experience",
  ]);

  const [weaknesses] = useState([
    "Could include more measurable achievements",
    "Missing some ATS keywords",
    "Could highlight collaboration experience",
  ]);

  const [recommendations] =
    useState([
      "Add quantified project outcomes",
      "Include deployment experience",
      "Mention testing frameworks",
      "Highlight leadership or teamwork",
    ]);

  // Analyze Resume Text

  const handleAnalyze = async () => {
    try {
      setLoading(true);
      setError("");

  const response = 
    await axios.post(
      `${import.meta.env.VITE_API_URL}/api/ai/analyze-resume`,
          {
            resumeText,
          }
        );

      setAnalysis(
        response.data.analysis
      );
    } catch (error) {
      console.log(error);

      setError(
        "Failed to analyze resume."
      );
    } finally {
      setLoading(false);
    }
  };

  // Analyze PDF Resume

  const handlePDFAnalyze =
    async () => {
      try {
        setLoading(true);
        setError("");

        const formData =
          new FormData();

        if (file) {
          formData.append(
            "resume",
            file
          );
        }

        const response =
          await axios.post(
            `${import.meta.env.VITE_API_URL}/api/ai/analyze-resume-pdf`,
            formData,
            {
              headers: {
                "Content-Type":
                  "multipart/form-data",
              },
            }
          );

        setAnalysis(
          response.data.analysis
        );
      } catch (error) {
        console.log(error);

        setError(
          "Failed to analyze PDF."
        );
      } finally {
        setLoading(false);
      }
    };

  // Copy Analysis

  const handleCopy = () => {
    navigator.clipboard.writeText(
      analysis
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  // Clear Results

  const handleClear = () => {
    setAnalysis("");
    setResumeText("");
    setFile(null);
    setError("");
    setActiveTab("analysis");
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
        title="AI Resume Analyzer"
        subtitle="Upload or paste your resume and receive AI-powered ATS feedback and improvement suggestions."
      />

      {/* Error Message */}

      {error && (
        <div
          className="
            bg-red-500/20
            border
            border-red-500
            text-red-300
            p-4
            rounded-2xl
            mb-6
          "
        >
          {error}
        </div>
      )}

      {/* Upload Resume PDF */}

      <div
        className="
          bg-slate-900
          border
          border-slate-800
          p-6
          rounded-3xl
          mb-6
        "
      >
        <h2 className="text-2xl font-bold mb-4">
          Upload Resume PDF
        </h2>

        <ResumeDropzone
          setFile={setFile}
        />

        {file && (
          <p className="mt-4 text-slate-400">
            Selected File:
            {" "}
            <span className="font-semibold">
              {file.name}
            </span>
          </p>
        )}

        <button
          onClick={
            handlePDFAnalyze
          }
          disabled={loading}
          className="
            mt-6
            bg-purple-500
            px-6
            py-3
            rounded-2xl
            hover:bg-purple-600
            transition
            duration-300
            disabled:opacity-50
          "
        >
          {loading
            ? "Analyzing..."
            : "Analyze PDF Resume"}
        </button>
      </div>

      {/* Paste Resume Text */}

      <div
        className="
          bg-slate-900
          border
          border-slate-800
          p-6
          rounded-3xl
          mb-6
        "
      >
        <h2 className="text-2xl font-bold mb-4">
          Paste Resume Text
        </h2>

        <textarea
          placeholder="Paste your resume here..."
          value={resumeText}
          onChange={(e) =>
            setResumeText(
              e.target.value
            )
          }
          rows={12}
          className="
            w-full
            bg-slate-800
            border
            border-slate-700
            p-4
            rounded-2xl
            outline-none
          "
        />

        <p className="text-slate-400 mt-2">
          {
            resumeText.length
          }{" "}
          characters
        </p>

        <button
          onClick={
            handleAnalyze
          }
          disabled={loading}
          className="
            mt-6
            bg-blue-500
            px-6
            py-3
            rounded-2xl
            hover:bg-blue-600
            transition
            duration-300
            disabled:opacity-50
          "
        >
          {loading
            ? "Analyzing..."
            : "Analyze Resume"}
        </button>
      </div>

      {/* ATS Score */}

      {analysis && (
        <div
          className="
            bg-slate-900
            border
            border-slate-800
            p-6
            rounded-3xl
            mb-6
          "
        >
          <h2 className="text-2xl font-bold mb-4">
            ATS Score
          </h2>

          <p
            className="
              text-5xl
              font-bold
              text-green-500
              mb-4
            "
          >
            {score}%
          </p>

          <div
            className="
              w-full
              bg-slate-800
              h-4
              rounded-full
            "
          >
            <div
              className="
                bg-green-500
                h-4
                rounded-full
              "
              style={{
                width: `${score}%`,
              }}
            />
          </div>
        </div>
      )}

      {/* Navigation Tabs */}

      {analysis && (
        <div
          className="
            flex
            flex-wrap
            gap-3
            mb-6
          "
        >
          <button
            onClick={() =>
              setActiveTab(
                "analysis"
              )
            }
            className={`
              px-4 py-2
              rounded-xl
              ${
                activeTab ===
                "analysis"
                  ? "bg-blue-500"
                  : "bg-slate-800"
              }
            `}
          >
            Analysis
          </button>

          <button
            onClick={() =>
              setActiveTab(
                "strengths"
              )
            }
            className={`
              px-4 py-2
              rounded-xl
              ${
                activeTab ===
                "strengths"
                  ? "bg-green-500"
                  : "bg-slate-800"
              }
            `}
          >
            Strengths
          </button>

          <button
            onClick={() =>
              setActiveTab(
                "weaknesses"
              )
            }
            className={`
              px-4 py-2
              rounded-xl
              ${
                activeTab ===
                "weaknesses"
                  ? "bg-yellow-500"
                  : "bg-slate-800"
              }
            `}
          >
            Weaknesses
          </button>

          <button
            onClick={() =>
              setActiveTab(
                "recommendations"
              )
            }
            className={`
              px-4 py-2
              rounded-xl
              ${
                activeTab ===
                "recommendations"
                  ? "bg-purple-500"
                  : "bg-slate-800"
              }
            `}
          >
            Recommendations
          </button>
        </div>
      )}

      {/* Analysis Tab */}

      {analysis &&
        activeTab ===
          "analysis" && (
          <div
            className="
              bg-slate-900
              border
              border-slate-800
              p-6
              rounded-3xl
            "
          >
            <div
              className="
                flex
                gap-3
                mb-4
              "
            >
              <button
                onClick={
                  handleCopy
                }
                className="
                  bg-blue-500
                  px-4 py-2
                  rounded-xl
                "
              >
                {copied
                  ? "Copied!"
                  : "Copy"}
              </button>

              <button
                onClick={
                  handleClear
                }
                className="
                  bg-red-500
                  px-4 py-2
                  rounded-xl
                "
              >
                Clear
              </button>
            </div>

            <h2 className="text-3xl font-bold mb-4">
              AI Analysis
            </h2>

            <p
              className="
                text-slate-300
                leading-8
                whitespace-pre-wrap
              "
            >
              {analysis}
            </p>
          </div>
        )}

      {/* Strengths Tab */}

      {analysis &&
        activeTab ===
          "strengths" && (
          <div
            className="
              bg-slate-900
              border
              border-slate-800
              p-6
              rounded-3xl
            "
          >
            <h2 className="text-3xl font-bold mb-6">
              Strengths
            </h2>

            <ul className="space-y-4">
              {strengths.map(
                (
                  item,
                  index
                ) => (
                  <li
                    key={index}
                    className="
                      bg-slate-800
                      p-4
                      rounded-2xl
                    "
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        )}

      {/* Weaknesses Tab */}

      {analysis &&
        activeTab ===
          "weaknesses" && (
          <div
            className="
              bg-slate-900
              border
              border-slate-800
              p-6
              rounded-3xl
            "
          >
            <h2 className="text-3xl font-bold mb-6">
              Weaknesses
            </h2>

            <ul className="space-y-4">
              {weaknesses.map(
                (
                  item,
                  index
                ) => (
                  <li
                    key={index}
                    className="
                      bg-slate-800
                      p-4
                      rounded-2xl
                    "
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        )}

      {/* Recommendations Tab */}

      {analysis &&
        activeTab ===
          "recommendations" && (
          <div
            className="
              bg-slate-900
              border
              border-slate-800
              p-6
              rounded-3xl
            "
          >
            <h2 className="text-3xl font-bold mb-6">
              Recommendations
            </h2>

            <ul className="space-y-4">
              {recommendations.map(
                (
                  item,
                  index
                ) => (
                  <li
                    key={index}
                    className="
                      bg-slate-800
                      p-4
                      rounded-2xl
                    "
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
    </div>
  );
};

export default ResumeAnalyzer;