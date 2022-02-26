import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { times } from "../../utils";
import InputAdornment from "@mui/material/InputAdornment";

export const TimePickerComponent = ({ label }) => {
  const [time, setTime] = useState("");

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <>
      <InputLabel id="demo-simple-select-label" className="v-hidden">
        {label}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={time}
        onChange={handleTimeChange}
        className="w-100"
        startAdornment={
          <InputAdornment position="start">{label}</InputAdornment>
        }
      >
        {times.map((item) => (
          <MenuItem key={`{label}-${item}`} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};
