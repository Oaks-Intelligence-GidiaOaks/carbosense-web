import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeOut,
  initialDown,
  invisible,
  slideDown,
  slideUp,
} from "../../../../constants/framer";
import createDepartmentFrame from "../../../../assets/createDepartmentFrame.svg";
import { Button, SizedBox } from "../../../ui";
import { useDispatch, useSelector } from "react-redux";
import { showGreetingModal } from "../../../../features/user/userSlice";

const UserGreeting = () => {
  const addCreateDepartmentRef = useRef();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [greeting, setGreeting] = useState(getGreeting());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
      setGreeting(getGreeting());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  function getCurrentTime() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();

    // Format the time to HH:MM
    const formattedTime = `${currentHour}:${
      currentMinute < 10 ? "0" : ""
    }${currentMinute}`;

    return formattedTime;
  }

  function getGreeting() {
    const currentHour = new Date().getHours();
    let greetingMessage = "";

    if (currentHour >= 5 && currentHour < 12) {
      greetingMessage = "Good Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      greetingMessage = "Good Afternoon";
    } else {
      greetingMessage = "Good Evening";
    }

    return `${greetingMessage}, ${user.fullName}!`;
  }
  return (
    <motion.div
      initial={invisible}
      animate={fadeIn}
      exit={fadeOut}
      className="fixed p-4 inset-0 w-screen h-screen bg-modal-black backdrop-blur-sm overflow-y-auto"
      onClick={(e) =>
        addCreateDepartmentRef.current &&
        !addCreateDepartmentRef.current.contains(e.target) &&
        dispatch(showGreetingModal(false))
      }
    >
      {" "}
      <motion.div
        ref={addCreateDepartmentRef}
        initial={initialDown}
        animate={slideUp}
        exit={slideDown}
        className="relative mx-auto mt-28 mb-10 max-w-2xl w-full rounded-lg pointer-events-auto"
      >
        <div className="px-3 pt-10">
          <div className="bg-white overflow-hidden rounded-3xl flex flex-col md:flex-row items-center w-full ">
            <img
              src={createDepartmentFrame}
              alt=""
              className=" h-72 w-full md:w-[250px] object-cover "
            />
            <div className="p-6 w-full">
              <h2 className=" text-[#19CDA7] whitespace-nowrap font-medium text-[15px] md:text-xl">
                {greeting}
              </h2>

              <div className="mt-4">
                <p className="text-base text-justify text-primary-gray">
                  Thank you for joining  <span className=" font-semibold"> Carbosense.</span>. Get ready to take control of
                  your environmental impact by tracking your carbon footprint.
                  Let's make a lasting difference together!
                </p>
                <SizedBox height={"h-4"} />
                <Button
                  content="Get Started"
                  width="w-[clamp(80px,20%,120px)]"
                  height="h-8"
                  textSize="text-sm lg:text-xs"
                  callback={() => dispatch(showGreetingModal(false))}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default UserGreeting;
