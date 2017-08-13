const getRandomInt = (min, max) => {
  const minI = Math.ceil(min);
  const maxI = Math.floor(max);
  return Math.floor(Math.random() * (maxI - minI + 1)) + minI;
};

module.exports = {
  getRandomInt,
};
