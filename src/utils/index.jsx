import secureLocalStorage from "react-secure-storage";

// This function formats numbers in number input and adds commas
export const handleValue = (value) => {
  const numbersOnly = value.replace(/\D/g, "");
  const formattedNumber = Number(numbersOnly);

  // set maximmum length to number value

  // if (formattedNumber.toString().length >= 15) {
  //   const newNumber = formattedNumber.toString().slice(0, 15);
  //   return Number(newNumber).toLocaleString("en-us");
  // }

  if (isNaN(formattedNumber) || formattedNumber.length < 1 || value === "") {
    return "";
  } else {
    console.log(formattedNumber.toLocaleString());
    return formattedNumber.toLocaleString();
  }
};

// Remove commas from formatted numbers
export const removeCommas = (value) => {
  parseInt(value.replace(/,/g, ""));
};

// format bytes
export const formatBytes = (bytes, decimals = 2) => {
  if (!+bytes) return "0 Bytes";

  const k = 1000;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

// identify file type
export const identifyFileType = (fileType) => {
  return fileType.split("/")[1];
};

// read file
export const readAndConvertFileToString = async (file) => {
  const reader = new FileReader();

  reader.onload = () => {
    return reader.result;
  };

  reader.readAsDataURL(file);
};

// is data type an object
export const isObject = (value) => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

// handle axios error
export const handleAxiosError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    return (
      error.response.data.message ??
      error.response.data.msg ??
      error.response.data ??
      "Can't handle your request at the moment."
    );
  } else if (error.request) {
    // The request was made but no response was received
    return "An error occurred while processing your request and it's not your fault.";
  } else {
    // Something happened in setting up the request that triggered an Error
    return error.message;
  }
};

export const saveUser = (data) => {
  // UCD User Credential Details
  secureLocalStorage.setItem("UCD", data.data);
  // UTFA User Token For Access
  secureLocalStorage.setItem("UTFA", data.accessToken);
  // RTFU Refresh Token For User
  secureLocalStorage.setItem("RTFU", data.refreshToken);
};

export const generateInitials = (name) => {
  const formattedName = name.split(" ");
  if (formattedName.length % 2 === 1) {
    return formattedName[0][1];
  } else {
    return `${formattedName[0][0]}${formattedName[1][0]}`;
  }
};
