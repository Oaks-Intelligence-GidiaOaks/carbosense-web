import React, { useEffect, useMemo, useState } from "react";
import { HiArrowLeft } from "react-icons/hi2";
import Pagination from "../../../components/ui/Pagination";
import { AnimatePresence } from "framer-motion";
import InviteStaff from "./InviteStaff";
import CreateDepartment from "./CreateDepartment";
import { useSelector } from "react-redux";
import { getAllDepartment, getAllDepartmentStaff, getAllOrganizationStaff } from "../../../services";
import { useQuery } from "@tanstack/react-query";
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import { AllStaffCard } from "../../../components";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MyDepartment = () => {
  const [showInviteForm, setShowInviteForm] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);
  const [selectedValue, setSelectedValue] = React.useState([]);
  const [selectedLabels, setSelectedLabels] = useState([]);

  const { user } = useSelector((state) => state.user);
  const { orgData } = useSelector((state) => state.org);

  const get_All_Department_staff = useQuery({
    queryKey: ["department_staff"],
    queryFn: () => getAllOrganizationStaff(),
  });


  const handleInviteClick = () => {
    setShowInviteForm(true);
    setShowBackButton(true);
  };

  const handleBackClick = () => {
    setShowInviteForm(false);
    setShowBackButton(false);
  };

  const Options = useMemo(() => {
    return (
      orgData.map((department) => ({
        id: department?._id,
        value: department?.name,
      })) || []
    );
  }, [orgData]);

  const optionsValue = Options.map((items) => items.value);
  const optionsLabel = Options.map((items) => items.value);
  const isAllSelected =
    Options.length > 0 && selectedValue.length === Options.length;

  const handleValue = (e) => {
    const value = e.target.value;
    if (value.includes("all")) {
      setSelectedValue(
        (selectedValue && selectedValue.length) === (Options && Options.length)
          ? []
          : optionsValue
      );
      setSelectedLabels(
        (selectedValue && selectedValue.length) === (Options && Options.length)
          ? []
          : optionsLabel
      );

      return;
    }
    setSelectedValue(value);
    setSelectedLabels(
      value.map((optionsValues) => {
        const option = Options.find((item) => item.value === optionsValues);
        return option ? option.value : "";
      })
    );
  };

  useEffect(() => {
    get_All_Department_staff.refetch();
  }, []);

  return (
    <div>
      <div className="flex item justify-between mb-3">
        {showBackButton ? (
          <div
            className="flex items-center gap-4 hover:cursor-pointer"
            onClick={handleBackClick}
          >
            <HiArrowLeft />
            <span className="text-sm">Back</span>
          </div>
        ) : (
          <div>
            <span className="text-sm text-primary-black">
              0 Staff Total in Escrow Tech
            </span>
          </div>
        )}
        {!showInviteForm && (
          <button
            onClick={handleInviteClick}
            className="text-[12px] border rounded border-primary-blue text-primary-blue py-[6px] px-2  bg-[#E3ECFF]"
          >
            Create Department
          </button>
        )}
      </div>
      {!showInviteForm && (
        <div>
          <FormControl sx={{ width: "30%" }}>

          <InputLabel
              sx={{
                color: "text-gray-600",
                fontWeight: "light",
                fontSize: "16px",
              }}
              id="demo-simple-select-label"
            >
          Select Department Staff
            </InputLabel>
            <Select
              value={selectedValue}
              multiple
              id="multi-select"
              onChange={handleValue}
              renderValue={() => selectedLabels.join(", ")}
              MenuProps={MenuProps}
              label="Select Department Staff"
            >
              <MenuItem value="all">
                <ListItemIcon>
                  <Checkbox checked={isAllSelected}></Checkbox>
                </ListItemIcon>
                <ListItemText primary="Select All"></ListItemText>
              </MenuItem>
              {Options.map((options) => (
                <MenuItem key={options.id} value={options.value}>
                  <ListItemIcon>
                    <Checkbox
                      name="select-checkbox"
                      checked={selectedValue.includes(options.value)}
                    ></Checkbox>
                  </ListItemIcon>
                  <ListItemText primary={options.value}></ListItemText>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      )}

      <div className="mt-4">
        <AnimatePresence mode="sync">
          {showInviteForm ? (
            <CreateDepartment onClose={() => setShowInviteForm(false)} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {get_All_Department_staff?.data?.data.map((staffMember) => (
                <AllStaffCard key={staffMember._id} staffMember={staffMember} />
              ))}
            </div>
          )}

          {!showInviteForm && (
            <div className="flex items-center justify-between my-5">
              <Pagination />
              {/* <div>Loading</div> */}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MyDepartment;
