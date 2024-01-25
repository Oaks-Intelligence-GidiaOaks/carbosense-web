import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useOutlet } from "react-router-dom";
import escro_tech from "../../assets/escro_tech.svg";

const AnimatedOutlet = () => {
  const o = useOutlet();
  const [outlet] = useState(o);

  return <>{outlet}</>;
};

const RootContainer = () => {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} exit={{ opacity: 1 }}>
          <AnimatedOutlet />
        </motion.div>
      </AnimatePresence>

      <div className="mt-20 md:mt-0">
        <p className=" absolute max-w-2xl bottom-0 left-0 z-30 text-sm right-0 p-3 text-center gap-10 text-primary-black mx-auto">
          <div className="flex items-center justify-center gap-1">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1">
                <span>A product of</span>
                <img src={escro_tech} alt="logo" className=" w-4 h-4" />
                <span>Escrow-Tech</span>
              </div>
              <span> Copyright &copy; 2023. All Rights Reserved.</span>
            </div>
          </div>
        </p>
      </div>
    </>
  );
};

export default RootContainer;
