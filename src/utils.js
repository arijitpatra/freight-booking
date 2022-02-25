export const formatTime = (item) => {
  item = item.toString();
  if (item.length === 3) {
    item = 0 + item;
  }
  const hh = item.slice(0, 2);
  const mm = item.slice(2, 4);
  return hh + ":" + mm;
};
