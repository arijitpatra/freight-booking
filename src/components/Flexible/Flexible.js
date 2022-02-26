import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { DatePickerComponent } from "../DatePickerComponent";
import { TimePickerComponent } from "../TimePickerComponent";

// Scheduling strategy: Flexible
export const Flexible = () => {
  return (
    <Stack spacing={4} direction="row">
      <Box sx={{ width: "100%" }}>
        <DatePickerComponent label="Pick up date" />
      </Box>

      <Box sx={{ width: "100%" }}>
        <TimePickerComponent label="From" />
      </Box>

      <Box sx={{ width: "100%" }}>
        <TimePickerComponent label="To" />
      </Box>
    </Stack>
  );
};
