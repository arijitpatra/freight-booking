import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

export const TextBoxComponent = ({ label, type = "number" }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <TextField
        val={value}
        id={label}
        variant="outlined"
        className="w-100"
        onChange={handleChange}
        type={type}
      />
    </>
  );
};

TextBoxComponent.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};
