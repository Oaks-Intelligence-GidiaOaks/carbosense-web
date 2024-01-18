import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import helpCircleGray from "../../assets/icons/helpCircleGray.svg";
import notify from "../../assets/icons/notify.svg";
import { Link } from "react-router-dom";

const Topbar = ({userType}) => {
  const { user } = useSelector((state) => state.user);
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

    console.log(currentHour, "CURRENT HOUR");

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
    <section className="hidden md:block w-full px-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-primary-black font-medium text-sm lg:text-lg">
            {/* Good Afternoon {user.fullName.split(" ")[0]} */}
            {greeting}
          </h3>
        </div>
        <div className="flex items-center gap-2 lg:gap-4 py-4">
          <Link to={`/${userType}/activity`} className="flex items-center gap-2 py-4">
            <img src={notify} alt="" width={20} height={20} />
            <span className=" text-primary-black font-medium text-sm">
              Activity Log
            </span>
          </Link>
          <div className="flex items-center gap-2 py-4">
            <img src={helpCircleGray} alt="" width={20} height={20} />
            <span className=" text-primary-black font-medium text-sm">
              Help and Feedback
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
