import { useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";
import Bottombar from "./Bottombar";
import Topbar from "./Topbar";
import { initialUp, slideDown, slideUp } from "../../constants/framer";
import { ProtectedRoute } from "../../guards";
import { useSelector } from "react-redux";
import EditProfile from "../pageComponents/Account/modals/editProfile";
import {
  ChangePassword,
  DeleteAccount,
  OrgProfile,
} from "../pageComponents/Account/modals";

const AnimatedOutlet = () => {
  const outlet = useOutlet();

  return (
    <motion.div
      key={location.pathname}
      initial={initialUp}
      animate={slideDown}
      exit={slideUp}
    >
      <>{outlet}</>
    </motion.div>
  );
};

const OrganizationLayout = () => {
  const { editProfile, changePassword, deleteAccount, editOrg } = useSelector(
    (state) => state.user.accountActions
  );

  return (
    <ProtectedRoute>
      <motion.div
        initial={initialUp}
        animate={slideDown}
        exit={slideUp}
        className="w-screen h-screen md:flex overflow-hidden"
      >
        <Sidebar />
        <MobileHeader />
        <section className="flex flex-1 h-full bg-bg-ca-gray">
          <div className="w-full overflow-y-auto">
            <Topbar />
            <AnimatePresence mode="popLayout">
              <AnimatedOutlet />
            </AnimatePresence>
          </div>
        </section>
        <Bottombar />
      </motion.div>

      {/* Account actions */}
      <AnimatePresence>
        {editProfile && <EditProfile />}
        {changePassword && <ChangePassword />}
        {deleteAccount && <DeleteAccount />}
        {editOrg && <OrgProfile />}
      </AnimatePresence>
    </ProtectedRoute>
  );
};

export default OrganizationLayout;
