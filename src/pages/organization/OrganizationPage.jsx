import React, { useState } from "react";
import Organization from "./Organization";
import { motion } from "framer-motion";
import { initialUp, slideDown } from "../../constants/framer";
import { SuccessInviteModal } from "../../components/pageComponents/Account/modals";
import { useSelector } from "react-redux";
import SuccessCreateDepartmentModal from "../../components/pageComponents/Account/modals/SuccessCreateDepartmentModal";
import MakeAdmin from "../../components/pageComponents/Account/modals/MakeAdmin";
import RemoveAdmin from "../../components/pageComponents/Account/modals/RemoveAdmin";
import DeleteStaffModal from "../../components/pageComponents/Account/modals/DeleteStaffModal";
import AssisgnRole from "../../components/pageComponents/Account/modals/AssignRole";

const OrganizationPage = () => {
  const { showInviteUserScreen } = useSelector((state) => state.inviteUser);
  const { showCreateDepartmentScreen } = useSelector(
    (state) => state.createDepartment
  );
  const { showAddToDepartment } = useSelector((state) => state.staff);
  const { showMakeAdmin } = useSelector((state) => state.staff);
  const { showRemoveAdmin } = useSelector((state) => state.staff);
  const { showDeleteStaff } = useSelector((state) => state.staff);

  return (
    <>
      <motion.div initial={initialUp} animate={slideDown} exit={initialUp}>
        <Organization />
      </motion.div>
      {showInviteUserScreen && <SuccessInviteModal />}
      {showCreateDepartmentScreen && <SuccessCreateDepartmentModal />}
      {showAddToDepartment && <AssisgnRole />}
      {showMakeAdmin && <MakeAdmin />}
      {showRemoveAdmin && <RemoveAdmin />}
      {showDeleteStaff && <DeleteStaffModal />}
    </>
  );
};

export default OrganizationPage;
