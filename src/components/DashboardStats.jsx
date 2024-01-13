import React from "react";
import alertcircle from "../assets/icons/alertcircle.svg";
import { useQuery } from "@tanstack/react-query";
import { getUserEmission } from "../services";

const DashboardStats = () => {
  const emissionsData = useQuery({
    queryKey: ["getUserEmission"],
    queryFn: () => getUserEmission(),
  });

  let scope1;
  let scope2;
  let scope3;
  let total;

  if (emissionsData.isSuccess) {
    let hasData = emissionsData.data.scope.length > 0;
    let isScope1 =
      emissionsData.data.scope.filter((item) => item._id === "scope1").length >
      0;

    let isScope2 =
      emissionsData.data.scope.filter((item) => item._id === "scope2").length >
      0;

    let isScope3 =
      emissionsData.data.scope.filter((item) => item._id === "scope3").length >
      0;

    let isTotal = emissionsData.data.co2e_total;

    total = isTotal ? emissionsData.data.co2e_total : 0;

    scope1 = isScope1
      ? emissionsData.data.scope.filter((item) => item._id === "scope1")?.[0]
          ?.co2e_total
      : 0;

    scope2 = isScope2
      ? emissionsData.data.scope.filter((item) => item._id === "scope2")?.[0]
          ?.co2e_total
      : 0;

    scope3 = isScope3
      ? emissionsData.data.scope.filter((item) => item._id === "scope3")?.[0]
          ?.co2e_total
      : 0;
  }

  return (
    <div className="gap-4 mt-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="bg-white p-4 h-[132px]  border border-[#D8DDE8] flex flex-col gap-1 items-center justify-center">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-primary-black text-2xl">{scope1}</h3>
          <span className="text-2xl text-primary-gray">tCO2e</span>
          <img src={alertcircle} alt="" />
        </div>
        <span className=" text-primary-black text-sm">
          Total scope 1 emissions
        </span>
      </div>
      <div className="bg-white p-4 h-[132px]  border border-[#D8DDE8] flex flex-col gap-1 items-center justify-center">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-primary-black text-2xl">{scope2}</h3>
          <span className="text-2xl text-primary-gray">tCO2e</span>
          <img src={alertcircle} alt="" />
        </div>
        <span className=" text-primary-black text-sm">
          Total scope 2 emissions
        </span>
      </div>
      <div className="bg-white p-4 h-[132px]  border border-[#D8DDE8] flex flex-col gap-1 items-center justify-center">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-primary-black text-2xl">{scope3}</h3>
          <span className="text-2xl text-primary-gray">tCO2e</span>
          <img src={alertcircle} alt="" />
        </div>
        <span className=" text-primary-black text-sm">
          Total scope 3 emissions
        </span>
      </div>
      <div className="bg-white p-4 h-[132px]  border border-[#D8DDE8] flex flex-col gap-1 items-center justify-center">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-primary-black text-2xl">{total}</h3>
          <span className="text-2xl text-primary-gray">tCO2e</span>
          <img src={alertcircle} alt="" />
        </div>
        <span className=" text-primary-black text-sm">Total emissions</span>
      </div>
    </div>
  );
};

export default DashboardStats;
