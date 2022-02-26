import { DatePickerComponent } from "../DatePickerComponent";
import { EstimatedArrival } from "../EstimatedArrival";

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
