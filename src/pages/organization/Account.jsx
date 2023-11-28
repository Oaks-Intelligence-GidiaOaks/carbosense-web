import React, { useState } from "react";
import { Tabs, Tab } from "../../components/Tabs";
import account from "../../assets/icons/account.svg";
import org from "../../assets/icons/org.svg";
import AccountFrame from "../../assets/icons/AccountFrame.svg";
import { AccountTab, OrgInfoTab } from "./account_tabs";
import { AccountPageShimmer } from "../../primitives/shimmers";
import { useQuery } from "@tanstack/react-query";
import { fetchAccountInfo } from "../../services";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import {
  fadeIn,
  fadeOut,
  initialDown,
  invisible,
  slideUp,
} from "../../constants/framer";

const Account = () => {
  const [activeTab, setActiveTab] = useState("account");
  const { accessToken } = useSelector((state) => state.user);

  const { isPending, isError, data, isSuccess } = useQuery({
    queryKey: ["fetch_account_info"],
    queryFn: () => fetchAccountInfo(accessToken),
  });

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
          {console.log(data)}
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
                  <AccountTab userInfo={data.data} />
                </motion.div>
              </Tab>
              <Tab
                key={"org"}
                label={{
                  text: "Org Information",
                  icon: <img src={org} alt="" width={12} height={12} />,
                }}
              >
                <motion.div
                  initial={initialDown}
                  animate={slideUp}
                  exit={initialDown}
                  className="py-4"
                >
                  <OrgInfoTab />
                </motion.div>
              </Tab>
            </Tabs>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Account;

