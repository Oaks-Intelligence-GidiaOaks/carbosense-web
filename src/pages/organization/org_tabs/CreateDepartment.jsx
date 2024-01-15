import React, { useState, useEffect, useMemo } from "react";
import { Button, TextInput, DropDownMenu } from "../../../components/ui";
import { initialRight, slideLeft } from "../../../constants/framer";
import { AnimatePresence, motion } from "framer-motion";
import validator from "validator";
import PropTypes from "prop-types";
import { handleAxiosError } from "../../../utils";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createDepartment,
  getAllOrganizationStaff,
  getOrganizationPendingStaff,
} from "../../../services";
import toast from "react-hot-toast";
import secureLocalStorage from "react-secure-storage";
import {
  setDepartmentData,
  setDepartmentScreen,
} from "../../../features/createDepartment/createDepartSlice";
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";

const CreateDepartment = ({ onClose }) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { user } = useSelector((state) => state.user);

  const { data } = useQuery({
    queryKey: ["staff"],
    queryFn: () => getAllOrganizationStaff(user._id),
  });

  // const [departmentData, setDepartmentData] = useState(() => {
  //   return secureLocalStorage.getItem("DAT") || null;
  // });
  const [values, setValues] = useState({
    name: "",
    staff: [],
  });

  const [selectedLabels, setSelectedLabels] = useState([]);

  const options = useMemo(() => {
    return (
      data?.data.map((staff) => ({
        id: staff._id,
        value: staff._id,
        label: staff.fullName,
      })) || []
    );
  }, [data?.data]);

  const isAllSelected =
    options.length > 0 && values.staff.length === options.length;
  const handleChange = (name, value) => {
    // Convert a single value to an array
    const selectedValues = Array.isArray(value) ? value : [value];

    if (selectedValues.includes("all")) {
      const allStaffIds = options.map((option) => option.value);
      const updatedStaff =
        values.staff.length === allStaffIds.length ? [] : allStaffIds;

      setValues({
        ...values,
        [name]: updatedStaff,
      });

      setSelectedLabels(
        updatedStaff.map(
          (id) => options.find((opt) => opt.value === id)?.label || ""
        )
      );
    } else {
      setValues({
        ...values,
        [name]: selectedValues[0], // Assuming `name` is a string
      });

      setSelectedLabels(
        selectedValues.map(
          (id) => options.find((opt) => opt.value === id)?.label || ""
        )
      );
    }
  };

  const departmentMutation = useMutation({
    mutationKey: ["invite_staff"],
    mutationFn: (data) => createDepartment(data),
    onSuccess: (data) => {
      localStorage.setItem("createDepartmentData", JSON.stringify(data));
      dispatch(setDepartmentData(data));
      dispatch(setDepartmentScreen({ setDepartmentScreen: true }));
      setValues({
        name: "",
        staff: [],
      });
      queryClient.invalidateQueries(["staff"]);
    },
    onError: (e) => toast.error(handleAxiosError(e)),
  });

  const handleCreateDepartment = () => {
    const payload = {
      name: values.name,
      staff: Array.isArray(values.staff) ? values.staff : [],
    };
    departmentMutation.mutate(payload);
  };

  useEffect(() => {
    const staffArray = Array.isArray(values.staff) ? values.staff : [];

    setSelectedLabels(
      staffArray.map(
        (id) => options.find((opt) => opt.value === id)?.label || ""
      )
    );
  }, [values.staff, options]);

  return (
    <>
      <motion.div
        initial={initialRight}
        animate={slideLeft}
        exit={initialRight}
        className="bg-white px-4 py-4 md:px-10 md:py-10 rounded-sm"
      >
        <div className="mb-7">
          <h3 className="text-base font-medium text-primary-black mb-2">
            Create Department
          </h3>
          <span className="text-sm text-primary-gray">
            Add a new department to your organization’s Carbosense account
          </span>
        </div>

        <div className="flex gap-x-6">
          <TextInput
            value={values.name}
            name={"name"}
            label={"Department name"}
            valueSetter={handleChange}
            width={"w-full"}
          />

          <FormControl sx={{ width: "100%" }}>
            <InputLabel
              sx={{
                color: "text-gray-600",
                fontWeight: "light",
                fontSize: "16px",
              }}
              id="demo-simple-select-label"
            >
              {" "}
              Select Staff
            </InputLabel>
            <Select
              multiple
              value={Array.isArray(values.staff) ? values.staff : []}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={(event) => handleChange("staff", event.target.value)}
              label="Select Staff"
              sx={{
                color: "text-gray-600",
                fontWeight: "light",
                fontSize: "16px",
              }}
              renderValue={() => selectedLabels.join(", ")}
            >
              <MenuItem value="all">
                <ListItemIcon>
                  <Checkbox checked={isAllSelected}></Checkbox>
                </ListItemIcon>
                <ListItemText primary="Select All"></ListItemText>
              </MenuItem>
              {options.map((option) => (
                <MenuItem key={option.id} value={option.value}>
                  <ListItemIcon>
                    <Checkbox
                      name="select-checkbox"
                      checked={
                        Array.isArray(values.staff) &&
                        values.staff.includes(option.value)
                      }
                    ></Checkbox>
                  </ListItemIcon>
                  <ListItemText primary={option.label}></ListItemText>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="flex justify-end mt-4 gap-x-4">
          <Button
            content="Cancel"
            bgColor="bg-white"
            textColor="text-primary-blue"
            hoverColor="hover:text-red-500 hover:border-red-500"
            width="w-[clamp(80px,20%,120px)]"
            height="h-8"
            borderStyle="border border-primary-blue border-primary-blue"
            textSize="text-sm"
            callback={onClose}
          />
          <Button
            content="Create"
            width="w-[clamp(80px,20%,120px)]"
            height="h-8"
            textSize="text-sm"
            // disabled={
            //   validator.isEmpty(values.name) || departmentMutation.isPending
            // }
            disabled={
              (Array.isArray(values.name) && values.name.length === 0) ||
              departmentMutation.isPending
            }
            isLoading={departmentMutation.isPending}
            callback={handleCreateDepartment}
          />
        </div>
      </motion.div>
    </>
  );
};

createDepartment.propTypes = {
  onClose: PropTypes.func,
};

export default CreateDepartment;
