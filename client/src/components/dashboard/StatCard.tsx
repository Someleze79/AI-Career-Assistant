// Import React icons type
import type {
  IconType,
} from "react-icons";

// Component Props

type StatCardProps = {
  title: string;
  value: string;
  icon: IconType;
};

// Stat Card Component

const StatCard = ({
  title,
  value,
  icon: Icon,
}: StatCardProps) => {

  return (

    <div
      className="
        bg-slate-900
        border border-slate-800
        p-6
        rounded-3xl
        shadow-lg
        hover:border-blue-500
        hover:scale-[1.02]
        transition duration-300
      "
    >

      {/* Card Header */}
      <div
        className="
          flex
          items-center
          justify-between
          mb-6
        "
      >

        {/* Card Title */}
        <h3
          className="
            text-slate-400
            text-sm
            font-medium
            uppercase
            tracking-wide
          "
        >
          {title}
        </h3>

        {/* Icon Container */}
        <div
          className="
            bg-blue-500/10
            p-3
            rounded-2xl
          "
        >

          <Icon
            className="
              text-blue-500
              text-2xl
            "
          />

        </div>

      </div>

      {/* Card Value */}
      <h2
        className="
          text-4xl
          font-bold
          text-white
        "
      >
        {value}
      </h2>

    </div>
  );
};

export default StatCard;