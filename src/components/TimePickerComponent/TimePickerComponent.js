import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { times } from "../../utils";
import InputAdornment from "@mui/material/InputAdornment";
import PropTypes from "prop-types";

export const TimePickerComponent = ({ label }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <InputLabel id={`${label}-label`} className="v-hidden">
        {label}
      </InputLabel>
      <Select
        id={label}
        value={value}
        onChange={handleChange}
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

TimePickerComponent.propTypes = {
  label: PropTypes.string.isRequired,
};
