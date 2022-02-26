import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { DatePickerComponent } from "../DatePickerComponent";
import { FromTime } from "../FromTime";
import { ToTime } from "../ToTime";
import { EstimatedArrival } from "../EstimatedArrival";

export const SemiFlexible = ({ index }) => {
  return (
    <section className="dateTime">
      {index === 0 ? (
        <>
          <Stack
            spacing={4}
            direction="row"
            style={{ justifyContent: "end", marginTop: "1rem" }}
          >
            <Box sx={{ width: "100%" }}>
              <DatePickerComponent />
            </Box>

            <Box sx={{ width: "100%" }}>
              <FromTime />
            </Box>

            <Box sx={{ width: "100%" }}>
              <ToTime />
            </Box>
          </Stack>
        </>
      ) : (
        <EstimatedArrival />
      )}
    </section>
  );
};
