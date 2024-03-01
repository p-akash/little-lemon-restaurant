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
  const [booking, setBooking] = useState (
    {
      firstName: " ",
      lastName:"",
      email:"",
      dateAndTime: dayjs().add(1, "hour"),
      numberOfPeople:0,
      occsion:"",
      specialRequest:""
    }
  )
  const handalSubmit = () => {
    alert("Success")
  }
  return (
    <form className="booking-form">
      <Grid container spacing={2} >
        <Grid item xs={6}>
          <TextField
            id="firstName"
            label="First Name"
            value={booking.firstName}
            onChange={(e)=>{
              setBooking({
              ...booking,
              firstName: e.target.value })
            }}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="lastName"
            label="Last Name"
            value={booking.lastName}
            onChange={(e)=>{
              setBooking({
              ...booking,
              lastName: e.target.value })
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            label="Email"
            value={booking.email}
            onChange={(e)=>{
              setBooking({
              ...booking,
              email: e.target.value })
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* <DemoContainer components={['DatePicker', 'DatePicker']}> */}
            <DateTimePicker
              label="Select Date and Time"
              value={booking.dateAndTime}
              disablePast
              // defaultValue={dayjs()}
              onChange={(newValue) => setBooking(
                {
                  ...booking,
                  dateAndTime: newValue
                }
              )}
            />
            {/* </DemoContainer> */}
          </LocalizationProvider>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Number of People</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={booking.numberOfPeople}
              label="Number of People"
              onChange={(e) => { setBooking(
                {
                  ...booking,
                  numberOfPeople: e.target.value
                }
              ) }}
            >
              <MenuItem value={1}>one</MenuItem>
              <MenuItem value={2}>Two</MenuItem>
              <MenuItem value={3}>Three</MenuItem>
              <MenuItem value={4}>Four</MenuItem>
              <MenuItem value={5}>Five</MenuItem>
              <MenuItem value={6}>Six</MenuItem>
              <MenuItem value={7}>Seven+</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select an occsion (optional)</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={booking.occsion}
              label="Select an occsion (optional)"
              onChange={(e) => {setBooking({
                ...booking,
                occsion: e.target.value
              }) }}
            >
              <MenuItem value={"Birthday"}>Birthday</MenuItem>
              <MenuItem value={"Date"}>Date</MenuItem>
              <MenuItem value={"Anniversary"}>Anniversary</MenuItem>
              <MenuItem value={"Special Occsion"}>Special Occsion</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="Special Request"
            label="Specail Request(Optional)"
            value={booking.specialRequest}
            fullWidth
            multiline
            onChange={(e) => {setBooking({
              ...booking,
              specialRequest: e.target.value
            }) }}
            maxRows={1}
          />
        </Grid>
        <Grid item xs={12}>
          <Button color="success" variant="contained" onClick={handalSubmit}>Complte Reservation</Button>
        </Grid>
      </Grid>

    </form>
  );
}

export default BookingForm;
