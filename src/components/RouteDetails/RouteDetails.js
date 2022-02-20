import { useState } from "react";
import PropTypes from "prop-types";
import "./RouteDetails.scss";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import TimePicker from "@mui/lab/TimePicker";

export const RouteDetails = ({ stops, schedulingStrategy, canAddCargo }) => {
  const [value, setValue] = useState(null);
  return (
    <>
      {stops.map((item, i) => {
        return (
          <>
            <section key={item.company} className="company">
              <div>{item.address}</div>
              <div>{item.company}</div>
              <div>
                Opening Hours: {item.openingHours.from} - {item.openingHours.to}
              </div>
            </section>

            {schedulingStrategy === "fixed" && (
              <section>
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
                  "Estimated Arrival : -"
                )}
              </section>
            )}

            {schedulingStrategy === "semiFlexible" && (
              <section>
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
                ) : (
                  "Estimated Arrival : -"
                )}
              </section>
            )}
          </>
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
