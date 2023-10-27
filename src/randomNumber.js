const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getOperator = () => {
  const operators = ['+', '-', '*'];
  const number = getRandomNumber(0, 2);
  return operators[number];
};

export { getRandomNumber, getOperator };
