import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export const DropDownComponent = ({ label, options }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Select
        id={label}
        value={value}
        onChange={handleChange}
        className="w-100"
      >
        {options.map((item) => {
          return (
            <MenuItem key={`${label}-${item.value}`} value={item.value}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};
