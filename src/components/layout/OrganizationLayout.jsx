import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import  MobileHeader  from './MobileHeader';
import Bottombar from './Bottombar';
import Topbar from './Topbar';



const OrganizationLayout = () => {
  return (
    <div className='w-screen h-screen md:flex'>
      <Sidebar />
      <MobileHeader />
      <section className='flex flex-1 h-full bg-ca-gray'>
        <div className='w-full px-6 pt-6'>
          <Topbar />
          <Outlet />
        </div>
      </section>
      <Bottombar />
    </div>
  )
}

export default OrganizationLayout;

