
import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
} from '@mui/material';

const EmissionsGrid = ({ tableData }) => {
  return (
    <TableContainer sx={{ maxHeight: '250px' }} component={Paper}>
      <Table stickyHeader aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell 
             sx={{
                color: '#5D5D5D',
                fontSize: '14px',
                fontWeight: 'light',
              }}
            >Department</TableCell>
            <TableCell
              sx={{
                color: '#5D5D5D',
                fontSize: '14px',
                fontWeight: 'light',
              }}
            >Percentage</TableCell>
            <TableCell
              sx={{
                color: '#5D5D5D',
                fontSize: '14px',
                fontWeight: 'light',
              }}
            >Emission</TableCell>
            <TableCell
              sx={{
                color: '#5D5D5D',
                fontSize: '14px',
                fontWeight: 'light',
              }}
            >Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData && tableData.length > 0 ? (
            tableData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell align='center'>{row.email}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={2}>
                <Typography variant='body1'   sx={{
                color: '#0E0E0E',
                fontSize: '12px',
                fontWeight: 'light',
              }}>
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


const tableData = [
    {}
]