import React, { useState } from "react";
import { Grid, TextField, Select, InputLabel, MenuItem, FormControl, Button } from "@mui/material";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import validator from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function BookingForm() {
  const initalBooking =  {
    firstName: "",
    lastName:"",
    email:"",
    dateAndTime: dayjs().add(1, "hour"),
    numberOfPeople:"1",
    occsion:"",
    specialRequest:""
  }
  const initialErrorMessage =  {
    firstName: "",
    lastName:"",
    email:"",
    dateAndTime:"",
    numberOfPeople:"",
  }
  const [booking, setBooking] = useState (initalBooking)
  const [errorMessage, setErrorMessage] = useState(initialErrorMessage)
  const handalSubmit = () => {
    let error = {}
    if(validator.isEmpty(booking.firstName)){
      error = {...error, firstName: "Please enter your First Name"}
    }
    if(validator.isEmpty(booking.lastName)){
      error = {...error, lastName: "Please enter your Last Name"}
    }
    if(validator.isEmpty(booking.email) || !validator.isEmail(booking.email)){
      error = {...error, email: "Please the valid email address"}
    }
    if (Object.keys(error).length === 0){
      toast("Yor booking is confirmed");
      setBooking(initalBooking)
      setErrorMessage(initialErrorMessage)
    } else{
      setErrorMessage(error)
    }
  }
  return (
    <>
      <ToastContainer />
    <form className="booking-form"> 
      <Grid container spacing={2} >
        <Grid item xs={6}>
          <TextField
            id="firstName"
            error={errorMessage.firstName !== ""}
            label="First Name"
            value={booking.firstName}
            onChange={(e)=>{
              setBooking({
              ...booking,
              firstName: e.target.value })
            }}
            helperText={errorMessage.firstName}
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
            error={errorMessage.lastName !== ""}
            helperText={errorMessage.lastName}
            required
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
            error={errorMessage.email !== ""}
            helperText={errorMessage.email}
            required
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
              <MenuItem value={"1"}>one</MenuItem>
              <MenuItem value={"2"}>Two</MenuItem>
              <MenuItem value={"3"}>Three</MenuItem>
              <MenuItem value={"4"}>Four</MenuItem>
              <MenuItem value={"5"}>Five</MenuItem>
              <MenuItem value={"6"}>Six</MenuItem>
              <MenuItem value={"7"}>Seven+</MenuItem>
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
    </>
  );
}

export default BookingForm;
