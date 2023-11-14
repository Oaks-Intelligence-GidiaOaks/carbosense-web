import React, { useState } from 'react';
import InvoiceFrame from "../../assets/icons/InvoiceFrame.svg";
import myinvoice from "../../assets/icons/MyInvoice.svg";
import orgInvoice from "../../assets/icons/OrgInvoice.svg";
import invoice from "../../assets/icons/invoice.svg";
import { Tabs, Tab } from '../../components/Tabs';
import { NewInvoice, OrgInvoice, MyInvoice } from "./invoice_tabs/index.jsx";


const Invoice = () => {
  return (
    <div className='pb-40 md:pb-10'>
      <div className=' md:px-8'>
        <img src={InvoiceFrame} alt="" />
      </div>

      <div className='px-2 md:px-0'>
        <Tabs>
          <Tab label={
            <div className='flex items-center gap-2'>
              <img src={invoice} alt="" width={12} height={12} />
              <span className=''>New Invoice</span>
            </div>
          }>
            <div className="py-4">
              <NewInvoice />
            </div>
          </Tab>
          <Tab label={
            <div className='flex items-center gap-2'>
              <img src={myinvoice} alt="" width={12} height={12} />
              <span className=''>My Invoices</span>
            </div>
          }>
            <div className="py-4">
              <MyInvoice />
            </div>
          </Tab>
          <Tab label={
            <div className='flex items-center gap-2'>
              <img src={orgInvoice} alt="" width={12} height={12} />
              <span className=''>Org Invoices</span>
            </div>
          }>
            <div className="py-4">
              <OrgInvoice />
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default Invoice