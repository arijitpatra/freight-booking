import { useState } from "react";
import PropTypes from "prop-types";
import "./RouteDetails.scss";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import TimePicker from "@mui/lab/TimePicker";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Cargo } from "../Cargo";
import { LocationMarker } from "../LocationMarker";
import { formatTime } from "../../utils";

export const RouteDetails = ({ stops, schedulingStrategy, canAddCargo }) => {
  const [value, setValue] = useState(null);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      {stops.map((item, i) => {
        return (
          <div className="row">
            <div className="routes">
              <LocationMarker
                key={item}
                index={i}
                lastIndex={stops.length - 1}
              />
              <section key={item.company} className="company">
                <div className="fw-800 fs-18">{item.address}</div>
                <div>{item.company}</div>
                <div>
                  <span class="text-gray fw-600">Opening Hours: </span>{" "}
                  <span class="fw-600">
                    {formatTime(item.openingHours.from)} -{" "}
                    {formatTime(item.openingHours.to)}
                  </span>
                </div>
              </section>

              <div className="right">
                {schedulingStrategy === "fixed" && (
                  <section className="dateTime">
                    {i === 0 ? (
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="Pick up date"
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    ) : (
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <div>Estimated Arrival</div>
                        <div>-</div>
                      </div>
                    )}
                  </section>
                )}

                {schedulingStrategy === "semiFlexible" && (
                  <section className="dateTime">
                    {i === 0 ? (
                      <Stack
                        spacing={2}
                        direction="row"
                        style={{ justifyContent: "end", marginTop: "1rem" }}
                      >
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <InputLabel id="demo-simple-select-label">
                            Pick up date
                          </InputLabel>
                          <DatePicker
                            value={value}
                            onChange={(newValue) => {
                              setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                          {/* 
                          <Box sx={{ width: "50ch" }}>
                            <InputLabel id="demo-simple-select-label">
                              From
                            </InputLabel>
                            <TimePicker
                              value={value}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </Box>

                          <Box sx={{ width: "50ch" }}>
                            <InputLabel id="demo-simple-select-label">
                              To
                            </InputLabel>
                            <TimePicker
                              value={value}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </Box> */}

                          <Box sx={{ width: "50ch" }}>
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

                          <Box sx={{ width: "50ch" }}>
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

                          {/* <TimePicker
                          label="From"
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                        <TimePicker
                          label="To"
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        /> */}
                        </LocalizationProvider>
                      </Stack>
                    ) : (
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <div>Estimated Arrival</div>
                        <div>-</div>
                      </div>
                    )}
                  </section>
                )}
                {schedulingStrategy === "flexible" && (
                  <section className="dateTime">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label={i === 0 ? "Pick up date" : "Arrival date"}
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                      <TimePicker
                        label="From"
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                      <TimePicker
                        label="To"
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </section>
                )}
                <section className="text-orange fw-600">
                  +Gate Reference
                </section>
              </div>
            </div>
            <div>{canAddCargo && <Cargo />}</div>
          </div>
        );
      })}
    </>
  );
};

RouteDetails.propTypes = {
  stops: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.string.isRequired,
      company: PropTypes.string,
      openingHours: PropTypes.shape({
        from: PropTypes.number.isRequired,
        to: PropTypes.number.isRequired,
      }),
      schedule: PropTypes.shape({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
  schedulingStrategy: PropTypes.oneOf(["fixed", "semiFlexible", "flexible"])
    .isRequired,
  canAddCargo: PropTypes.bool.isRequired,
};
