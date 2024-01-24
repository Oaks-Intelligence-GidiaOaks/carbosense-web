import { useQuery } from "@tanstack/react-query";
import React from "react";
import { readInvoice } from "../../../services";
import png from "../../../assets/icons/png_file.svg";
import { AnimatePresence } from "framer-motion";
import { AccountPageShimmer } from "../../../primitives/shimmers";
import RequestError from "../../../components/errors/RequestError";

const MyInvoice = () => {
  const { isPending, isError, data, isSuccess, error, refetch, isRefetching } = useQuery({
    queryKey: ["invoice"],
    queryFn: () => readInvoice(),
  });

  return (
    <AnimatePresence mode="wait">
      {isPending && <AccountPageShimmer />}
      {isSuccess && data.length ?  (
        <div className="grid grid-cols-5 gap-4 bg-white p-6">
          {data?.map((item) => (
            <div
              key={item.name}
              className=" flex hover:opacity-60 flex-col w-36 border border-solid border-[#D8DDE8] bg-gray-100 items-center  gap-x-2"
            >
              <img src={item.url} alt="" className=" h-36 bg-cover w-36" />

              <span className="text-sm text-primary-gray py-2 bg-white w-full h-full text-center truncate">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="">
          <h3 className="">No invoice to display</h3>
        </div>
      )}

      {isError && (
        <RequestError
        error={error}
        retryCallback={() => refetch()}
        isLoading={isRefetching}
      /> 
      )}
    </AnimatePresence>
  );
};

export default MyInvoice;
