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
