import React, { useMemo, useState } from "react";
import { HiArrowLeft } from "react-icons/hi2";
import Pagination from "../../../components/ui/Pagination";
import { AnimatePresence } from "framer-motion";
import InviteStaff from "./InviteStaff";
import CreateDepartment from "./CreateDepartment";
import { useSelector } from "react-redux";
import { getAllDepartment, getAllDepartmentStaff } from "../../../services";
import { useQuery } from "@tanstack/react-query";
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  OutlinedInput,
} from "@mui/material";

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
  const [department, setDepartment] = React.useState([]);
  const [selectedLabels, setSelectedLabels] = useState([]);

  console.log(selectedLabels, "Labels");

  const { data } = useQuery({
    queryKey: ["department_staff"],
    queryFn: () => getAllDepartment(),
  });

  const handleInviteClick = () => {
    setShowInviteForm(true);
    setShowBackButton(true);
  };

  const handleBackClick = () => {
    setShowInviteForm(false);
    setShowBackButton(false);
  };

  const department_name = useMemo(() => {
    if (data) {
      return data?.data?.map((department) => ({
        id: department?._id,
        name: department?.name,
      })) || [];
    } else {
      return [];
    }
  }, [data]);

  
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
  
    if (value.includes("all")) {
      setDepartment((prevDepartment) =>
        prevDepartment.includes("all") ? [] : department_name.map(dep => dep.id)
      );
      setSelectedLabels(
        (prevSelectedLabels) =>
          prevSelectedLabels.length === department_name.length
            ? []
            : department_name.map((dep) => dep.name)
      );
    } else {
      setDepartment(value);
      setSelectedLabels(
        value.map((val) =>
          department_name.find((dep) => dep.id === val)?.name || ""
        )
      );
    }
  };
  
  const handleSelectAllClick = () => {
    if (!department.includes("all")) {
      // Set department state to an array of all department IDs
      setDepartment(["all", ...(data?.data?.map((dep) => dep._id) || [])]);
      setSelectedLabels(["Select All Departments", ...data?.data?.map((dep) => dep.name) || []]);
    } else {
      // Deselect all departments, including "Select All Departments"
      setDepartment([]);
      setSelectedLabels([]);
    }
  };
  
  

  const isAllSelected = department.length === data?.data?.length;


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
            Select Department
          </InputLabel>
          <Select
  multiple
  value={department}
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  onChange={handleChange}
  label="Select Department"
  sx={{
    color: "text-gray-600",
    fontWeight: "light",
    fontSize: "16px",
  }}
  renderValue={() => {
    if (department.includes("all")) {
      return selectedLabels;
    }
    return selectedLabels.join(", ");
  }}
  MenuProps={MenuProps}
  input={<OutlinedInput label="Select Department" />}
  SelectDisplayProps={{
    onClick: handleSelectAllClick,
  }}
>
  <MenuItem key="all" value="all">
    <ListItemIcon>
      <Checkbox
        checked={isAllSelected}
        indeterminate={
          department.length > 0 && !department.includes("all")
        }
      ></Checkbox>
    </ListItemIcon>
    <ListItemText primary="Select All Departments"></ListItemText>
  </MenuItem>
  {data?.data?.map((option) => (
    <MenuItem key={option._id} value={option._id}>
      <ListItemIcon>
        <Checkbox checked={department.includes(option._id)}></Checkbox>
      </ListItemIcon>
      <ListItemText primary={option.name}></ListItemText>
    </MenuItem>
  ))}
</Select>
        </FormControl>
      </div>
      <div></div>
      <div className="mt-4">
        <AnimatePresence mode="sync">
          {showInviteForm ? (
            <CreateDepartment onClose={() => setShowInviteForm(false)} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* <AllStaffCard />
              <AllStaffCard />
              <AllStaffCard /> */}
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
