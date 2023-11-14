import React from 'react';
import { Tabs, Tab } from '../../components/Tabs';
import account from "../../assets/icons/account.svg"
import org from "../../assets/icons/org.svg"
import AccountFrame from "../../assets/icons/AccountFrame.svg"
import { AccountTab, OrgInfoTab } from './account_tabs';

const Account = () => {
  return (
    <div className='pb-40 md:pb-10'>
      <div className='md:px-8'>
        <img src={AccountFrame} alt="" />
      </div>

      <div className='px-2 md:px-0'>
        <Tabs>
          <Tab label={
            <div className='flex items-center gap-2'>
              <img src={account} alt="" width={12} height={12} />
              <span className=''>My Account</span>
            </div>
          }>
            <div className="py-4">
              <AccountTab />
            </div>
          </Tab>
          <Tab label={
            <div className='flex items-center gap-2'>
              <img src={org} alt="" width={12} height={12} />
              <span className=''>Org Information</span>
            </div>
          }>
            <div className="py-4">
              <OrgInfoTab />
            </div>
          </Tab>

        </Tabs>
      </div>
    </div>
  )
}

export default Account