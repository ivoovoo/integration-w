export function getDateString(dateValue) {
  const date = dateValue.getDate();
  const month = dateValue.getMonth() + 1;
  const result = `${date < 9 ? "0" + date : date}.${
    month < 9 ? "0" + month : month
  }.${dateValue.getFullYear()}`;

  return result
}
