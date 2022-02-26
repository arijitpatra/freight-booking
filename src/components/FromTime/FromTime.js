import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { times } from "../../utils";

export const FromTime = () => {
  const [fromTime, setFromTime] = useState("");

  const handleFromTimeChange = (event) => {
    setFromTime(event.target.value);
  };

  return (
    <>
      <InputLabel id="demo-simple-select-label">From</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={fromTime}
        onChange={handleFromTimeChange}
        style={{ width: "100%" }}
      >
        {times.map((item) => (
          <MenuItem key={`from-${item}`} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};
