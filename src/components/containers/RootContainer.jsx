import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useOutlet } from "react-router-dom";

const AnimatedOutlet = () => {
  const o = useOutlet();
  const [outlet] = useState(o);

  return <>{outlet}</>;
};

const RootContainer = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} exit={{ opacity: 1 }}>
        <AnimatedOutlet />
      </motion.div>
    </AnimatePresence>
  );
};

export default RootContainer;
