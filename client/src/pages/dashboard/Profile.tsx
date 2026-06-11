// Import icons
import {
  FaUser,
  FaEnvelope,
  FaCrown,
  FaCalendarAlt,
  FaEdit,
} from "react-icons/fa";

// Profile page component
const Profile = () => {

  // Demo user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    plan: "Free",
    joined: "May 2025",
  };

  return (

    <div>

      {/* Header */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold mb-2">
          Profile
        </h1>

        <p className="text-slate-400 text-lg">
          Manage your account and subscription.
        </p>

      </div>

      {/* Profile Card */}

      <div
        className="
          bg-slate-900
          border
          border-slate-800
          rounded-3xl
          p-8
          mb-8
        "
      >

        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-6
          "
        >

          <div
            className="
              flex
              items-center
              gap-5
            "
          >

            {/* Avatar */}

            <div
              className="
                w-20
                h-20
                rounded-full
                bg-blue-500
                flex
                items-center
                justify-center
                text-3xl
              "
            >
              <FaUser />
            </div>

            {/* User Info */}

            <div>

              <h2
                className="
                  text-3xl
                  font-bold
                "
              >
                {user.name}
              </h2>

              <p className="text-slate-400">
                {user.email}
              </p>

            </div>

          </div>

          {/* Edit Button */}

          <button
            className="
              flex
              items-center
              gap-2
              bg-blue-500
              hover:bg-blue-600
              px-5
              py-3
              rounded-xl
              transition
              duration-300
            "
          >
            <FaEdit />
            Edit Profile
          </button>

        </div>

      </div>

      {/* Account Details */}

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-6
          mb-8
        "
      >

        {/* Email */}

        <div
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            p-6
          "
        >

          <div className="flex items-center gap-3 mb-4">
            <FaEnvelope className="text-blue-500" />
            <h3 className="text-xl font-bold">
              Email Address
            </h3>
          </div>

          <p className="text-slate-400">
            {user.email}
          </p>

        </div>

        {/* Plan */}

        <div
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            p-6
          "
        >

          <div className="flex items-center gap-3 mb-4">
            <FaCrown className="text-yellow-500" />
            <h3 className="text-xl font-bold">
              Subscription Plan
            </h3>
          </div>

          <p className="text-slate-400">
            {user.plan}
          </p>

        </div>

        {/* Joined */}

        <div
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-3xl
            p-6
          "
        >

          <div className="flex items-center gap-3 mb-4">
            <FaCalendarAlt className="text-green-500" />
            <h3 className="text-xl font-bold">
              Member Since
            </h3>
          </div>

          <p className="text-slate-400">
            {user.joined}
          </p>

        </div>

      </div>

      {/* Usage Statistics */}

      <div
        className="
          bg-slate-900
          border
          border-slate-800
          rounded-3xl
          p-8
        "
      >

        <h2
          className="
            text-2xl
            font-bold
            mb-6
          "
        >
          Usage Statistics
        </h2>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
          "
        >

          <div
            className="
              bg-slate-800
              p-6
              rounded-2xl
            "
          >

            <h3 className="text-lg font-bold mb-2">
              Resume Analyses
            </h3>

            <p className="text-4xl font-bold">
              2
            </p>

          </div>

          <div
            className="
              bg-slate-800
              p-6
              rounded-2xl
            "
          >

            <h3 className="text-lg font-bold mb-2">
              Cover Letters
            </h3>

            <p className="text-4xl font-bold">
              1
            </p>

          </div>

          <div
            className="
              bg-slate-800
              p-6
              rounded-2xl
            "
          >

            <h3 className="text-lg font-bold mb-2">
              Interview Sessions
            </h3>

            <p className="text-4xl font-bold">
              3
            </p>

          </div>

        </div>

      </div>

    </div>

  );
};

export default Profile;