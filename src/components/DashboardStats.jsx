import React from "react";
import alertcircle from "../assets/icons/alertcircle.svg";

const DashboardStats = ({ emissionData }) => {
  const findScope = (scopeId, data) => {
    const scope = data?.find((item) => item._id === scopeId);
    return scope ? scope.co2e_total : 0;
  };

  const totalScope1 = findScope("scope1", emissionData?.scope);
  const totalScope2 = findScope("scope2", emissionData?.scope);
  const totalScope3 = findScope("scope3", emissionData?.scope);

  //   const totalAllScopes = totalScope1 + totalScope2 + totalScope3;
  const totalAllScopes = [totalScope1, totalScope2, totalScope3]
    .map((value) => Number(value))
    .filter((value) => !isNaN(value))
    .reduce((acc, value) => acc + value, 0)
    .toFixed(1);

  return (
    <div className="gap-4 mt-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="bg-white p-4 h-[132px]  border border-[#D8DDE8] flex flex-col gap-1 items-center justify-center">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-primary-black text-base">
            {totalScope1?.toFixed(3)}
          </h3>
          <span className="text-base text-primary-gray">tCO2e</span>
          <img src={alertcircle} alt="" />
        </div>
        <span className=" text-primary-black text-sm">
          Total scope 1 emissions
        </span>
      </div>
      <div className="bg-white p-4 h-[132px]  border border-[#D8DDE8] flex flex-col gap-1 items-center justify-center">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-primary-black text-base">
            {totalScope2}
          </h3>
          <span className="text-base text-primary-gray">tCO2e</span>
          <img src={alertcircle} alt="" />
        </div>
        <span className=" text-primary-black text-sm">
          Total scope 2 emissions
        </span>
      </div>
      <div className="bg-white p-4 h-[132px]  border border-[#D8DDE8] flex flex-col gap-1 items-center justify-center">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-primary-black text-base">
            {totalScope3?.toFixed(3)}
          </h3>
          <span className="text-base text-primary-gray">tCO2e</span>
          <img src={alertcircle} alt="" />
        </div>
        <span className=" text-primary-black text-sm">
          Total scope 3 emissions
        </span>
      </div>
      <div className="bg-white p-4 h-[132px]  border border-[#D8DDE8] flex flex-col gap-1 items-center justify-center">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-primary-black text-base">
            {totalAllScopes}
          </h3>
          <span className="text-base text-primary-gray">tCO2e</span>
          <img src={alertcircle} alt="" />
        </div>
        <span className=" text-primary-black text-sm">Total emissions</span>
      </div>
    </div>
  );
};

export default DashboardStats;
