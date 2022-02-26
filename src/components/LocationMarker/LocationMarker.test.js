import { render, screen } from "@testing-library/react";
import { LocationMarker } from "./LocationMarker";

describe("Unit tests for LocationMarker", () => {
  test("check for value is X for last element:", () => {
    render(<LocationMarker index={2} lastIndex={2} />);
    expect(screen.getByText(/X/)).toBeInTheDocument();
    expect(screen.queryByText("2")).toBeFalsy();
  });

  test("check for value is index + 1 when index is 2:", () => {
    render(<LocationMarker index={2} lastIndex={5} />);
    expect(screen.getByText(/3/)).toBeInTheDocument();
    expect(screen.queryByText("X")).toBeFalsy();
  });
});
