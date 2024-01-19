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
        <Tabs>
          <Tab
            label={{
              text: "My Invoices",
              icon: <img src={myinvoice} alt="" width={12} height={12} />,
            }}
          >
            <UserInvoicesList />
          </Tab>
          <Tab
            label={{
              text: "Org Invoices",
              icon: <img src={orgInvoice} alt="" width={12} height={12} />,
            }}
          >
            <div className="py-4">
              <UserInvoicesList />
            </div>
          </Tab>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default StaffInvoice;
