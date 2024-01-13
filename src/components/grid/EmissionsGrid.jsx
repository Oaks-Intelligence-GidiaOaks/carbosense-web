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

const EmissionsGrid = ({ tableData }) => {
  return (
    <TableContainer
      sx={{
        maxHeight: "250px",
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
              Sources
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData && tableData.length > 0 ? (
            tableData.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.departmentName}</TableCell>
                <TableCell>{row.percentageContribution}</TableCell>
                <TableCell>
                  {`${row.totalEmissions} `}{" "}
                  <span className="text-[#767676]">tCO2e</span>
                </TableCell>
                <TableCell align="center">{row.emissionSources}</TableCell>
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
