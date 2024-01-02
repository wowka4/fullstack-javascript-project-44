import getRandomNumber from '../randomNumber.js';
import runEngine from '../index.js';

const rule = 'What is the result of the expression?';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, 2);
  return operators[randomIndex];
};

const calculation = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Invalid operator - ${operator}`);
  }
};

const generateRound = () => {
  const firstNum = getRandomNumber(1, 10);
  const secondNum = getRandomNumber(1, 10);
  const operator = getOperator();
  const question = `${firstNum} ${operator} ${secondNum}`;
  const rightAnswer = String(calculation(firstNum, operator, secondNum));
  return [rightAnswer, question];
};

export default () => runEngine(rule, generateRound);
