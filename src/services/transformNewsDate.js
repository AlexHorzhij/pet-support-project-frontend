export const transformDate = date => {
  const newDate = new Date(date);
  let month = '' + (newDate.getMonth() + 1);
  let day = '' + newDate.getDate();
  const year = newDate.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }
  return [day, month, year].join('/');
};
