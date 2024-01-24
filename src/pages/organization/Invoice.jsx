import React, { useState } from "react";
import InvoiceFrame from "../../assets/icons/InvoiceFrame.svg";
import myinvoice from "../../assets/icons/MyInvoice.svg";
import orgInvoice from "../../assets/icons/OrgInvoice.svg";
import invoice from "../../assets/icons/invoice.svg";
import { Tabs, Tab } from "../../components/Tabs";
import { NewInvoice, OrgInvoice, MyInvoice } from "./invoice_tabs/index.jsx";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeOut,
  initialUp,
  invisible,
  slideDown,
} from "../../constants/framer.js";
import { ImageConfig } from "../../components/config/ImageConfig.js";
import { useQuery } from "@tanstack/react-query";
import {
  getOrganisationInvoices,
  getUserInvoices,
} from "../../services/index.js";

const Invoice = () => {
  const userInvoicesData = useQuery({
    queryKey: ["getInvoices"],
    queryFn: async () => getUserInvoices(),
  });

  const orgInvoicesData = useQuery({
    queryKey: ["getOrganisationInvoices"],
    queryFn: async () => getOrganisationInvoices(),
  });

  const OrgInvoicesList = () => {
    if (orgInvoicesData.isLoading) {
      // spinner
      return <div> Loading....</div>;
    }

    if (orgInvoicesData.isError) {
      // error code
      return <div>Error Occured...</div>;
    }

    return (
      <div className="py-4 flex flex-wrap gap-3">
        {orgInvoicesData.data.data?.map((inv, i) => (
          <MyInvoice docName={inv.name} docType="png" url={inv.url} />
        ))}
      </div>
    );
  };

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
              <OrgInvoicesList />
            </div>
          </Tab>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Invoice;
