import React, { useState } from 'react';
import { Stack, TextField } from '@mui/material';

const InviteStaff = () => {
  const [values, setValues] = useState({
    email: '',
    phoneNumber: '',
  });
  const handleChange = (field) => (event) => {
    setValues({
      ...values,
      [field]: event.target.value,
    });
  };
  const handleSendInvite = () => {
    console.log('Values:', values);
  };
  return (
    <div className='bg-white px-4 py-4 md:px-10 md:py-10 rounded-sm'>
      <div className='mb-7'>
        <h3 className='text-base font-medium text-primary-black mb-2'>Send an invite</h3>
        <span className='text-sm text-primary-gray'>Add a new member to your organization’s Carbosense account</span>
      </div>

      <Stack
        spacing={{ xs: 4, md: 4 }}
        direction={{ xs: 'column', md: 'row' }}
      >
        <TextField
          sx={{
            width: '100%',
            '& .MuiInputBase-root': {
              height: 50,
            },
            '& .MuiInputLabel-root': {
              fontSize: '14px',
              color: 'black',
            },
            '& .MuiInputLabel-asterisk': {
              color: 'red',
            },
          }}
          fullWidth
          required
          label='Email address'
          variant='outlined'
          value={values.email}
          onChange={handleChange('email')}
        />
        <TextField
          sx={{
            width: '100%',
            '& .MuiInputBase-root': {
              height: 50,
            },
            '& .MuiInputLabel-root': {
              fontSize: '14px',
              color: 'black',
            },
            '& .MuiInputLabel-asterisk': {
              color: 'red',
            },
            '@media (min-width: 600px)': {
              marginLeft: '16px',
            },
          }}
          required
          label='Phone Number'
          variant='outlined'
          value={values.phoneNumber}
          onChange={handleChange('phoneNumber')}
        />
      </Stack>
      <div className='flex justify-end mt-4'>
        <button className='text-[12px] border border-primary-blue text-primary-blue py-1 px-2 bg-[#E3ECFF]'>
          Cancel
        </button>
        <button className='text-[12px] bg-primary-blue text-white py-1 px-2 ml-2' onClick={handleSendInvite} >
          Send Invite
        </button>
      </div>
    </div>
  );
};

export default InviteStaff;
