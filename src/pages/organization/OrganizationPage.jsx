import React from "react";
import Organization from "./Organization";
import { motion } from "framer-motion";
import { initialUp, slideDown } from "../../constants/framer";

const OrganizationPage = () => {
  return (
    <motion.div initial={initialUp} animate={slideDown} exit={initialUp}>
      <Organization />
    </motion.div>
  );
};

export default OrganizationPage;
