import React from 'react';
import activityFrame from "../../assets/icons/activityFrame.svg"
import { ActivityLogGrid } from '../../components/grid';

const ActivityLog = () => {
  return (
    <div>
      <div className="md:px-8">
        <img src={activityFrame} alt="" />
      </div>

      <div className='px-2 md:px-8 mt-4'>
        <ActivityLogGrid />
      </div>
    </div>
  )
}

export default ActivityLog