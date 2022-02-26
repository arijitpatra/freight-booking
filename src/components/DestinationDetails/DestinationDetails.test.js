import { render, screen } from "@testing-library/react";
import { DestinationDetails } from "./DestinationDetails";
import { stops } from "../../stops.js";

test("Unit tests for DestinationDetails:", () => {
  render(<DestinationDetails destination={stops[0]} />);
  expect(screen.getByTestId("destination-details-test")).toBeInTheDocument();
  expect(screen.getByText(/insta/)).toBeInTheDocument();
  expect(screen.getByText(/13353 Berlin, Germany/)).toBeInTheDocument();
  expect(screen.getByText(/09:00/)).toBeInTheDocument();
  expect(screen.queryByText("9:00")).toBeFalsy();
});
