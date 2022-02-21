import { useState } from "react";
import PropTypes from "prop-types";
import "./RouteDetails.scss";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import TimePicker from "@mui/lab/TimePicker";
import { Cargo } from "../Cargo";

export const RouteDetails = ({ stops, schedulingStrategy, canAddCargo }) => {
  const [value, setValue] = useState(null);

  return (
    <>
      {stops.map((item, i) => {
        return (
          <div className="row">
            <div className="routes">
              <section key={item.company} className="company">
                <div>{item.address}</div>
                <div>{item.company}</div>
                <div>
                  Opening Hours: {item.openingHours.from} -{" "}
                  {item.openingHours.to}
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
                <section>+Gate Reference</section>
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
