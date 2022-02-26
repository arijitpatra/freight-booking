import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";

export const AdornmentBoxComponent = ({ label, adornmentText }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <OutlinedInput
        id={label}
        value={value}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">{adornmentText}</InputAdornment>
        }
        aria-describedby={label}
        inputProps={{
          "aria-label": label,
        }}
        style={{ width: "100%" }}
      />
    </>
  );
};
