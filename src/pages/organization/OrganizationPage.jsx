import React, {useState} from "react";
import Organization from "./Organization";
import { motion } from "framer-motion";
import { initialUp, slideDown } from "../../constants/framer";
import { SuccessInviteModal } from "../../components/pageComponents/Account/modals";
import { useSelector } from "react-redux";


const OrganizationPage = () => {
  const {showInviteUserScreen} = useSelector(state => state.inviteUser)

  return (
    <>
    <motion.div initial={initialUp} animate={slideDown} exit={initialUp}>
      <Organization />
    </motion.div>
    {showInviteUserScreen && (
        <SuccessInviteModal />
      )}
    </>
  );
};

export default OrganizationPage;
