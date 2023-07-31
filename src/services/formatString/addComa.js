export const addComa = (str) => {
  return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
