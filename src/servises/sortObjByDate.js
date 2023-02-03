export const sortObjByDate = (arr, key) =>
  [...arr]?.sort((a, b) => new Date(b[key]) - new Date(a[key]));
