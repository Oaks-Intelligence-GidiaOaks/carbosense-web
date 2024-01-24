import { useEffect, useState } from "react";
import { Tabs, Tab } from "../../components/Tabs";
import account from "../../assets/icons/account.svg";
import org from "../../assets/icons/org.svg";
import AccountFrame from "../../assets/icons/AccountFrame.svg";
// import { AccountTab } from "../organization/account_tabs";
import { StaffAccountTab, StaffInfoTab } from "./account_tabs";
import { AccountPageShimmer } from "../../primitives/shimmers";
import { useQuery } from "@tanstack/react-query";
import { fetchAccountInfo } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import {
  fadeIn,
  fadeOut,
  initialDown,
  invisible,
  slideUp,
} from "../../constants/framer";
import { setUser } from "../../features/user/userSlice";
import toast from "react-hot-toast";
import { handleAxiosError } from "../../utils";
import RequestError from "../../components/errors/RequestError";
import {
  ChangePassword,
  DeleteAccount,
  EditProfile,
  OrgProfile,
} from "../../components/pageComponents/Account/modals";

const StaffAccount = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("account");
  const { accessToken } = useSelector((state) => state.user);
  const { editProfile, changePassword, deleteAccount, editOrg } = useSelector(
    (state) => state.user.accountActions
  );

  const { isPending, isError, data, isSuccess, error, refetch, isRefetching } =
    useQuery({
      queryKey: ["fetch_account_info"],
      queryFn: () => fetchAccountInfo(accessToken),
      onSuccess: (data) => {
        alert("Refetched");
        dispatch(setUser(data.data));
        toast.success("Store updated");
      },
      onError: (e) => {
        toast.error(handleAxiosError(e));
      },
      refetchOnMount: false,
      retryOnMount: false,
      retry: false,
    });

  // console.log(data.data)
  // update user data on refetch
  useEffect(() => {
    if (data) {
      dispatch(setUser(data.data));
    }
  }, [data, dispatch]);

  return (
    <AnimatePresence mode="wait">
      {isPending && <AccountPageShimmer />}
      {isSuccess && data && (
        <motion.div
          initial={invisible}
          animate={fadeIn}
          exit={fadeOut}
          className="pb-40 md:pb-10"
        >
          <div className="md:px-8">
            <img src={AccountFrame} alt="" />
          </div>

          <div className="px-2 md:px-0">
            <Tabs>
              <Tab
                key={"account"}
                label={{
                  text: "My Account",
                  icon: <img src={account} alt="" width={12} height={12} />,
                }}
              >
                <motion.div
                  initial={initialDown}
                  animate={slideUp}
                  exit={initialDown}
                  className="py-4"
                >
                  <StaffAccountTab userInfo={data.data} />
                </motion.div>
              </Tab>
              <Tab
                key={"org"}
                label={{
                  text: "Staff Information",
                  icon: <img src={org} alt="" width={12} height={12} />,
                }}
              >
                <motion.div
                  initial={initialDown}
                  animate={slideUp}
                  exit={initialDown}
                  className="py-4"
                >
                  <StaffInfoTab />
                </motion.div>
              </Tab>
            </Tabs>
          </div>

          {/* Account actions */}
          <AnimatePresence>
            {editProfile && <EditProfile />}
            {changePassword && <ChangePassword />}
            {deleteAccount && <DeleteAccount />}
            {editOrg && <OrgProfile />}
          </AnimatePresence>
        </motion.div>
      )}
      {isError && (
        <RequestError
          error={error}
          retryCallback={() => refetch()}
          isLoading={isRefetching}
        />
      )}
    </AnimatePresence>
  );
};

export default StaffAccount;
