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
import { type } from "@testing-library/user-event/dist/type";

export const Cargo = () => {
  const [toggle, setToggle] = useState(false);
  const [unloadingStop, setUnloadingStop] = useState("");
  const [type, setType] = useState("");
  const [poNumber, setPoNumber] = useState("");
  const [quantity, setQuantity] = useState("");
  const [totalWeight, setTotalWeight] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const handleUnloadingStopChange = (event) => {
    setUnloadingStop(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handlePoNumberChange = (event) => {
    setPoNumber(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleTotalWeightChange = (event) => {
    setTotalWeight(event.target.value);
  };

  const handleLengthChange = (event) => {
    setLength(event.target.value);
  };

  const handleWidthChange = (event) => {
    setWidth(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
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
            <h3>Cargo item</h3>
            <Stack spacing={4}>
              <Stack spacing={4} direction="row">
                <Box sx={{ width: "100%" }}>
                  <InputLabel id="unloading-stop-label">
                    Unloading stop
                  </InputLabel>
                  <Select
                    id="unloading-stop"
                    value={unloadingStop}
                    onChange={handleUnloadingStopChange}
                    style={{ width: "100%" }}
                    placeholder="Please select an option"
                  >
                    <MenuItem value={10}>10 Miles</MenuItem>
                    <MenuItem value={20}>20 Miles</MenuItem>
                    <MenuItem value={30}>30 Miles</MenuItem>
                  </Select>
                </Box>

                <Box sx={{ width: "100%" }}>
                  <InputLabel id="type-label">Type</InputLabel>
                  <Select
                    id="type"
                    value={type}
                    onChange={handleTypeChange}
                    style={{ width: "100%" }}
                    placeholder="Please select an option"
                  >
                    <MenuItem value="air">Air Freight</MenuItem>
                    <MenuItem value="road">Road Freight</MenuItem>
                    <MenuItem value="sea">Sea Freight</MenuItem>
                  </Select>
                </Box>

                <Box sx={{ width: "100%" }}>
                  <InputLabel id="po-number-label">PO Number</InputLabel>
                  <TextField
                    val={poNumber}
                    id="po-number"
                    variant="outlined"
                    style={{ width: "100%" }}
                    onChange={handlePoNumberChange}
                  />
                </Box>
              </Stack>

              <Stack spacing={4} direction="row">
                <Box sx={{ width: "73%" }}>
                  <InputLabel id="quantity-label">Quantity</InputLabel>
                  <TextField
                    val={quantity}
                    id="quantity"
                    variant="outlined"
                    style={{ width: "100%" }}
                    onChange={handleQuantityChange}
                  />
                </Box>

                <Box
                  sx={{ width: "73%" }}
                  style={{
                    borderRight: "1px dotted #c4c4c4",
                    paddingRight: "1rem",
                  }}
                >
                  <InputLabel id="total-weight-label">Total Weight</InputLabel>
                  <OutlinedInput
                    val={totalWeight}
                    id="total-weight"
                    onChange={handleTotalWeightChange}
                    endAdornment={
                      <InputAdornment position="end">kg</InputAdornment>
                    }
                    aria-describedby="total weight"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                    style={{ width: "100%" }}
                  />
                </Box>

                <Box sx={{ width: "100%", marginLeft: "1rem !important" }}>
                  <InputLabel id="length-label">Length</InputLabel>
                  <OutlinedInput
                    id="length"
                    value={length}
                    onChange={handleLengthChange}
                    endAdornment={
                      <InputAdornment position="end">cm</InputAdornment>
                    }
                    aria-describedby="length"
                    inputProps={{
                      "aria-label": "length",
                    }}
                    style={{ width: "100%" }}
                  />
                </Box>

                <Box sx={{ width: "100%" }}>
                  <InputLabel id="width-label">Width</InputLabel>
                  <OutlinedInput
                    id="width"
                    value={width}
                    onChange={handleWidthChange}
                    endAdornment={
                      <InputAdornment position="end">cm</InputAdornment>
                    }
                    aria-describedby="width"
                    inputProps={{
                      "aria-label": "width",
                    }}
                    style={{ width: "100%" }}
                  />
                </Box>

                <Box sx={{ width: "100%" }}>
                  <InputLabel id="height-label">Height</InputLabel>
                  <OutlinedInput
                    id="height"
                    value={height}
                    onChange={handleHeightChange}
                    endAdornment={
                      <InputAdornment position="end">cm</InputAdornment>
                    }
                    aria-describedby="height"
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
              style={{ justifyContent: "end", marginTop: "2rem" }}
            >
              <span
                onClick={handleToggle}
                className="fw-600 text-gray cursor-pointer fs-18"
              >
                Cancel
              </span>
              <span className="fw-600 text-orange underline cursor-not-allowed fs-18">
                Save
              </span>
            </Stack>
            <div></div>
          </>
        )}
      </div>
    </>
  );
};
