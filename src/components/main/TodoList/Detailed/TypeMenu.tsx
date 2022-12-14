import * as React from 'react';
import TextField from '@mui/material/TextField';
import { MenuItem, Typography } from '@mui/material';
import { FormProps } from '../../../../setup/interfaces';

export default function TypeMenu({
  name,
  value,
  onChange,
  options,
}: FormProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <Typography variant="h6">Type: </Typography>
      <TextField
        name={name}
        type="select"
        select
        variant="standard"
        value={value}
        SelectProps={{ IconComponent: () => null }}
        sx={{
          marginLeft: '0.3rem',
        }}
        InputProps={{
          disableUnderline: true,
          style: { fontSize: '1.25rem' },
        }}
        onChange={onChange}
      >
        {React.Children.toArray(
          options.map((option: any) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))
        )}
      </TextField>
    </div>
  );
}
