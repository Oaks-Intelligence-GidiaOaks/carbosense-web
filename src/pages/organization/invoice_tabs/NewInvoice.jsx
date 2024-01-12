import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { ImageConfig } from "../../../components/config/ImageConfig";
import Frame from "../../../assets/icons/Frame.svg";
import { formatBytes, handleAxiosError } from "../../../utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { uploadInvoiceDocument } from "../../../services";
import toast from "react-hot-toast";

const NewInvoice = (props) => {
  const wrapperRef = useRef(null);
  const queryClient = useQueryClient();

  const [fileList, setFileList] = useState(null);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const uploadDocMutation = useMutation({
    mutationKey: ["upload_docs"],
    mutationFn: (data) => {
      const formData = new FormData();
      formData.append("docType", data);
      return uploadInvoiceDocument(formData);
    },
    onSuccess: () => {
      toast.success(`Invoice uploaded successfully`, {
        duration: 5000,
        id: "profile-updated",
      });
      queryClient.invalidateQueries(["fetch_account_info"]);
    },
    onError: (e) => toast.error(handleAxiosError(e)),
  });

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      setFileList(newFile);
      props.onFileChange(newFile);
    } else {
      setFileList(null);
      props.onFileChange(null);
    }
  };

  const fileRemove = () => {
    setFileList(null);
    props.onFileChange(null);
  };

  const clearUploads = () => {
    setFileList(null);
    props.onFileChange(null);
  };

  return (
    <>
      <div className="flex items-center gap-6 mb-4">
        <button
          onClick={() => uploadDocMutation.mutate(fileList)}
          className="text-[12px] rounded text-primary-blue py-2 px-2 border border-primary-blue "
        >
          Upload invoice
        </button>
        <button
          onClick={clearUploads}
          className="text-[12px] rounded text-primary-blue py-2 px-2 border border-primary-blue hover:opacity-70"
        >
          Clear uploads
        </button>
      </div>
      <div
        ref={wrapperRef}
        className="drop-file-input relative w-full h-[400px] lg:h-fit border-[3px] border-dashed border-primary-blue flex items-center justify-center bg-white"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="flex items-center flex-col p-10">
          <img src={Frame} alt="" className="" />
          <p className="mb-2 text-base font-medium text-primary-black">
            Drag and drop your invoices here
          </p>
          <p className="text-sm text-primary-gray">
            Accepted file formats include PNG JPG PDF
          </p>
        </div>
        <input
          className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
          type="file"
          value=""
          onChange={onFileDrop}
        />
      </div>

      <button className="text-[12px] bg-purple-300 text-white py-2 px-2  my-4">
        View emission report
      </button>
      {fileList !== null ? (
        <div className="drop-file-preview">
          <div className="relative flex items-center  gap-4 mb-2 bg-white p-2 rounded-2xl">
            <div className="flex items-center gap-4">
              <img
                src={
                  ImageConfig[fileList.type?.split("/")[1]] ||
                  ImageConfig["default"]
                }
                alt=""
              />
              <div className="flex flex-col justify-between">
                <p className="text-sm text-primary-black">{fileList.name}</p>
                <p className="text-sm text-primary-black">
                  {formatBytes(fileList.size)}
                </p>
                {/* Progress bar */}
              </div>
            </div>

            <div className="h-[10px] mr-16 flex-1 bg-gray-200 rounded-md flex items-center justify-start">
              {/* Progress bar inner */}
              <div
                className={twMerge(
                  "w-0 h-full bg-step-active rounded-md transition-all duration-509",
                  fileList ? "w-full" : null
                )}
              />
            </div>

            <span
              className="w-10 h-8 rounded-full flex items-center justify-center absolute right-4 top-1/2 transform -translate-y-1/2 shadow-md cursor-pointer transition-opacity duration-300 ease-in-out"
              onClick={() => fileRemove(fileList)}
            >
              x
            </span>
            
          </div>
        </div>
      ) : null}
    </>
  );
};

NewInvoice.propTypes = {
  onFileChange: PropTypes.func,
};

export default NewInvoice;
