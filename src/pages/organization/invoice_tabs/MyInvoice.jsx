import React from "react";
import { Link } from "react-router-dom";

const MyInvoice = ({ docName, docType, url }) => {
  const getDocType = (name) => {
    const lastDotIndex = name.lastIndexOf(".");

    // Extract the extension using the last dot position
    const extension = name.substring(lastDotIndex + 1);

    return extension;
  };

  console.log(docName);

  const imageFormat = {
    png: "/invoice/png.png",
    jpeg: "/invoice/jpeg.png",
    webp: "/invoice/webP.png",
  };

  return (
    <Link to={url} target="_blank" rel="noopener noreferrer">
      <div className="border p-2 h-[200px] bg-white w-[160px] grid place-items-center">
        <div className="space-y-4">
          <img
            src={imageFormat[getDocType(docName)]}
            alt="image"
            className="w-16 mx-auto"
          />

          <p className="text-xs text-[#5D5D5D] truncate line-clamp-1">
            {docName}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MyInvoice;
