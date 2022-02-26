import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import "./Cargo.scss";

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
      <div style={{ marginLeft: "65px" }}>
        {!toggle && (
          <h4 onClick={handleToggle} className="text-orange cursor-pointer">
            + <span className="underline">Add Cargo</span>
          </h4>
        )}
        {toggle && (
          <>
            <h4>Cargo item</h4>
            <Stack spacing={4}>
              <Stack spacing={4} direction="row">
                <Box sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-label">
                    Unloading stop
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                  >
                    <MenuItem value={10}>10 Miles</MenuItem>
                    <MenuItem value={20}>20 Miles</MenuItem>
                    <MenuItem value={30}>30 Miles</MenuItem>
                  </Select>
                </Box>

                <Box sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-label2">Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label2"
                    id="demo-simple-select2"
                    value={age}
                    onChange={handleChange}
                    style={{ width: "100%" }}
                  >
                    <MenuItem value={10}>10 Miles</MenuItem>
                    <MenuItem value={20}>20 Miles</MenuItem>
                    <MenuItem value={30}>30 Miles</MenuItem>
                  </Select>
                </Box>

                <Box sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-label3">
                    PO Number
                  </InputLabel>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Box>
              </Stack>

              <Stack spacing={4} direction="row">
                <Box sx={{ width: "73%" }}>
                  <InputLabel id="demo-simple-select-label3">
                    Quantity
                  </InputLabel>
                  <TextField
                    hiddenLabel
                    id="outlined-basic"
                    variant="outlined"
                    style={{ width: "100%" }}
                  />
                </Box>

                <Box
                  sx={{ width: "73%" }}
                  style={{
                    borderRight: "1px solid #c4c4c4",
                    paddingRight: "1rem",
                  }}
                >
                  <InputLabel id="demo-simple-select-label5">
                    Total Weight
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    value={1}
                    // onChange={handleChange("weight")}
                    onChange={() => {}}
                    endAdornment={
                      <InputAdornment position="end">kg</InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                    style={{ width: "100%" }}
                  />
                </Box>

                <Box sx={{ width: "100%", marginLeft: "1rem !important" }}>
                  <InputLabel id="demo-simple-select-label6">Length</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-length"
                    value={1}
                    // onChange={handleChange("weight")}
                    onChange={() => {}}
                    endAdornment={
                      <InputAdornment position="end">cm</InputAdornment>
                    }
                    aria-describedby="outlined-length-helper-text"
                    inputProps={{
                      "aria-label": "length",
                    }}
                    style={{ width: "100%" }}
                  />
                </Box>

                <Box sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-label7">Width</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-width"
                    value={1}
                    // onChange={handleChange("weight")}
                    onChange={() => {}}
                    endAdornment={
                      <InputAdornment position="end">cm</InputAdornment>
                    }
                    aria-describedby="outlined-width-helper-text"
                    inputProps={{
                      "aria-label": "width",
                    }}
                    style={{ width: "100%" }}
                  />
                </Box>

                <Box sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-label7">Height</InputLabel>
                  <OutlinedInput
                    hiddenLabel
                    id="outlined-adornment-height"
                    value={1}
                    // onChange={handleChange("weight")}
                    onChange={() => {}}
                    endAdornment={
                      <InputAdornment position="end">cm</InputAdornment>
                    }
                    aria-describedby="outlined-height-helper-text"
                    inputProps={{
                      "aria-label": "height",
                    }}
                    style={{ width: "100%" }}
                  />
                </Box>
              </Stack>
            </Stack>

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
          </>
        )}
      </div>
    </>
  );
};
