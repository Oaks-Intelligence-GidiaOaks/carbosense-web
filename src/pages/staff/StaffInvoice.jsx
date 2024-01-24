import React from "react";
import InvoiceFrame from "../../assets/icons/InvoiceFrame.svg";
import myinvoice from "../../assets/icons/MyInvoice.svg";
import orgInvoice from "../../assets/icons/OrgInvoice.svg";
import { Tabs, Tab } from "../../components/Tabs";
import { motion } from "framer-motion";
import { initialUp, slideDown } from "../../constants/framer.js";
import MyInvoice from "../organization/invoice_tabs/MyInvoice.jsx";
import { useQuery } from "@tanstack/react-query";
import { getUserInvoices } from "../../services/index.js";

const StaffInvoice = () => {
  const userInvoicesData = useQuery({
    queryKey: ["getInvoices"],
    queryFn: async () => getUserInvoices(),
  });

  const UserInvoicesList = () => {
    if (userInvoicesData.isLoading) {
      return <div> Loading....</div>;
    }

    if (userInvoicesData.isError) {
      return <div>Error Occured...</div>;
    }

    return (
      <div className="py-4 flex flex-wrap gap-3">
        {userInvoicesData.data.data?.map((inv, i) => (
          <MyInvoice docName={inv.name} docType="png" url={inv.url} />
        ))}
      </div>
    );
  };

  return (
    <motion.div
      initial={initialUp}
      animate={slideDown}
      exit={initialUp}
      className="pb-40 md:pb-10"
    >
      <div className=" md:px-8">
        <img src={InvoiceFrame} alt="" />
      </div>

      <div className="px-2 md:px-0">
        <div className="px-7 py-3">
          <div className="border-b-2 border-black text-xl pb-2 w-fit">
            My Invoices
          </div>
          <UserInvoicesList />
        </div>
      </div>
    </motion.div>
  );
};

export default StaffInvoice;
