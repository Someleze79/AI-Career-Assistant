import axios from "axios";

const API_URL =
  `${import.meta.env.VITE_API_URL}/api/ai`;

// Get Auth Config

const getConfig = () => {

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  return {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
};

// Analyze Resume Text

export const analyzeResume = async (
  resumeText: string
) => {

  const response =
    await axios.post(
      `${API_URL}/analyze-resume`,
      { resumeText },
      getConfig()
    );

  return response.data;
};

// Analyze Resume PDF

export const analyzeResumePDF = async (
  file: File
) => {

  const formData =
    new FormData();

  formData.append(
    "resume",
    file
  );

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  const response =
    await axios.post(
      `${API_URL}/analyze-resume-pdf`,
      formData,
      {
        headers: {
          Authorization:
            `Bearer ${user.token}`,
          "Content-Type":
            "multipart/form-data",
        },
      }
    );

  return response.data;
};