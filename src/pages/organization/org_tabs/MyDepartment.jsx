import React, { useEffect, useMemo, useState } from "react";
import { HiArrowLeft } from "react-icons/hi2";
import Pagination from "../../../components/ui/Pagination";
import { AnimatePresence } from "framer-motion";
import InviteStaff from "./InviteStaff";
import CreateDepartment from "./CreateDepartment";
import { useSelector } from "react-redux";
import {
  getAllDepartment,
  getAllDepartmentStaff,
  getAllOrganizationStaff,
} from "../../../services";
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

  const { deptData } = useSelector((state) => state.org);

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
      deptData?.map((department) => ({
        id: department?._id,
        value: department?.name,
      })) || []
    );
  }, [deptData]);

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
     
      <div className="mt-4">
        <AnimatePresence mode="sync">
          <CreateDepartment onClose={() => setShowInviteForm(false)} />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MyDepartment;
