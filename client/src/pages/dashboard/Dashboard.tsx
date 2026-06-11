// Import React hooks
import {
  useEffect,
  useState,
} from "react";

// Import dashboard components
import StatCard from "../../components/dashboard/StatCard";
import AnalyticsChart from "../../components/dashboard/AnalyticsChart";

// Import job service
import { getJobs } from "../../services/jobService";

// Import PageHeader
import PageHeader from "../../components/common/PageHeader";

// Import icons
import {
  FaBriefcase,
  FaFileAlt,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

// Job Type

type Job = {
  _id: string;
  company: string;
  position: string;
  status: string;
  notes?: string;
};

// Dashboard Page

const Dashboard = () => {

  // State

  const [jobs, setJobs] =
    useState<Job[]>([]);

  // Fetch Jobs

  useEffect(() => {

    const fetchJobs = async () => {

      try {

        const data =
          await getJobs();

        setJobs(data);

      } catch (error) {

        console.log(error);
      }
    };

    fetchJobs();

  }, []);

  // Statistics

  const applications =
    jobs.length;

  const interviews =
    jobs.filter(
      (job) =>
        job.status === "Interview"
    ).length;

  const rejections =
    jobs.filter(
      (job) =>
        job.status === "Rejected"
    ).length;

  const offers =
    jobs.filter(
      (job) =>
        job.status === "Offer"
    ).length;

  return (

    <div
      className="
        min-h-screen
        bg-slate-950
        text-white
      "
    >

      {/* Dashboard Header */}

      <PageHeader
        title="Dashboard"
        subtitle="Track your job applications and AI career progress."
      />

      {/* Welcome Card */}

      <div
        className="
          bg-slate-900
          border border-slate-800
          rounded-3xl
          p-6
          mb-8
        "
      >

        <h2
          className="
            text-2xl
            font-bold
            mb-2
          "
        >
          Welcome Back
        </h2>

        <p className="text-slate-400">
          You have submitted
          {" "}
          <span className="text-white font-bold">
            {applications}
          </span>
          {" "}
          job applications so far.
        </p>

      </div>

      {/* Statistics Cards */}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
          mb-10
        "
      >

        {/* Applications */}

        <StatCard
          title="Applications"
          value={applications.toString()}
          icon={FaBriefcase}
        />

        {/* Offers */}

        <StatCard
          title="Offers"
          value={offers.toString()}
          icon={FaFileAlt}
        />

        {/* Interviews */}

        <StatCard
          title="Interviews"
          value={interviews.toString()}
          icon={FaCheckCircle}
        />

        {/* Rejections */}

        <StatCard
          title="Rejections"
          value={rejections.toString()}
          icon={FaTimesCircle}
        />

      </div>

      {/* Analytics Section */}

      <AnalyticsChart jobs={jobs} />

      {/* Recent Applications */}

      <div
        className="
          bg-slate-900
          border border-slate-800
          rounded-3xl
          p-6
          mt-8
        "
      >

        <h2
          className="
            text-2xl
            font-bold
            mb-6
          "
        >
          Recent Applications
        </h2>

        {jobs.length === 0 ? (

          <p className="text-slate-400">
            No job applications yet.
          </p>

        ) : (

          <div className="space-y-4">

            {jobs
              .slice(0, 5)
              .map((job) => (

              <div
                key={job._id}
                className="
                  border-b
                  border-slate-800
                  pb-4
                "
              >

                <h3
                  className="
                    text-lg
                    font-semibold
                  "
                >
                  {job.position}
                </h3>

                <p className="text-slate-400">
                  {job.company}
                </p>

                <span
                  className="
                    text-sm
                    text-blue-400
                  "
                >
                  {job.status}
                </span>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default Dashboard;