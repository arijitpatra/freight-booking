import { render, screen } from "@testing-library/react";
import { Fixed } from "./Fixed";

describe("Unit tests for Fixed", () => {
  test("check behaviour for first element:", () => {
    render(<Fixed index={0} />);
    expect(screen.getByText(/Pick up date/)).toBeInTheDocument();
    expect(screen.queryByText("Estimated Arrival")).toBeFalsy();
  });

  test("check behaviour for second element onwards:", () => {
    render(<Fixed index={1} />);
    expect(screen.getByText(/Estimated Arrival/)).toBeInTheDocument();
    expect(screen.queryByText(/Pick up date/)).not.toBeInTheDocument();
  });
});
