import React, { useState } from 'react';
import { Stack, TextField } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { inviteStaff } from '../../../services';
import toast from "react-hot-toast";
import { Spinner } from '../../../components/ui';

const InviteStaff = () => {
  const [values, setValues] = useState({
    email: '',
    fullName: '',
  });
  const handleChange = (field) => (event) => {
    setValues({
      ...values,
      [field]: event.target.value,
    });
  };


  const {mutateAsync: inviteStaffMutation, isLoading} = useMutation({
    mutationFn: inviteStaff,
  })
 
  const handleSendInvite = async () => {
    try {
      await inviteStaffMutation({
        email: values.email,
        fullName: values.fullName,
      }); 
      toast.success('Invite sent successfully!', {
        duration: 3000, 
        position: 'top-center', 
      });
      setValues({
        email: '',
        fullName: '',
      });
    } catch (err) {
      const errorMessage = err?.response?.data?.message || 'Error sending invite. Please try again.';
      toast.error(errorMessage, {
        duration: 5000, 
        position: 'top-center',
      });
    }
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
          label='Full Name'
          variant='outlined'
          value={values.fullName}
          onChange={handleChange('fullName')}
        />
      </Stack>
      <div className='flex justify-end mt-4'>
        <button className='text-[12px] border border-primary-blue text-primary-blue py-1 px-2 bg-[#E3ECFF]'>
          Cancel
        </button>
        <button className='text-[12px] bg-primary-blue text-white py-1 px-2 ml-2' onClick={handleSendInvite} >
        {isLoading ? <Spinner /> : 'Send Invite'}
        </button>
      </div>
    </div>
  );
};

export default InviteStaff;
