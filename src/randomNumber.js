const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const operands = ['+', '-', '*'];

const getOperand = () => {
  const number = getRandomNumber(1, 3);
  return operands[number];
};

export { getRandomNumber, getOperand };
