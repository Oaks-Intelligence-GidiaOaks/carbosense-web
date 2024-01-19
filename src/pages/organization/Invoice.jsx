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

const Invoice = () => {


  const onFileChange = (files) => {
    console.log(files);
  }
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
          {/* <Tab
            label={{
              text: "New Invoice",
              icon: <img src={invoice} alt="" width={12} height={12} />,
            }}
          >
            <div className="py-4">
              <NewInvoice onFileChange={(files) => onFileChange(files)}/>
            </div>
          </Tab> */}
          <Tab
            label={{
              text: "My Invoices",
              icon: <img src={myinvoice} alt="" width={12} height={12} />,
            }}
          >
            <div className="py-4">
              <MyInvoice />
            </div>
          </Tab>
          <Tab
            label={{
              text: "Org Invoices",
              icon: <img src={orgInvoice} alt="" width={12} height={12} />,
            }}
          >
            <div className="py-4">
              <OrgInvoice />
            </div>
          </Tab>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Invoice;
