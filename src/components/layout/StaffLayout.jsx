import { Outlet, useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";
import Bottombar from "./Bottombar";
import Topbar from "./Topbar";
import { initialUp, slideDown, slideUp } from "../../constants/framer";
import { ProtectedRoute } from "../../guards";
import { staffSidebarLinks, staffBottombarLink } from "../../data/Navigation";

const StaffLayout = () => {
  return (
    <ProtectedRoute>
      <motion.div
        initial={initialUp}
        animate={slideDown}
        exit={slideUp}
        className="w-screen h-screen md:flex overflow-hidden"
      >
        <Sidebar sidebarLinks={staffSidebarLinks} />
        <MobileHeader />
        <section className="flex flex-1 h-full bg-bg-ca-gray">
          <div className="w-full overflow-y-auto">
            <Topbar userType="staff" />
            <AnimatePresence mode="wait">
              <Outlet />
              {/* </motion.div> */}
            </AnimatePresence>
          </div>
        </section>
        <Bottombar bottombarLink={staffBottombarLink} />
      </motion.div>
    </ProtectedRoute>
  );
};

export default StaffLayout;
