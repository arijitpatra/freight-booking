import { formatTime, unloadingStops, cargoTypes, times } from "./utils";

test("Unit tests for formatTime util fn:", () => {
  expect(formatTime(900)).toEqual("09:00");
  expect(formatTime(1900)).toEqual("19:00");
});

test("Unit tests for unloadingStops:", () => {
  expect(unloadingStops.length).toBe(5);
});

test("Unit tests for cargoTypes:", () => {
  expect(cargoTypes.length).toBe(3);
});

test("Unit tests for times:", () => {
  expect(times.length).toBe(48);
});
