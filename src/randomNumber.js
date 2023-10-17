const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const operators = ['+', '-', '*'];

const getOperator = () => {
  const number = getRandomNumber(1, 3);
  return operators[number];
};

export { getRandomNumber, getOperator };
