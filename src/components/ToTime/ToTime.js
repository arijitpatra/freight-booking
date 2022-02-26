import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { times } from "../../utils";

export const ToTime = () => {
  const [toTime, setToTime] = useState("");

  const handleToTimeChange = (event) => {
    setToTime(event.target.value);
  };

  return (
    <>
      <InputLabel id="demo-simple-select-label">To</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={toTime}
        onChange={handleToTimeChange}
        style={{ width: "100%" }}
      >
        {times.map((item) => (
          <MenuItem key={`to-${item}`} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};
