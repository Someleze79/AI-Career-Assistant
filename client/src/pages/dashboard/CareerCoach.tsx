// Import React hooks
import { useState } from "react";

// Import Axios
import axios from "axios";

// Import icon
import { FaRobot, FaPaperPlane } from "react-icons/fa";

// API URL
const API_URL =
  `${import.meta.env.VITE_API_URL}/api/ai`;

// Career Coach Page

const CareerCoach = () => {

  const [message, setMessage] =
    useState("");

  const [reply, setReply] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  // Send Message

  const handleSend = async () => {

    if (!message.trim()) return;

    try {

      setLoading(true);

      const token =
        localStorage.getItem("token");

      const response =
        await axios.post(
          `${API_URL}/career-coach`,
          {
            message,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

      setReply(
        response.data.reply
      );

    } catch (error) {

      console.error(error);

      setReply(
        "Unable to generate career advice right now."
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen text-white">

      {/* Header */}

      <div className="mb-10">

        <div
          className="
            flex
            items-center
            gap-4
            mb-4
          "
        >

          <div
            className="
              bg-blue-500
              p-4
              rounded-2xl
              text-2xl
            "
          >
            <FaRobot />
          </div>

          <div>

            <h1
              className="
                text-5xl
                font-bold
                mb-2
              "
            >
              AI Career Coach
            </h1>

            <p
              className="
                text-slate-400
                text-lg
              "
            >
              Get personalized career advice powered by AI.
            </p>

          </div>

        </div>

      </div>

      {/* Question Card */}

      <div
        className="
          bg-slate-900
          border border-slate-800
          rounded-3xl
          p-6
          mb-6
        "
      >

        <h2
          className="
            text-2xl
            font-bold
            mb-4
          "
        >
          Ask a Career Question
        </h2>

        <textarea
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          rows={6}
          placeholder="How can I improve my developer portfolio?"
          className="
            w-full
            bg-slate-800
            border border-slate-700
            rounded-2xl
            p-4
            outline-none
            resize-none
            focus:border-blue-500
          "
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="
            mt-4
            flex
            items-center
            gap-2
            bg-blue-500
            hover:bg-blue-600
            px-6
            py-3
            rounded-xl
            font-semibold
            transition
            disabled:opacity-50
          "
        >
          <FaPaperPlane />

          {loading
            ? "Thinking..."
            : "Ask Career Coach"}
        </button>

      </div>

      {/* AI Response */}

      {reply && (

        <div
          className="
            bg-slate-900
            border border-slate-800
            rounded-3xl
            p-6
          "
        >

          <h2
            className="
              text-2xl
              font-bold
              mb-4
            "
          >
            AI Advice
          </h2>

          <div
            className="
              whitespace-pre-wrap
              leading-8
              text-slate-300
            "
          >
            {reply}
          </div>

        </div>

      )}

    </div>
  );
};

export default CareerCoach;