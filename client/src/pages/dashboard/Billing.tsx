// Import icons
import {
  FaCrown,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

// Billing page component
const Billing = () => {

  // Demo data
  const currentPlan = "Free";

  return (

    <div>

      {/* Header */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold mb-2">
          Billing & Plans
        </h1>

        <p className="text-slate-400 text-lg">
          Manage your subscription and track
          your AI Career Assistant usage.
        </p>

      </div>

      {/* Current Plan */}

      <div
        className="
          bg-slate-900
          border border-slate-800
          rounded-3xl
          p-6
          mb-8
        "
      >

        <div
          className="
            flex
            items-center
            justify-between
            flex-wrap
            gap-4
          "
        >

          <div>

            <p className="text-slate-400 mb-2">
              Current Plan
            </p>

            <h2
              className="
                text-3xl
                font-bold
              "
            >
              {currentPlan}
            </h2>

          </div>

          <div
            className="
              bg-blue-500/20
              text-blue-400
              px-4
              py-2
              rounded-xl
              font-medium
            "
          >
            Active Plan
          </div>

        </div>

      </div>

      {/* Usage Statistics */}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
          mb-10
        "
      >

        <div
          className="
            bg-slate-900
            border border-slate-800
            rounded-3xl
            p-6
          "
        >

          <h3 className="text-xl font-bold mb-3">
            Resume Analyses
          </h3>

          <p className="text-4xl font-bold">
            2 / 5
          </p>

          <p className="text-slate-400 mt-2">
            Free Plan Limit
          </p>

        </div>

        <div
          className="
            bg-slate-900
            border border-slate-800
            rounded-3xl
            p-6
          "
        >

          <h3 className="text-xl font-bold mb-3">
            Cover Letters
          </h3>

          <p className="text-4xl font-bold">
            1 / 5
          </p>

          <p className="text-slate-400 mt-2">
            Free Plan Limit
          </p>

        </div>

        <div
          className="
            bg-slate-900
            border border-slate-800
            rounded-3xl
            p-6
          "
        >

          <h3 className="text-xl font-bold mb-3">
            Interview Sessions
          </h3>

          <p className="text-4xl font-bold">
            3 / 5
          </p>

          <p className="text-slate-400 mt-2">
            Free Plan Limit
          </p>

        </div>

      </div>

      {/* Pricing Plans */}

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-6
        "
      >

        {/* Free Plan */}

        <div
          className="
            bg-slate-900
            border border-slate-800
            rounded-3xl
            p-8
          "
        >

          <h2 className="text-2xl font-bold mb-2">
            Free
          </h2>

          <p className="text-slate-400 mb-6">
            Perfect for getting started.
          </p>

          <h3 className="text-5xl font-bold mb-6">
            R0
          </h3>

          <ul className="space-y-4 mb-8">

            <li className="flex items-center gap-3">
              <FaCheckCircle />
              5 Resume Analyses
            </li>

            <li className="flex items-center gap-3">
              <FaCheckCircle />
              5 Cover Letters
            </li>

            <li className="flex items-center gap-3">
              <FaCheckCircle />
              5 Interview Sessions
            </li>

          </ul>

          <button
            className="
              w-full
              bg-slate-800
              py-3
              rounded-xl
              cursor-default
            "
          >
            Current Plan
          </button>

        </div>

        {/* Pro Plan */}

        <div
          className="
            bg-slate-900
            border-2 border-blue-500
            rounded-3xl
            p-8
            relative
          "
        >

          <div
            className="
              absolute
              -top-4
              left-1/2
              -translate-x-1/2
              bg-blue-500
              px-4
              py-1
              rounded-full
              text-sm
              font-semibold
            "
          >
            MOST POPULAR
          </div>

          <FaRocket
            className="
              text-blue-500
              text-3xl
              mb-4
            "
          />

          <h2 className="text-2xl font-bold mb-2">
            Pro
          </h2>

          <p className="text-slate-400 mb-6">
            For active job seekers.
          </p>

          <h3 className="text-5xl font-bold mb-6">
            R99
            <span className="text-lg">
              /month
            </span>
          </h3>

          <ul className="space-y-4 mb-8">

            <li className="flex items-center gap-3">
              <FaCheckCircle />
              Unlimited Resume Analysis
            </li>

            <li className="flex items-center gap-3">
              <FaCheckCircle />
              Unlimited Cover Letters
            </li>

            <li className="flex items-center gap-3">
              <FaCheckCircle />
              Unlimited Interview Prep
            </li>

          </ul>

          <button
            className="
              w-full
              bg-blue-500
              hover:bg-blue-600
              py-3
              rounded-xl
              transition duration-300
            "
          >
            Upgrade to Pro
          </button>

        </div>

        {/* Premium Plan */}

        <div
          className="
            bg-slate-900
            border border-slate-800
            rounded-3xl
            p-8
          "
        >

          <FaCrown
            className="
              text-yellow-500
              text-3xl
              mb-4
            "
          />

          <h2 className="text-2xl font-bold mb-2">
            Premium
          </h2>

          <p className="text-slate-400 mb-6">
            Everything included.
          </p>

          <h3 className="text-5xl font-bold mb-6">
            R199
            <span className="text-lg">
              /month
            </span>
          </h3>

          <ul className="space-y-4 mb-8">

            <li className="flex items-center gap-3">
              <FaCheckCircle />
              Everything in Pro
            </li>

            <li className="flex items-center gap-3">
              <FaCheckCircle />
              Priority AI Processing
            </li>

            <li className="flex items-center gap-3">
              <FaCheckCircle />
              Future Premium Features
            </li>

          </ul>

          <button
            className="
              w-full
              bg-yellow-500
              hover:bg-yellow-600
              py-3
              rounded-xl
              transition duration-300
              text-black
              font-semibold
            "
          >
            Upgrade to Premium
          </button>

        </div>

      </div>

    </div>
  );
};

export default Billing;