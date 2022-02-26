import { DatePickerComponent } from "../DatePickerComponent";
import { EstimatedArrival } from "../EstimatedArrival";

// Scheduling strategy: Fixed
export const Fixed = ({ index }) => {
  return (
    <>
      {index === 0 ? (
        <DatePickerComponent label="Pick up date" />
      ) : (
        <EstimatedArrival />
      )}
    </>
  );
};
