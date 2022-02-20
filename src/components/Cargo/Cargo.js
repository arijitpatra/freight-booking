import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export const Cargo = () => {
  const [toggle, setToggle] = useState(false);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleToggle = () => {
    setToggle((data) => !data);
  };

  return (
    <>
      {!toggle && <h4 onClick={handleToggle}>+ Add Cargo</h4>}
      {toggle && (
        <div>
          <h4>Cargo item</h4>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Unloading stop
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Please select an option"
                onChange={handleChange}
              >
                <MenuItem value={10}>10 Miles</MenuItem>
                <MenuItem value={20}>20 Miles</MenuItem>
                <MenuItem value={30}>30 Miles</MenuItem>
              </Select>

              {/* <InputLabel id="demo-simple-select-label2">Type</InputLabel>
              <Select
                labelId="demo-simple-select-label2"
                id="demo-simple-select2"
                value={age}
                label="Please select an option"
                onChange={handleChange}
              >
                <MenuItem value={10}>10 Miles</MenuItem>
                <MenuItem value={20}>20 Miles</MenuItem>
                <MenuItem value={30}>30 Miles</MenuItem>
              </Select> */}
            </FormControl>
          </Box>
          <Stack
            spacing={2}
            direction="row"
            style={{ justifyContent: "end", marginTop: "1rem" }}
          >
            <Button variant="text" onClick={handleToggle}>
              Cancel
            </Button>
            <Button variant="contained">Save</Button>
          </Stack>
          <div></div>
        </div>
      )}
    </>
  );
};
