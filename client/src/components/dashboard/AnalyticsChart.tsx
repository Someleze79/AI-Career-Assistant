// Import chart components
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Job Type

type Job = {
  _id: string;
  company: string;
  position: string;
  status: string;
  notes?: string;
  createdAt?: string;
};

// Props

type AnalyticsChartProps = {
  jobs: Job[];
};

// Analytics Chart Component

const AnalyticsChart = ({
  jobs,
}: AnalyticsChartProps) => {

  // Build Monthly Data

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = months.map(
    (month) => ({
      month,
      applications: 0,
    })
  );

  jobs.forEach((job) => {

    let monthIndex = 0;

    // Use createdAt if available
    if (job.createdAt) {

      monthIndex =
        new Date(
          job.createdAt
        ).getMonth();

    } else {

      // Fallback using MongoDB ObjectId timestamp
      const timestamp =
        parseInt(
          job._id.substring(0, 8),
          16
        ) * 1000;

      monthIndex =
        new Date(
          timestamp
        ).getMonth();
    }

    data[monthIndex]
      .applications += 1;
  });

  return (

    <div
      className="
        bg-slate-900
        border border-slate-800
        p-6
        rounded-3xl
        shadow-lg
      "
    >

      {/* Header */}

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-white">
          Job Application Analytics
        </h2>

        <p className="text-slate-400 mt-2">
          Track your monthly job application
          activity and progress.
        </p>

      </div>

      {/* Empty State */}

      {jobs.length === 0 ? (

        <div
          className="
            h-80
            flex
            items-center
            justify-center
            text-slate-500
          "
        >
          No analytics data available yet.
        </div>

      ) : (

        <ResponsiveContainer
          width="100%"
          height={320}
        >

          <LineChart data={data}>

            {/* Grid */}

            <CartesianGrid
              strokeDasharray="3 3"
              opacity={0.15}
            />

            {/* X Axis */}

            <XAxis
              dataKey="month"
              stroke="#94a3b8"
            />

            {/* Y Axis */}

            <YAxis
              stroke="#94a3b8"
            />

            {/* Tooltip */}

            <Tooltip
              contentStyle={{
                backgroundColor:
                  "#0f172a",
                border:
                  "1px solid #1e293b",
                borderRadius:
                  "16px",
                color: "#ffffff",
              }}
            />

            {/* Line */}

            <Line
              type="monotone"
              dataKey="applications"
              stroke="#3b82f6"
              strokeWidth={4}
              dot={{
                r: 6,
              }}
              activeDot={{
                r: 8,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      )}

    </div>
  );
};

export default AnalyticsChart;