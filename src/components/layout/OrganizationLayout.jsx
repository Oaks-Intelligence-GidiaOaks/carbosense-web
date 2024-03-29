import { Outlet, useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";
import Bottombar from "./Bottombar";
import Topbar from "./Topbar";
import { initialUp, slideDown, slideUp } from "../../constants/framer";
import { ProtectedRoute } from "../../guards";
import { adminSidebarLinks, adminBottombarLink } from "../../data/Navigation";

// const AnimatedOutlet = () => {
//   return (
//     <motion.div
//       key={location.pathname}
//       initial={initialUp}
//       animate={slideDown}
//       exit={slideUp}
//     >
//       <Outlet />
//     </motion.div>
//   );
// };

const OrganizationLayout = () => {
  return (
    <ProtectedRoute>
      <motion.div
        initial={initialUp}
        animate={slideDown}
        exit={slideUp}
        className="w-screen h-screen md:flex overflow-hidden"
      >
        <Sidebar sidebarLinks={adminSidebarLinks} />
        <MobileHeader />
        <section className="flex flex-1 h-full bg-bg-ca-gray">
          <div className="w-full overflow-y-auto">
            <Topbar userType="admin" />
            <AnimatePresence mode="wait">
              {/* <AnimatedOutlet /> */}
              {/* <motion.div
                key={location.pathname}
                initial={initialUp}
                animate={slideDown}
                exit={slideUp}
              > */}
              <Outlet />
              {/* </motion.div> */}
            </AnimatePresence>
          </div>
        </section>
        <Bottombar bottombarLink={adminBottombarLink} />
      </motion.div>
    </ProtectedRoute>
  );
};

export default OrganizationLayout;
