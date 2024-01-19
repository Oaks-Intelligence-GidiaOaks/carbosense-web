import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
} from "@mui/material";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const getInitials = (departmentName) => {
  if (!departmentName) return null;

  const words = departmentName.split(" ");
  const initials = words.map((word) => word[0].toUpperCase()).join("");

  return (
    <span
      style={{
        color: "#9553A0",
        fontFamily: "Satoshi",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 800,
        lineHeight: "27.934px",
        letterSpacing: "-0.594px",
        marginRight: "2px",
        backgroundColor: "",
        padding: "8px",
        borderRadius: "100%",
      }}
    >
      {initials}
    </span>
  );
};

const EmissionsGrid = ({ tableData }) => {
  return (
    <TableContainer
      sx={{
        fontFamily: "Satoshi !important",
        boxShadow: "none",
        borderRadius: 0,
      }}
      component={Paper}
    >
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                // color: "#5D5D5D",
                fontSize: "14px",
                fontFamily: "Satoshi !important",
              }}
            >
              Department
            </TableCell>
            <TableCell
              sx={{
                // color: "#5D5D5D",
                fontSize: "14px",
                fontFamily: "Satoshi !important",
              }}
            >
              Percentage
            </TableCell>
            <TableCell
              sx={{
                // color: "#5D5D5D",
                fontSize: "14px",
                fontFamily: "Satoshi !important",
              }}
            >
              Emission
            </TableCell>
            <TableCell
              sx={{
                // color: "#5D5D5D",
                fontSize: "14px",
                fontFamily: "Satoshi !important",
              }}
            >
              Source
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData && tableData.length > 0 ? (
            tableData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <div>
                    <h3 className=" text-primary-black font-medium">
                      {" "}
                      {getInitials(row.department_name)} {row.department_name}
                    </h3>
                    <span className=" ml-[8px] text-primary-gray">
                      {row.staff_count} team members
                    </span>
                  </div>
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Satoshi !important",
                    color: "#219468",
                  }}
                >
                  {row.percentage_contribution}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Satoshi !important",
                  }}
                >
                  <span style={{ fontWeight: 700 }}>{row.total_emission}</span>{" "}
                  {"tCO2e"}
                </TableCell>
                <TableCell
                 sx={{
                  fontSize: "14px",
                  fontFamily: "Satoshi !important",
                }}
                >
                  {row.emission_sources}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={2}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#0E0E0E",
                    fontFamily: "Satoshi !important",
                  }}
                >
                  No logs to display
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmissionsGrid;


