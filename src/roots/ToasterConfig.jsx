import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const ToasterConfig = () => {
  const { sessionTimedOut } = useSelector((state) => state.user);
  return <Toaster containerStyle={{ inset: sessionTimedOut ? 0 : 16 }} />;
};

export default ToasterConfig;
