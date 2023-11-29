import Skeleton from "react-loading-skeleton";
import { motion } from "framer-motion";
import { fadeIn, fadeOut, invisible } from "../../constants/framer";

const AccountPageShimmer = () => {
  return (
    <motion.div
      className="flex-1 pb-40 md:pb-10"
      initial={invisible}
      animate={fadeIn}
      exit={fadeOut}
    >
      {/* Banner */}
      <div className="md:px-8 h-[clamp(80px,30vh,120px)] md:h-[clamp(80px,30vh,200px)]">
        <Skeleton style={{ height: "100%", borderRadius: 0 }} />
      </div>

      <div className="px-2 md:px-0">
        {/* Tabs */}
        <div className="flex flex-nowrap md:px-8 mt-6 gap-6">
          <div className="flex flex-nowrap gap-3 items-center">
            <Skeleton circle width={30} height={30} />
            <label className="w-[clamp(50px,20vw,150px)]">
              <Skeleton height={25} style={{ width: "100%" }} />
            </label>
          </div>
          <div className="flex flex-nowrap gap-3 items-center">
            <Skeleton circle width={30} height={30} />
            <label className="w-[clamp(50px,20vw,200px)]">
              <Skeleton height={25} style={{ width: "100%" }} />
            </label>
          </div>
        </div>

        <div className="md:px-8 mt-6">
          {/* First section */}
          <div className="grid md:grid-cols-7 gap-4">
            {/* Account details */}
            <div className="md:col-span-4 bg-white p-4 md:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm text-primary-black font-medium flex-[0.4] max-w-[150px]">
                  <Skeleton
                    style={{
                      width: "100%",
                      height: "20px",
                    }}
                  />
                </h3>
                <div className=" flex-[0.4] max-w-[50px]">
                  <Skeleton
                    style={{
                      height: "22px",
                      borderRadius: 0,
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6 mt-4">
                <div className="">
                  <div className="flex items-center justify-between">
                    <div className=" flex-[0.4] max-w-[120px]">
                      <Skeleton
                        style={{
                          width: "clamp(50px,20ch,120px)",
                          height: "16px",
                        }}
                      />
                    </div>
                    <div className=" flex-[0.4] max-w-[200px]">
                      <Skeleton
                        style={{
                          height: "16px",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-between">
                    <div className=" flex-[0.4] max-w-[100px]">
                      <Skeleton
                        style={{
                          height: "16px",
                        }}
                      />
                    </div>
                    <div className=" flex-[0.4] max-w-[100px]">
                      <Skeleton
                        style={{
                          height: "16px",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center justify-between">
                    <div className=" flex-[0.4] max-w-[140px]">
                      <Skeleton
                        style={{
                          height: "16px",
                        }}
                      />
                    </div>
                    <div className=" flex-[0.4] max-w-[190px]">
                      <Skeleton
                        style={{
                          height: "16px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Pic */}
            <div className="md:col-span-3 bg-white p-4 md:p-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-sm text-primary-black font-medium">
                  <Skeleton
                    style={{
                      width: "clamp(100px,30ch,150px)",
                      height: "20px",
                    }}
                  />
                </h3>
                <span className="text-xs">
                  <Skeleton
                    style={{
                      width: "100%",
                      height: "16px",
                    }}
                  />
                </span>
              </div>
              <div className="flex items-center justify-center py-3">
                <Skeleton
                  circle
                  style={{
                    width: "64px",
                    height: "64px",
                  }}
                />
              </div>

              <div className="flex items-center justify-center gap-10 ">
                <Skeleton
                  style={{
                    width: "clamp(70px,10ch,80px)",
                    height: "22px",
                    borderRadius: 0,
                  }}
                />
                <Skeleton
                  style={{
                    width: "clamp(70px,10ch,80px)",
                    height: "22px",
                    borderRadius: 0,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="bg-white mt-4 p-4 md:p-6 ">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm text-primary-black font-medium flex-[0.4] max-w-[150px]">
                <Skeleton
                  style={{
                    height: "20px",
                  }}
                />
              </h3>
              <span className="text-xs flex-[0.4] max-w-[420px]">
                <Skeleton
                  style={{
                    height: "16px",
                  }}
                />
              </span>
            </div>

            <div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center justify-between border p-2">
                  <span className="text-xs md:text-sm text-primary-gray flex-[0.4] max-w-[120px]">
                    <Skeleton
                      style={{
                        height: "16px",
                      }}
                    />
                  </span>
                  <span className="text-xs text-primary-black flex-[0.4] max-w-[180px]">
                    <Skeleton
                      style={{
                        height: "24px",
                        borderRadius: "15px",
                      }}
                    />
                  </span>
                </div>
                <div className="flex items-center justify-between border p-3">
                  <span className="text-xs md:text-sm text-primary-gray flex-[0.4] max-w-[80px]">
                    <Skeleton
                      style={{
                        height: "16px",
                      }}
                    />
                  </span>
                  <span className="text-xs md:text-sm text-primary-black flex-[0.4] max-w-[180px]">
                    <Skeleton
                      style={{
                        height: "16px",
                      }}
                    />
                  </span>
                </div>
                <div className="flex items-center justify-between border p-3">
                  <span className="text-xs md:text-sm text-primary-gray flex-[0.4] max-w-[80px]">
                    <Skeleton
                      style={{
                        height: "16px",
                      }}
                    />
                  </span>
                  <span className="text-xs md:text-sm text-primary-black flex-[0.4] max-w-[180px]">
                    <Skeleton
                      style={{
                        height: "16px",
                      }}
                    />
                  </span>
                </div>
                <div className="flex items-center justify-between border p-3">
                  <span className="text-xs md:text-sm text-primary-gray flex-[0.4] max-w-[100px]">
                    <Skeleton
                      style={{
                        height: "16px",
                      }}
                    />
                  </span>
                  <span className="text-xs md:text-sm text-primary-black flex-[0.4] max-w-[120px]">
                    <Skeleton
                      style={{
                        height: "16px",
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-4 mt-4 p-4 md:p-6 bg-white">
            <div className="grid grid-cols-2 gap-4">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="bg-white p-3 h-[80px] border border-[#D8DDE8] flex flex-col gap-1 items-center justify-center"
                  >
                    <div className="flex justify-center items-center gap-2">
                      <div className="flex-[0.4] w-[clamp(50px,100vw,100px)]">
                        <Skeleton
                          style={{
                            width: "100%",
                            height: 18,
                          }}
                        />
                      </div>
                      <Skeleton
                        circle
                        style={{
                          width: 18,
                          height: 18,
                        }}
                      />
                    </div>
                    <span className=" text-primary-black text-sm text-center flex-[0.4] mx-auto w-[clamp(50px,100%,180px)]">
                      <Skeleton
                        style={{
                          height: 16,
                        }}
                      />
                    </span>
                  </div>
                ))}
            </div>
            <div className="mt-4 md:mt-0">
              <div className="bg-[#FBF7FF] p-3">
                <h3 className="text-base text-primary-black font-medium">
                  <Skeleton width={150} height={20} />
                </h3>
                <span className="text-sm mt-2 block text-primary-gray">
                  <Skeleton width={200} height={16} />
                </span>
              </div>

              <div className="flex flex-col gap-4 mt-2 px-3">
                <div className="flex items-end gap-4 hover:cursor-pointer">
                  <Skeleton circle width={20} height={20} />

                  <Skeleton width={150} height={16} />
                </div>
                <div className="flex items-center gap-4 hover:cursor-pointer">
                  <Skeleton circle width={20} height={20} />

                  <Skeleton width={80} height={16} />
                </div>
                <div className="flex items-center gap-4 hover:cursor-pointer">
                  <Skeleton circle width={20} height={20} />

                  <Skeleton width={120} height={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Tabs>
          <Tab
            label={
              <div className="flex items-center gap-2">
                <img src={account} alt="" width={12} height={12} />
                <span className="">My Account</span>
              </div>
            }
          >
            <div className="py-4">
              <AccountTab />
            </div>
          </Tab>
          <Tab
            label={
              <div className="flex items-center gap-2">
                <img src={org} alt="" width={12} height={12} />
                <span className="">Org Information</span>
              </div>
            }
          >
            <div className="py-4">
              <OrgInfoTab />
            </div>
          </Tab>
        </Tabs> */}
      </div>
    </motion.div>
  );
};

export default AccountPageShimmer;
