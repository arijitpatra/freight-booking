import { useState } from "react";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

export const DatePickerComponent = ({ label }) => {
  const today = new Date();
  const [value, setValue] = useState(null);

  const handleChange = (data) => {
    setValue(data);
  };

  return (
    <>
      <InputLabel id="pick-up-date-label">{label}</InputLabel>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          id={label}
          inputFormat="dd/MM/yy"
          mask="__/__/__"
          minDate={today}
          value={value}
          onChange={(data) => handleChange(data)}
          renderInput={(params) => <TextField {...params} className="w-100" />}
        />
      </LocalizationProvider>
    </>
  );
};
