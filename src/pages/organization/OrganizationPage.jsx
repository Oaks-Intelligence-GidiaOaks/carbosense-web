import React, { useState } from "react";
import Organization from "./Organization";
import { motion } from "framer-motion";
import { initialUp, slideDown } from "../../constants/framer";
import { SuccessInviteModal } from "../../components/pageComponents/Account/modals";
import { useSelector } from "react-redux";
import SuccessCreateDepartmentModal from "../../components/pageComponents/Account/modals/SuccessCreateDepartmentModal";


const OrganizationPage = () => {
  const { showInviteUserScreen } = useSelector(state => state.inviteUser)
  const { showCreateDepartmentScreen } = useSelector(state => state.createDepartment)

  return (
    <>
      <motion.div initial={initialUp} animate={slideDown} exit={initialUp}>
        <Organization />
      </motion.div>
      {showInviteUserScreen && (
        <SuccessInviteModal />
      )}

      {
        showCreateDepartmentScreen && (<SuccessCreateDepartmentModal />)
      }

    </>
  );
};

export default OrganizationPage;
