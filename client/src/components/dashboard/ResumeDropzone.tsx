// Import React Dropzone
import { useDropzone } from "react-dropzone";

// Import icon
import { FaCloudUploadAlt } from "react-icons/fa";

// Component Props

type Props = {
  setFile: (
    file: File | null
  ) => void;
};

// Resume Dropzone Component

const ResumeDropzone = ({
  setFile,
}: Props) => {

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({

    accept: {
      "application/pdf": [".pdf"],
    },

    onDrop: (acceptedFiles) => {

      if (acceptedFiles.length > 0) {

        setFile(
          acceptedFiles[0]
        );
      }
    },
  });

  return (

    <div
      {...getRootProps()}
      className={`
        border-2
        border-dashed
        rounded-3xl
        p-10
        text-center
        cursor-pointer
        transition-all
        duration-300

        ${
          isDragActive
            ? `
              border-blue-500
              bg-slate-800
              scale-[1.01]
            `
            : `
              border-slate-700
              bg-slate-900
              hover:border-blue-500
              hover:bg-slate-800
            `
        }
      `}
    >

      {/* Hidden File Input */}
      <input
        {...getInputProps()}
      />

      {/* Upload Icon */}
      <div
        className="
          flex
          justify-center
          mb-4
        "
      >

        <div
          className="
            bg-blue-500/10
            p-4
            rounded-2xl
          "
        >

          <FaCloudUploadAlt
            className="
              text-blue-500
              text-4xl
            "
          />

        </div>

      </div>

      {/* Upload Text */}
      <p
        className="
          text-white
          text-lg
          font-semibold
        "
      >

        {isDragActive
          ? "Drop your resume here..."
          : "Drag & drop your PDF resume"}

      </p>

      {/* Subtext */}
      <p
        className="
          mt-3
          text-sm
          text-slate-400
        "
      >
        Click to browse or drop a file
      </p>

      <p
        className="
          mt-1
          text-xs
          text-slate-500
        "
      >
        PDF files only
      </p>

    </div>
  );
};

export default ResumeDropzone;