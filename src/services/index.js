import axios from "axios";

// register organization
export const registerOrganization = async (data) => {
  const response = await axios.post("user/register", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return await response.data;
};

// login user
export const loginUser = async (data) => {
  const response = await axios.post("user/login", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.data;
};

// verify OTP
export const verifyOTP = async (data, accessToken) => {
  const response = await axios.post("user/verify_otp", data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return await response.data;
};

// resend OTP
export const resendOTP = async (accessToken) => {
  const response = await axios.put(
    "user/resend_otp",
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return await response.data;
};

// fetch user information
export const fetchAccountInfo = async (accessToken) => {
  const response = await axios.get("user/get_me", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return await response.data;
};
