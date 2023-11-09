import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import MobileHeader from './MobileHeader';
import Bottombar from './Bottombar';
import Topbar from './Topbar';



const OrganizationLayout = () => {
  return (
    <div className='w-screen h-screen md:flex overflow-hidden'>
      <Sidebar />
      <MobileHeader />
      <section className='flex flex-1 h-full bg-bg-ca-gray'>
        <div className='w-full overflow-y-auto'>
          <Topbar />
          <div className=''>
            <Outlet />
          </div>
        </div>
      </section>
      <Bottombar />
    </div>
  )
}

export default OrganizationLayout;

