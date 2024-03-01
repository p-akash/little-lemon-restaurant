import React, { useState } from "react";
import { Grid, TextField, Select, InputLabel, MenuItem, FormControl, Button } from "@mui/material";
import dayjs from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import "./BookingForm.css";

function BookingForm({ dispatch, state }) {
  const [value, setValue] = useState(dayjs().add(1, "hour"));
  const [age, setAge] = React.useState(20);
  return (
    <form className="booking-form" onSubmit={()=>{}}>
        <Grid container spacing={2} >
           <Grid item xs={6}>
              <TextField
                id="firstName"
                label="First Name"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="lastName"
                label="Last Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="Email"
                label="Email"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* <DemoContainer components={['DatePicker', 'DatePicker']}> */}
              <DateTimePicker
                label="Select Date and Time"
                value={value}
                disablePast
                // defaultValue={dayjs()}
                onChange={(newValue) => setValue(newValue)}
              />
              {/* </DemoContainer> */}
            </LocalizationProvider>
            </Grid>
            <Grid item xs={6}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={()=>{}}
            >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          </FormControl>
            </Grid>
            <Grid item xs={6}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={()=>{}}
            >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          </FormControl>
            </Grid>
            <Grid item xs={6}>
            <TextField
                id="firstName"
                label="First Name"
                fullWidth
                multiline
                maxRows={1}
              />
            </Grid>
        </Grid>
        <Button variant="contained">Contained</Button>
    </form>
  );
}

export default BookingForm;
