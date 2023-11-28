import React from 'react';
import OrgFrame from "../../assets/icons/OrgFrame.svg";
import { Tabs, Tab } from '../../components/Tabs';
import allStaff from "../../assets/icons/allStaff.svg";
import department from "../../assets/icons/department.svg";
import { AllStaff, MyDepartment } from './org_tabs';

const Organization = () => {
  return (
    <div className='pb-40 md:pb-10'>
      <div className='md:px-8'>
        <img src={OrgFrame} alt="" />
      </div>

      <div>
        <Tabs>
          <Tab 
          label={{
            text: "All staff",
            icon: <img src={allStaff} alt="" width={12} height={12} />,
          }}
          >
            <div className="py-4">
              <AllStaff />
            </div>
          </Tab>
          <Tab 
          label={{
            text: "My department",
            icon: <img src={department} alt="" width={12} height={12} />,
          }}
          >
            <div className="py-4">
              <MyDepartment />
            </div>
          </Tab>

        </Tabs>
      </div>
     
    </div>
  )
}

export default Organization