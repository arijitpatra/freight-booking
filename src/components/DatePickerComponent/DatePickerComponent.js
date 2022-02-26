import { useState } from "react";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

export const DatePickerComponent = () => {
  const [pickUpDate, setPickUpDate] = useState(null);

  const handlePickUpDateChange = (data) => {
    setPickUpDate(data);
  };
  return (
    <>
      <InputLabel id="pick-up-date-label">Pick up date</InputLabel>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          id="pick-up-date"
          inputFormat="dd/MM/yy"
          value={pickUpDate}
          onChange={(data) => handlePickUpDateChange(data)}
          renderInput={(params) => <TextField {...params} className="w-100" />}
        />
      </LocalizationProvider>
    </>
  );
};
