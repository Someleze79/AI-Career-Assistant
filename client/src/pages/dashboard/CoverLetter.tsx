// Import React hooks
import { useState } from "react";

// Import Axios
import axios from "axios";

// Import PageHeader
import PageHeader from "../../components/common/PageHeader";

// Import Icons
import {
  FaFileAlt,
  FaCopy,
  FaCheck,
} from "react-icons/fa";

// Cover Letter page component
const CoverLetter = () => {

  // Form State

  const [formData, setFormData] =
    useState({
      jobTitle: "",
      company: "",
      skills: "",
      experience: "",
    });

  // Generated cover letter
  const [coverLetter, setCoverLetter] =
    useState("");

  // Loading state
  const [loading, setLoading] =
    useState(false);

  // Copy state
  const [copied, setCopied] =
    useState(false);

  // Handle Input Changes

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Generate Cover Letter

  const handleGenerate = async () => {

    try {

      if (
        !formData.jobTitle ||
        !formData.company
      ) {
        return;
      }

      setLoading(true);

      const token =
        JSON.parse(
          localStorage.getItem("user") || "{}"
        ).token;

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/ai/generate-cover-letter`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCoverLetter(
        response.data.coverLetter
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  // Copy Cover Letter

  const handleCopy = async () => {

    try {

      await navigator.clipboard.writeText(
        coverLetter
      );

      setCopied(true);

      setTimeout(() => {

        setCopied(false);

      }, 2000);

    } catch (error) {

      console.log(error);
    }
  };

  // Clear Form

  const handleClear = () => {

    setFormData({
      jobTitle: "",
      company: "",
      skills: "",
      experience: "",
    });

    setCoverLetter("");
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
        title="AI Cover Letter Generator"
        subtitle="Generate professional AI-powered cover letters instantly."
      />

      {/* Info Card */}

      <div
        className="
          bg-blue-500/10
          border border-blue-500/20
          p-6
          rounded-3xl
          mb-6
        "
      >

        <div className="flex items-center gap-3 mb-3">

          <FaFileAlt className="text-blue-400" />

          <h2 className="font-bold text-xl">
            Cover Letter Assistant
          </h2>

        </div>

        <p className="text-slate-400">
          Enter job details and your
          experience to generate a tailored,
          professional cover letter.
        </p>

      </div>

      {/* Form Section */}

      <div
        className="
          bg-slate-900
          border border-slate-800
          p-6
          rounded-3xl
          mb-6
        "
      >

        <h2 className="text-2xl font-bold mb-6">
          Enter Job Information
        </h2>

        {/* Input Grid */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-4
            mb-4
          "
        >

          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={formData.jobTitle}
            onChange={handleChange}
            className="
              bg-slate-800
              border border-slate-700
              p-4
              rounded-2xl
              outline-none
            "
          />

          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="
              bg-slate-800
              border border-slate-700
              p-4
              rounded-2xl
              outline-none
            "
          />

        </div>

        {/* Skills */}

        <textarea
          name="skills"
          placeholder="Skills"
          value={formData.skills}
          onChange={handleChange}
          rows={4}
          className="
            w-full
            bg-slate-800
            border border-slate-700
            p-4
            rounded-2xl
            outline-none
            mb-4
          "
        />

        {/* Experience */}

        <textarea
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
          rows={6}
          className="
            w-full
            bg-slate-800
            border border-slate-700
            p-4
            rounded-2xl
            outline-none
          "
        />

        {/* Character Counter */}

        <p className="text-sm text-slate-400 mt-2">
          {formData.experience.length}
          {" "}characters
        </p>

        {/* Buttons */}

        <div className="flex gap-3 mt-6">

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="
              bg-blue-500
              px-6
              py-3
              rounded-2xl
              hover:bg-blue-600
              transition
              text-white
              disabled:opacity-50
            "
          >
            {loading
              ? "Generating..."
              : "Generate Cover Letter"}
          </button>

          <button
            onClick={handleClear}
            className="
              bg-slate-700
              px-6
              py-3
              rounded-2xl
              hover:bg-slate-600
              transition
            "
          >
            Clear
          </button>

        </div>

      </div>

      {/* Generated Letter */}

      {coverLetter && (

        <div
          className="
            bg-slate-900
            border border-slate-800
            p-6
            rounded-3xl
            whitespace-pre-wrap
          "
        >

          <div
            className="
              flex
              justify-between
              items-center
              mb-6
            "
          >

            <h2 className="text-3xl font-bold">
              Generated Cover Letter
            </h2>

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
                transition
              "
            >

              {copied ? (
                <>
                  <FaCheck />
                  Copied
                </>
              ) : (
                <>
                  <FaCopy />
                  Copy
                </>
              )}

            </button>

          </div>

          <p
            className="
              text-slate-300
              leading-8
            "
          >
            {coverLetter}
          </p>

        </div>

      )}

    </div>
  );
};

export default CoverLetter;