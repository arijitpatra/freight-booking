import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { DatePickerComponent } from "../DatePickerComponent";
import { FromTime } from "../FromTime";
import { ToTime } from "../ToTime";

export const Flexible = () => {
  return (
    <section className="dateTime">
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
    </section>
  );
};
