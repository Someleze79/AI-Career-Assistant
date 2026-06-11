import axios from "axios";

// Backend API URL
const API_URL =
  `${import.meta.env.VITE_API_URL}/api/jobs`;

// Job Data Type

type JobData = {
  company: string;
  position: string;
  status: string;
  notes?: string;
};

// Get Auth Config

const getConfig = () => {

  const token =
    localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// Get All Jobs

export const getJobs = async () => {

  const response =
    await axios.get(
      API_URL,
      getConfig()
    );

  return response.data;
};

// Create Job

export const createJob = async (
  jobData: JobData
) => {

  const response =
    await axios.post(
      API_URL,
      jobData,
      getConfig()
    );

  return response.data;
};

// Delete Job

export const deleteJob = async (
  id: string
) => {

  const response =
    await axios.delete(
      `${API_URL}/${id}`,
      getConfig()
    );

  return response.data;
};

// Update Job

export const updateJob = async (
  id: string,
  jobData: JobData
) => {

  const response =
    await axios.put(
      `${API_URL}/${id}`,
      jobData,
      getConfig()
    );

  return response.data;
};