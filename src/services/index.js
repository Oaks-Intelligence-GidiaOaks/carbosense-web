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
export const verifyOTP = async (data) => {
  const response = await axios.post("user/verify_otp", data, {
    headers: {
      "Content-Type": "application/json",
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

export const getAllOrganizationStaff = async () => {
  const response = await axios.get(`organisation`);
  return await response.data;
};

export const getOrganizationPendingStaff = async () => {
  const response = await axios.get(`organisation/pending`);
  return await response.data;
};
export const getAllDepartmentEmission = async () => {
  const response = await axios.get(`emission/all/department`);
  return await response.data;
};

export const getAllDepartment = async () => {
  const response = await axios.get("department");
  return await response.data;
};
export const getUserEmission = async () => {
  const response = await axios.get("emission");
  return await response.data;
};
export const getOrganisationEmission = async () => {
  const response = await axios.get("emission/organisation");
  return await response.data;
};

export const getAllDepartmentStaff = async (id) => {
  const response = await axios.get(`department/${id}`);
  return await response.data;
};

export const getOneOrganizationStaff = async (id) => {
  const response = await axios.get(`organisation/staff/${id}`);
  return await response.data;
};

//invite user
export const inviteStaff = async (data) => {
  const response = await axios.post("user/invite_staff", data);
  return await response.data;
};

export const createDepartment = async (data) => {
  const response = await axios.post("department", data);
  return await response.data;
};

export const editProfileDetails = async (data) => {
  const response = await axios.put("user/update_user", data);
  return await response.data;
};

export const editOrgDetails = async (data) => {
  const response = await axios.put("user/update_user", data);
  return await response.data;
};

export const changePasswordValue = async (data) => {
  const response = await axios.put("user/change_password", data);
  return await response.data;
};

export const resetPassword = async (data) => {
  const response = await axios.put("user/reset_password", data);
  return await response.data;
};

export const uploadPicture = async (data) => {
  const response = await axios.put("user/upload_profile_picture", data, {
    headers: {
      "Content-Type": "Multipart/form-data",
    },
  });
  return await response.data;
};

export const uploadInvoiceDocument = async (data) => {
  const response = await axios.post("emission/verify_invoice", data, {
    headers: {
      "Content-Type": "Multipart/form-data",
    },
  });

  return await response.data;
};

export const addUserEmission = async (data) => {
  const emissionData = new FormData();

  emissionData.append("document", data.document);
  emissionData.append("emissionFactor", data.emissionFactor);
  emissionData.append("emissionRegion", data.emissionRegion);
  emissionData.append("emissionUnit", data.emissionUnit);
  emissionData.append("emissionValue", data.emissionValue);
  emissionData.append("source", data.source);

  const response = await axios.post("emission", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return await response.data;
};

export const getAllDepartments = async () => {
  const response = await axios.get("department");
  return await response.data.data;
};

export const addStaffToAdmin = async (data) => {
  const response = await axios.post("department/staff", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.data;
};

export const assignAdmin = async (data) => {
  const response = await axios.put("department/assign_hod", data);
  return await response.data;
};
export const removeAdminMutation = async (data) => {
  const response = await axios.put("department/unassign_hod", data);
  return await response.data;
};

export const getUserInvoices = async () => {
  const response = await axios.get("emission/read_invoices");
  return await response.data;
};
export const getOrganisationInvoices = async () => {
  const response = await axios.get("emission/read_organisation_invoices");
  return await response.data;
};
