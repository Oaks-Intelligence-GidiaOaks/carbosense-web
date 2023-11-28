import React from "react";
import OrgAdminIcon from "../../../assets/icons/OrgAdminIcon.svg";
import alertcircle from "../../../assets/icons/alertcircle.svg";
import log from "../../../assets/icons/log.svg";
import Logout from "../../../assets/icons/Logout.svg";
import trash from "../../../assets/icons/trash.svg";
import { HiOutlinePencil } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { generateInitials } from "../../../utils";
import { editProfile, removeUser } from "../../../features/user/userSlice";
import PropTypes from "prop-types";

const AccountTab = ({ userInfo }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const logoutUser = () => {
    sessionStorage.clear();
    dispatch(removeUser());
  };

  return (
    <div className="">
      <div className="grid md:grid-cols-7 gap-4">
        <div className="md:col-span-4 bg-white p-4 md:p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm text-primary-black font-medium">
              Profile Information
            </h3>

            <button
              onClick={() => dispatch(editProfile(true))}
              className="text-[12px] text-primary-blue py-1 px-2 bg-[#E3ECFF]"
            >
              Edit
            </button>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            <div className="">
              <div className="flex items-center justify-between">
                <span className="text-sm text-primary-gray">Full Name</span>
                <span className="text-sm text-primary-black">
                  {userInfo.fullName}
                </span>
              </div>
            </div>
            <div className="">
              <div className="flex items-center justify-between">
                <span className="text-sm text-primary-gray">Email</span>
                <span className="text-sm text-primary-black">
                  {userInfo.email}
                </span>
              </div>
            </div>
            <div className="">
              <div className="flex items-center justify-between">
                <span className="text-sm text-primary-gray">Phone</span>
                <span className="text-sm text-primary-black">
                  {userInfo.tel}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 bg-white p-4 md:p-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm text-primary-black font-medium">
              Profile Photo
            </h3>
            <span className="text-xs">
              Your profile photo will be visible to all your org members.
            </span>
          </div>
          <div className="flex items-center justify-center py-3">
            {userInfo.profilePic ? (
              <img src="" alt="" className="h-16 w-16 rounded-full border" />
            ) : (
              <div className="w-16 max-w-[64px] h-16 rounded-full border border-bg-ca-purple flex items-center justify-center bg-bg-ca-light-gray">
                <h3 className="text-3xl font-semibold text-primary-purple uppercase">
                  {generateInitials(userInfo.fullName)}
                </h3>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center gap-10 ">
            <button className="text-[12px] text-primary-blue py-1 px-2 bg-[#E3ECFF]">
              Upload picture
            </button>
            <button className="text-[12px] border border-[#E3ECFF] text-primary-blue py-1 px-2 bg-white">
              Remove picture
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white mt-4 p-4 md:p-6 ">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm text-primary-black font-medium">
            Account Information
          </h3>
          <span className="text-xs">
            Your profile photo will be visible to all your org members.
          </span>
        </div>

        <div>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="flex items-center justify-between border p-2">
              <span className="text-xs md:text-sm text-primary-gray">
                User Permission
              </span>
              <div className="p-1 border rounded-3xl flex items-center justify-center gap-2 bg-[#E3ECFF] border-[#E3ECFF]">
                <img src={OrgAdminIcon} alt="" width={12} height={12} />
                <span className="text-xs text-primary-black">
                  Organization Admin
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between border p-3">
              <span className="text-xs md:text-sm text-primary-gray">
                Invited by
              </span>
              <span className="text-xs md:text-sm text-primary-black">
                dwaynecarter@example.com
              </span>
            </div>
            <div className="flex items-center justify-between border p-3">
              <span className="text-xs md:text-sm text-primary-gray">
                Created on
              </span>
              <span className="text-xs md:text-sm text-primary-black">
                {new Date(userInfo.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
                {/* 12 July 2023 */}
              </span>
            </div>
            <div className="flex items-center justify-between border p-3">
              <span className="text-xs md:text-sm text-primary-gray">
                Department
              </span>
              <span className="text-xs md:text-sm text-primary-black">
                Data Analysis
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-4 mt-4 p-4 md:p-6 bg-white">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-3 h-[80px]  border border-[#D8DDE8] flex flex-col gap-1 items-center justify-center">
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-primary-black text-base">0</h3>
              <span className="text-sm text-primary-gray">tCO2e</span>
              <img src={alertcircle} alt="" width={18} height={18} />
            </div>
            <span className=" text-primary-black text-sm text-center">
              My total emissions
            </span>
          </div>
          <div className="bg-white p-3 h-[80px]  border border-[#D8DDE8] flex flex-col gap-1 items-center justify-center">
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-primary-black text-base">0</h3>
              <span className="text-sm text-primary-gray">tCO2e</span>
              <img src={alertcircle} alt="" width={18} height={18} />
            </div>
            <span className=" text-primary-black text-sm text-center">
              My total scope 1 emissions
            </span>
          </div>
          <div className="bg-white p-3 h-[80px]  border border-[#D8DDE8] flex flex-col gap-1 items-center justify-center">
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-primary-black text-base">0</h3>
              <span className="text-sm text-primary-gray">tCO2e</span>
              <img src={alertcircle} alt="" width={18} height={18} />
            </div>
            <span className=" text-primary-black text-sm text-center">
              My total scope 2 emissions
            </span>
          </div>
          <div className="bg-white p-3 h-[80px]  border border-[#D8DDE8] flex flex-col gap-1 items-center justify-center">
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-primary-black text-base">0</h3>
              <span className="text-sm text-primary-gray">tCO2e</span>
              <img src={alertcircle} alt="" width={18} height={18} />
            </div>
            <span className=" text-primary-black text-sm text-center">
              My total scope 3 emissions
            </span>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="bg-[#FBF7FF] p-3">
            <h3 className="text-base text-primary-black font-medium">
              Account Settings
            </h3>
            <span className="text-sm text-primary-gray">
              Manage your account settings
            </span>
          </div>

          <div className="flex flex-col gap-4 mt-2 px-3">
            <div className="flex items-center gap-4 hover:cursor-pointer">
              <img src={log} alt="" width={20} height={20} />
              <span className="text-sm text-primary-gray">Change Password</span>
            </div>
            <div
              onClick={logoutUser}
              className="flex items-center gap-4 hover:cursor-pointer"
            >
              <img src={Logout} alt="" width={20} height={20} />
              <span className="text-sm text-primary-gray">Log out</span>
            </div>
            <div className="flex items-center gap-4 hover:cursor-pointer">
              <img src={trash} alt="" width={20} height={20} />
              <span className="text-sm text-primary-gray">Delete Account</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AccountTab.propTypes = {
  userInfo: PropTypes.object.isRequired,
};

export default AccountTab;
