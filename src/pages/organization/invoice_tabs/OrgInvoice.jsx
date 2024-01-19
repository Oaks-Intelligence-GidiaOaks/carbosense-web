import { useQuery } from '@tanstack/react-query';
import { readOrgInvoice } from '../../../services';
import RequestError from '../../../components/errors/RequestError';
import { AccountPageShimmer } from '../../../primitives/shimmers';
import { AnimatePresence } from 'framer-motion';

const OrgInvoice = () => {

  const { isPending, isError, data, isSuccess, error, refetch, isRefetching } = useQuery({
    queryKey: ["invoice"],
    queryFn: () => readOrgInvoice(),
  });

  console.log(data);
  return (
    <AnimatePresence mode="wait">
    {isPending && <AccountPageShimmer />}
    {isSuccess && data && (
      <div className="grid grid-cols-5 gap-4 bg-white p-6">
        {data?.map((item) => (
          <div
            key={item.name}
            className=" flex hover:opacity-60 flex-col w-36 h-fit border border-solid border-[#D8DDE8] bg-gray-100 items-center  gap-x-2"
          >
            <img src={item.url} alt="" className=" h-36 bg-cover w-36" />

            <span className="text-sm text-primary-gray py-2 bg-white w-full h-full text-center truncate">
              {item.name}
            </span>
            <span className="text-sm px-2 font-medium text-primary-gray py-2 bg-white w-full h-full text-center truncate">
              {item.folder}
            </span>
          </div>
        ))}
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
  )
}

export default OrgInvoice