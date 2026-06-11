// Import React hooks
import {
  useEffect,
  useState,
} from "react";

// Import Axios services
import {
  getJobs,
  createJob,
  deleteJob,
  updateJob,
} from "../../services/jobService";

// Import PageHeader
import PageHeader from "../../components/common/PageHeader";

// Job Type

type Job = {
  _id: string;
  company: string;
  position: string;
  status: string;
  notes?: string;
};

// Job Tracker page component
const JobTracker = () => {

  // State

  const [jobs, setJobs] =
    useState<Job[]>([]);

  const [editingId, setEditingId] =
    useState<string | null>(null);

  const [formData, setFormData] =
    useState({
      company: "",
      position: "",
      status: "Applied",
      notes: "",
    });

  // Fetch Jobs

  const fetchJobs = async () => {

    try {

      const data =
        await getJobs();

      setJobs(data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchJobs();

  }, []);

  // Handle Input Changes

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // Create / Update Job

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      if (editingId) {

        await updateJob(
          editingId,
          formData
        );

        setEditingId(null);

      } else {

        await createJob(
          formData
        );
      }

      await fetchJobs();

      setFormData({
        company: "",
        position: "",
        status: "Applied",
        notes: "",
      });

      setEditingId(null);

    } catch (error) {

      console.log(error);
    }
  };

  // Edit Job

  const handleEdit = (
    job: Job
  ) => {

    setEditingId(job._id);

    setFormData({
      company: job.company,
      position: job.position,
      status: job.status,
      notes: job.notes || "",
    });
  };

  // Delete Job

  const handleDelete = async (
    id: string
  ) => {

    try {

      const confirmed =
        window.confirm(
          "Delete this application?"
        );

      if (!confirmed) return;

      await deleteJob(id);

      await fetchJobs();

    } catch (error) {

      console.log(error);
    }
  };

  // Status Badge Colors

  const getStatusColor = (
    status: string
  ) => {

    switch (status) {

      case "Interview":
        return "bg-yellow-500";

      case "Rejected":
        return "bg-red-500";

      case "Offer":
        return "bg-green-500";

      default:
        return "bg-blue-500";
    }
  };

  // Statistics

  const totalApplications =
    jobs.length;

  const totalInterviews =
    jobs.filter(
      (job) =>
        job.status === "Interview"
    ).length;

  const totalOffers =
    jobs.filter(
      (job) =>
        job.status === "Offer"
    ).length;

  const totalRejected =
    jobs.filter(
      (job) =>
        job.status === "Rejected"
    ).length;

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      {/* Page Header */}

      <PageHeader
        title="Job Tracker"
        subtitle="Manage and monitor all your job applications in one place."
      />

      {/* Statistics Cards */}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
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
        <h3 className="text-slate-400 mb-2">
          Applications
        </h3>

        <p className="text-3xl font-bold">
          {totalApplications}
        </p>
      </div>

      <div
        className="
          bg-slate-900
          border border-slate-800
          p-6
          rounded-3xl
        "
      >
        <h3 className="text-slate-400 mb-2">
          Interviews
        </h3>

        <p className="text-3xl font-bold text-yellow-500">
          {totalInterviews}
        </p>
      </div>

      <div
        className="
          bg-slate-900
          border border-slate-800
          p-6
          rounded-3xl
        "
      >
        <h3 className="text-slate-400 mb-2">
          Offers
        </h3>

        <p className="text-3xl font-bold text-green-500">
          {totalOffers}
        </p>
      </div>

      <div
        className="
          bg-slate-900
          border border-slate-800
          p-6
          rounded-3xl
        "
      >
        <h3 className="text-slate-400 mb-2">
          Rejected
        </h3>

        <p className="text-3xl font-bold text-red-500">
          {totalRejected}
        </p>
      </div>

      </div>

      {/* Add/Edit Job Form */}

      <div
        className="
          bg-slate-900
          border border-slate-800
          p-6
          rounded-3xl
          mb-8
        "
      >

        <h2 className="text-2xl font-bold mb-6">

          {editingId
            ? "Edit Job Application"
            : "Add Job Application"}

        </h2>

        <form
          onSubmit={handleSubmit}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-4
          "
        >

          {/* Company */}

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
            required
          />

          {/* Position */}

          <input
            type="text"
            name="position"
            placeholder="Position"
            value={formData.position}
            onChange={handleChange}
            className="
              bg-slate-800
              border border-slate-700
              p-4
              rounded-2xl
              outline-none
            "
            required
          />

          {/* Status */}

          <div>

            <label
              htmlFor="status"
              className="
                block
                mb-2
                text-sm
                text-slate-400
              "
            >
              Application Status
            </label>

            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="
                w-full
                bg-slate-800
                border border-slate-700
                p-4
                rounded-2xl
                outline-none
              "
            >

              <option value="Applied">
                Applied
              </option>

              <option value="Interview">
                Interview
              </option>

              <option value="Rejected">
                Rejected
              </option>

              <option value="Offer">
                Offer
              </option>

            </select>

          </div>

          {/* Notes */}

          <textarea
            name="notes"
            placeholder="Notes"
            value={formData.notes}
            onChange={handleChange}
            className="
              bg-slate-800
              border border-slate-700
              p-4
              rounded-2xl
              outline-none
              md:col-span-2
            "
            rows={4}
          />

          {/* Submit */}

          <button
            type="submit"
            className="
              bg-blue-500
              py-3
              rounded-2xl
              hover:bg-blue-600
              transition duration-300
              md:col-span-2
            "
          >

            {editingId
              ? "Update Job"
              : "Add Job"}

          </button>

        {editingId && (

          <button
            type="button"
            onClick={() => {

              setEditingId(null);

              setFormData({
                company: "",
                position: "",
                status: "Applied",
                notes: "",
              });

            }}
            className="
              bg-slate-700
              py-3
              rounded-2xl
              hover:bg-slate-600
              transition duration-300
              md:col-span-2
            "
          >
            Cancel Edit
          </button>

        )}

        </form>

      </div>

      {/* Jobs List */}

      <div className="grid gap-6">

        {jobs.length === 0 && (

          <div
            className="
              bg-slate-900
              border border-slate-800
              p-10
              rounded-3xl
              text-center
            "
          >
            <h3 className="text-2xl font-bold mb-2">
              No Applications Yet
            </h3>

            <p className="text-slate-400">
              Add your first job application above.
            </p>
          </div>

        )}

        {jobs.map((job) => (

          <div
            key={job._id}
            className="
              bg-slate-900
              border border-slate-800
              p-6
              rounded-3xl
            "
          >

            {/* Header */}

            <div
              className="
                flex
                flex-col
                md:flex-row
                md:items-center
                md:justify-between
                gap-4
                mb-4
              "
            >

              <div>

                <h2 className="text-2xl font-bold">
                  {job.position}
                </h2>

                <p className="text-slate-400">
                  {job.company}
                </p>

              </div>

              <span
                className={`
                  ${getStatusColor(
                    job.status
                  )}
                  px-4
                  py-2
                  rounded-2xl
                  text-sm
                  text-white
                  w-fit
                `}
              >
                {job.status}
              </span>

            </div>

            {/* Notes */}

            {job.notes && (

              <p
                className="
                  text-slate-300
                  mb-4
                  leading-7
                "
              >
                {job.notes}
              </p>
            )}

            {/* Actions */}

            <div className="flex gap-2">

              <button
                onClick={() =>
                  handleEdit(job)
                }
                className="
                  bg-yellow-500
                  px-4
                  py-2
                  rounded-2xl
                  hover:bg-yellow-600
                  transition duration-300
                  text-white
                "
              >
                Edit
              </button>

              <button
                onClick={() =>
                  handleDelete(
                    job._id
                  )
                }
                className="
                  bg-red-500
                  px-4
                  py-2
                  rounded-2xl
                  hover:bg-red-600
                  transition duration-300
                  text-white
                "
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default JobTracker;