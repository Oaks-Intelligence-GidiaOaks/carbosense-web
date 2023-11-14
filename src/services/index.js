import axios from "axios";

export const registerOrganization = async (data) => {
  const response = await axios.post("user/register", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return await response.data;
};

export const verifyOTP = async (data) => {
  const response = await axios.post("user/verify_otp", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.data;
};
