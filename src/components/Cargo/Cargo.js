import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { AdornmentBoxComponent } from "../AdornmentBoxComponent";
import { TextBoxComponent } from "../TextBoxComponent";
import { DropDownComponent } from "../DropDownComponent";
import { cargoTypes, unloadingStops } from "../../utils";
import "./Cargo.scss";

export const Cargo = () => {
  const [toggle, setToggle] = useState(false);

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
                  <DropDownComponent
                    label="Unloading stops"
                    options={unloadingStops}
                  />
                </Box>

                <Box sx={{ width: "100%" }}>
                  <DropDownComponent label="Type" options={cargoTypes} />
                </Box>

                <Box sx={{ width: "100%" }}>
                  <TextBoxComponent label="PO number" />
                </Box>
              </Stack>

              <Stack spacing={4} direction="row">
                <Box sx={{ width: "73%" }}>
                  <TextBoxComponent label="Quantity" />
                </Box>

                <Box
                  sx={{ width: "73%" }}
                  style={{
                    borderRight: "1px dotted #c4c4c4",
                    paddingRight: "1rem",
                  }}
                >
                  <AdornmentBoxComponent
                    label="Total weight"
                    adornmentText="kg"
                  />
                </Box>

                <Box sx={{ width: "100%", marginLeft: "1rem !important" }}>
                  <AdornmentBoxComponent label="Length" adornmentText="cm" />
                </Box>

                <Box sx={{ width: "100%" }}>
                  <AdornmentBoxComponent label="Width" adornmentText="cm" />
                </Box>

                <Box sx={{ width: "100%" }}>
                  <AdornmentBoxComponent label="Height" adornmentText="cm" />
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
          </>
        )}
      </div>
    </>
  );
};
