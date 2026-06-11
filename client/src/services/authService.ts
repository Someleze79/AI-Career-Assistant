import axios from "axios";

const API_URL =
  `${import.meta.env.VITE_API_URL}/api/auth`;

// Register
export const registerUser = async (
  userData: any
) => {

  const response =
    await axios.post(
      `${API_URL}/register`,
      userData
    );

  if (response.data) {

    localStorage.setItem(
      "user",
      JSON.stringify(response.data)
    );

    if (response.data.token) {

      localStorage.setItem(
        "token",
        response.data.token
      );
    }
  }

  return response.data;
};

// Login
export const loginUser = async (
  userData: any
) => {

  const response =
    await axios.post(
      `${API_URL}/login`,
      userData
    );

  if (response.data) {

    localStorage.setItem(
      "user",
      JSON.stringify(response.data)
    );

    if (response.data.token) {

      localStorage.setItem(
        "token",
        response.data.token
      );
    }
  }

  return response.data;
};

// Logout
export const logoutUser = () => {

  localStorage.removeItem("user");
  localStorage.removeItem("token");
};