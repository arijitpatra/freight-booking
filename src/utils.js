export const times = [
  "00:00",
  "00:30",
  "01:00",
  "01:30",
  "02:00",
  "02:30",
  "03:00",
  "03:30",
  "04:00",
  "04:30",
  "05:00",
  "05:30",
  "06:00",
  "06:30",
  "07:00",
  "07:30",
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
  "23:30",
];

export const unloadingStops = [
  {
    value: "gcr",
    label: "Garden City Road",
  },
  {
    value: "mgr",
    label: "MG Road",
  },
  {
    value: "tdt",
    label: "10 Down Town",
  },
  {
    value: "hfi",
    label: "Hotel Freight Inn",
  },
  {
    value: "fyr",
    label: "Ferry Road",
  },
];

export const cargoTypes = [
  {
    value: "air",
    label: "Air",
  },
  {
    value: "rod",
    label: "Road",
  },
  {
    value: "sea",
    label: "Sea",
  },
];

/* the fn takes in a input which is in the format like - 900 or 1900
    it first makes the number a string and returns
    the time in the format like 09:00 or 19:00
*/
export const formatTime = (item) => {
  item = item.toString();
  if (item.length === 3) {
    item = 0 + item;
  }
  const hh = item.slice(0, 2);
  const mm = item.slice(2, 4);
  return hh + ":" + mm;
};
